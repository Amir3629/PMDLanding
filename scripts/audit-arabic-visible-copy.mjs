import fs from 'node:fs';
import path from 'node:path';
import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';
import * as t from '@babel/types';

const traverse = traverseModule.default || traverseModule;
const ROOT = process.cwd();

const TECH_ATTRS = new Set([
  'className', 'href', 'src', 'id', 'name', 'type', 'target', 'rel',
  'role', 'method', 'action', 'loading', 'decoding', 'width', 'height',
  'size', 'icon', 'accent', 'viewBox', 'd', 'fill', 'stroke',
  'strokeWidth', 'strokeLinecap', 'strokeLinejoin', 'crossOrigin',
  'rows', 'cols', 'defaultValue', 'value', 'required', 'disabled',
  'tabIndex', 'translate', 'aria-live', 'aria-hidden', 'key', 'style'
]);

const TECH_KEYS = new Set([
  'href', 'src', 'image', 'compactImage', 'heroImage', 'articleImage',
  'icon', 'accent', 'slug', 'key', 'className', 'id', 'name', 'type',
  'target', 'rel', 'role', 'method', 'action', 'path', 'route', 'number',
  'size', 'width', 'height', 'viewBox', 'd', 'fill', 'stroke',
  'strokeWidth', 'strokeLinecap', 'strokeLinejoin', 'loading', 'decoding',
  'crossOrigin', 'inputMode', 'autoComplete', 'defaultValue', 'value',
  'rows', 'cols', 'min', 'max', 'step'
]);

const TECH_JS_STRINGS = new Set([
  'true', 'false', 'null', 'undefined', 'polite', 'auto', 'smooth',
  'button', 'dialog', 'email', 'text', 'main', 'navigation', 'ms'
]);

const ALLOWED_LATIN = new Set([
  'PayMyDine', 'AI', 'CRM', 'QR', 'POS', 'KDS', 'API', 'APIs', 'KPI',
  'SSO', 'PCI', 'GDPR', 'VAT', 'CSV', 'JSON', 'SaaS', 'IT', 'UI', 'URL',
  'ID', 'IDs', 'OAuth', 'HTTPS',
  'SumUp', 'ready2order', 'OpenTable', 'Deliveroo', 'Uber', 'Eats',
  'Xero', 'QuickBooks', 'Lightspeed', 'Stripe', 'Square', 'Toast',
  'Oracle', 'MICROS', 'EPOS', 'Zettle', 'Dojo', 'Revolut', 'Worldpay',
  'Adyen', 'Clover', 'TouchBistro', 'Sage', 'Meta', 'Google',
  'EN', 'TR', 'AR', 'OMR', 'EUR', 'USD'
]);

const BAD_ARABIC = [
  /منظمة العفو الدولية/u,
  /الاستثمار الأجنبي المباشر/u,
  /مكافحة المخدرات/u,
  /شركة\s+AI/u,
  /زكس/u,
  /ZXQ|QXZ/u,
  /&quot;/u,
  /بياميدين|بيادين|بي ديين/u,
  /أفضل البائعين/u,
  /متوسط التحقق|الفحص المتوسط/u,
  /المراهنات/u,
  /المسيرات/u,
  /نظام معلومات أساسية/u,
  /بيع الفواتير/u,
  /مغادرة الضيوف/u,
  /مشروع القانون/u,
  /المدفعين/u,
  /ما بعد السرقة/u,
  /النقل البحري/u,
  /التكيّف مع الرجال/u
];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && full.endsWith('.js')) out.push(full);
  }

  return out;
}

function parseFile(file) {
  return parse(fs.readFileSync(file, 'utf8'), {
    sourceType: 'module',
    plugins: [
      'jsx',
      'classProperties',
      'objectRestSpread',
      'dynamicImport',
      'topLevelAwait',
      'optionalChaining',
      'nullishCoalescingOperator'
    ]
  });
}

function attrName(attributePath) {
  const node = attributePath?.node;
  if (!node || !t.isJSXAttribute(node) || !t.isJSXIdentifier(node.name)) return null;
  return node.name.name;
}

function objectKeyName(propertyPath) {
  const node = propertyPath?.node;
  if (!node || !t.isObjectProperty(node)) return null;
  if (t.isIdentifier(node.key) && !node.computed) return node.key.name;
  if (t.isStringLiteral(node.key)) return node.key.value;
  return null;
}

function isTechnicalAttr(name) {
  if (!name) return false;
  if (TECH_ATTRS.has(name)) return true;
  if (name.startsWith('data-')) return true;
  if (/^on[A-Z]/.test(name)) return true;
  if (name.startsWith('aria-') && name !== 'aria-label' && name !== 'aria-description') return true;
  return false;
}

function routeOrAsset(value) {
  const s = String(value || '').trim();
  if (!s) return true;
  if (/^(https?:|mailto:|tel:|data:|#)/i.test(s)) return true;
  if (s.startsWith('/')) return true;
  if (/\/site-assets\//.test(s)) return true;
  if (/\.(webp|png|jpe?g|gif|svg|ico|avif|pdf|zip|js|css|json|mjs)(?:[?#].*)?$/i.test(s)) return true;
  return false;
}

function technicalLiteral(value) {
  const s = String(value || '').trim();
  if (!s || TECH_JS_STRINGS.has(s)) return true;

  if (/^[.#][A-Za-z0-9_-]+(?:\s*[>+~]\s*\*|\s+[.#A-Za-z0-9_*>+~:-]+)*$/.test(s)) {
    return true;
  }

  if (/^-?\d+(?:\.\d+)?(?:px|rem|em|vh|vw|svh|dvh|%)(?:\s+-?\d+(?:\.\d+)?(?:px|rem|em|vh|vw|svh|dvh|%)){0,3}$/.test(s)) {
    return true;
  }

  return false;
}

function ancestorJsxContext(p) {
  let current = p.parentPath;
  let sawExpression = false;

  while (current) {
    if (current.isJSXAttribute?.()) {
      const name = attrName(current);
      return isTechnicalAttr(name) ? 'technical' : 'visible';
    }

    if (current.isJSXExpressionContainer?.()) sawExpression = true;

    if (current.isJSXElement?.() || current.isJSXFragment?.()) {
      return sawExpression ? 'visible' : 'none';
    }

    if (current.isNewExpression?.() || current.isThrowStatement?.()) {
      return 'technical';
    }

    if (current.isStatement?.()) break;
    current = current.parentPath;
  }

  return 'none';
}

function isVisibleString(p, raw) {
  const value = String(raw || '').trim();

  if (!value || routeOrAsset(value) || technicalLiteral(value)) return false;

  if (p.isJSXText?.()) return true;

  const jsx = ancestorJsxContext(p);
  if (jsx === 'technical') return false;
  if (jsx === 'visible') return true;

  const parent = p.parentPath;
  if (!parent) return false;

  if (
    parent.isImportDeclaration?.() ||
    parent.isExportNamedDeclaration?.() ||
    parent.isExportAllDeclaration?.() ||
    parent.isDirective?.() ||
    parent.isCallExpression?.() ||
    parent.isNewExpression?.()
  ) {
    return false;
  }

  if (parent.isObjectProperty?.() && parent.node.value === p.node) {
    const key = objectKeyName(parent);
    return key ? !TECH_KEYS.has(key) : true;
  }

  if (parent.isArrayExpression?.()) {
    if (/^[a-z0-9][a-z0-9_-]*$/.test(value)) return false;
    return true;
  }

  if (parent.isVariableDeclarator?.()) {
    const id = parent.node.id;
    const name = t.isIdentifier(id) ? id.name : '';
    return /(title|body|intro|text|copy|label|description|eyebrow|message|heading|subtitle|caption|note|proof|question|answer)/i.test(name);
  }

  if (parent.isReturnStatement?.()) return value.includes(' ');

  return false;
}

function normalizedLatinToken(token) {
  return token.replace(/^[.&+_-]+|[.&+_-]+$/g, '');
}

function latinViolations(value) {
  const tokens = String(value).match(/[A-Za-z][A-Za-z0-9&+._-]*/g) || [];

  return tokens.filter((raw) => {
    const token = normalizedLatinToken(raw);
    if (!token) return false;
    if (ALLOWED_LATIN.has(token)) return false;
    if (/^(com|co|uk|om|www|http|https)$/i.test(token)) return false;
    return true;
  });
}

const issues = [];
const seen = new Set();
let visibleCount = 0;

function addIssue(issue) {
  const key = `${issue.type}\n${issue.file}\n${issue.value}`;
  if (seen.has(key)) return;
  seen.add(key);
  issues.push(issue);
}

for (const file of walk(path.join(ROOT, 'locales', 'ar'))) {
  const ast = parseFile(file);

  const check = (p, raw) => {
    const value = String(raw || '').trim();
    if (!isVisibleString(p, value)) return;

    visibleCount += 1;

    const latin = latinViolations(value);
    if (latin.length) {
      addIssue({
        type: 'LATIN',
        file: path.relative(ROOT, file),
        value,
        detail: [...new Set(latin)].join(', ')
      });
    }

    for (const pattern of BAD_ARABIC) {
      if (pattern.test(value)) {
        addIssue({
          type: 'BAD_TERM',
          file: path.relative(ROOT, file),
          value,
          detail: String(pattern)
        });
      }
    }
  };

  traverse(ast, {
    JSXText(p) {
      check(p, p.node.value);
    },

    StringLiteral(p) {
      check(p, p.node.value);
    },

    TemplateLiteral(p) {
      if (!p.node.expressions.length) return;

      const context = ancestorJsxContext(p);
      if (context === 'technical') return;

      const staticText = p.node.quasis
        .map((q) => q.value.cooked || '')
        .join(' ')
        .trim();

      if (!staticText) return;
      if (routeOrAsset(staticText)) return;
      if (/^\s*ms\s*$/i.test(staticText)) return;

      // Outside JSX, only audit dynamic templates that belong to metadata
      // or other human-facing object values. Error/debug templates are code.
      if (context !== 'visible') {
        const parent = p.parentPath;
        if (!parent?.isObjectProperty?.()) return;

        const key = objectKeyName(parent);
        if (key && TECH_KEYS.has(key)) return;
      }

      const latin = latinViolations(staticText);
      if (latin.length) {
        addIssue({
          type: 'DYNAMIC_TEMPLATE_LATIN',
          file: path.relative(ROOT, file),
          value: staticText,
          detail: [...new Set(latin)].join(', ')
        });
      }

      for (const pattern of BAD_ARABIC) {
        if (pattern.test(staticText)) {
          addIssue({
            type: 'DYNAMIC_TEMPLATE_BAD_TERM',
            file: path.relative(ROOT, file),
            value: staticText,
            detail: String(pattern)
          });
        }
      }
    }
  });
}

console.log(`Audited ${visibleCount} visible Arabic strings across every locales/ar JS file.`);

if (issues.length) {
  console.error(`ERROR: ${issues.length} real Arabic visible-copy issue(s) remain.`);

  for (const issue of issues.slice(0, 300)) {
    console.error(`\n[${issue.type}] ${issue.file}`);
    console.error(`  ${issue.value}`);
    console.error(`  -> ${issue.detail}`);
  }

  if (issues.length > 300) {
    console.error(`\n... plus ${issues.length - 300} more issue(s).`);
  }

  process.exit(1);
}

console.log('PASS: no untranslated visible English or known broken machine terms in any Arabic locale source file.');

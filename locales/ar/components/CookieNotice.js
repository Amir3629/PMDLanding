'use client';

import { useEffect, useState } from 'react';
const STORAGE_KEY = 'pmd_cookie_consent_v1';
export default function CookieNotice() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let timer;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        document.documentElement.dataset.cookieConsent = saved;
        return undefined;
      }
    } catch (_) {
      // If storage is unavailable, still let the visitor make a choice.
    }
    timer = window.setTimeout(() => setVisible(true), 700);
    return () => window.clearTimeout(timer);
  }, []);
  const choose = value => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (_) {
      // The choice can still dismiss the card for this page view.
    }
    document.documentElement.dataset.cookieConsent = value;
    window.dispatchEvent(new CustomEvent('pmd-cookie-consent', {
      detail: {
        value
      }
    }));
    setVisible(false);
  };
  if (!visible) return null;
  return <aside className="cookieNotice" role="dialog" aria-label={"تفضيلات ملفات تعريف الارتباط"} aria-live="polite">
      <span className="cookieNoticeEyebrow">تفضيلات ملفات تعريف الارتباط</span>
      <h2>اختر كيفية استخدام هذا الموقع لملفات تعريف الارتباط.</h2>
      <p>
        نحن نستخدم المخزن الأساسي لأفضليات الموقع يمكنك أيضاً أن تسمح للمحللين الإختياريين بالكوكيز لمساعدتنا على فهم استخدام الموقع عندما يتم تمكين المحللين
      </p>
      <div className="cookieNoticeActions">
        <button className="cookieNoticeSecondary" type="button" onClick={() => choose('necessary')}>
          الضرورية فقط
        </button>
        <button className="cookieNoticePrimary" type="button" onClick={() => choose('all')}>
          السماح بالاختيارية
        </button>
      </div>
    </aside>;
}

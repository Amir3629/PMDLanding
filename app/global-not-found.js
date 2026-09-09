import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.paymydine.com'),
  title: 'Page Not Found | PayMyDine',
  description: 'The requested PayMyDine page could not be found.',
  robots: { index: false, follow: false }
};

const localeBootstrap = `
(function () {
  try {
    var path = window.location.pathname || '/';
    var turkish = path === '/tr' || path.indexOf('/tr/') === 0;
    if (!turkish) return;
    var titleText = 'Sayfa bulunamadı | PayMyDine';
    var apply = function () {
      document.documentElement.lang = 'tr';
      document.documentElement.dir = 'ltr';
      document.documentElement.setAttribute('data-pmd-global-404-locale', 'tr');
      if (document.title !== titleText) document.title = titleText;
    };
    apply();
    document.addEventListener('DOMContentLoaded', apply);
    [0, 50, 150, 400, 900, 1800, 3000].forEach(function (ms) { window.setTimeout(apply, ms); });
    window.setTimeout(function () {
      try {
        var observer = new MutationObserver(apply);
        observer.observe(document.head, { childList: true, subtree: true, characterData: true });
        window.setTimeout(function () { observer.disconnect(); }, 4500);
      } catch (_) {}
    }, 0);
  } catch (_) {}
})();
`;

export default function GlobalNotFound() {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style>{`
          .pmdGlobal404Tr { display: none; }
          html[data-pmd-global-404-locale="tr"] .pmdGlobal404En { display: none; }
          html[data-pmd-global-404-locale="tr"] .pmdGlobal404Tr { display: block; }
        `}</style>
        <script dangerouslySetInnerHTML={{ __html: localeBootstrap }} />
      </head>
      <body>
        <main>
          <section className="notFound" style={{ minHeight: '100svh', background: 'radial-gradient(circle at 50% 42%, rgba(183,217,54,.12), transparent 34%), #fff' }}>
            <div className="pmdGlobal404En">
              <a className="brand notranslate" href="/" translate="no" style={{ justifyContent: 'center', marginBottom: 28 }}>
                <img className="brandLogo" src="/site-assets/logo.svg" alt="" />
                <span className="brandWord">PayMyDine</span>
              </a>
              <span className="eyebrow">404</span>
              <h1>Page not found.</h1>
              <p>The page you are looking for does not exist or may have moved.</p>
              <div className="heroButtons pmdExploreButtonsFix">
                <a className="button" href="/">Back to Home</a>
                <a className="button buttonGhost" href="/platform">Explore Platform</a>
              </div>
            </div>
            <div className="pmdGlobal404Tr">
              <a className="brand notranslate" href="/tr" translate="no" style={{ justifyContent: 'center', marginBottom: 28 }}>
                <img className="brandLogo" src="/site-assets/logo.svg" alt="" />
                <span className="brandWord">PayMyDine</span>
              </a>
              <span className="eyebrow">404</span>
              <h1>Sayfa bulunamadı.</h1>
              <p>Aradığınız sayfa mevcut değil veya kaldırılmış.</p>
              <div className="heroButtons pmdExploreButtonsFix">
                <a className="button" href="/tr">Ana Sayfasına Dön</a>
                <a className="button buttonGhost" href="/tr/platform">Platformu Keşfet</a>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}

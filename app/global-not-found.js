import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.paymydine.com'),
  title: 'Page Not Found | PayMyDine',
  description: 'The requested PayMyDine page could not be found.',
  robots: {
    index: false,
    follow: false
  }
};

export default function GlobalNotFound() {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>
          <section
            className="notFound"
            style={{
              minHeight: '100svh',
              background: 'radial-gradient(circle at 50% 42%, rgba(183,217,54,.12), transparent 34%), #fff'
            }}
          >
            <div>
              <a
                className="brand notranslate"
                href="/"
                translate="no"
                style={{ justifyContent: 'center', marginBottom: 28 }}
              >
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
          </section>
        </main>
      </body>
    </html>
  );
}

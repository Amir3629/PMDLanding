export default function NotFound() {
  return (
    <section className="notFound">
      <div>
        <span className="eyebrow">404</span>
        <h1>Page not found.</h1>
        <p>The page you are looking for does not exist or may have moved.</p>
        <div className="heroButtons pmdExploreButtonsFix">
          <a className="button" href="/">Back to Home</a>
          <a className="button buttonGhost" href="/platform">Explore Platform</a>
        </div>
      </div>
    </section>
  );
}

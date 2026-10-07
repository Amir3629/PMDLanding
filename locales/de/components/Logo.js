export default function Logo({
  compact = false,
  light = false
}) {
  return <a className={`brand notranslate ${light ? 'brandLight' : ''}`} href="/de" aria-label={"PayMyDine nach Hause"} translate="no" data-pmd-brand="true">
      <img className="brandLogo" src="/site-assets/logo.svg" alt="" />
      {!compact && <span className="brandWord notranslate" translate="no">
          PayMyDine
        </span>}
    </a>;
}

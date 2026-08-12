export default function Logo({ compact = false, light = false }) {
  return (
    <a className={`brand ${light ? 'brandLight' : ''}`} href="/" aria-label="PayMyDine home">
      <img className="brandLogo" src="/site-assets/logo.svg" alt="" />
      {!compact && <span className="brandWord">PayMyDine</span>}
    </a>
  );
}

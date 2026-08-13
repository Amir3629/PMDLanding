import Logo from './Logo';
import { productAreas } from '@/data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div className="footerBrand">
          <Logo />
          <p>One restaurant operating platform for operations, reservations, ordering, kitchen and menu control, payments, guest growth, analytics, team management and integrations.</p>
        </div>
        <div>
          <h4>Product</h4>
          {productAreas.map((item) => <a href={item.href} key={item.title}>{item.title}</a>)}
        </div>
        <div>
          <h4>For Teams</h4>
          <a href="/teams/owner">Owner</a>
          <a href="/teams/manager">Manager</a>
          <a href="/teams/service staff">Service staff</a>
          <a href="/teams/kitchen">Kitchen & KDS</a>
          <a href="/teams/reservations">Reservations</a>
          <a href="/teams/finance">Finance & reporting</a>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="/platform">Product overview</a>
          <a href="/integrations">Integrations</a>
          <a href="/restaurant-types">Restaurant setups</a>
          <a href="/how-it-works">How it works</a>
          <a href="/implementation">Implementation</a>
          <a href="/support">Support</a>
          <a href="/security">Security & data</a>
          <a href="/resources">Guides & help</a>
          <a href="/pricing">Pricing</a>
          <a href="/company">Company</a>
          <a href="/contact">Book a demo</a>
        </div>
      </div>
      <div className="container footerBottom"><span>© 2026 PayMyDine.</span><span>Restaurant operations, role by role.</span></div>
    </footer>
  );
}

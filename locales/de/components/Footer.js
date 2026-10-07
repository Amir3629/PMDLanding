import Logo from './Logo';
import { productAreas } from "@/locales/de/data/site";
export default function Footer() {
  return <footer className="footer">
      <div className="container footerGrid">
        <div className="footerBrand">
          <Logo />
          <p>Eine Restaurant-Betriebsplattform für Abläufe, Reservierungen, Bestellungen, Küche und Menüsteuerung, Zahlungen, Gästewachstum, Analysen, Teamverwaltung und Integrationen.</p>
        </div>
        <div>
          <h4>Produkt</h4>
          {productAreas.map(item => <a href={item.href} key={item.title}>{item.title}</a>)}
        </div>

        <div>
          <h4>Entdecken</h4>
          <a href="/de/platform">Produktübersicht</a>
          <a href="/de/integrations">Integrationen</a>
          <a href="/de/restaurant-types">Restaurantkonfigurationen</a>
          <a href="/de/how-it-works">So funktioniert es</a>
          <a href="/de/implementation">Einführung</a>
          <a href="/de/support">Support</a>
          <a href="/de/security">Sicherheit & Daten</a>
          <a href="/de/resources">Leitfäden & Hilfe</a>
          <a href="/de/pricing">Preise</a>
          <a href="/de/company">Unternehmen</a>
          <a href="/de/contact">Demo buchen</a>
        </div>
      </div>
      <div className="container footerBottom"><span>© 2026 PayMyDine.</span><span>Restaurantbetrieb, Rolle für Rolle.</span></div>
    </footer>;
}

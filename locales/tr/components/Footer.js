import Logo from './Logo';
import { productAreas } from "@/locales/tr/data/site";
export default function Footer() {
  return <footer className="footer">
      <div className="container footerGrid">
        <div className="footerBrand">
          <Logo />
          <p>Operasyonlar, rezervasyonlar, sipariş etmek, mutfak ve menü kontrolü, ödemeler, misafir büyümesi, analitik, ekip yönetimi ve entegrasyonlar için bir restoran işletme platformu.</p>
        </div>
        <div>
          <h4>Ürün</h4>
          {productAreas.map(item => <a href={item.href} key={item.title}>{item.title}</a>)}
        </div>

        <div>
          <h4>Keşfet</h4>
          <a href="/tr/platform">Ürün genel bakışı</a>
          <a href="/tr/integrations">Entegrasyonlar</a>
          <a href="/tr/restaurant-types">Restoran kurulumları</a>
          <a href="/tr/how-it-works">Nasıl çalışır</a>
          <a href="/tr/implementation">Uygulama</a>
          <a href="/tr/support">Destek</a>
          <a href="/tr/security">Güvenlik ve veri</a>
          <a href="/tr/resources">Rehberler ve yardım</a>
          <a href="/tr/pricing">Fiyatlandırma</a>
          <a href="/tr/company">Şirket</a>
          <a href="/tr/contact">Demo rezervasyonu yap</a>
        </div>
      </div>
      <div className="container footerBottom"><span>© 2026 PayMyDine.</span><span>Restoran operasyonları, rolün rolü.</span></div>
    </footer>;
}

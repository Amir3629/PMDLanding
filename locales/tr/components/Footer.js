import Logo from './Logo';
import { productAreas } from '@/locales/tr/data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div className="footerBrand">
          <Logo />
          <p>Restoran operasyonları, rezervasyonlar, sipariş, mutfak ve menü yönetimi, ödemeler, müşteri artışı, analiz, takım yönetimi ve entegrasyonlar için tek bir işletim platformu.</p>
        </div>
        <div>
          <h4>Ürün</h4>
          {productAreas.map((item) => <a href={item.href} key={item.title}>{item.title === 'PayMyDine Yapay Zeka' ? 'PayMyDine YZ' : item.title}</a>)}
        </div>

        <div>
          <h4>Keşfedin</h4>
          <a href="/tr/platform">Ürüne genel bakış</a>
          <a href="/tr/integrations">Entegrasyonlar</a>
          <a href="/tr/restaurant-types">Restoran kurulumları</a>
          <a href="/tr/how-it-works">Nasıl çalışır?</a>
          <a href="/tr/implementation">Kurulum ve devreye alma</a>
          <a href="/tr/support">Destek</a>
          <a href="/tr/security">Güvenlik ve veri</a>
          <a href="/tr/resources">Rehberler ve yardım</a>
          <a href="/tr/pricing">Fiyatlama</a>
          <a href="/tr/company">Şirket</a>
          <a href="/tr/contact">Tanıtım talep et</a>
        </div>
      </div>
      <div className="container footerBottom"><span>© 2026 PayMyDine.</span><span>Restoran operasyonları, rollere göre.</span></div>
    </footer>
  );
}

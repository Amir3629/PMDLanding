import PageHero from '@/locales/tr/components/PageHero';
import ContactForm from '@/locales/tr/components/ContactForm';

export const metadata = {
  title: 'Restoran Yazılımı Demosu Talep Edin',
  description: 'Restoran iş akışınızı, ekip rollerinizi ve iyileştirmek istediğiniz metriği paylaşın; PayMyDine demosunu gerçek operasyonunuza göre şekillendirelim.'
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İşletmenize özel demo talep edin"
        title="Bir iş akışını, ilgili rolleri ve iyileştirmek istediğiniz metriği getirin."
        intro="Bugün sürecin nasıl ilerlediğini, bilginin nerede tekrar girildiğini veya durum bilgisinin nerede kaybolduğunu, hangi sistemlerin kullanıldığını ve sonucu nasıl ölçtüğünüzü anlatın. Demoyu gerçek operasyon bağlamınıza göre hazırlayalım."
        image="/site-assets/extra/paris-cafe.webp"
        accent="green"
        actions={false}
      />
      <section className="section contactSection">
        <div className="container contactGrid">
          <div className="contactIntro">
            <span className="eyebrow">İncelemek istediğiniz ürün alanlarını seçin</span>
            <h2>9 alanı bir kontrol listesi olarak kullanın; hepsini satın alma zorunluluğu olarak değil.</h2>
            <ul>
              <li>PayMyDine Yapay Zekâ: sorular, günlük özetler, uyarılar ve tahminler</li>
              <li>Restoran Operasyonları: gösterge paneli, siparişler, masalar ve salon planları</li>
              <li>Rezervasyon: takvim, gelişler, rezervasyonsuz müşteriler ve masa atama</li>
              <li>Sipariş ve Mutfak: garson siparişi, KDS, durum ve menü kontrolü</li>
              <li>Ödemeler: masa QR kodu, müşteri ödeme süreci ve 3 hesap bölme yöntemi</li>
              <li>Analiz: gelir, talep ve kârlılık için 9 yönetim metriği</li>
              <li>Ekip Yönetimi: 6 rol bazlı çalışma alanı ve yetkiler</li>
              <li>Müşteri CRM’i: profiller, sadakat, teklifler, kampanyalar ve geri bildirim</li>
              <li>Entegrasyonlar: POS, muhasebe, teslimat, ödeme ve stok bağlamı</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

import PageHero from '@/locales/tr/components/PageHero';
import ContactForm from '@/locales/tr/components/ContactForm';

export const metadata = {
  title: 'Restoran Yazılımı Tanıtımı Talep Edin',
  description: 'Restoran iş akışınızı, ekip rollerinizi ve iyileştirmek istediğiniz ölçütü paylaşın; PayMyDine tanıtımını gerçek operasyonunuza göre şekillendirelim.'
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Pratik bir tanıtım talep edin"
        title="Bir akışı, ilgili rolleri ve iyileştirmek istediğiniz ölçütü getirin."
        intro="Bugün ne olduğunu, bilginin nerede tekrar girildiğini veya durum bilgisinin nerede kaybolduğunu, hangi sistemlerin kullanıldığını ve sonucu nasıl ölçtüğünüzü anlatın. Tanıtımı gerçek operasyon içeriğinize göre hazırlayalım."
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
              <li>PayMyDine Yapay Zeka: sorular, günlük özetler, uyarılar ve tahminler</li>
              <li>Restoran Operasyonları: gösterge paneli, siparişler, masalar ve servis alanı planları</li>
              <li>Rezervasyonlar: takvim, gelişler, rezervasyonsuz müşteriler ve masa atama</li>
              <li>Sipariş ve Mutfak: garson siparişi, Mutfak Ekran Sistemi (KDS), durum ve menü kontrolü</li>
              <li>Ödemeler: masa QR kodu, müşteri ödeme süreci ve 3 hesap bölme yöntemi</li>
              <li>Analizler: gelir, talep ve kârlılık için 9 yönetim ölçütü</li>
              <li>Takım Yönetimi: 6 rol bazlı çalışma alanı ve yetkiler</li>
              <li>Müşteri MİY’i: profiller, sadakat, teklifler, kampanyalar ve geri bildirim</li>
              <li>Entegrasyonlar: POS, muhasebe, teslimat, ödeme ve stok içeriği</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

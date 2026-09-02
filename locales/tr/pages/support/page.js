import PageHero from '@/locales/tr/components/PageHero';
import CTA from '@/locales/tr/components/CTA';

export const metadata = {
  title: 'PayMyDine Destek',
  description: 'PayMyDine kurulumu, restoran yapılandırması, iş akışları, entegrasyonlar, yetkiler ve sürekli platform desteği için yardım alın.'
};

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow="4 destek aşaması" title="Destek ekibi, sorunun arkasındaki yapılandırılmış rolleri, iş akışlarını, entegrasyonları ve başarı metriklerini bilmelidir." intro="Faydalı bir yanıt, PayMyDine’ın restoranda nasıl yapılandırıldığına bağlıdır. Bu nedenle destek; ilk kurulumdan yapılandırmaya, ekip kullanımından sürekli operasyon incelemesine kadar aynı bağlamı takip eder." image="/site-assets/extra/team-cafe-meeting.webp" accent="green" />
      <section className="section companyValues"><div className="container companyValuesGrid"><div><span className="eyebrow">Tüm kullanım süreci boyunca destek</span><h2>Dört aşama; her görüşmede yapılandırma ve sorumlu rol görünür.</h2><p>Bu bağlam, bir eğitim sorusunu, iş akışı problemini, entegrasyon sınırını ve ürün sorununu birbirinden ayırmayı kolaylaştırır.</p></div><div className="companyValueCards"><article><h3>İlk kurulum</h3><p>Seçilen ürün alanlarını, rol sorumlularını, mevcut iş akışlarını ve kurulum iletişim kişilerini doğrulayın.</p></article><article><h3>Yapılandırma</h3><p>Yetkileri, salon planlarını, menüleri, durum kurallarını, entegrasyonları ve roller arasındaki beklenen iş devirlerini inceleyin.</p></article><article><h3>Ekip kullanımı</h3><p>Herkese aynı genel ürün turunu vermek yerine her rolü kendi iş listesi, kontrolleri, tamamlanma durumu ve sorun iletme yolu üzerinde eğitin.</p></article><article><h3>Sürekli inceleme</h3><p>Sorunun eğitim, yapılandırma, entegrasyon veya ürün değişikliği gerektirip gerektirmediğini belirlemek için destek geçmişini ve operasyon metriklerini kullanın.</p></article></div></div></section>
      <CTA title="Destek sorusunun arkasındaki yapılandırmayı ve iş akışını paylaşın." body="Rolü, işlemi, beklenen durumu, bağlı sistemi ve sonucu belirtin. Böylece destek görüşmesine doğru bağlamla başlayabiliriz." />
    </>
  );
}

import PageHero from "@/locales/tr/components/PageHero";
import CTA from "@/locales/tr/components/CTA";
export const metadata = {
  title: "Destek",
  description: "PayMyDine'in gemilendirilmesi, yapılandırma, takım benimsenmesi, entegrasyonlar ve çalışma soruları için destek."
};
export default function SupportPage() {
  return <>
      <PageHero eyebrow={"4 destek aşaması"} title={"Destek, yapılandırılmış roller, iş akışları, entegrasyonlar ve sorunun arkasındaki başarı ölçümleri bilmelidir."} intro={"Yararlı bir cevap, PayMyDine'in restoranda nasıl yapılandırıldığına bağlıdır. Bu nedenle yapılandırma yoluyla kurulumunu takip edin, ekip kabul ve devam eden işletim incelemesi."} image="/site-assets/extra/team-cafe-meeting.webp" accent="green" />
      <section className="section companyValues">
        <div className="container companyValuesGrid">
          <div><span className="eyebrow">Yaşam döngüsüne destek</span><h2>Her sohbette görünür olan konfigürasyon ve sorumlu rolü ile dört aşama.</h2><p>Bu bağlamda, bir eğitim sorusunu, bir iş akışı problemini, bir entegrasyon sınırı ve bir ürün sorununu ayırt etmeyi kolaylaştırır.</p></div>
          <div className="companyValueCards">
            <article><h3>Başlangıç kurulumu</h3><p>Seçilmiş ürün alanları, rol sahipleri, temel akışlar ve uygulama bağlantıları onaylayın.</p></article>
            <article><h3>Yapılandırma</h3><p>İnceleme izinleri, zemin haritaları, menüler, durum kuralları, entegrasyonlar ve roller arasındaki beklenen elofflar.</p></article>
            <article><h3>Team kabul</h3><p>Her rolü kendi kuyruğunda, kontrolleri, tamamlanma durumu ve escalasyon yolu üzerinde tek bir jenerik ürün turu yerine.</p></article>
            <article><h3>Devamlı inceleme</h3><p>Konunun eğitim, yapılandırma, entegrasyon veya ürün değişikliğine ihtiyaç olup olmadığına karar vermek için destek tarihi ve işletim ölçümleri kullanın.</p></article>
          </div>
        </div>
      </section>
      <CTA title={"Destek sorununun arkasındaki yapılandırma ve iş akışı getir."} body={"Bize rolü söyle, eylem, beklenen statü, bağlantılı sistem ve sonuç. Bu, destek sohbetine pratik bir başlangıç noktası verir."} />
    </>;
}

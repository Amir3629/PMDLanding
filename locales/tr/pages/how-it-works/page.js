import PageHero from "@/locales/tr/components/PageHero";
import CTA from "@/locales/tr/components/CTA";
export const metadata = {
  title: "Nasıl Çalışır",
  description: "PayMyDine'in konuk veya personel eyleminin hizmet, ödeme, raporlama ve AI'e nasıl yapıldığının beş adım görüşü."
};
const journeyCards = [{
  eyebrow: "4 misafir eylemleri",
  title: "Scan, göz atın, sipariş ve masa bağlamını kaybetmeden ödeme yapın.",
  body: "Bir masa QR mobil menüyü açabilir, siparişe ek olarak masayı tutabilir, destek hizmeti talepleri ve checkout'a devam edebilir.",
  image: '/site-assets/comments/16.webp',
  alt: "Bir PayMyDine QR deneyimi kullanarak"
}, {
  eyebrow: "Restoran kontrollü servis",
  title: "Dijital rahatlık, yerine takım iş akışını besler.",
  body: "Servis personeli ve mutfak, rol odaklı görüşlerde bir sonraki eylemi alır, restoran menüleri, kullanılabilirliği, hizmet ve ödeme seçeneklerini kontrol eder.",
  image: '/site-assets/table/11.webp',
  alt: "Restoran ortamı PayMyDine tarafından desteklendi"
}];
const flowSteps = [['01', "Eylem başlar", "Bir misafir taramaları, resepsiyon koltukları, bir garson bir sipariş veya yönetici bir tablo değiştirir."], ['02', "Context eklenir", "Masa, misafir, sipariş, zamanlama, notlar ve izinler eylemle kalır."], ['03', "Sorumlu rol onu alır", "Servis personeli hizmet çalışmalarını görür, mutfak hazırlık çalışmalarını görür ve yöneticiler istisnaları görür."], ['04', "Hizmet ve ödeme tamamlandı", "Hazır statü, eloff ve checkout aynı bağlamdan devam ediyor, üç bölünmüş milyar yöntem de dahil."], ['05', "Aktivite yönetim veri tabanı haline gelir", "Gelir, konuklar, ortalama kontrol, masa cirosu, satış zamanlaması ve kârlı beslenme raporlama ve AI-assisted sorular."]];
const operationsCards = [{
  eyebrow: "6 rol çalışma alanları",
  title: "Her rol kuyruk, kontroller ve statüden sorumlu olduğunu görür.",
  body: "Sahipler, yöneticiler, hizmet personeli, mutfak, rezervasyonlar ve finans kullanımı temel restoran bağlamı paylaşılırken odaklanmıştır.",
  image: '/site-assets/owner/1.webp',
  alt: "PayMyDine restoran işlemleri görünümü"
}, {
  eyebrow: "4 mutfak bileti devletler",
  title: "Satın alındı, hazırlamak, hazır ve servis zincirinde görünür kalmak.",
  body: "Mutfak, hizmet personeli ve yöneticileri bir sonraki eloff için gereken durumu görmeye odaklanabiliyor.",
  image: '/site-assets/kitchen/2.webp',
  alt: "PayMyDine ile çalışan mutfak ekibi"
}];
export default function HowItWorksPage() {
  return <>
      <PageHero eyebrow={"5 Adım işletim akışı"} title={"Nihai yönetim soruya ilk masa eyleminden bağlam uygulayın."} intro={"PayMyDine konuk odaklı eylemleri, rol tabanlı iş alanları, mutfak durumu, ödeme, raporlama ve AI her kişiyi aynı arayüz veya aynı bağlamı kullanmaya davet etmeden birleştirir."} image="/site-assets/extra/izakaya-phone.webp" accent="orange" />

      <section className="section howJourneySection">
        <div className="container">
          <div className="sectionHeading centerHeading howJourneyHeading">
            <span className="eyebrow">Konuk eylemleri restoran çalışması olarak kalır</span>
            <h2>Bir mobil eylem, takım için doğru masa, hizmet veya ödeme görevi oluşturmalıdır.</h2>
            <p>Misafir kısa bir akış görür. Restoran, hazırlamak, hizmet etmek ve masaya yerleşmek için yapılandırılmış bağlamı alır.</p>
          </div>

          <div className="demoShowcaseGrid howJourneyGrid">
            {journeyCards.map((card, index) => <article className={`demoShowcaseCard ${index === 0 ? 'demoShowcaseWide' : ''}`} key={card.title}>
                <div className="demoShowcaseMedia demoShowcaseMediaPhoto">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </div>
                <div className="demoShowcaseCopy">
                  <span>{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>)}
          </div>
        </div>
      </section>

      <section className="section howFlowSection">
        <div className="container">
          <div className="splitHeading howFlowHeading">
            <div>
              <span className="eyebrow">Beş açık eloff</span>
              <h2>Her adımda, eylemi, bağlamı, sorumlu rolü ve görünür durumu tanımlar.</h2>
            </div>
            <p>Bu, iş akışını test edilebilir hale getirir: takımlar bilginin nerede kaybedildiğini görebilir, statü tekrarlanır ve bir entegrasyon veya çalışma alanı devralmalıdır.</p>
          </div>

          <div className="howFlowGrid">
            {flowSteps.map(([number, title, body]) => <article className="howFlowCard" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>)}
          </div>
        </div>
      </section>

      <section className="section howOperationsSection">
        <div className="container">
          <div className="sectionHeading howOperationsHeading">
            <span className="eyebrow">Misafir yolculuğun arkasında</span>
            <h2>Rol çalışma alanları ve görünür bilet eyaletleri dijital eylemleri sorumlu restoran çalışması haline getiriyor.</h2>
            <p>Ekip, hangi statünin tamamlanmasını ve hangi metrikin sonucunu yansıtması gerektiğini tespit edebilir.</p>
          </div>

          <div className="howOperationsGrid">
            {operationsCards.map(card => <article className="howOperationsCard" key={card.title}>
                <div className="howOperationsMedia">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </div>
                <div className="howOperationsCopy">
                  <span>{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>)}
          </div>
        </div>
      </section>

      <CTA title={"Tüm 5 adımda gerçek bir restoran yolculuğu."} body={"Bir rezervasyon, masa siparişi, mutfak eloff veya ödeme akışı getirin. Eylem, bağlam, rol, statü ve metrik her adımda tanımlayacağız."} primaryLabel={"Demo Rezervasyonu Yap"} primaryHref="/tr/contact" secondaryLabel={"9 Ürün Alanları keşfedin"} secondaryHref="/tr/platform" />
    </>;
}

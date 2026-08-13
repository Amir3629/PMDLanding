import { imageGroups } from "@/locales/tr/data/site";
import { Icon } from './Icons';
const steps = [{
  title: "Eylem başlar",
  body: "Bir misafir bir masa QR, resepsiyon koltukları bir rezervasyon, servis personeli bir sipariş veya yönetici değişikliği bir masa açar.",
  icon: 'operations'
}, {
  title: "Context eklenir",
  body: "Masa, misafir, sipariş, zamanlama, notlar ve izinler tekrar girilmesi yerine eylemle seyahat eder.",
  icon: 'table'
}, {
  title: "Sorumlu rol onu alır",
  body: "Servis personeli hizmet çalışmalarını görür, mutfak hazırlık çalışmalarını görür ve yöneticiler istisnaları ve canlı durumu görürler.",
  icon: 'kitchen'
}, {
  title: "Servis ve checkout complete complete",
  body: "Hazırlık, hazır durum, eloff ve ödeme aynı restoran ortamından devam ediyor, üç fatura destekli yöntem de dahil.",
  icon: 'card'
}, {
  title: "Etkinlik fikir haline gelir ve AI yardım",
  body: "Gelir, konuklar, ortalama kontrol, masa cirosu, satış zamanlaması, ödeme karışımı, tahminler ve kârlılık raporlama, karşılaştırmalar, anomaly inceleme ve AI-assisted sorular için kullanılabilir.",
  icon: 'chart'
}];
export default function Workflow({
  variant = 'home'
}) {
  const workflowImage = variant === 'platform' ? imageGroups.comments[11] : imageGroups.pos[1];
  return <section className="section workflowSection">

      <div className="container workflowShowcase">

        <div className="workflowShowcaseCopy">

          <span className="eyebrow">
            5 adım işletim akışı + AI inceleme
          </span>

          <h2>
            Her restoran eylemi bağlam yaratır.
PayMyDine, bir sonraki rolü bu kadar bağlantılı tutar -
AI - ne olduğunu anlayabilir.
          </h2>

          <p>
            Aynı bağlam, konuk veya personel eyleminin yolculuğunu takip eder
Hazırlanma, hizmet ve raporlamaya ödeme.
PayMyDine AI o zaman dönemi özetleyebilir, sonuçları karşılaştırır, sonuçları karşılaştırır,
Yüzey olağandışı hareket ve hangi metrik veya kaynak görüşünü tanımlayın
Yönetim bir sonraki incelemelidir.
          </p>

        </div>

        <div className="workflowShowcaseVisual">

          <img src={workflowImage} alt={"PayMyDine restoran iş akışı"} loading="lazy" />

        </div>

      </div>


      <div className="container">

        <div className="workflowJourneyPanel" aria-label={"PayMyDine restoran yolculuğu"}>

          {steps.map((step, index) => <article className="workflowJourneyItem" key={step.title}>

              <div className="workflowJourneyTop">

                <span className="workflowJourneyNumber">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="workflowJourneyIcon">
                  <Icon name={step.icon} size={22} />
                </span>

              </div>

              <h3>{step.title}</h3>

              <p>{step.body}</p>

            </article>)}

        </div>

      </div>

    </section>;
}

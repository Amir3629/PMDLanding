import { imageGroups } from '@/locales/tr/data/site';
import { Icon } from './Icons';

const steps = [
  {
    title: 'İşlem başlar',
    body: 'Bir müşteri masa QR kodunu tarar, karşılama ekibi rezervasyonu masaya yerleştirir, servis personeli sipariş açar veya yönetici masa durumunu değiştirir.',
    icon: 'operations'
  },
  {
    title: 'Bağlam işleme eklenir',
    body: 'Masa, müşteri, sipariş, zamanlama, notlar ve yetkiler yeniden girilmek yerine işlemle birlikte ilerler.',
    icon: 'table'
  },
  {
    title: 'İş, sorumlu role ulaşır',
    body: 'Servis personeli servis işlerini, mutfak hazırlık işlerini, yöneticiler ise istisnaları ve canlı durumu görür.',
    icon: 'kitchen'
  },
  {
    title: 'Servis ve ödeme tamamlanır',
    body: 'Hazırlık, hazır durumu, sorumluluk devri ve ödeme aynı restoran bağlamından devam eder; üç farklı hesap bölme yöntemi de bu akışın içindedir.',
    icon: 'card'
  },
  {
    title: 'Operasyon verisi içgörüye ve Yapay Zekâ desteğine dönüşür',
    body: 'Gelir, müşteri sayısı, ortalama hesap tutarı, masa devir hızı, satış zamanlaması, ödeme yöntemi dağılımı, tahminler ve kârlılık; raporlama, karşılaştırma, olağandışı hareket incelemesi ve Yapay Zekâ destekli sorular için kullanılabilir hale gelir.',
    icon: 'chart'
  }
];

export default function Workflow({ variant = 'home' }) {
  const workflowImage = variant === 'platform' ? imageGroups.comments[11] : imageGroups.pos[1];

  return (
    <section className="section workflowSection">
      <div className="container workflowShowcase">
        <div className="workflowShowcaseCopy">
          <span className="eyebrow">
            5 adımlı operasyon akışı + Yapay Zekâ incelemesi
          </span>

          <h2>
            Restorandaki her işlem bir bağlam oluşturur.
            PayMyDine bu bağlamı bağlantılı tutar; böylece hem sonraki rol
            hem de Yapay Zekâ ne olduğunu anlayabilir.
          </h2>

          <p>
            Aynı bağlam, müşteri veya ekip işlemiyle başlayıp hazırlık, servis ve
            ödeme üzerinden raporlamaya kadar ilerler. PayMyDine Yapay Zekâ;
            dönemi özetlemeye, sonuçları karşılaştırmaya, olağandışı hareketleri
            öne çıkarmaya ve yönetimin bir sonraki adımda hangi metriği veya
            kaynak görünümü incelemesi gerektiğini belirlemeye yardımcı olabilir.
          </p>
        </div>

        <div className="workflowShowcaseVisual">
          <img src={workflowImage} alt="PayMyDine restoran iş akışı" loading="lazy" />
        </div>
      </div>

      <div className="container">
        <div className="workflowJourneyPanel" aria-label="PayMyDine restoran yolculuğu">
          {steps.map((step, index) => (
            <article className="workflowJourneyItem" key={step.title}>
              <div className="workflowJourneyTop">
                <span className="workflowJourneyNumber">{String(index + 1).padStart(2, '0')}</span>
                <span className="workflowJourneyIcon"><Icon name={step.icon} size={22}/></span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

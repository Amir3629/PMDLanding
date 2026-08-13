import PageHero from "@/locales/tr/components/PageHero";
import CTA from "@/locales/tr/components/CTA";
import { Icon } from "@/locales/tr/components/Icons";
import { teamPages } from "@/locales/tr/data/teams";
export const metadata = {
  title: "Ekip Çalışma Alanları",
  description: "6 rol tabanlı PayMyDine iş alanları sahipleri, yöneticiler, hizmet personeli, mutfak, rezervasyonlar ve finans için."
};
const order = ['owner', 'manager', 'service-staff', 'kitchen', 'reservations', 'finance'];
export default function TeamsPage() {
  return <>
      <PageHero eyebrow={"6 rol çalışma alanları"} title={"Her rolü göster kuyruk, kontroller ve ölçümler sorumludur."} intro={"Sahiplerin iş sinyallerine ihtiyacı vardır. Yöneticilerin canlı istisnalara ihtiyacı vardır. Servis personeli masalara ve konuklara ihtiyaç duyuyor. Mutfak biletlere ve zamanlamaya ihtiyaç duyar. Rezervasyonlar varışlara ve kapasiteye ihtiyaç duyuyor. Finansın temiz raporlama ihtiyacı var."} image="/site-assets/extra/role-dashboard.webp" accent="green" />

      <section className="section offerSection compactSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Focused access, paylaşılan restoran bağlamı</span>
            <h2>Altı farklı sorumluluk altı kopuş sistemi gerektirmez.</h2>
            <p>Her çalışma alanı, masayı korurken gürültü ve erişim, sipariş, mutfak, rezervasyon ve ödeme bağlamı bir sonraki el için gereklidir.</p>
          </div>
          <div className="offerGrid offerGridVisual">
            {order.map(slug => {
            const page = teamPages[slug];
            return <a className="offerCard offerCardWithImage" href={`/tr/teams/${slug}`} key={slug}>
                  <div className="offerCardMedia"><img src={page.heroImage} alt="" loading="lazy" /></div>
                  <div className="offerCardBody">
                    <span className="iconBubble"><Icon name={slug === 'kitchen' ? 'kitchen' : slug === 'reservations' ? 'calendar' : slug === 'finance' ? 'chart' : 'team'} /></span>
                    <h3>{page.label}</h3>
                    <p>{page.intro}</p>
                    <span className="cardLink">Rol sinyalleri ve kontrollerini görün <Icon name="arrow" size={15} /></span>
                  </div>
                </a>;
          })}
          </div>
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">Bir işletim hikayesi aşağıda</span>
            <h2>Rol ile erişim değişiklikleri. Restoranın durumu değil.</h2>
            <p>Bir masa, rezervasyondan sipariş etmek, hazırlamak, hizmet ve ödeme yapmak için aynı masada kalır, ancak her rol bu yolculuğun farklı bir bölümünü görür.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16} />Sahip kararları</span>
            <span><Icon name="check" size={16} />Manager istisna istisna istisnaları</span>
            <span><Icon name="check" size={16} />Servis personeli servis hizmeti</span>
            <span><Icon name="check" size={16} />Mutfak biletleri ve zamanlama</span>
            <span><Icon name="check" size={16} />Rezervasyon kapasitesi</span>
            <span><Icon name="check" size={16} />Finans raporlama</span>
          </div>
        </div>
      </section>

      <CTA title={"Takım yapınızı 6 PayMyDine çalışma alanlarına haritalayın."} body={"Mevcut sorumluluklarınızı, izinlerinizi ve devre dışı problemlerinizi getirin. Her rolün ne görmesi gerektiğini ve paylaşılan bağlamın onlarla nasıl hareket ettiğini göstereceğiz."} />
    </>;
}

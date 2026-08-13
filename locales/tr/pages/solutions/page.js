import PageHero from "@/locales/tr/components/PageHero";
import CTA from "@/locales/tr/components/CTA";
import { Icon } from "@/locales/tr/components/Icons";
import { productAreas } from "@/locales/tr/data/site";
export const metadata = {
  title: "Ürün Alanları",
  description: "Operasyonları kapsayan dokuz pratik PayMyDine ürün alanı, konuklar, ekipler, istihbarat, büyüme ve entegrasyonlar."
};
export default function SolutionsPage() {
  return <>
      <PageHero eyebrow={"9 PayMyDine ürün alanları"} title={"Geliştirmeniz gereken iş akışını seçin, sonra restoranın geri kalanına bağlı kalın."} intro={"Aşağıdaki her ürün alanı, desteklediği eylemleri belirtir, restoran bağlamı tutar ve metrics veya statüsü kullanabilir. Bir alana başlayın veya dokuzunu birleştirin."} image="/site-assets/extra/restaurant-team-planning.webp" accent="green" />

      <section className="section offerSection compactSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Ürün haritası operasyonel iş tarafından</span>
            <h2>İş, kuyruk veya yönetim sorusu ile eşleşen alanı seçin.</h2>
            <p>Rezervasyonlar, hizmet, mutfak, ödeme, ekipler ve raporlama ayrı sorumluluklar kalır, ancak yararlı bağlamları bir işletim katmanı aracılığıyla seyahat edebilir.</p>
          </div>
          <div className="offerGrid offerGridVisual">
            {productAreas.map(item => <a className="offerCard offerCardWithImage" href={item.href} key={item.title}>
                <div className="offerCardMedia"><img src={item.image} alt="" loading="lazy" /></div>
                <div className="offerCardBody">
                  <span className="iconBubble"><Icon name={item.icon} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className="cardLink">Eylemleri ve metrikleri görün <Icon name="arrow" size={15} /></span>
                </div>
              </a>)}
          </div>
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">Paylaşılan bağlamda</span>
            <h2>Farklı iş akışları aynı masayı, siparişi, misafir ve ödeme hikayesini kullanabilir.</h2>
            <p>Bu, re-entry'yi azaltır ve yinelenen durumu kontrol eder, ancak her rolü odaklanmış bir ekran ve izin seti verirken.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16} />9 ürün alanları</span>
            <span><Icon name="check" size={16} />6 rol çalışma alanları</span>
            <span><Icon name="check" size={16} />5 Adım işletim akışı</span>
            <span><Icon name="check" size={16} />3 bill-split yöntemleri</span>
            <span><Icon name="check" size={16} />9 yönetim metrikleri</span>
            <span><Icon name="check" size={16} />4 entegrasyon türleri</span>
          </div>
        </div>
      </section>

      <CTA title={"Mevcut restoran sistemlerine 9 ürün alanını haritalayın."} body={"PayMyDine'in kendi başına ne olması gerektiğini, POS veya ödeme kurulumunuzda ne kalmalı ve bağlantılı bağlamın tekrarlanan işi ortadan kaldırır."} />
    </>;
}

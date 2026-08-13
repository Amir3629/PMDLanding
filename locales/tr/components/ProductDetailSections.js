import { Icon } from './Icons';
const number = index => String(index + 1).padStart(2, '0');
export default function ProductDetailSections({
  details,
  productName = "Bu ürün alanı"
}) {
  if (!details) return null;
  const facts = details.facts || [];
  const workflow = details.workflow || [];
  const roleViews = details.roleViews || [];
  const metrics = details.metrics || [];
  const implementation = details.implementation || [];
  const faqs = details.faqs || [];
  return <>
      {facts.length > 0 && <section className="section highlightSection">
          <div className="container">
            <div className="sectionHeading centerHeading">
              <span className="eyebrow">{details.factsEyebrow || `${productName} at a glance`}</span>
              <h2>{details.factsTitle || "Ne dahil, kim kullanır ve ne kalır."}</h2>
              <p>{details.factsIntro || "Bunlar ürün katlı gerçekler, söz konusu müşteri performans sonuçları değil."}</p>
            </div>
            <div className="highlightGrid">
              {facts.map(([value, title, body]) => <article className="highlightCard" key={`${value}-${title}`}>
                  <span>{value}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}

      {workflow.length > 0 && <section className="section howFlowSection">
          <div className="container">
            <div className="splitHeading howFlowHeading">
              <div>
                <span className="eyebrow">{details.workflowEyebrow || `${productName} workflow`}</span>
                <h2>{details.workflowTitle || "İş, ilk sinyalden tam bir eyleme nasıl hareket eder."}</h2>
              </div>
              <p>{details.workflowIntro || "Her adım, sorumluluk bir sonraki role taşınırken restoran bağlamını tutar."}</p>
            </div>
            <div className="howFlowGrid">
              {workflow.map(([title, body], index) => <article className="howFlowCard" key={title}>
                  <span>{number(index)}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}

      {roleViews.length > 0 && <section className="section companyValues">
          <div className="container companyValuesGrid">
            <div>
              <span className="eyebrow">{details.rolesEyebrow || "Her rol ne görür"}</span>
              <h2>{details.rolesTitle || "Aynı restoran bağlamı, farklı sorumluluklar etrafında sunulur."}</h2>
              <p>{details.rolesIntro || "Rol tabanlı görüşler, restoranın ayrı versiyonları olmadan arayüz gürültüsünü azaltır."}</p>
            </div>
            <div className="companyValueCards">
              {roleViews.map(([title, body]) => <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}

      {metrics.length > 0 && <section className="section pricingSection">
          <div className="container">
            <div className="sectionHeading centerHeading">
              <span className="eyebrow">{details.metricsEyebrow || "İş akışını ölçme"}</span>
              <h2>{details.metricsTitle || "Bir gelişme iddia etmeden önce bir temel oluşturmak."}</h2>
              <p>{details.metricsIntro || "Mevcut tam ölçümler, yapılandırılmış ortamda modüllere, entegrasyonlara ve olay verilere bağlıdır."}</p>
            </div>
            <div className="pricingFactorGrid">
              {metrics.map(([title, body], index) => <article key={title}>
                  <span>{number(index)}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}

      {implementation.length > 0 && <section className="section capabilitySection">
          <div className="container capabilityPanel">
            <div>
              <span className="eyebrow">{details.implementationEyebrow || "Yapılama ve veri gereksinimleri"}</span>
              <h2>{details.implementationTitle || "İş akışını gerçekleştirmek için beklemeden önce işletim kurallarını tanımlayın."}</h2>
              <p>{details.implementationIntro || "Uygulama gerçek, rol sahipliği, durum tanımları ve ölçüm yöntemi kaynağını belgelemeli."}</p>
            </div>
            <div className="capabilityList">
              {implementation.map(item => <span key={item}><Icon name="check" size={16} />{item}</span>)}
            </div>
          </div>
        </section>}

      {faqs.length > 0 && <section className="section companyValues">
          <div className="container companyValuesGrid">
            <div>
              <span className="eyebrow">{details.faqEyebrow || "Pratik sorular"}</span>
              <h2>{details.faqTitle || "kapsamı seçmeden önce ne açıklığa kavuşturulur."}</h2>
              <p>{details.faqIntro || "Kesin cevap restoran kurulumuna, seçilmiş modüllere ve bağlantılı sistemlere bağlı olabilir."}</p>
            </div>
            <div className="companyValueCards">
              {faqs.map(([title, body]) => <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}
    </>;
}

import { Icon } from './Icons';

const number = (index) => String(index + 1).padStart(2, '0');

export default function ProductDetailSections({ details, productName = 'Bu ürün alanı' }) {
  if (!details) return null;

  const facts = details.facts || [];
  const workflow = details.workflow || [];
  const roleViews = details.roleViews || [];
  const metrics = details.metrics || [];
  const implementation = details.implementation || [];
  const faqs = details.faqs || [];

  return (
    <>
      {facts.length > 0 && (
        <section className="section highlightSection">
          <div className="container">
            <div className="sectionHeading centerHeading">
              <span className="eyebrow">{details.factsEyebrow || `${productName} — kısa bakış`}</span>
              <h2>{details.factsTitle || 'Neler dahil, kim kullanır ve hangi bilgiler bağlantılı kalır?'}</h2>
              <p>{details.factsIntro || 'Bunlar ürün kapsamını açıklar; müşteri performansına ilişkin bir sonuç garantisi değildir.'}</p>
            </div>
            <div className="highlightGrid">
              {facts.map(([value, title, body]) => (
                <article className="highlightCard" key={`${value}-${title}`}>
                  <span>{value}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {workflow.length > 0 && (
        <section className="section howFlowSection">
          <div className="container">
            <div className="splitHeading howFlowHeading">
              <div>
                <span className="eyebrow">{details.workflowEyebrow || `${productName} iş akışı`}</span>
                <h2>{details.workflowTitle || 'İş, ilk sinyalden tamamlanmış bir adıma nasıl ilerler?'}</h2>
              </div>
              <p>{details.workflowIntro || 'Sorumluluk bir sonraki role geçerken restoran bağlamı her adımda korunur.'}</p>
            </div>
            <div className="howFlowGrid">
              {workflow.map(([title, body], index) => (
                <article className="howFlowCard" key={title}>
                  <span>{number(index)}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {roleViews.length > 0 && (
        <section className="section companyValues">
          <div className="container companyValuesGrid">
            <div>
              <span className="eyebrow">{details.rolesEyebrow || 'Her rol ne görür?'}</span>
              <h2>{details.rolesTitle || 'Aynı restoran bağlamı, farklı sorumluluklara göre sunulur.'}</h2>
              <p>{details.rolesIntro || 'Rol bazlı görünümler, restoranın birbirinden kopuk sürümlerini oluşturmadan ekran kalabalığını azaltır.'}</p>
            </div>
            <div className="companyValueCards">
              {roleViews.map(([title, body]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {metrics.length > 0 && (
        <section className="section pricingSection">
          <div className="container">
            <div className="sectionHeading centerHeading">
              <span className="eyebrow">{details.metricsEyebrow || 'İş akışını ölçün'}</span>
              <h2>{details.metricsTitle || 'Bir iyileşme iddia etmeden önce başlangıç değerini belirleyin.'}</h2>
              <p>{details.metricsIntro || 'Kullanılabilen metrikler; seçilen modüllere, entegrasyonlara ve yapılandırılmış ortamdaki olay verilerine bağlıdır.'}</p>
            </div>
            <div className="pricingFactorGrid">
              {metrics.map(([title, body], index) => (
                <article key={title}>
                  <span>{number(index)}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {implementation.length > 0 && (
        <section className="section capabilitySection">
          <div className="container capabilityPanel">
            <div>
              <span className="eyebrow">{details.implementationEyebrow || 'Yapılandırma ve veri gereksinimleri'}</span>
              <h2>{details.implementationTitle || 'İş akışından sonuç beklemeden önce operasyon kurallarını tanımlayın.'}</h2>
              <p>{details.implementationIntro || 'Kurulum; ana veri kaynağını, rol sorumluluğunu, durum tanımlarını ve ölçüm yöntemini açıkça belgelemelidir.'}</p>
            </div>
            <div className="capabilityList">
              {implementation.map((item) => (
                <span key={item}><Icon name="check" size={16}/>{item}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="section companyValues">
          <div className="container companyValuesGrid">
            <div>
              <span className="eyebrow">{details.faqEyebrow || 'Pratik sorular'}</span>
              <h2>{details.faqTitle || 'Kapsamı seçmeden önce hangi noktalar netleştirilmeli?'}</h2>
              <p>{details.faqIntro || 'Kesin yanıt, restoran yapısına, seçilen modüllere ve bağlı sistemlere göre değişebilir.'}</p>
            </div>
            <div className="companyValueCards">
              {faqs.map(([title, body]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

import styles from './HardwareShowcase.module.css';

const PRODUCT_TONES = ['green', 'blue', 'orange', 'purple', 'forest', 'gold', 'mint', 'slate'];

const PRODUCT_IMAGES = {
  table: '/hardware/refresh-20261004/table-display.webp',
  cashier: '/hardware/refresh-20261004/desktop-pos.webp',
  mobile: '/hardware/refresh-20261004/mobile-pos.webp',
  payment: '/hardware/refresh-20261004/smart-payment-pos.webp',
  printer: '/hardware/refresh-20261004/printer.webp',
  drawer: '/hardware/refresh-20261004/cash-drawer.webp',
  kds: '/hardware/refresh-20261004/kds.webp',
  kiosk: '/hardware/refresh-20261004/kiosk.webp'
};

function DeviceMock({ type, label, compact = false }) {
  return (
    <div className={`${styles.deviceMock} ${styles[`device_${type}`]} ${compact ? styles.deviceCompact : ''}`} aria-hidden="true">
      <div className={styles.deviceScreen}>
        <span>{label}</span>
        {type === 'table' ? <div className={styles.qrGrid}><i/><i/><i/><i/><i/><i/><i/><i/><i/></div> : null}
        {type === 'cashier' ? <div className={styles.posRows}><i/><i/><i/></div> : null}
        {type === 'mobile' || type === 'payment' ? <div className={styles.payWave}>)))</div> : null}
        {type === 'printer' ? <div className={styles.paperSlip}>PAYMYDINE</div> : null}
        {type === 'drawer' ? <div className={styles.drawerLine}/> : null}
        {type === 'kds' ? <div className={styles.kdsTickets}><i/><i/><i/></div> : null}
        {type === 'kiosk' ? <div className={styles.kioskTiles}><i/><i/><i/><i/></div> : null}
      </div>
    </div>
  );
}

export default function HardwareShowcase({ copy }) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>{copy.hero.eyebrow}</span>
              <h1>{copy.hero.title}</h1>
              <p>{copy.hero.intro}</p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href={copy.contactHref}>{copy.hero.primaryCta}</a>
                <a className={styles.secondaryButton} href="#hardware-products">{copy.hero.secondaryCta}</a>
              </div>
              <div className={styles.heroMeta}>
                {copy.hero.meta.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>

            <div className={styles.heroPhotoWrap}>
              <img
                className={styles.heroPhoto}
                src="/hardware/refresh-20261004/homepage-hero.webp"
                alt="PayMyDine restaurant hardware ecosystem"
                width="1600"
                height="900"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.productsSection} id="hardware-products">
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.eyebrow}>{copy.productsEyebrow}</span>
            <h2>{copy.productsTitle}</h2>
            <p>{copy.productsIntro}</p>
          </div>

          <div className={styles.productGrid}>
            {copy.products.map((product, index) => (
              <article className={styles.productCard} data-tone={PRODUCT_TONES[index % PRODUCT_TONES.length]} key={product.name}>
                <div className={styles.productVisual}>
                  <img
                    className={styles.productImage}
                    src={PRODUCT_IMAGES[product.type]}
                    alt={product.name}
                    width="1448"
                    height="1086"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.productBody}>
                  <span className={styles.productCategory}>{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.body}</p>
                  <ul>
                    {product.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <a href={copy.contactHref}>{copy.productCta}<span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ecosystemSection}>
        <div className={styles.container}>
          <div className={styles.ecosystemCard}>
            <div>
              <span className={styles.eyebrowDark}>{copy.ecosystem.eyebrow}</span>
              <h2>{copy.ecosystem.title}</h2>
              <p>{copy.ecosystem.body}</p>
            </div>
            <div className={styles.ecosystemFlow}>
              {copy.ecosystem.steps.map((step, index) => (
                <div className={styles.flowItem} key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <b>{step}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.optionsSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.eyebrow}>{copy.options.eyebrow}</span>
            <h2>{copy.options.title}</h2>
            <p>{copy.options.body}</p>
          </div>

          <div className={styles.optionGrid}>
            {copy.options.items.map((item, index) => (
              <article className={styles.optionCard} key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <p className={styles.availabilityNote}>{copy.options.note}</p>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaCard}>
            <div>
              <span>{copy.finalCta.eyebrow}</span>
              <h2>{copy.finalCta.title}</h2>
              <p>{copy.finalCta.body}</p>
            </div>
            <a href={copy.contactHref}>{copy.finalCta.button}</a>
          </div>
        </div>
      </section>
    </main>
  );
}

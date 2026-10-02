import styles from './HomeHardwareRunway.module.css';

const DEVICE_IMAGES = {
  cashier: '/hardware/dual-screen-cashier-pos.webp',
  mobile: '/hardware/mobile-pos-terminal.webp',
  payment: '/hardware/smart-payment-terminal.webp',
  kds: '/hardware/kitchen-display-system-kds.webp'
};

const COPY = {
  en: {
    eyebrow: 'PayMyDine Hardware',
    title: 'The restaurant system does not stop at the screen.',
    body: 'From the main counter and tableside service to payments and the kitchen, PayMyDine hardware keeps each service point connected to the same operating flow.',
    cta: 'Explore all hardware',
    productsLabel: 'Featured PayMyDine restaurant hardware',
    devices: [
      { role: 'Main counter', name: 'Dual-Screen Cashier POS', image: DEVICE_IMAGES.cashier },
      { role: 'Service floor', name: 'Mobile POS Terminal', image: DEVICE_IMAGES.mobile },
      { role: 'Payments', name: 'Smart Payment Terminal', image: DEVICE_IMAGES.payment },
      { role: 'Kitchen', name: 'Kitchen Display System (KDS)', image: DEVICE_IMAGES.kds }
    ]
  },
  tr: {
    eyebrow: 'PayMyDine Donanım',
    title: 'Restoran sistemi ekranda bitmiyor.',
    body: 'Ana kasadan servis alanına, ödemeden mutfağa kadar PayMyDine donanımı her servis noktasını aynı operasyon akışına bağlı tutar.',
    cta: 'Tüm donanımı keşfet',
    productsLabel: 'Öne çıkan PayMyDine restoran donanımları',
    devices: [
      { role: 'Ana kasa', name: 'Çift Ekranlı Kasa POS', image: DEVICE_IMAGES.cashier },
      { role: 'Servis alanı', name: 'Mobil POS Terminali', image: DEVICE_IMAGES.mobile },
      { role: 'Ödemeler', name: 'Akıllı Ödeme Terminali', image: DEVICE_IMAGES.payment },
      { role: 'Mutfak', name: 'Mutfak Ekran Sistemi (KDS)', image: DEVICE_IMAGES.kds }
    ]
  },
  ar: {
    eyebrow: 'أجهزة PayMyDine',
    title: 'نظام المطعم لا يتوقف عند الشاشة.',
    body: 'من الكاشير وصالة المطعم إلى الدفع والمطبخ، تربط أجهزة PayMyDine كل نقطة خدمة بنفس مسار التشغيل.',
    cta: 'استكشف جميع الأجهزة',
    productsLabel: 'أبرز أجهزة PayMyDine للمطاعم',
    devices: [
      { role: 'الكاشير', name: 'نقطة بيع كاشير بشاشتين', image: DEVICE_IMAGES.cashier },
      { role: 'صالة المطعم', name: 'نقطة بيع متنقلة', image: DEVICE_IMAGES.mobile },
      { role: 'المدفوعات', name: 'جهاز دفع ذكي', image: DEVICE_IMAGES.payment },
      { role: 'المطبخ', name: 'نظام شاشة المطبخ (KDS)', image: DEVICE_IMAGES.kds }
    ]
  }
};

function hardwareHref(locale) {
  return locale === 'en' ? '/hardware' : `/${locale}/hardware`;
}

export default function HomeHardwareRunway({ locale = 'en' }) {
  const copy = COPY[locale] || COPY.en;
  const href = hardwareHref(locale);
  const titleId = `home-hardware-title-${locale}`;

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.headingBlock}>
            <span className={styles.eyebrow}>{copy.eyebrow}</span>
            <h2 id={titleId}>{copy.title}</h2>
          </div>

          <div className={styles.lede}>
            <p>{copy.body}</p>
            <a className={styles.cta} href={href}>
              {copy.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className={styles.runway} aria-label={copy.productsLabel}>
          {copy.devices.map((device, index) => (
            <a className={styles.device} href={href} key={device.name}>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>

              <div className={styles.media}>
                <img
                  src={device.image}
                  alt={device.name}
                  width="1448"
                  height="1086"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>

              <div className={styles.meta}>
                <span>{device.role}</span>
                <strong>{device.name}</strong>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

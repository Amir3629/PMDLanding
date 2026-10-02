import styles from './HomeHardwareRunway.module.css';

const COPY = {
  en: {
    eyebrow: 'PayMyDine Hardware',
    title: 'One connected setup, from counter to kitchen.',
    body: 'POS, mobile service, payments and KDS stay connected inside the same PayMyDine operating flow.',
    cta: 'Explore all hardware',
    imageAlt: 'PayMyDine restaurant hardware ecosystem with connected POS, payment and kitchen devices',
    productsLabel: 'PayMyDine hardware in the restaurant flow',
    devices: [
      { role: 'Counter', name: 'Dual-Screen POS' },
      { role: 'Service floor', name: 'Mobile POS' },
      { role: 'Payments', name: 'Smart Payment Terminal' },
      { role: 'Kitchen', name: 'KDS' }
    ]
  },
  tr: {
    eyebrow: 'PayMyDine Donanım',
    title: 'Kasadan mutfağa tek bağlantılı kurulum.',
    body: 'POS, mobil servis, ödemeler ve KDS aynı PayMyDine operasyon akışı içinde birlikte çalışır.',
    cta: 'Tüm donanımı keşfet',
    imageAlt: 'Bağlantılı POS, ödeme ve mutfak cihazlarıyla PayMyDine restoran donanım ekosistemi',
    productsLabel: 'Restoran akışındaki PayMyDine donanımları',
    devices: [
      { role: 'Ana kasa', name: 'Çift Ekranlı POS' },
      { role: 'Servis alanı', name: 'Mobil POS' },
      { role: 'Ödemeler', name: 'Akıllı Ödeme Terminali' },
      { role: 'Mutfak', name: 'KDS' }
    ]
  },
  ar: {
    eyebrow: 'أجهزة PayMyDine',
    title: 'إعداد مترابط من الكاشير إلى المطبخ.',
    body: 'تعمل نقطة البيع والخدمة المتنقلة والمدفوعات ونظام شاشة المطبخ ضمن مسار تشغيل PayMyDine واحد.',
    cta: 'استكشف جميع الأجهزة',
    imageAlt: 'منظومة أجهزة PayMyDine للمطاعم مع نقاط البيع والدفع وأجهزة المطبخ المترابطة',
    productsLabel: 'أجهزة PayMyDine ضمن مسار تشغيل المطعم',
    devices: [
      { role: 'الكاشير', name: 'نقطة بيع بشاشتين' },
      { role: 'صالة المطعم', name: 'نقطة بيع متنقلة' },
      { role: 'المدفوعات', name: 'جهاز دفع ذكي' },
      { role: 'المطبخ', name: 'KDS' }
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
        <div className={styles.topline}>
          <span className={styles.eyebrow}>{copy.eyebrow}</span>
          <a className={styles.cta} href={href}>
            {copy.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className={styles.stage}>
          <img
            className={styles.stageImage}
            src="/hardware/hero-hardware-ecosystem.webp"
            alt={copy.imageAlt}
            width="1600"
            height="900"
            loading="lazy"
            decoding="async"
          />
          <div className={styles.scrim} aria-hidden="true" />
          <div className={styles.stageCopy}>
            <h2 id={titleId}>{copy.title}</h2>
            <p>{copy.body}</p>
          </div>
        </div>

        <div className={styles.deviceRail} role="list" aria-label={copy.productsLabel}>
          {copy.devices.map((device) => (
            <div className={styles.deviceItem} role="listitem" key={device.name}>
              <span>{device.role}</span>
              <strong>{device.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

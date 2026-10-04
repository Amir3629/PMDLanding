import styles from './HomeHardwareRunway.module.css';

const DEVICE_IMAGES = {
  table: '/hardware/refresh-20261004/table-display.webp',
  cashier: '/hardware/refresh-20261004/desktop-pos.webp',
  mobile: '/hardware/refresh-20261004/mobile-pos.webp',
  payment: '/hardware/refresh-20261004/smart-payment-pos.webp',
  printer: '/hardware/refresh-20261004/printer.webp',
  drawer: '/hardware/refresh-20261004/cash-drawer.webp',
  kds: '/hardware/refresh-20261004/kds.webp',
  kiosk: '/hardware/refresh-20261004/kiosk.webp'
};

const COPY = {
  en: {
    eyebrow: 'PayMyDine Hardware',
    title: 'Hardware for every point of service.',
    body: 'From the table and main counter to payments, kitchen and self-service, choose the devices that fit the way your restaurant works.',
    cta: 'Explore all hardware',
    productsLabel: 'PayMyDine restaurant hardware',
    devices: [
      { role: 'Main counter', name: 'Dual-Screen Cashier POS', image: DEVICE_IMAGES.cashier, position: 'center' },
      { role: 'Kitchen', name: 'Kitchen Display System (KDS)', image: DEVICE_IMAGES.kds, position: 'center' },
      { role: 'Service floor', name: 'Mobile POS Terminal', image: DEVICE_IMAGES.mobile, position: 'center' },
      { role: 'Self-service', name: 'Self-Service Kiosk', image: DEVICE_IMAGES.kiosk, position: 'center' },
      { role: 'Payments', name: 'Smart Payment Terminal', image: DEVICE_IMAGES.payment, position: 'center' },
      { role: 'At the table', name: 'Table QR & Pay Display', image: DEVICE_IMAGES.table, position: 'center' },
      { role: 'Receipts', name: 'Receipt Printer', image: DEVICE_IMAGES.printer, position: 'center' },
      { role: 'Cash', name: 'Cash Drawer', image: DEVICE_IMAGES.drawer, position: 'center' }
    ]
  },
  tr: {
    eyebrow: 'PayMyDine Donanım',
    title: 'Her servis noktası için donanım.',
    body: 'Masadan ana kasaya, ödemeden mutfağa ve self servise kadar restoranınızın çalışma biçimine uygun cihazları seçin.',
    cta: 'Tüm donanımı keşfet',
    productsLabel: 'PayMyDine restoran donanımları',
    devices: [
      { role: 'Ana kasa', name: 'Çift Ekranlı Kasa POS', image: DEVICE_IMAGES.cashier, position: 'center' },
      { role: 'Mutfak', name: 'Mutfak Ekran Sistemi (KDS)', image: DEVICE_IMAGES.kds, position: 'center' },
      { role: 'Servis alanı', name: 'Mobil POS Terminali', image: DEVICE_IMAGES.mobile, position: 'center' },
      { role: 'Self servis', name: 'Self Servis Kiosk', image: DEVICE_IMAGES.kiosk, position: 'center' },
      { role: 'Ödemeler', name: 'Akıllı Ödeme Terminali', image: DEVICE_IMAGES.payment, position: 'center' },
      { role: 'Masa başı', name: 'Masa QR ve Ödeme Ekranı', image: DEVICE_IMAGES.table, position: 'center' },
      { role: 'Fişler', name: 'Fiş Yazıcısı', image: DEVICE_IMAGES.printer, position: 'center' },
      { role: 'Nakit', name: 'Nakit Çekmecesi', image: DEVICE_IMAGES.drawer, position: 'center' }
    ]
  },
  ar: {
    eyebrow: 'أجهزة PayMyDine',
    title: 'أجهزة لكل نقطة خدمة.',
    body: 'من الطاولة والكاشير إلى الدفع والمطبخ والخدمة الذاتية، اختر الأجهزة التي تناسب طريقة عمل مطعمك.',
    cta: 'استكشف جميع الأجهزة',
    productsLabel: 'أجهزة PayMyDine للمطاعم',
    devices: [
      { role: 'الكاشير', name: 'نقطة بيع كاشير بشاشتين', image: DEVICE_IMAGES.cashier, position: 'center' },
      { role: 'المطبخ', name: 'نظام شاشة المطبخ (KDS)', image: DEVICE_IMAGES.kds, position: 'center' },
      { role: 'صالة المطعم', name: 'نقطة بيع متنقلة', image: DEVICE_IMAGES.mobile, position: 'center' },
      { role: 'الخدمة الذاتية', name: 'كشك خدمة ذاتية', image: DEVICE_IMAGES.kiosk, position: 'center' },
      { role: 'المدفوعات', name: 'جهاز دفع ذكي', image: DEVICE_IMAGES.payment, position: 'center' },
      { role: 'على الطاولة', name: 'شاشة QR والدفع للطاولة', image: DEVICE_IMAGES.table, position: 'center' },
      { role: 'الإيصالات', name: 'طابعة إيصالات', image: DEVICE_IMAGES.printer, position: 'center' },
      { role: 'النقد', name: 'درج نقدي', image: DEVICE_IMAGES.drawer, position: 'center' }
    ]
  }
};

function hardwareHref(locale) {
  const base = locale === 'en' ? '/hardware' : `/${locale}/hardware`;
  return `${base}#hardware-products`;
}

export default function HomeHardwareRunway({ locale = 'en' }) {
  const copy = COPY[locale] || COPY.en;
  const href = hardwareHref(locale);
  const titleId = `home-hardware-title-${locale}`;

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.introCopy}>
            <span className={styles.eyebrow}>{copy.eyebrow}</span>
            <h2 id={titleId}>{copy.title}</h2>
            <p>{copy.body}</p>
          </div>

          <a className={styles.allHardwareLink} href={href}>
            {copy.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className={styles.grid} role="list" aria-label={copy.productsLabel}>
          {copy.devices.map((device, index) => (
            <a
              className={styles.card}
              href={href}
              role="listitem"
              key={device.name}
              data-card={index + 1}
            >
              <img
                className={styles.cardImage}
                src={device.image}
                alt={device.name}
                width="1448"
                height="1086"
                loading="eager"
                decoding="async"
                style={{ objectPosition: device.position }}
              />
              <span className={styles.cardShade} aria-hidden="true" />

              <span className={styles.cardCopy}>
                <strong>{device.name}</strong>
              </span>

              <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

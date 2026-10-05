import styles from './HomeHardwareRunway.module.css';

const DEVICE_IMAGES = {
  table: '/site-assets/hardware-device-20261004/table-qr-pay-display.webp',
  cashier: '/site-assets/hardware-device-20261004/dual-screen-cashier-pos-desktop.webp',
  mobile: '/site-assets/hardware-device-20261004/mobile-pos-terminal.webp',
  payment: '/site-assets/hardware-device-20261004/dual-screen-cashier-pos.webp',
  printer: '/site-assets/hardware-device-20261004/printer.webp',
  drawer: '/site-assets/hardware-device-20261004/cash-drawer.webp',
  kds: '/site-assets/hardware-device-20261004/kds.webp',
  kiosk: '/site-assets/hardware-device-20261004/kiosk.webp'
};

const COPY = {
  en: {
    eyebrow: 'PayMyDine Hardware',
    title: 'Hardware for every point of service.',
    body: 'From the table and main counter to payments, kitchen and self-service, choose the devices that fit the way your restaurant works.',
    cta: 'Explore all hardware',
    productsLabel: 'PayMyDine restaurant hardware',
    devices: [
      { role: 'Payments', name: 'Dual-Screen Cashier POS', image: DEVICE_IMAGES.payment, position: 'center' },
      { role: 'At the table', name: 'Table QR & Pay Display', image: DEVICE_IMAGES.table, position: 'center' },
      { role: 'Main counter', name: 'Dual-Screen Cashier POS Desktop', image: DEVICE_IMAGES.cashier, position: 'center' },
      { role: 'Service floor', name: 'Mobile POS Terminal', image: DEVICE_IMAGES.mobile, position: 'center' },
      { role: 'Kitchen', name: 'KDS', image: DEVICE_IMAGES.kds, position: 'center' },
      { role: 'Self-service', name: 'Kiosk', image: DEVICE_IMAGES.kiosk, position: 'center' },
      { role: 'Receipts', name: 'Printer', image: DEVICE_IMAGES.printer, position: 'center' },
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
      { role: 'Ödemeler', name: 'Dual-Screen Cashier POS', image: DEVICE_IMAGES.payment, position: 'center' },
      { role: 'Masa başı', name: 'Table QR & Pay Display', image: DEVICE_IMAGES.table, position: 'center' },
      { role: 'Ana kasa', name: 'Dual-Screen Cashier POS Desktop', image: DEVICE_IMAGES.cashier, position: 'center' },
      { role: 'Servis alanı', name: 'Mobile POS Terminal', image: DEVICE_IMAGES.mobile, position: 'center' },
      { role: 'Mutfak', name: 'KDS', image: DEVICE_IMAGES.kds, position: 'center' },
      { role: 'Self servis', name: 'Kiosk', image: DEVICE_IMAGES.kiosk, position: 'center' },
      { role: 'Fişler', name: 'Printer', image: DEVICE_IMAGES.printer, position: 'center' },
      { role: 'Nakit', name: 'Cash Drawer', image: DEVICE_IMAGES.drawer, position: 'center' }
    ]
  },
  ar: {
    eyebrow: 'أجهزة PayMyDine',
    title: 'أجهزة لكل نقطة خدمة.',
    body: 'من الطاولة والكاشير إلى الدفع والمطبخ والخدمة الذاتية، اختر الأجهزة التي تناسب طريقة عمل مطعمك.',
    cta: 'استكشف جميع الأجهزة',
    productsLabel: 'أجهزة PayMyDine للمطاعم',
    devices: [
      { role: 'المدفوعات', name: 'Dual-Screen Cashier POS', image: DEVICE_IMAGES.payment, position: 'center' },
      { role: 'على الطاولة', name: 'Table QR & Pay Display', image: DEVICE_IMAGES.table, position: 'center' },
      { role: 'الكاشير', name: 'Dual-Screen Cashier POS Desktop', image: DEVICE_IMAGES.cashier, position: 'center' },
      { role: 'صالة المطعم', name: 'Mobile POS Terminal', image: DEVICE_IMAGES.mobile, position: 'center' },
      { role: 'المطبخ', name: 'KDS', image: DEVICE_IMAGES.kds, position: 'center' },
      { role: 'الخدمة الذاتية', name: 'Kiosk', image: DEVICE_IMAGES.kiosk, position: 'center' },
      { role: 'الإيصالات', name: 'Printer', image: DEVICE_IMAGES.printer, position: 'center' },
      { role: 'النقد', name: 'Cash Drawer', image: DEVICE_IMAGES.drawer, position: 'center' }
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

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
    title: "Hardware für jeden Point of Service.",
    body: "Vom Tisch und Hauptzähler bis hin zu Zahlungen, Küche und Selbstbedienung wählen Sie die Geräte, die zu der Funktionsweise Ihres Restaurants passen.",
    cta: "Entdecken Sie alle Hardware",
    productsLabel: "PayMyDine Restaurant Hardware",
    devices: [{
      role: 'Payments',
      name: 'Dual Cashier POS',
      image: DEVICE_IMAGES.payment,
      position: "Zentrum"
    }, {
      role: 'At the table',
      name: 'Table QR & Pay Display',
      image: DEVICE_IMAGES.table,
      position: "Zentrum"
    }, {
      role: 'Main counter',
      name: 'Cashier POS Desktop',
      image: DEVICE_IMAGES.cashier,
      position: "Zentrum"
    }, {
      role: 'Service floor',
      name: 'Mobile POS Terminal',
      image: DEVICE_IMAGES.mobile,
      position: "Zentrum"
    }, {
      role: 'Kitchen',
      name: 'Kitchen Screen',
      image: DEVICE_IMAGES.kds,
      position: "Zentrum"
    }, {
      role: 'Self-service',
      name: 'Kiosk',
      image: DEVICE_IMAGES.kiosk,
      position: "Zentrum"
    }, {
      role: 'Receipts',
      name: 'Printer',
      image: DEVICE_IMAGES.printer,
      position: "Zentrum"
    }, {
      role: 'Cash',
      name: 'Cash Drawer',
      image: DEVICE_IMAGES.drawer,
      position: "Zentrum"
    }]
  },
  tr: {
    eyebrow: 'PayMyDine Donanım',
    title: "Ihr servis noktası için donanım.",
    body: "Masadan ana kasaya, ödemeden mutfağa ve self servise kadar restorationanınızın çalışma biçimine uygun cihazları seçin.",
    cta: 'Tüm donanımı keşfet',
    productsLabel: "PayMyDine restauriert donanımları",
    devices: [{
      role: 'Ödemeler',
      name: 'Dual Cashier POS',
      image: DEVICE_IMAGES.payment,
      position: "Zentrum"
    }, {
      role: 'Masa başı',
      name: 'Table QR & Pay Display',
      image: DEVICE_IMAGES.table,
      position: "Zentrum"
    }, {
      role: 'Ana kasa',
      name: 'Cashier POS Desktop',
      image: DEVICE_IMAGES.cashier,
      position: "Zentrum"
    }, {
      role: 'Servis alanı',
      name: 'Mobile POS Terminal',
      image: DEVICE_IMAGES.mobile,
      position: "Zentrum"
    }, {
      role: 'Mutfak',
      name: 'Kitchen Screen',
      image: DEVICE_IMAGES.kds,
      position: "Zentrum"
    }, {
      role: 'Self servis',
      name: 'Kiosk',
      image: DEVICE_IMAGES.kiosk,
      position: "Zentrum"
    }, {
      role: 'Fişler',
      name: 'Printer',
      image: DEVICE_IMAGES.printer,
      position: "Zentrum"
    }, {
      role: 'Nakit',
      name: 'Cash Drawer',
      image: DEVICE_IMAGES.drawer,
      position: "Zentrum"
    }]
  },
  ar: {
    eyebrow: "PayMyDine",
    title: 'أجهزة لكل نقطة خدمة.',
    body: "من الطاولة والكاشير إلى الدفع والمطبخ والخدمة ال farmingاتية، اختر الأجهزة التي تناسب طريقة عمل مطعمك.",
    cta: 'استكشف جميع الأجهزة',
    productsLabel: 'أجهزة PayMyDine للمطاعم',
    devices: [{
      role: 'المدفوعات',
      name: 'Dual Cashier POS',
      image: DEVICE_IMAGES.payment,
      position: "Zentrum"
    }, {
      role: 'على الطاولة',
      name: 'Table QR & Pay Display',
      image: DEVICE_IMAGES.table,
      position: "Zentrum"
    }, {
      role: 'الكاشير',
      name: 'Cashier POS Desktop',
      image: DEVICE_IMAGES.cashier,
      position: "Zentrum"
    }, {
      role: 'صالة المطعم',
      name: 'Mobile POS Terminal',
      image: DEVICE_IMAGES.mobile,
      position: "Zentrum"
    }, {
      role: 'المطبخ',
      name: 'Kitchen Screen',
      image: DEVICE_IMAGES.kds,
      position: "Zentrum"
    }, {
      role: 'الخدمة الذاتية',
      name: 'Kiosk',
      image: DEVICE_IMAGES.kiosk,
      position: "Zentrum"
    }, {
      role: 'الإيصالات',
      name: 'Printer',
      image: DEVICE_IMAGES.printer,
      position: "Zentrum"
    }, {
      role: 'النقد',
      name: 'Cash Drawer',
      image: DEVICE_IMAGES.drawer,
      position: "Zentrum"
    }]
  }
};
function hardwareHref(locale) {
  const base = locale === 'en' ? "/de/hardware" : `/de${locale}/hardware`;
  return `${base}#hardware-products`;
}
export default function HomeHardwareRunway({
  locale = 'en'
}) {
  const copy = COPY[locale] || COPY.en;
  const href = hardwareHref(locale);
  const titleId = `home-hardware-title-${locale}`;
  return <section className={styles.section} aria-labelledby={titleId}>
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
          {copy.devices.map((device, index) => <a className={styles.card} href={href} role="listitem" key={device.name} data-card={index + 1}>
              <img className={styles.cardImage} src={device.image} alt={device.name} width="1448" height="1086" loading="eager" decoding="async" style={{
            objectPosition: device.position
          }} />
              <span className={styles.cardShade} aria-hidden="true" />

              <span className={styles.cardCopy}>
                <strong>{device.name}</strong>
              </span>

              <span className={styles.arrow} aria-hidden="true">→</span>
            </a>)}
        </div>
      </div>
    </section>;
}

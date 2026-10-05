import HardwareShowcase from '@/components/HardwareShowcase';

export const metadata = {
  title: 'Restoran POS Donanımı ve Ödeme Cihazları',
  description: 'PayMyDine restoran donanımlarını keşfedin: masa QR ve ödeme ekranı, çift ekranlı kasa POS, mobil POS, ödeme terminali, yazıcı, nakit çekmecesi, KDS ve self servis kiosk.'
};

const copy = {
  contactHref: '/tr/contact',
  hero: {
    eyebrow: 'PayMyDine Donanım',
    title: 'Servise hazır restoran donanımı.',
    intro: 'Masa başı QR ve ödeme cihazlarından ana kasa POS’a, mobil terminallerden yazıcılara, mutfak ekranlarına ve self servis kiosklara kadar PayMyDine kurulumunuzu tek bir ekosistemde oluşturun.',
    primaryCta: 'Donanım kurulumunu planla',
    secondaryCta: 'Cihazları keşfet',
    meta: ['Satın al', 'Finansal kiralama', 'Kiralama', 'Tek bağlantılı ekosistem']
  },
  productsEyebrow: 'Donanım seçenekleri',
  productsTitle: 'Masadan mutfağa, her cihazın net bir görevi var.',
  productsIntro: 'Bugün ihtiyacınız olan donanımı seçin; restoranınız ve servis modeliniz büyüdükçe kurulumu genişletin.',
  productCta: 'Bu cihazı sor',
  products: [
    { type: 'payment', shortLabel: 'PAY', category: 'Ana kasa', name: 'Dual-Screen Cashier POS', body: 'Ek bir kasa noktası gereken restoranlar için sipariş ve ödeme akışını destekleyen kompakt çift ekranlı kasiyer POS.', bullets: ['Çift ekranlı kasa kurulumu', 'Kasada sipariş ve ödeme', 'PayMyDine kurulumuna bağlı çalışma'] },
    { type: 'table', shortLabel: 'QR + PAY', category: 'Masa başı', name: 'Table QR & Pay Display', body: 'Her masa için kompakt bir cihaz. Müşteriye QR erişimini görünür tutar ve masa başı ödeme akışını destekler.', bullets: ['QR menü ve sipariş girişi', 'Masa başı ödeme akışı', 'Masada sürekli görünür erişim'] },
    { type: 'cashier', shortLabel: 'POS', category: 'Ana kasa', name: 'Dual-Screen Cashier POS Desktop', body: 'Personel için ana POS ekranı ve müşteri tarafında ikinci ekranıyla sipariş ve ödeme sürecini tek istasyonda toplar.', bullets: ['Çift ekranlı kurulum', 'Sipariş ve ödeme tek noktada', 'Günlük restoran servisine uygun'] },
    { type: 'mobile', shortLabel: 'MOBİL', category: 'Servis alanı', name: 'Mobile POS Terminal', body: 'Sipariş almak, masaları kontrol etmek ve ödemeyi servis alanında tamamlamak için taşınabilir tablet tipi POS.', bullets: ['Taşınabilir servis akışı', 'Sipariş ve masa erişimi', 'Ödeme için hazır kullanım'] },
    { type: 'kds', shortLabel: 'KDS', category: 'Mutfak', name: 'KDS', body: 'Dağınık kağıt fişlerin yerine gelen siparişleri ve hazırlık durumunu net bir ekranda gösteren mutfak çözümü.', bullets: ['Canlı mutfak sipariş kuyruğu', 'Hazırlık durumu görünürlüğü', 'Servise net teslimat'] },
    { type: 'kiosk', shortLabel: 'KIOSK', category: 'Self servis', name: 'Kiosk', body: 'Daha hızlı bir self servis sipariş yolu sunmak isteyen restoranlar için müşteriye dönük sipariş ekranı.', bullets: ['Müşterinin kendi siparişini vermesi', 'Kuyruk baskısını azaltma', 'Bağlantılı menü ve sipariş akışı'] },
    { type: 'printer', shortLabel: 'PRINT', category: 'Fişler', name: 'Printer', body: 'Kağıdın hâlâ iş akışının bir parçası olduğu noktalarda müşteri fişleri ve operasyon çıktıları için güvenilir yazdırma.', bullets: ['Hızlı fiş yazdırma', 'Kompakt kasa kullanımı', 'POS kurulumu ile birlikte çalışma'] },
    { type: 'drawer', shortLabel: 'CASH', category: 'Nakit', name: 'Cash Drawer', body: 'Kart ve dijital ödemelerin yanında nakit kabul eden restoranlar için güvenli kasa çekmecesi.', bullets: ['Güvenli nakit saklama', 'Kasa kullanımına uygun yapı', 'Ana ödeme akışına uyum'] }
  ],
  ecosystem: {
    eyebrow: 'Tek bağlantılı kurulum',
    title: 'Tek bir restoran sistemi gibi çalışan donanım.',
    body: 'Müşteri masası, kasa, ödeme, mutfak ve self servis yolculuğunu aynı PayMyDine operasyon ortamına bağlı tutun.',
    steps: ['Masa ve müşteri', 'POS ve ödeme', 'Mutfak ve yazıcı', 'Kiosk ve büyüme']
  },
  options: {
    eyebrow: 'Esnek ticari seçenekler',
    title: 'Restoranınıza uygun kurulumu satın alın, finansal kiralayın veya kiralayın.',
    body: 'Bütçenize, yaygınlaştırma planınıza ve kullanım sürenize uygun modeli seçin.',
    items: [
      { title: 'Satın al', body: 'Donanımın sahibi olun ve restoranınız için uzun vadeli bir kurulum oluşturun.' },
      { title: 'Finansal kiralama', body: 'Donanım maliyetini daha uzun bir döneme yayarak öngörülebilir aylık bir yapı kullanın.' },
      { title: 'Kiralama', body: 'Kısa dönem, sezonluk veya değişen donanım ihtiyaçları için daha esnek bir model kullanın.' }
    ],
    note: 'Donanım bulunabilirliği, yapılandırma ve ticari koşullar pazara, restoran kurulumuna ve seçilen ödeme sağlayıcısına göre değişebilir.'
  },
  finalCta: {
    eyebrow: 'Kurulumunuzu oluşturun',
    title: 'Restoranınızın nasıl servis verdiğini anlatın. Donanımı buna göre planlayalım.',
    body: 'Masa sayınızı, servis modelinizi, kasa yapınızı, mutfak akışınızı ve ödeme ihtiyaçlarınızı paylaşın. Buradan pratik bir donanım paketi çıkarabiliriz.',
    button: 'Satış ekibiyle görüş'
  }
};

export default function HardwarePage() {
  return <HardwareShowcase copy={copy} />;
}

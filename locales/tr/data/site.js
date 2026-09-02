export const productAreas = [
  {
    number: 1,
    icon: 'chart',
    title: 'PayMyDine Yapay Zekâ',
    href: '/tr/ai',
    body: '6 Yapay Zekâ destekli işlem kullanın: soru sorun, günlük özet alın, olağandışı hareketleri işaretleyin, dönemleri karşılaştırın, tahminleri destekleyin ve bir sonraki incelenecek metriği belirleyin.',
    navNote: 'Sorular, günlük özetler, uyarılar, karşılaştırmalar, tahminler ve inceleme için 6 işlem.',
    image: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp',
    compactImage: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp'
  },
  {
    number: 2,
    icon: 'operations',
    title: 'Restoran Operasyonları',
    href: '/tr/solutions/operations',
    body: '6 canlı görünümü takip edin: gösterge paneli, açık siparişler, masa durumu, salon planları, salonda servis veya paket servis ve güncel restoran hareketleri.',
    navNote: 'Siparişler, masalar, salon planları, kanallar ve aktif servis için 6 canlı görünüm.',
    image: '/site-assets/custom/page-heroes/solutions-operations-hero-chatgpt-20260814.webp',
    compactImage: '/site-assets/custom/page-heroes/solutions-operations-hero-chatgpt-20260814.webp'
  },
  {
    number: 3,
    icon: 'calendar',
    title: 'Rezervasyon ve Masa Yönetimi',
    href: '/tr/solutions/reservations',
    body: '7 rezervasyon ve oturma aracını kullanın: takvim, zaman çizelgesi, müsaitlik, rezervasyonsuz müşteriler, masa atama, müşteri akışı ve çok katlı salon yönetimi.',
    navNote: 'Gelişler, kapasite, oturma, rezervasyonsuz müşteriler ve çok katlı salonlar için 7 planlama aracı.',
    image: '/site-assets/table/1.webp',
    compactImage: '/site-assets/table/2.webp'
  },
  {
    number: 4,
    icon: 'kitchen',
    title: 'Sipariş, Mutfak ve Menü',
    href: '/tr/solutions/kitchen',
    body: 'Siparişleri 7 kontrolle yönetin: garson sipariş girişi, KDS, hazırlık durumu, hazır durumu, menü yönetimi, ürün seçenekleri ve tükenen ürünler.',
    navNote: 'Sipariş girişinden servise hazır devrine kadar 7 sipariş, mutfak ve menü kontrolü.',
    image: '/site-assets/extra/chef-warm-kitchen.webp',
    compactImage: '/site-assets/kitchen/2.webp'
  },
  {
    number: 5,
    icon: 'card',
    title: 'Ödemeler ve Müşteri Siparişi',
    href: '/tr/solutions/payments',
    body: 'Masa QR kodu, mobil menü, masada ödeme ve 3 hesap bölme yöntemi dahil 8 müşteri sipariş ve ödeme adımını yönetin: eşit bölme, ürünlere göre bölme veya paylara göre bölme.',
    navNote: '3 hesap bölme yöntemi dahil 8 sipariş ve ödeme adımı.',
    image: '/site-assets/custom/page-heroes/solutions-payments-hero-chatgpt-20260814.webp',
    compactImage: '/site-assets/custom/page-heroes/solutions-payments-hero-chatgpt-20260814.webp'
  },
  {
    number: 6,
    icon: 'chart',
    title: 'Analiz, Tahmin ve Kârlılık',
    href: '/tr/solutions/insights',
    body: '9 karar metriğini izleyin: gelir, müşteri sayısı, ortalama hesap tutarı, masa devir hızı, zamana göre satış, en çok satan ürünler, ödeme yöntemi dağılımı, tahmin ve kârlılık.',
    navNote: 'Gelir, talep, masa performansı, tahminler ve kârlılık için 9 metrik.',
    image: '/site-assets/custom/page-heroes/solutions-insights-hero-chatgpt-20260814.webp',
    compactImage: '/site-assets/custom/page-heroes/solutions-insights-hero-chatgpt-20260814.webp'
  },
  {
    number: 7,
    icon: 'team',
    title: 'Ekip Yönetimi',
    href: '/tr/solutions/team',
    body: '5 ekip kontrolünü yönetin: rol bazlı çalışma alanları, yetkiler, vardiyalar, performans bağlamı ve personel hareketleri.',
    navNote: 'Çalışma alanları, yetkiler, vardiyalar ve personel hareketleri için 5 ekip kontrolü.',
    image: '/site-assets/custom/page-heroes/solutions-team-hero-chatgpt-20260809.webp',
    compactImage: '/site-assets/custom/page-heroes/solutions-team-hero-chatgpt-20260809.webp'
  },
  {
    number: 8,
    icon: 'phone',
    title: "Müşteri CRM'i, Pazarlama ve Büyüme",
    href: '/tr/solutions/guest-ordering',
    body: '6 büyüme aracını kullanın: profiller, sadakat, teklifler, kampanyalar, geri bildirim ve müşteri bağlılığı. Uygun durumlarda ziyaret bağlamını ilgili takip iletişimlerinde kullanın.',
    navNote: 'Müşteri bağlamı, etkileşim ve bağlılık için 6 CRM ve büyüme aracı.',
    image: '/site-assets/custom/page-heroes/solutions-guest-ordering-hero-chatgpt-20260814.webp',
    compactImage: '/site-assets/custom/page-heroes/solutions-guest-ordering-hero-chatgpt-20260814.webp'
  },
  {
    number: 9,
    icon: 'link',
    title: 'Entegrasyonlar, Çoklu Şube ve Stok',
    href: '/tr/integrations',
    body: '4 sistem türünü bağlayın — POS, muhasebe, teslimat ve ödemeler — ardından merkezi raporlama, ortak menüler, stok, gıda maliyeti ve satın alma bağlamını ekleyin.',
    navNote: '4 entegrasyon türüne ek olarak merkezi raporlama, menüler, stok, gıda maliyeti ve satın alma.',
    image: '/site-assets/custom/page-heroes/integrations-hero-chatgpt-20260814.webp',
    compactImage: '/site-assets/custom/page-heroes/integrations-hero-chatgpt-20260814.webp'
  }
];

const productLink = (index) => {
  const item = productAreas[index];
  return [item.title, item.href, item.navNote, item.number];
};

export const primaryNav = [
  {
    label: 'Ürün',
    href: '/tr/platform',
    columns: [
      {
        title: 'Platform ve operasyon',
        links: [productLink(0), productLink(1), productLink(2)]
      },
      {
        title: 'Servis ve performans',
        links: [productLink(3), productLink(4), productLink(5)]
      },
      {
        title: 'Ekipler, müşteriler ve büyüme',
        links: [productLink(6), productLink(7), productLink(8)]
      }
    ]
  },
  { label: 'Entegrasyonlar', href: '/tr/integrations' },
  { label: 'Fiyatlandırma', href: '/tr/pricing' },
  { label: 'Şirket', href: '/tr/company' }
];

export const offerCards = productAreas;

export const homeStatusCards = [
  {
    image: '/site-assets/extra/chef-order-23.webp',
    eyebrow: 'Müşteri ödemesi',
    title: 'Masa ve ödeme durumunu ödeme tamamlanana kadar bağlantılı tutun.',
    body: 'Müşteri tutarı, kullanılabilir ödeme yöntemini ve onayı görürken ekip hesap durumunu ilgili masayla bağlantılı tutar.'
  },
  {
    image: '/site-assets/comments/14.webp',
    eyebrow: 'Hesap bölme',
    title: 'Tek bir hesap üç farklı şekilde bölünebilir.',
    body: 'Müşteriler ayrı bir ödeme süreci başlatmadan hesabı eşit bölebilir, sipariş edilen ürünleri kişilere atayabilir veya toplamı paylara göre dağıtabilir.'
  },
  {
    image: '/site-assets/comments/5.webp',
    eyebrow: 'Ekip durumu',
    title: 'Sipariş durumu, bir sonraki adımdan sorumlu role aktarılır.',
    body: 'Servis personeli servis durumunu, mutfak hazırlık durumunu, yönetim ise aynı sipariş bağlamındaki istisnaları görür.'
  },
  {
    image: '/site-assets/comments/10.webp',
    eyebrow: 'Masa QR siparişi ve ödeme',
    title: 'Masa QR kodunu tarayın; masa bağlamını kaybetmeden inceleyin, sipariş verin ve ödeyin.',
    body: 'Müşteri masa QR kodunu tarayarak mobil menüyü açar, siparişini verir ve ödemeyi tamamlar. PayMyDine ise masa, sipariş, hesap ve ödeme durumunu ekip için bağlantılı tutar.'
  }
];

export const workflowSteps = [
  ['Müşteri veya ekip işlemi', 'Bir müşteri QR kodunu tarar, karşılama ekibi rezervasyonu masaya yerleştirir, servis personeli sipariş açar veya yönetici masa durumunu değiştirir.'],
  ['Restoran bağlamı', 'Masa, müşteri, sipariş, zamanlama, notlar ve yetkiler işlemle birlikte ilerler.'],
  ['Role göre işlem', 'Sorumlu rol, bir sonraki adım için gereken bağlam ve kontrollerle odaklanmış bir iş listesi alır.'],
  ['Servis ve ödeme', 'Hazırlık, hazır durumu, sorumluluk devri ve ödeme aynı restoran bağlamından devam eder.'],
  ['İçgörü ve destek', 'Gelir, müşteri, masa, satış ve kârlılık verileri raporlama ve Yapay Zekâ destekli sorular için kullanılabilir hale gelir.']
];

export const imageGroups = {
  comments: Array.from({ length: 17 }, (_, i) => `/site-assets/comments/${i + 1}.webp`),
  kitchen: Array.from({ length: 5 }, (_, i) => `/site-assets/kitchen/${i + 1}.webp`),
  owner: Array.from({ length: 3 }, (_, i) => `/site-assets/owner/${i + 1}.webp`),
  payment: ['/site-assets/payment/1.webp', '/site-assets/payment/payment-experience.webp', '/site-assets/payment/3.webp', '/site-assets/payment/4.webp'],
  pos: ['/site-assets/pos/restaurant-platform.webp', '/site-assets/pos/pos-workflow.webp'],
  social: Array.from({ length: 15 }, (_, i) => `/site-assets/social/${i + 1}.webp`),
  staff: Array.from({ length: 8 }, (_, i) => `/site-assets/staff/${i + 1}.webp`),
  table: Array.from({ length: 11 }, (_, i) => `/site-assets/table/${i + 1}.webp`)
};

export const solutionPages = {
  operations: {
    eyebrow: 'Restoran Operasyonları',
    title: 'Masaları, siparişleri ve istisnaları servis sorununa dönüşmeden görün.',
    intro: '6 canlı görünümü — gösterge paneli, açık siparişler, masa durumu, salon planları, salonda servis veya paket servis ve güncel hareketler — kullanarak neyin aktif, neyin beklemede olduğunu ve vardiyada hangi alanın dikkat gerektirdiğini anlayın.',
    storyEyebrow: 'Restoran operasyonları',
    capabilityEyebrow: '6 canlı operasyon görünümü',
    capabilityTitle: 'Restoranın durumunu ayrı ekranlardan yeniden oluşturmadan kontrol edin.',
    capabilityBody: 'Yöneticiler açık siparişleri, dolu masaları, sipariş kanallarını, salon konumunu ve canlı istisnaları aynı operasyon bağlamından inceleyebilir.',
    ctaTitle: 'Restoran Operasyonları kapsamındaki 6 görünümü kendi servis akışınızda inceleyin.',
    ctaBody: 'Salon planınızı, sipariş kanallarınızı ve yönetim sorularınızı paylaşın. Gösterge paneli, masalar, siparişler ve canlı hareketlerin birlikte nasıl çalıştığını gösterelim.',
    heroImage: '/site-assets/custom/page-heroes/solutions-operations-hero-chatgpt-20260814.webp',
    accent: 'green',
    highlights: [
      ['Gösterge paneli', 'Genel bir özet yerine aktif masalar, açık siparişler, satışlar ve istisnalarla başlayın.'],
      ['Siparişler', 'Açık, geciken veya tamamlanan siparişleri filtreleyin; her siparişi ilgili masa ve kanalla bağlantılı tutun.'],
      ['Masalar', 'Dolu, müsait ve ödeme aşamasındaki masaları servis durumuyla birlikte görün.'],
      ['Salon planları', 'Masaları, rezervasyonları ve servis yoğunluğunu fiziksel salon düzeni üzerinde görün.']
    ],
    story: [
      {
        title: 'Tek bir vardiya görünümü, tekrarlanan durum kontrollerinin yerini alır.',
        body: 'Yönetici, her ekipten ayrı güncelleme istemeden salon durumundan sipariş detayına geçebilir.',
        image: '/site-assets/custom/solution-story/operations-shift-view-20260809.webp'
      },
      {
        title: 'Salonda servis ve paket servisi ayrı izleyin, ancak operasyonu bağlantılı tutun.',
        body: 'Her kanal kendi masa veya sipariş bağlamını korurken aynı canlı iş yüküne ve raporlama görünümüne katkı sağlar.',
        image: '/site-assets/extra/restaurant-team-planning.webp'
      }
    ],
    bullets: ['Gösterge paneli', 'Siparişler', 'Masalar', 'Salon planları', 'Salonda servis / paket servis', 'Canlı hareketler']
  },
  reservations: {
    eyebrow: 'Rezervasyon ve Masa Yönetimi',
    title: 'Rezervasyonları ve rezervasyonsuz müşterileri gerçek salon kapasitesiyle eşleştirin.',
    intro: '7 rezervasyon aracını — takvim, zaman çizelgesi, müsaitlik, rezervasyonsuz müşteriler, masa atama, müşteri akışı ve çok katlı salonlar — kullanarak talebi canlı salon kapasitesine göre planlayın.',
    storyEyebrow: 'Rezervasyon ve masa yönetimi',
    capabilityEyebrow: '7 rezervasyon ve oturma aracı',
    capabilityTitle: 'Takvim ve zaman çizelgesiyle önceden planlayın; müsaitlik ve masa atamayla canlı servisi yönetin.',
    capabilityBody: 'Karşılama ekibi; kişi sayısı, geliş saati, müsait masalar, beklenen masa dönüşü, rezervasyonsuz müşteriler ve salon konumunu kullanarak bir sonraki oturma kararını verebilir.',
    ctaTitle: 'Rezervasyon ve Masa Yönetimini iş başında görmek ister misiniz?',
    ctaBody: 'Demo sırasında takvimleri, gelişleri, masa atamayı, rezervasyonsuz müşterileri ve çok katlı salon yapılarını birlikte inceleyelim.',
    heroImage: '/site-assets/extra/host-stand.webp',
    accent: 'blue',
    highlights: [
      ['Takvim', 'Rezervasyonları ve yaklaşan talebi net bir planlama görünümünde görün.'],
      ['Zaman çizelgesi', 'Servis döneminin nasıl ilerleyeceğini ve sırada ne olduğunu anlayın.'],
      ['Müsaitlik', 'Müsait masaları ve oturma kapasitesini rezervasyon iş akışının yanında tutun.'],
      ['Rezervasyonsuz müşteriler', 'Planlanmamış gelişleri salonun genel durumunu kaybetmeden yönetin.']
    ],
    story: [
      {
        title: 'Servis başlamadan önce geliş yoğunluğunu görün.',
        body: 'Takvim ve zaman çizelgesi; geliş yoğunluğunu, kişi sayılarını ve zamanlamayı gösterir. Ekip kapıda yoğunluk oluşmadan kapasiteyi hazırlayabilir.',
        image: '/site-assets/extra/shared-table-feast.webp'
      },
      {
        title: 'Rezervasyon listesini canlı bir oturma planına dönüştürün.',
        body: 'Müsaitlik, rezervasyonsuz müşteriler, beklenen masa dönüşleri ve çok katlı masa atama rezervasyon bağlamıyla birlikte kalır.',
        image: '/site-assets/custom/reservations-floor-story.webp'
      }
    ],
    bullets: ['Takvim', 'Zaman çizelgesi', 'Müsaitlik', 'Rezervasyonsuz müşteriler', 'Masa atama', 'Müşteri akışı', 'Çok katlı salonlar']
  },
  'guest-ordering': {
    eyebrow: "Müşteri CRM'i, Pazarlama ve Büyüme",
    title: 'Ziyaret, sipariş ve geri bildirimlerden kullanılabilir bir müşteri kaydı oluşturun.',
    intro: '6 büyüme aracını — profiller, sadakat, teklifler, kampanyalar, geri bildirim ve müşteri bağlılığı — kullanarak etkileşimi anlayın ve izinlerle veri kurallarının uygun olduğu durumlarda ilgili takip iletişimini planlayın.',
    storyEyebrow: 'Müşteri ilişkileri',
    capabilityEyebrow: '6 CRM ve büyüme aracı',
    capabilityTitle: 'Anonim bir ziyaretten anlamlı ve ilgili bir takip iletişimine geçin.',
    capabilityBody: 'Profiller; ziyaret geçmişi, sipariş tercihleri, sadakat hareketleri, kampanya yanıtları ve geri bildirimi bir araya getirerek sonraki iletişime net bir neden kazandırabilir.',
    ctaTitle: "Müşteri CRM'i, Pazarlama ve Büyümeyi incelemek ister misiniz?",
    ctaBody: 'Profilleri, sadakati, teklifleri, kampanyaları, geri bildirimi ve müşteri bağlılığını destekleyebilecek sinyalleri birlikte inceleyebiliriz.',
    heroImage: '/site-assets/custom/page-heroes/solutions-guest-ordering-hero-chatgpt-20260814.webp',
    accent: 'green',
    highlights: [
      ['Profiller', 'Müşteri ilişkisini daha anlamlı hale getirmek için yararlı bilgileri tek yerde tutun.'],
      ['Sadakat', 'Müşteri etkileşimini daha net görerek tekrar ziyaretleri destekleyin.'],
      ['Teklifler', 'Müşteri ilişkisini güçlendirmek için ilgili teklifler kullanın.'],
      ['Kampanyalar', 'Müşteri bağlamını restoran hedef kitlesine göre oluşturulan kampanyalarla birleştirin.']
    ],
    story: [
      {
        title: 'Müşteri profilini gerçek restoran etkileşimlerinden oluşturun.',
        body: 'İlişkiyi tek bir masa veya işlemden daha geniş görmek için ziyaretleri, siparişleri, tercihleri ve sadakat hareketlerini birleştirin.',
        image: '/site-assets/custom/solution-story/guest-profile-interactions-20260809.webp'
      },
      {
        title: 'Bir sonraki müşteri bağlılığı adımını geri bildirimle belirleyin.',
        body: 'Bir sonraki adımın servis telafisi, sadakat çalışması veya ilgili bir kampanya olup olmayacağına karar vermek için geri bildirim, teklif yanıtı ve ziyaret sıklığını birlikte değerlendirin.',
        image: '/site-assets/extra/cafe-conversations.webp'
      }
    ],
    bullets: ['Profiller', 'Sadakat', 'Teklifler', 'Kampanyalar', 'Geri bildirim', 'Müşteri bağlılığı']
  },
  payments: {
    eyebrow: 'Ödemeler ve Müşteri Siparişi',
    title: 'Bir masanın yolculuğunu QR taramasından onaylanmış ödemeye kadar yeniden başlatmadan sürdürün.',
    intro: '8 müşteri ve ödeme adımını yönetin: kart veya dijital ödeme, masada ödeme, eşit bölme, ürüne göre bölme, paylara göre bölme, masa QR kodu, mobil menü ve müşteri ödeme süreci.',
    storyEyebrow: 'Müşteri siparişi ve ödeme',
    capabilityEyebrow: '8 sipariş ve ödeme adımı',
    capabilityTitle: 'QR taramasından onaya kadar masa, sipariş, hesap ve ödeme durumunu bağlantılı tutun.',
    capabilityBody: 'Müşteriler tarayabilir, menüyü inceleyebilir, sipariş verebilir, servis talep edebilir ve ödeme yapabilir; restoran ise masa ve sipariş bağlamını görünür tutar.',
    ctaTitle: 'Ödemeler ve Müşteri Siparişi alanını incelemek ister misiniz?',
    ctaBody: 'Demo sırasında masa QR kodu, mobil menü, müşteri ödeme süreci, masada ödeme ve hesap bölme akışlarına odaklanalım.',
    heroImage: '/site-assets/custom/page-heroes/solutions-payments-hero-chatgpt-20260814.webp',
    accent: 'purple',
    highlights: [
      ['Kart / dijital ödemeler', 'Yapılandırılmış sağlayıcının sunduğu kart veya dijital yöntemleri gösterin ve seçilen yöntemi hesap durumuyla bağlantılı tutun.'],
      ['Masada ödeme', 'Doğru hesabı masa bağlamından açın ve ödeme durumunu servis ekibi için görünür tutun.'],
      ['Eşit bölme', 'Toplam hesabı seçilen kişi sayısına eşit şekilde bölün.'],
      ['Ürüne göre bölme', 'Sipariş edilen ürünleri kişilere atayın ve kalan bakiyeyi görünür tutun.']
    ],
    story: [
      {
        title: 'Dört müşteri işlemi tek bir mobil akışta kalır.',
        body: 'Tara, incele, sipariş ver ve öde adımları masayla bağlantılı kalır ve her aşamada işi sorumlu restoran rolüne aktarır.',
        image: '/site-assets/extra/payment-thank-you.webp'
      },
      {
        title: 'Tek bir hesap üç farklı şekilde bölünebilir.',
        body: 'Müşteriler hesabı tek kişi olarak ödeyebilir veya eşit, sipariş edilen ürünlere göre ya da paylara göre bölebilir; ödenmemiş bakiye görünür kalır.',
        image: '/site-assets/custom/cafe-payment-confirmation-replacement.webp'
      }
    ],
    bullets: ['Kart / dijital ödemeler', 'Masada ödeme', 'Eşit bölme', 'Ürüne göre bölme', 'Paylara göre bölme', 'Masa QR kodu', 'Mobil menü', 'Müşteri ödeme süreci']
  },
  kitchen: {
    eyebrow: 'Sipariş, Mutfak ve Menü',
    title: 'Her siparişi menü bağlamını koruyarak girişten servise hazır duruma taşıyın.',
    intro: 'Sipariş alımından servis devrine kadar 7 kontrolü kullanın: garson sipariş girişi, KDS, hazırlık durumu, hazır durumu, menü yönetimi, ürün seçenekleri ve tükenen ürünler.',
    storyEyebrow: 'Sipariş, mutfak ve menü',
    capabilityEyebrow: '7 sipariş, mutfak ve menü kontrolü',
    capabilityTitle: 'Servis ekibi ve mutfak aynı sipariş durumunu görsün; ancak aynı ekranı kullanmak zorunda kalmasın.',
    capabilityBody: 'Sipariş, masa, ürün, seçenek ve zamanlama bağlamını mutfağa taşır. Menü ve tükenen ürün güncellemeleri ise mevcut olmayan ürünlerin sipariş akışında ilerlemesini önler.',
    ctaTitle: 'Sipariş, Mutfak ve Menü alanını iş başında görmek ister misiniz?',
    ctaBody: 'Garson sipariş girişi, KDS hazırlığı, menü yönetimi, ürün seçenekleri ve servise hazır durum devrini kendi operasyonunuz üzerinden gösterebiliriz.',
    heroImage: '/site-assets/extra/chef-warm-kitchen.webp',
    accent: 'orange',
    highlights: [
      ['Garson sipariş girişi', 'Siparişi servis personeli veya müşteri akışından oluşturun; doğru masa, ürünler, seçenekler ve notları ekleyin.'],
      ['KDS', 'Gelen siparişleri ürün detayı, zamanlama ve öncelik bağlamıyla odaklanmış bir KDS iş listesine yerleştirin.'],
      ['Hazırlık durumu', 'Mutfak ve yönetimin neyin beklediğini ve neyin hazırlanmakta olduğunu görebilmesi için alındı ve hazırlanıyor durumlarını gösterin.'],
      ['Hazır durumu', 'Tamamlanan siparişin bir sonraki sorumlusunun net olması için hazır durumunu servis personeline iletin.']
    ],
    story: [
      {
        title: 'Mutfak, kopyalanmış bir sipariş özetini değil tam hazırlık bağlamını alır.',
        body: 'Ürün detayları, seçenekler, siparişin bekleme süresi ve güncel durumu servis boyunca hazırlık listesinde görünür kalır.',
        image: '/site-assets/custom/solution-story/kitchen-preparation-context-20260809.webp'
      },
      {
        title: 'Menü müsaitliği, önlenebilir bir sonraki sipariş sorununu engeller.',
        body: 'Menü, ürün seçenekleri ve tükenen ürün güncellemeleri sipariş bağlamını yeniler; böylece mevcut olmayan veya yanlış yapılandırılmış ürünler hazırlığa geçmez.',
        image: '/site-assets/extra/team-planning.webp'
      }
    ],
    bullets: ['Garson sipariş girişi', 'KDS', 'Hazırlık durumu', 'Hazır durumu', 'Menü yönetimi', 'Menü seçenekleri', 'Tükenen ürün bilgisi']
  },
  team: {
    eyebrow: 'Ekip Yönetimi',
    title: 'Her role ihtiyaç duyduğu kontrolleri, yönetime ise ekibin genel görünümünü verin.',
    intro: 'Her çalışanı aynı yönetim ekranına koymadan 5 ekip kontrolünü yönetin: rol bazlı çalışma alanları, yetkiler, vardiyalar, performans bağlamı ve personel hareketleri.',
    storyEyebrow: 'Ekip yönetimi',
    capabilityEyebrow: '5 ekip kontrolü',
    capabilityTitle: 'Roller arasındaki iş devrini korurken erişimi ve ekran kalabalığını sınırlandırın.',
    capabilityBody: 'İşletme sahipleri, yöneticiler, servis personeli, mutfak, rezervasyon ve finans aynı masa, sipariş ve işletme bağlamını kullanırken farklı kontroller görebilir.',
    ctaTitle: 'Ekip Yönetimini incelemek ister misiniz?',
    ctaBody: 'Demo sırasında rol bazlı çalışma alanlarını, yetkileri, vardiyaları, performansı ve personel hareketlerini ekip yapınıza göre haritalayalım.',
    heroImage: '/site-assets/custom/page-heroes/solutions-team-hero-chatgpt-20260809.webp',
    accent: 'green',
    highlights: [
      ['Rol bazlı çalışma alanları', 'İşten sorumlu role odaklanmış bir iş listesi ve gerekli işlemleri atayın.'],
      ['Roller ve yetkiler', 'Görüntüleme, oluşturma, değiştirme, onaylama ve dışa aktarma yetkilerini role göre belirleyin.'],
      ['Vardiya yönetimi', 'Vardiya atamalarını ve aktif ekip bağlamını koordine edilen işe yakın tutun.'],
      ['Performans görünümü', 'Tamamlanan işlemleri, zamanlamayı ve servis sonuçlarını sorumlu rol ve vardiya bağlamıyla birlikte inceleyin.']
    ],
    story: [
      {
        title: 'Altı çalışma alanı erişimi gerçek restoran sorumluluklarına göre düzenler.',
        body: 'İşletme sahibi, yöneticiler, servis personeli, mutfak, rezervasyon ve finans odaklanmış görünümler kullanırken iş devri bağlamı bağlantılı kalır.',
        image: '/site-assets/extra/taqueria-handoff.webp'
      },
      {
        title: 'Yönetim, yönetim kontrollerini her role açmadan ekip hareketlerini görür.',
        body: 'Yöneticiler görevleri, aktif işleri ve tamamlanma durumunu inceleyebilir; her rol ise yalnızca kendi sorumluluğu için gereken kontrolleri görmeye devam eder.',
        image: '/site-assets/extra/latte-handoff.webp'
      }
    ],
    bullets: ['Rol bazlı çalışma alanları', 'Roller ve yetkiler', 'Vardiya yönetimi', 'Performans görünümü', 'Personel hareketleri']
  },
  insights: {
    eyebrow: 'Analiz, Tahmin ve Kârlılık',
    title: 'Geliri, talebi ve marjı açıklayan 9 metriği takip edin.',
    intro: 'Gelir, müşteri sayısı, ortalama hesap tutarı, masa devir hızı, zamana göre satış, en çok satan ürünler, ödeme yöntemi dağılımı, tahmin ve ürün ya da şube bazında kârlılığı karşılaştırın.',
    storyEyebrow: 'Analiz ve kârlılık',
    capabilityEyebrow: '9 yönetim metriği',
    capabilityTitle: 'Sayının kendisini, dönemi ve arkasındaki operasyon bağlamını birlikte karşılaştırın.',
    capabilityBody: 'Bir metrik; dönemini, şubeyi, kanalları ve kaynak bağlamını açıkça göstermelidir. Böylece yönetim değişimin arkasındaki restoran hareketine ulaşabilir.',
    ctaTitle: 'Analiz, Tahmin ve Kârlılık alanını incelemek ister misiniz?',
    ctaBody: 'Gelir, müşteri sayısı, masa performansı, tahmin, en çok satan ürünler ve ürün ya da şube bazında kârlılığın arkasındaki sinyalleri gösterebiliriz.',
    heroImage: '/site-assets/custom/page-heroes/solutions-insights-hero-chatgpt-20260814.webp',
    accent: 'blue',
    highlights: [
      ['Gelir', 'Yapılandırılmış verinin desteklediği durumlarda geliri dönem, servis aralığı, kanal veya şubeye göre karşılaştırın.'],
      ['Müşteriler', 'Talebi açıklamak ve müşteri başına harcamayı hesaplamak için müşteri sayısını veya kişi sayısını takip edin.'],
      ['Ortalama hesap tutarı', 'Gelir ve müşteri sayısından ortalama hesap tutarını hesaplayın; sonucu dönem veya şubeye göre karşılaştırın.'],
      ['Masa devir hızı', 'Masaların kaç müşteri grubuna hizmet verdiğini ve her servis aşamasında ne kadar süre kaldığını inceleyin.']
    ],
    story: [
      {
        title: 'Dokuz metrik tek bir karar görünümü oluşturur.',
        body: 'Gelir ve talebi sipariş kanalları, müşteri hareketleri, masa performansı, en çok satan ürünler ve ödeme yöntemi dağılımıyla birlikte okuyun.',
        image: '/site-assets/extra/manager-analytics.webp'
      },
      {
        title: 'Tahminleri gerçekleşen talep ve marjla karşılaştırın.',
        body: 'Geçmiş satış ve talep kalıplarını tahmini desteklemek için kullanın; ardından tahmini gerçekleşen sonuçlar ve ürün ya da şube bazında kârlılıkla karşılaştırın.',
        image: '/site-assets/extra/analytics-tablet-phone.webp'
      }
    ],
    bullets: ['Gelir', 'Müşteriler', 'Ortalama hesap tutarı', 'Masa devir hızı', 'Zamana göre satış', 'En çok satan ürünler', 'Ödeme yöntemi dağılımı', 'Tahmin', 'Ürün veya şube bazında kârlılık']
  }
};

// === PMD PRODUCT PAGE DEPTH V2 START ===

const solutionDetailExpansions = {
  operations: {
    factsEyebrow: 'Rakamlarla restoran operasyonları',
    factsTitle: 'Altı temel yetenek ve dört rol bakış açısı etrafında oluşturulmuş canlı bir operasyon görünümü.',
    factsIntro: 'Bu rakamlar yapılandırılmış ürün kapsamını açıklar. Performans iyileşmeleri restoranın başlangıç değerleriyle karşılaştırılarak ölçülmelidir.',
    facts: [
      ['06', 'temel yetenek', 'Gösterge paneli, siparişler, masalar, salon planları, salonda servis veya paket servis ve canlı hareketler tek bir operasyon alanında kalır.'],
      ['04', 'rol bakış açısı', 'İşletme sahibi, yönetici, servis personeli ve mutfak ekipleri aynı restoran bağlamını farklı ayrıntı seviyelerinde kullanır.'],
      ['02', 'servis kanalı', 'Salonda servis ve paket servis, restoran gününün ayrı sürümlerini oluşturmadan birlikte takip edilebilir.'],
      ['01', 'ortak operasyon görünümü', 'Bir durum değişikliği, bağlantısız bir ekranda sona ermek yerine aynı restoran görünümünü güncellemelidir.']
    ],
    workflowEyebrow: 'Beş adımda bir vardiya',
    workflowTitle: 'Canlı bir servis dönemi operasyon katmanında nasıl ilerler?',
    workflowIntro: 'İş akışı; mevcut durumu, sorumlu rolü ve sonraki işlemi daha kolay belirlemek için tasarlanmıştır.',
    workflow: [
      ['Vardiya bağlamını yükleyin', 'Servis yoğunlaşmadan önce rezervasyonları, aktif masaları, açık siparişleri, paket servis işlerini ve salon görünümünü açın.'],
      ['İstisnaları belirleyin', 'Bekleyen müşterileri, geciken siparişleri, ödenmemiş masaları veya yönetimin dikkat etmesi gereken salon alanlarını bulun.'],
      ['İşi sorumlu role aktarın', 'Servis personeli servis işlemlerini, mutfak hazırlık işlerini görür; yöneticiler ise daha geniş istisna görünümünü korur.'],
      ['Servis döngüsünü kapatın', 'Sipariş, masa, hazırlık ve ödeme durumunu güncelleyin; böylece sonraki ekip üyesi eski durum üzerinden çalışmaz.'],
      ['Tamamlanan vardiyayı inceleyin', 'Servis döneminden sonra gelir, müşteri sayısı, masa hareketleri ve operasyon istisnalarını karşılaştırın.']
    ],
    rolesTitle: 'Her rol, aynı restoran gününü kendi sorumluluğuna uygun ayrıntı seviyesinde görür.',
    rolesIntro: 'Amaç herkesin yönetim panelini kullanması değildir. Amaç, ortak bağlamı korurken her rolü kendi işine odaklamaktır.',
    roleViews: [
      ['İşletme sahibi', 'Geliri, müşteri hacmini, masa devir hızını ve işletme sonucunu etkileyen istisnaları inceler.'],
      ['Yönetici', 'Vardiya boyunca salonu, açık siparişleri, gecikmeleri, paket servis hareketlerini ve koordinasyon gerektiren işlemleri izler.'],
      ['Servis personeli', 'Atanmış masalar, siparişler, müşteri talepleri, servis durumu ve ödeme bağlamıyla çalışır.'],
      ['Mutfak', 'Sipariş detayı, notlar, zamanlama ve servise hazır devir durumuyla hazırlık işlerini alır.']
    ],
    metricsTitle: 'Operasyon akışının gerçekten daha kolay yönetilip yönetilmediğini ölçün.',
    metricsIntro: 'Önce başlangıç değerini kaydedin, ardından kurulumdan sonra aynı tanım ve servis dönemini karşılaştırın.',
    metrics: [
      ['Gelişten masaya oturma süresi', 'Bu olayların kaydedildiği yerlerde, müşterinin geliş veya karşılama anından masaya oturmasına kadar geçen süreyi ölçün.'],
      ['Siparişten hazırlığa geçiş süresi', 'Sipariş onayı ile mutfağın işi alması veya hazırlığa başlaması arasındaki süreyi ölçün.'],
      ['Masa devir hızı', 'Her servis modeli için tutarlı bir tanım kullanarak müşterinin oturmasından masanın yeniden kullanılabilir hale gelmesine kadar geçen süreyi takip edin.'],
      ['Hesap talebinden ödemeye kadar geçen süre', 'Hesap talebinden tamamlanmış ödeme durumuna kadar son ödeme aşamasının ne kadar sürdüğünü ölçün.']
    ],
    implementationTitle: 'Canlıya geçmeden önce salon planını, durumları ve sorumlulukları netleştirin.',
    implementationIntro: 'Operasyon görünümü; salon planı, durum tanımları, rol yetkileri ve arkasındaki bağlı veriler kadar nettir.',
    implementation: [
      'Salon planları, masa kimlikleri ve kapasite yapısı',
      'Salonda servis ve paket servis kanal tanımları',
      'Sipariş, masa, mutfak ve ödeme durum sözlüğü',
      'Rol yetkileri ve istisna sorumluluğu',
      'Operasyon görünümünde kullanılabilen POS veya ödeme verisi',
      'İnceleme için başlangıç dönemleri ve metrik tanımları'
    ],
    faqs: [
      ['PayMyDine POS sisteminin yerini alır mı?', 'Varsayılan olarak hayır. PayMyDine, desteklenen POS bağlantılarının veya seçilen bağımsız modüllerin çevresine operasyon, müşteri, ekip ve içgörü katmanları ekleyebilir.'],
      ['Birden fazla katı destekler mi?', 'Evet. Mevcut ürün kapsamı salon planlarını ve çok katlı restoran yapılarını içerir.'],
      ['Salonda servis ve paket servis ayrı kalabilir mi?', 'Evet. Ayrı kanal bağlamlarını korurken aynı yönetim görünümüne katkı sağlayabilirler.'],
      ['Her durum gerçek zamanlı mı?', 'Verinin güncelliği; kaynak modüle, bağlı sisteme, yetkilere ve kurulumda kullanılan yenileme yöntemine bağlıdır.']
    ]
  },
  reservations: {
    factsEyebrow: 'Rezervasyon ve oturma kapsamı',
    factsTitle: 'Yedi planlama yeteneği rezervasyonları, gelişleri ve canlı salon durumunu birbirine bağlar.',
    factsIntro: 'Müsaitlik ve oturma kuralları gerçek servis dönemlerine, salon yapısına ve işletme kurallarına göre yapılandırılmalıdır.',
    facts: [
      ['07', 'rezervasyon yeteneği', 'Takvim, zaman çizelgesi, müsaitlik, rezervasyonsuz müşteriler, masa atama, müşteri akışı ve çok katlı salonlar mevcut ürün kapsamını oluşturur.'],
      ['03', 'planlama görünümü', 'Takvim, zaman çizelgesi ve canlı salon bağlamı servis öncesinde ve sırasında farklı kararları destekler.'],
      ['02', 'geliş türü', 'Onaylı rezervasyonlar ve rezervasyonsuz müşteriler, genel kapasite görünümü kaybolmadan birlikte yönetilebilir.'],
      ['CANLI', 'canlı salon bağlamı', 'Dolu, müsait ve rezervasyona hazır masa durumları oturma kararının yanında kalır.']
    ],
    workflowEyebrow: 'Müsaitlikten oturmaya',
    workflowTitle: 'Bir rezervasyon, ayrı bir listede kalmak yerine nasıl masa kararına dönüşür?',
    workflowIntro: 'Restoran hazırlıktan canlı gelişlere geçtiğinde planlama görünümü kullanılabilir kalmalıdır.',
    workflow: [
      ['Servis yapısını tanımlayın', 'Restoranın kullandığı servis dönemlerini, salon planlarını, masa kapasitelerini ve müsaitlik kurallarını belirleyin.'],
      ['Rezervasyonları ve rezervasyonsuz gelişleri kaydedin', 'Kişi sayısını, geliş saatini ve kaynak bağlamını beklenen veya planlanmamış her gelişle bağlantılı tutun.'],
      ['Geliş görünümünü hazırlayın', 'Müşteriler kapıya gelmeden önce sıradaki talep yoğunluğunu takvim veya zaman çizelgesinden görün.'],
      ['Salonu görerek masa atayın', 'Yalnızca rezervasyon listesine değil, güncel müsaitlik ve servis durumuna göre masa atayın veya değiştirin.'],
      ['Oturma sonucunu inceleyin', 'Gelişleri, gelmeme durumlarını, bekleme süresini, masa kullanımını ve devir hızını tutarlı olay tanımlarıyla ölçün.']
    ],
    rolesTitle: 'Karşılama ekibi kapıyı planlarken yönetim kapasiteyi ve servisi izlemeye devam eder.',
    rolesIntro: 'Rezervasyon işi özeldir; ancak oturma kararı servis personelini, mutfağı ve işletme raporlamasını da etkiler.',
    roleViews: [
      ['Rezervasyon ve karşılama', 'Yaklaşan gelişleri, kişi sayısını, rezervasyon detaylarını, müsaitliği ve bir sonraki masa kararını görür.'],
      ['Yönetici', 'Kapasite baskısını, rezervasyonsuz müşterileri, geciken gelişleri ve oturma kararlarının aktif salonu nasıl etkilediğini izler.'],
      ['Servis personeli', 'Oturma sonrasında servise başlamak için gereken masa ve müşteri bağlamını alır.'],
      ['İşletme sahibi', 'Talep kalıplarını, gelmeme oranını, kapasite kullanımını ve masa devir hızını dönem veya şubeler arasında inceler.']
    ],
    metricsTitle: 'Rezervasyon olaylarını kullanarak planlamayı iyileştirin; varsayımsal yüzdeler üretmeyin.',
    metricsIntro: 'Web sitesi veya ekip bir iyileşme iddia etmeden önce sistem, her metriği hesaplamak için gereken olayları kaydetmelidir.',
    metrics: [
      ['Rezervasyondan gelişe dönüşüm oranı', 'Aynı iptal ve gelmeme kurallarını kullanarak onaylanan rezervasyonları gerçekleşen gelişlerle karşılaştırın.'],
      ['Gelmeme oranı', 'Gelmesi beklenip gelmeyen müşteri gruplarını, veri mevcutsa dönem, kaynak veya şubeye göre takip edin.'],
      ['Gelişten masaya oturma süresi', 'Karşılaştırılabilir servis dönemlerinde müşterinin gelişinden masa atanmasına kadar geçen süreyi ölçün.'],
      ['Masa kullanımı ve devir hızı', 'Restoranın kendi tanımlarına göre mevcut kapasitenin nasıl kullanıldığını ve masaların ne kadar süre dolu kaldığını inceleyin.']
    ],
    implementationTitle: 'Rezervasyon doğruluğu, doğru yapılandırmayla başlar.',
    implementationIntro: 'Müsaitlik modelini ve masa veya rezervasyon durumunu değiştiren olayları belgeleyin.',
    implementation: [
      'Servis dönemleri ve rezervasyon müsaitlik kuralları',
      'Salon planları, masa kapasiteleri ve masa durum tanımları',
      'Rezervasyonsuz müşteri yönetimi ve karşılama sorumlulukları',
      'Geliş, oturma, iptal ve gelmeme olayları',
      'Yapılandırmada kullanılan rezervasyon kaynakları veya entegrasyonları',
      'Bekleme süresi, kapasite kullanımı ve devir hızı için ölçüm kuralları'
    ],
    faqs: [
      ['Birden fazla kat desteklenebilir mi?', 'Evet. Çok katlı salon bağlamı mevcut rezervasyon ve masa yönetimi kapsamının bir parçasıdır.'],
      ['Rezervasyonsuz müşteriler nasıl yönetilir?', 'Rezervasyonsuz müşteriler canlı geliş ve salon görünümüne eklenebilir; böylece bir sonraki oturma kararı güncel kapasiteye göre verilir.'],
      ['PayMyDine ne zaman fazla rezervasyon alınacağına karar verir mi?', 'Müsaitlik kuralları restoranın yapılandırılmış politikasına aittir. Platform, üzerinde anlaşılmış bir kural olmadan fazla rezervasyon stratejisi varsaymamalıdır.'],
      ['Rezervasyon verisi raporlamayı etkileyebilir mi?', 'Evet. Rezervasyon, geliş ve oturma olayları tutarlı biçimde kaydedildiğinde ve raporlama katmanına aktarıldığında kullanılabilir.']
    ]
  },

  kitchen: {
    factsEyebrow: 'Sipariş ve mutfak kapsamı',
    factsTitle: 'Yedi kontrol sipariş alımını, hazırlık durumunu ve menü müsaitliğini birbirine bağlar.',
    factsIntro: 'Amaç; servis personeli, mutfak ve müşterinin ya da ekibin gördüğü menü durumu arasındaki eksik bağlamı azaltmaktır.',
    facts: [
      ['07', 'iş akışı kontrolü', 'Garson sipariş girişi, KDS, hazırlık durumu, hazır durumu, menü yönetimi, ürün seçenekleri ve tükenen ürün bilgisi dahildir.'],
      ['02', 'kritik iş devri', 'Sipariş servisten hazırlığa geçer; hazır durumu ise yeniden servis ekibine döner.'],
      ['03', 'sipariş bağlamı', 'Masa, ürün veya seçenek detayları ve hazırlık durumu aynı işle bağlantılı kalır.'],
      ['01', 'ortak menü durumu', 'Menü değişiklikleri ve tükenen ürün bilgisi, bunlara bağlı çalışan kişilere ve kanallara ulaşmalıdır.']
    ],
    workflowEyebrow: 'Siparişten servise hazır devrine',
    workflowTitle: 'Mutfak eksiksiz işi nasıl alır ve net bir durumla servise nasıl geri aktarır?',
    workflowIntro: 'Yararlı sonuç başka bir sipariş ekranı değildir; okunabilir bir hazırlık listesi ve güvenilir bir iş devridir.',
    workflow: [
      ['Siparişi alın', 'Servis iş akışında masa veya kanalı, sipariş edilen ürünleri, seçenekleri ve notları kaydedin.'],
      ['Hazırlık işini sunun', 'Mutfağa gereksiz yönetim bilgisi vermeden, işe başlamak için gereken sipariş detayını ve öncelik bağlamını gösterin.'],
      ['Hazırlık durumunu güncelleyin', 'Yönetici ve servis ekiplerinin ne olduğunu anlayabilmesi için işi alındı ve hazırlanıyor durumları üzerinden ilerletin.'],
      ['Servise hazır olarak işaretleyin', 'Toplama veya masa servisinden sorumlu role net bir hazır durumu iletin.'],
      ['Menü müsaitliğini güncel tutun', 'Yeni siparişlerin restoranın gerçekten sunabildiği ürünleri yansıtması için ürünleri, seçenekleri ve tükenen ürün bilgisini güncelleyin.']
    ],
    rolesTitle: 'Aynı sipariş servis, hazırlık ve yönetim için farklı biçimde gösterilir.',
    rolesIntro: 'Her rol, işlemin arkasındaki masa ve sipariş kimliğini kaybetmeden kendi işi için gereken ayrıntıyı görmelidir.',
    roleViews: [
      ['Servis personeli', 'Ürünleri, seçenekleri ve notları kaydeder; ardından doğru masa için hazırlık ve hazır durumunu takip eder.'],
      ['Mutfak ve KDS', 'Ürün detayı, notlar, geçen süre ve hazırlık durumunu içeren odaklanmış bir iş listesiyle çalışır.'],
      ['Yönetici', 'Servis sırasında iş yükünü, geciken siparişleri, hazır devirlerini ve menü müsaitliği istisnalarını görür.'],
      ['Menü yöneticisi', 'Yapılandırılmış sipariş kanalları için menü ürünlerini, seçenekleri ve tükenen ürün durumunu yönetir.']
    ],
    metricsTitle: 'Yalnızca toplam sipariş süresini değil, iş devirlerini de ölçün.',
    metricsIntro: 'Performans karşılaştırılmadan önce restoran her sürenin ne zaman başlayıp bittiği konusunda ortak bir tanım kullanmalıdır.',
    metrics: [
      ['Siparişin mutfakta görünme süresi', 'Sipariş onayı ile hazırlık görünümünün işi alması arasındaki süreyi ölçün.'],
      ['Hazırlık süresi', 'Veri mevcutsa, kabul edilen hazırlık başlangıç olayından hazır durumuna kadar geçen süreyi ürün, kategori veya servis dönemine göre takip edin.'],
      ['Hazırdan servise geçiş bekleme süresi', 'Tamamlanan işin servis devri onaylanana kadar ne kadar beklediğini ölçün.'],
      ['Tükenen ürün güncelleme gecikmesi', 'Müsaitlik kararı ile güncel menü durumunun ilgili kanala ulaşması arasındaki süreyi ölçün.']
    ],
    implementationTitle: 'Mutfak performansını ölçmeden önce menü ve durum modelini tanımlayın.',
    implementationIntro: 'Hazırlık raporlaması ancak ürün yapısı, durum olayları ve kanal sorumluluğu tutarlı olduğunda karşılaştırılabilir.',
    implementation: [
      'Menü ürünleri, kategoriler, seçenekler ve hazırlık notları',
      'KDS görünümleri ve her iş listesinden sorumlu roller',
      'Alındı, hazırlanıyor ve hazır durum tanımları',
      'Servis personeli onayı ve servis devri kuralları',
      'Tükenen ürün sorumluluğu ve kanal güncelleme gereksinimleri',
      'POS veya sipariş entegrasyonu için ana veri kaynağı kararları'
    ],
    faqs: [
      ['KDS, yönetici paneliyle aynı mı?', 'Hayır. Mutfak görünümü hazırlık işlerine odaklanırken yönetim daha geniş servis ve istisna görünümünü korur.'],
      ['Tükenen ürün bilgisi sipariş kanallarını güncelleyebilir mi?', 'Evet. Menü kontrolü ve ilgili sipariş kanalları yapılandırılmış kapsamın parçasıysa güncellenebilir.'],
      ['Ürün seçenekleri ve notlar dahil mi?', 'Ürün kapsamı, hazırlık işiyle birlikte ilerlemesi gereken menü seçeneklerini ve sipariş notlarını içerir.'],
      ['Farklı sipariş kanalları aynı mutfak akışını kullanabilir mi?', 'Evet. Kanal ve masa veya paket servis bağlamlarını korurken tek bir hazırlık görünümüne katkı sağlayabilirler.']
    ]
  },

  payments: {
    factsEyebrow: 'Müşteri siparişi ve ödeme kapsamı',
    factsTitle: 'Sekiz müşteri ve ödeme adımı, hesabı bölmek için üç pratik yöntemi içerir.',
    factsIntro: 'Kullanılabilen ödeme yöntemleri ve mutabakat verileri, kurulumdaki sağlayıcıya ve entegrasyona bağlıdır.',
    facts: [
      ['08', 'yolculuk adımı', 'Kart veya dijital ödeme, masada ödeme, üç hesap bölme yöntemi, masa QR kodu, mobil menü ve müşteri ödeme süreci mevcut kapsamı oluşturur.'],
      ['03', 'hesap bölme yöntemi', 'Müşteriler hesabı eşit bölebilir, sipariş edilen ürünleri kişilere atayabilir veya toplamı paylara göre dağıtabilir.'],
      ['04', 'rol bakış açısı', 'Müşteri, servis personeli, yönetim ve finans aynı ödeme sürecinin farklı görünümüne ihtiyaç duyar.'],
      ['01', 'bağlantılı yolculuk', 'Menü erişimi, sipariş, servis bağlamı ve ödeme birbirinden bağımsız süreçler olarak yeniden başlamamalıdır.']
    ],
    workflowEyebrow: 'Masa QR kodundan tamamlanan ödemeye',
    workflowTitle: 'Bir müşteri işlemi nasıl tamamlanmış ve görünür bir ödeme olayına dönüşür?',
    workflowIntro: 'Müşteri bir sonraki adımı kolayca anlamalı; restoran ise sipariş ve ödeme bağlamını korumalıdır.',
    workflow: [
      ['Masa yolculuğunu açın', 'Müşteri masa QR kodunu tarar veya yapılandırılmış mobil menü ve sipariş deneyimine girer.'],
      ['Siparişi oluşturun veya inceleyin', 'Müşteri veya ekip ödemeye hazırlanırken ürünler, notlar ve masa bağlamı bağlantılı kalır.'],
      ['Ödemeyi başlatın', 'Müşteri hesabı inceler ve restoran yapılandırmasında kullanılabilen ödeme yöntemini seçer.'],
      ['Ödeyen kişiyi veya bölme yöntemini seçin', 'Tek kişi hesabı kapatabilir veya grup hesabı eşit, sipariş edilen ürünlere göre ya da paylara göre bölebilir.'],
      ['Durumu restorana iletin', 'Desteklenen durumlarda tamamlanan, kısmi veya çözümlenmemiş ödeme bağlamı ekibe ve raporlama iş akışına geri döner.']
    ],
    rolesTitle: 'Müşteri netlik ister; restoran ise ödeme bağlamına ve temiz bir iş devrine ihtiyaç duyar.',
    rolesIntro: 'Basit bir müşteri ekranı, ekibin ihtiyaç duyduğu operasyon ve raporlama bilgisini yine de sağlamalıdır.',
    roleViews: [
      ['Müşteri', 'Restoranın iç sistemlerini öğrenmek zorunda kalmadan yapılandırılmış masa yolculuğu üzerinden menüyü inceler, sipariş verir, servis talep eder ve ödeme yapar.'],
      ['Servis personeli', 'Hesap durumunu, ödeme ilerlemesini ve masanın hâlâ servis veya ödeme desteğine ihtiyaç duyup duymadığını görür.'],
      ['Yönetici', 'Tamamlanmamış ödemeleri, istisnaları ve ödeme süresinin masa müsaitliğine etkisini izler.'],
      ['Finans ve raporlama', 'Sağlayıcı veya POS bağlantısından alınabilen ödeme hareketlerini, yöntem dağılımını ve mutabakat bağlamını inceler.']
    ],
    metricsTitle: 'Ödemenin tamamlanmasını ve masanın yeniden kullanılabilir hale gelmesi için gereken süreyi ölçün.',
    metricsIntro: 'Metrikler, kurulumda gerçekten kaydedilen sağlayıcı ve restoran olaylarını kullanmalıdır.',
    metrics: [
      ['Hesap talebinden ödemeye kadar geçen süre', 'Müşteri veya ekibin ödeme sürecini başlatmasıyla onaylı tamamlanma arasındaki süreyi ölçün.'],
      ['Dijital ödeme tamamlama oranı', 'Gerekli olaylar mevcutsa tamamlanan ödeme yolculuklarını başlatılan yolculuklarla karşılaştırın.'],
      ['Hesap bölme yöntemi dağılımı', 'Karşılaştırılabilir dönemlerde müşterilerin eşit, ürün bazlı veya pay bazlı bölmeyi ne sıklıkta kullandığını görün.'],
      ['Ödeme ve istisna dağılımı', 'Bağlı sistemlerden gelen ödeme yöntemlerini, tamamlanmamış denemeleri ve çözümlenmemiş ödeme durumlarını inceleyin.']
    ],
    implementationTitle: 'Ödeme yapılandırması; sağlayıcı, masa ve mutabakat kararlarını gerektirir.',
    implementationIntro: 'Müşteri yolculuğu ve arka ofis durumu, canlıya geçmeden önce aynı tanımları kullanmalıdır.',
    implementation: [
      'Desteklenen ödeme sağlayıcısı ve kullanılabilir durum alanları',
      'Her müşteri yolculuğu için masa ve QR eşlemesi',
      'Eşit, ürün bazlı ve pay bazlı hesap bölme kuralları',
      'Kısmi, tamamlanan ve başarısız ödeme durumlarının yönetimi',
      'POS veya finans mutabakat sorumlulukları',
      'Ödeme istisnalarını görüntüleme ve çözme için rol yetkileri'
    ],
    faqs: [
      ['Hangi hesap bölme yöntemleri destekleniyor?', 'Mevcut ürün kapsamı eşit bölmeyi, sipariş edilen ürüne göre atamayı ve paylara göre bölmeyi içerir.'],
      ['Her restoran müşteri siparişini kullanmak zorunda mı?', 'Hayır. Müşteri siparişi, masada ödeme ve ödeme modülleri restoran yapısına göre seçilebilir.'],
      ['Her ödeme sağlayıcısı aynı verileri sunar mı?', 'Hayır. Ödeme yöntemleri, durum ayrıntıları, mutabakat alanları ve güncelleme davranışı sağlayıcıya ve entegrasyona bağlıdır.'],
      ['Ekip bir masanın ödeme yaptığını görebilir mi?', 'Evet. Ödeme durumu yapılandırılmış operasyon iş akışında mevcutsa ve rol yetkileri izin veriyorsa ekip bunu görebilir.']
    ]
  },

  insights: {
    factsEyebrow: 'Analiz ve kârlılık kapsamı',
    factsTitle: 'Dokuz yönetim metriği talep, servis, satış ve kârlılığı aynı çerçevede buluşturur.',
    factsIntro: 'Bir metriğin güvenilir olması için kaynağı, tanımı, dönemi ve şube eşlemesi açıkça belgelenmelidir.',
    facts: [
      ['09', 'yönetim metriği', 'Gelir, müşteri sayısı, ortalama hesap tutarı, masa devir hızı, zamana göre satış, en çok satan ürünler, ödeme yöntemi dağılımı, tahminleme ve kârlılık kapsama dahildir.'],
      ['02', 'kârlılık seviyesi', 'Gerekli maliyet ve satış verileri mevcutsa kârlılık ürün veya şube bazında incelenebilir.'],
      ['04', 'karar rolü', 'İşletme sahibi, yönetici, finans ve operasyon sorumluları aynı metrikleri farklı kararlar için kullanır.'],
      ['03', 'karşılaştırma boyutu', 'Dönem, şube ve sipariş kanalı karşılaştırmaları ana göstergedeki değişimin nedenini açıklamaya yardımcı olur.']
    ],
    workflowEyebrow: 'İşlem verisinden karara',
    workflowTitle: 'Restoran hareketleri incelenebilir bir yönetim metriğine nasıl dönüşür?',
    workflowIntro: 'Raporlama katmanı, özetten kaynak işlemlere ve kullanılan tanımlara geri dönülebilecek şekilde tasarlanmalıdır.',
    workflow: [
      ['Kaynak işlemleri toplayın', 'Siparişler, masalar, müşteriler, rezervasyonlar ve ödemeler raporlama ortamındaki kullanılabilir veriyi oluşturur.'],
      ['Ortak tanımları uygulayın', 'Sonuçları karşılaştırmadan önce dönem, şube, kanal, gelir hesabı, müşteri sayısı ve maliyet girdilerini tanımlayın.'],
      ['Operasyon panelini inceleyin', 'Yapılandırılmış modüllerle ilgili yönetim metriklerindeki güncel sonuçları ve değişimleri görün.'],
      ['Değişimin nedenini araştırın', 'Değişimin arkasındaki operasyon bağlamını bulmak için dönem, şube, kanal, kategori veya ürün bazında filtreleyin.'],
      ['Aksiyon alın ve yeniden karşılaştırın', 'Bir sonraki operasyon sorusunu veya aksiyonu belirleyin; daha sonraki dönemde aynı metrik tanımıyla sonucu yeniden karşılaştırın.']
    ],
    rolesTitle: 'Aynı sayı; işletme sahibi, yönetim ve finans için farklı soruları yanıtlayabilir.',
    rolesIntro: 'Rol bazlı raporlama veri kaynağını tutarlı tutarken, her kullanıcının ihtiyaç duyduğu ayrıntı ve aksiyon seviyesini değiştirir.',
    roleViews: [
      ['İşletme sahibi', 'Geliri, müşteri talebini, şube performansını ve kârlılığı karşılaştırarak hangi alanın dikkat veya yatırım gerektirdiğini belirler.'],
      ['Yönetici', 'Masa, servis ve satış metriklerini vardiyanın sonucunu şekillendiren operasyon olaylarıyla ilişkilendirir.'],
      ['Finans', 'Gelir hesaplamasını, ödeme yöntemi dağılımını, kategorileri, maliyet girdilerini ve operasyon dışı raporlamada kullanılan alanları inceler.'],
      ['Operasyon sorumlusu', 'Zamanlama, en çok satan ürün ve kanal verilerini servis, menü veya personel kararlarında kullanır.']
    ],
    metricsTitle: 'Dokuz metrik dört pratik yönetim grubunda toplanır.',
    metricsIntro: 'Kullanılabilirlik ve doğruluk; mevcut modüllere, entegrasyonlara ve maliyet verilerine bağlıdır.',
    metrics: [
      ['Talep ve gelir', 'Gelir, müşteri sayısı ve ortalama hesap tutarı seçilen dönemdeki talebin büyüklüğünü ve değerini gösterir.'],
      ['Salon ve servis', 'Masa devir hızı ve zamana göre satış, ticari sonucu restoranın nasıl çalıştığıyla ilişkilendirir.'],
      ['Ürün ve ödeme', 'En çok satan ürünler ve ödeme yöntemi dağılımı, müşterilerin ne satın aldığını ve hesabın nasıl kapatıldığını gösterir.'],
      ['Tahmin ve kâr', 'Eksiksiz girdiler mevcutsa tahminleme ile ürün veya şube bazlı kârlılık ileriye dönük planlamayı destekler.']
    ],
    implementationTitle: 'Bir raporlama projesi ortak tanımlar ve veri sahipliğiyle başlar.',
    implementationIntro: 'Gösterge panelleri; gelir, müşteri sayısı, maliyet veya karşılaştırma dönemleri hakkındaki tanım farklılıklarını gizlememelidir.',
    implementation: [
      'Sipariş, rezervasyon, masa ve ödeme veri kaynakları',
      'Şube, kanal, kategori ve ürün eşlemeleri',
      'Gelir, müşteri sayısı, ortalama hesap tutarı ve masa devir hızı tanımları',
      'Kârlılık için gereken ürün maliyeti ve diğer maliyet girdileri',
      'Raporlama dönemi ve karşılaştırma kuralları',
      'Rol yetkileri ve veri kalitesi inceleme sorumluluğu'
    ],
    faqs: [
      ['PayMyDine maliyet verisi olmadan kârlılık hesaplayabilir mi?', 'Hayır. Gerekli satış, ürün ve maliyet girdileri olmadan güvenilir bir kârlılık sonucu üretilemez.'],
      ['Tahmin sonucu garanti midir?', 'Hayır. Tahminler karar desteği sunan öngörülerdir; gerçekleşen sonuçlarla karşılaştırılmalı ve ekip tarafından değerlendirilmelidir.'],
      ['Şubeler karşılaştırılabilir mi?', 'Evet. Şube eşlemeleri ve metrik tanımları seçilen lokasyonlarda tutarlıysa karşılaştırma yapılabilir.'],
      ['Yapay Zekâ bir metriği açıklamaya yardımcı olabilir mi?', 'Evet. Yapay Zekâ mevcut veriler üzerinden özet ve inceleme desteği sunabilir; kaynak görünümleri ve nihai insan kararı görünür kalır.']
    ]
  },

  team: {
    factsEyebrow: 'Rol bazlı ekip kapsamı',
    factsTitle: 'Altı çalışma alanı ve beş ekip kontrolü erişimi sorumluluklarla uyumlu tutar.',
    factsIntro: 'Rol bazlı tasarım, herkesin ne gördüğünü değiştirir; restoran için altı ayrı sistem oluşturmaz.',
    facts: [
      ['06', 'rol bazlı çalışma alanı', 'İşletme sahibi, yönetici, servis personeli, mutfak, rezervasyon ve finans ekiplerinin PayMyDine içinde farklı kullanım görünümleri vardır.'],
      ['05', 'ekip kontrolü', 'Rol bazlı çalışma alanları, yetkiler, vardiya yönetimi, performans içgörüleri ve personel hareketleri mevcut kapsamı oluşturur.'],
      ['02', 'görünürlük seviyesi', 'Odaklı rol görünümleri günlük işi desteklerken yönetim daha geniş operasyon bağlamını korur.'],
      ['01', 'ortak operasyon', 'Masa, sipariş, rezervasyon, mutfak ve ödeme bağlamı aynı restoran operasyonunun parçası olarak kalır.']
    ],
    workflowEyebrow: 'Rol tasarımından günlük kullanıma',
    workflowTitle: 'Yetkiler ve odaklı çalışma alanları nasıl uygulanabilir bir operasyon modeline dönüşür?',
    workflowIntro: 'Amaç yalnızca daha fazla kullanıcı hesabı açmak değil, sorumlulukları netleştirmektir.',
    workflow: [
      ['Gerçek sorumlulukları eşleyin', 'Ekran veya yetki vermeden önce her restoran rolünün sahip olduğu kararları ve işlemleri listeleyin.'],
      ['Erişimi bilinçli tanımlayın', 'Her role, gereksiz işletme bilgilerini açmadan işi için gereken modül, şube ve bilgileri verin.'],
      ['Odaklı görünümleri yapılandırın', 'Masa, sipariş, hazırlık, rezervasyon veya raporlama bağlamını rolün bir sonraki aksiyonuna göre düzenleyin.'],
      ['Çalışma alanını servis sırasında kullanın', 'İşlemleri ve durum değişikliklerini iş devrinden sorumlu kişi veya rolle ilişkilendirin.'],
      ['Erişimi düzenli gözden geçirin', 'Ekip yapısı veya sorumluluklar değiştikçe yetkileri, kullanıcı eğitimini ve çalışma alanı kapsamını güncelleyin.']
    ],
    rolesTitle: 'Altı çalışma alanı, restorandaki altı farklı sorumluluk alanına odaklanır.',
    rolesIntro: 'Tek bir genel panel hem operasyon ekipleri hem de yönetim için gereksiz bilgi kalabalığı yaratır; rol bazlı görünümler bunu azaltır.',
    roleViews: [
      ['İşletme sahibi ve finans', 'Her masanın veya mutfak fişinin operasyonunu yönetmeden gelir, performans, ödeme ve raporlama bağlamına ihtiyaç duyar.'],
      ['Yönetici', 'Vardiyayı koordine etmek için canlı salon durumunu, açık işleri, istisnaları ve ekip hareketlerini görmelidir.'],
      ['Servis personeli ve rezervasyon', 'İlgisiz finans yönetimi olmadan müşteriler, masalar, rezervasyonlar, siparişler ve servis işlemleriyle çalışır.'],
      ['Mutfak', 'Yönetim ekranının geri kalanı olmadan hazırlık ayrıntısı, süre ve hazır iş devrine odaklanır.']
    ],
    metricsTitle: 'Rol tasarımının belirsizliği ve iş devri gecikmesini azaltıp azaltmadığını ölçün.',
    metricsIntro: 'Bu metrikler ortak olay tanımları veya ekip değerlendirme yöntemleri gerektirir; otomatik performans vaadi değildir.',
    metrics: [
      ['Erişim doğruluğu', 'Kullanıcıların sorumlulukları dışında yetki almadan ihtiyaç duydukları bilgilere erişip erişemediğini inceleyin.'],
      ['İş devri süresi', 'Bir rolün durumu tamamlamasıyla bir sonraki sorumlu rolün işi kabul etmesi arasındaki süreyi ölçün.'],
      ['Çalışma alanı kullanımı', 'Kullanım verileri mevcut ve uygunsa yapılandırılmış rol görünümlerinin aktif kullanımını takip edin.'],
      ['İstisna çözüm süresi', 'Benzer servis dönemlerinde atanmış operasyon istisnalarının ne kadar süre açık kaldığını ölçün.']
    ],
    implementationTitle: 'Yetkileri tek seferlik teknik ayar değil, operasyon tasarımı olarak ele alın.',
    implementationIntro: 'Ekip, erişim kararlarının kimde olduğunu ve canlıya geçiş sonrası değişikliklerin nasıl gözden geçirileceğini bilmelidir.',
    implementation: [
      'Rol ve sorumluluk matrisi',
      'Modül, şube ve veri yetkileri',
      'Her rol için çalışma alanı içeriği',
      'Personel başlangıç eğitimi ve rol bazlı eğitim',
      'Erişim gözden geçirme ve kullanıcı kapatma süreci',
      'Yetki ve iş akışı değişikliklerinin sorumlusu'
    ],
    faqs: [
      ['Her rol farklı veri mi görür?', 'Roller farklı ayrıntı seviyelerini ve aksiyonları görebilir; yine de aynı temel restoran bağlamıyla çalışırlar.'],
      ['Bir kişi birden fazla role sahip olabilir mi?', 'Evet. Sorumluluğa göre yapılandırılabilir; ancak yetki modeli bilinçli şekilde gözden geçirilmelidir.'],
      ['Rol bazlı çalışma alanları yönetimin görünürlüğünü azaltır mı?', 'Hayır. Odaklı ekip görünümleri, daha geniş yönetici, işletme sahibi ve finans görünümleriyle birlikte çalışabilir.'],
      ['Yetkiler canlıya geçtikten sonra değiştirilebilir mi?', 'Evet. İnsanlar, şubeler ve sorumluluklar değiştikçe erişim ve çalışma alanı kapsamı yeniden değerlendirilmelidir.']
    ]
  },

  'guest-ordering': {
    factsEyebrow: 'Müşteri CRM’i ve büyüme kapsamı',
    factsTitle: 'Altı büyüme özelliği müşteri kimliği, etkileşim ve tekrar ziyaretleri birbirine bağlar.',
    factsIntro: 'Büyüme sonuçları; izinler, profil kalitesi, restoran uygulaması ve mevcut ölçüm verilerine bağlıdır.',
    facts: [
      ['06', 'büyüme özelliği', 'Profiller, sadakat, teklifler, kampanyalar, geri bildirim ve müşteri bağlılığı mevcut müşteri büyüme kapsamını oluşturur.'],
      ['04', 'rol bakış açısı', 'Müşteri, servis personeli, yönetim ve pazarlama veya işletme sahibi ilişkinin farklı bölümlerini kullanır.'],
      ['05', 'yaşam döngüsü adımı', 'Tanımla, anla, segment oluştur, iletişim kur ve ölç adımları pratik bir müşteri büyüme döngüsü oluşturur.'],
      ['01', 'müşteri ilişkisi', 'Kimlik ve izinler uygun olduğunda ziyaret, sipariş ve geri bildirim bağlamı tek bir profile katkı sağlayabilir.']
    ],
    workflowEyebrow: 'Ziyaret bağlamından tekrar ziyaret ölçümüne',
    workflowTitle: 'Restoran etkileşimleri nasıl kullanılabilir müşteri ilişkisi verisine dönüşür?',
    workflowIntro: 'İş akışı, her müşteri etkileşimini gereksiz bir pazarlama kaydına dönüştürmeden iletişimin alaka düzeyini artırmalıdır.',
    workflow: [
      ['Müşteriyi veya ziyareti tanımlayın', 'Yapılandırılmış müşteri yolculuğu ve izin kurallarına göre mevcut kimlik, ziyaret veya masa bağlamını kaydedin.'],
      ['Faydalı etkileşim verisini ekleyin', 'Uygun ve mevcut olduğu durumlarda siparişleri, teklifleri, sadakat hareketlerini veya geri bildirimi müşteri ilişkisiyle bağlayın.'],
      ['Pratik segmentler oluşturun', 'Herkese aynı mesajı göndermek yerine müşterileri anlamlı davranış veya ilişki kriterlerine göre gruplayın.'],
      ['Teklif veya kampanya çalıştırın', 'Tanımlanmış hedef kitle ve amaç için yapılandırılmış sadakat, teklif veya kampanya araçlarını kullanın.'],
      ['Geri dönüş sinyalini ölçün', 'Kullanım, geri bildirim, tekrar ziyaret veya diğer kabul edilmiş sonuçları başlangıçtaki hedef kitle ve dönemle karşılaştırın.']
    ],
    rolesTitle: 'Müşteri büyümesi yalnızca kampanya ekranına değil, restoran deneyimine de bağlıdır.',
    rolesIntro: 'Profiller ve teklifler; servis bağlamı, yönetim kararları ve müşteri izinleri birbiriyle uyumlu olduğunda daha değerlidir.',
    roleViews: [
      ['Müşteri', 'Yapılandırılmış temas noktasından ilgili sadakat, teklif, geri bildirim veya sipariş deneyimini kullanır.'],
      ['Servis personeli', 'Gereksiz profil veya kampanya yönetimini görmeden hizmeti desteklemek için uygun müşteri bağlamını kullanır.'],
      ['Yönetici', 'Geri bildirim konularını, servis sorunlarını ve kampanya etkilerini restoran operasyonuyla birlikte değerlendirir.'],
      ['İşletme sahibi veya pazarlama', 'Mevcut müşteri ve ziyaret verilerine göre segmentleri, teklifleri, kampanyaları ve müşteri bağlılığı ölçümlerini tanımlar.']
    ],
    metricsTitle: 'Müşteri ilişkisinin tanımlanabilir, ilgili ve tekrarlanabilir hale gelip gelmediğini ölçün.',
    metricsIntro: 'Hedef kitle, başlangıç seviyesi, dönem ve ilişkilendirme yöntemi belgelenmeden müşteri bağlılığı veya gelir artışı iddiasında bulunmayın.',
    metrics: [
      ['Tanımlanmış müşteri oranı', 'Uygun ziyaretlerin ne kadarının yapılandırılmış izin modelinde kullanılabilir bir müşteri kimliğiyle eşleştiğini ölçün.'],
      ['Tekrar ziyaret oranı', 'Tutarlı müşteri kimliği ve ziyaret tanımıyla, belirlenen süre içinde geri dönen müşterileri karşılaştırın.'],
      ['Teklif kullanım oranı', 'Teklif kullanımını toplam restoran trafiğine göre değil, uygun hedef kitle ve kampanya dönemine göre takip edin.'],
      ['Geri bildirim yanıt oranı', 'Tamamlanan geri bildirimleri ve öne çıkan konuları, davet edilen ziyaret veya hedef kitleyle karşılaştırın.']
    ],
    implementationTitle: 'Müşteri büyümesi net izin, kimlik ve ilişkilendirme kuralları gerektirir.',
    implementationIntro: 'Müşteri ilişkisi modeli müşteri açısından anlaşılır, restoran açısından ise denetlenebilir olmalıdır.',
    implementation: [
      'Müşteri izinleri ve veri sorumluluğu modeli',
      'Profil alanları ve kimlik eşleştirme kuralları',
      'Ziyaret, sipariş, sadakat ve geri bildirim veri kaynakları',
      'Hedef kitle ve segment tanımları',
      'Teklif veya kampanya uygunluk ve kullanım kuralları',
      'Tekrar ziyaret ve kampanya ilişkilendirme ölçüm yöntemi'
    ],
    faqs: [
      ['Bu, masa QR ödemesiyle aynı şey mi?', 'Hayır. Ödeme ürünü işlem yolculuğunu kapsar; bu ürün alanı profiller, sadakat, kampanyalar, geri bildirim ve müşteri bağlılığına odaklanır.'],
      ['Her müşterinin profil oluşturması gerekir mi?', 'Hayır. Profil oluşturma ve kimlik belirleme; yapılandırılmış yolculuğa, müşteri tercihine ve geçerli izin kurallarına bağlıdır.'],
      ['Sipariş geçmişi segment oluşturmayı destekleyebilir mi?', 'Evet. Kimlik, sipariş verisi, yetkiler ve seçilen müşteri büyüme modülleri bu bağlamı sağlıyorsa kullanılabilir.'],
      ['Bir kampanya tekrar ziyareti garanti eder mi?', 'Hayır. Kampanya ve müşteri bağlılığı performansı tanımlı hedef kitle, başlangıç seviyesi ve karşılaştırma dönemiyle ölçülmelidir.']
    ]
  }
};

for (const [slug, details] of Object.entries(solutionDetailExpansions)) {
  if (!solutionPages[slug]) {
    throw new Error(`Missing solution page for detailed product copy: ${slug}`);
  }
  solutionPages[slug].details = details;
}

// === PMD PRODUCT PAGE DEPTH V2 END ===

export const resources = [
  {
    slug: 'getting-started',
    title: 'PayMyDine ile Başlangıç',
    category: 'Kurulum',
    intro: 'Operasyon keşfi ve ürün kapsamından rol yapılandırmasına, entegrasyon incelemesine, doğrulamaya ve ölçümlü canlıya geçişe uzanan 6 aşamalı rehber.',
    image: '/site-assets/extra/team-planning.webp',
    articleImage: '/site-assets/extra/kitchen-orders.webp',
    sections: [
      ['Özellik listesiyle değil, restoranla başlayın', 'İlk kurulumda hangi PayMyDine modüllerinin yer alacağına karar vermeden önce mevcut operasyon modelini, ekip rollerini, müşteri yolculuğunu ve teknoloji ortamını çıkarın.'],
      ['Sorumluluklara göre yapılandırın', 'Sistemin restoranın gerçek çalışma biçimini yansıtması için her ekibin ihtiyaç duyduğu çalışma alanlarını, yetkileri, salon yapısını ve iş akışlarını tanımlayın.'],
      ['Canlıya geçişi net aşamalarla planlayın', 'Entegrasyonları gözden geçirin, ekibi hazırlayın, operasyon akışını doğrulayın ve ihtiyaçlar geliştikçe genişletilebilecek bir yapılandırmayla canlıya geçin.']
    ]
  },
  {
    slug: 'role-based-workspaces',
    title: 'Rol Bazlı Restoran Çalışma Alanları Tasarlamak',
    category: 'Ekipler',
    intro: '6 rol bazlı çalışma alanıyla gereksiz ekran kalabalığını ve yetki riskini azaltırken restoran bağlamını nasıl bağlantılı tutabilirsiniz?',
    image: '/site-assets/extra/qr-ordering-scene.webp',
    articleImage: '/site-assets/extra/outdoor-qr-toast.webp',
    sections: [
      ['Görünümü sorumlulukla eşleştirin', 'İşletme sahibinin performans bağlamına, servis personelinin masa ve siparişlere, mutfağın ise hazırlık işlerine ihtiyacı vardır. Rol bazlı tasarım her çalışma alanını odaklı tutar.'],
      ['Bütün operasyonu bağlantılı tutun', 'Ayrı çalışma alanları restoranın birbirinden kopuk sürümlerini oluşturmamalıdır. Faydalı bağlam, bir sonraki adımdan sorumlu kişiler arasında ilerlemeye devam etmelidir.'],
      ['Yetkileri bilinçli kullanın', 'Erişim sorumluluğu takip etmelidir; böylece her rol gereksiz yönetim veya işletme bilgilerine ulaşmadan güvenle çalışabilir.']
    ]
  },
  {
    slug: 'ai-in-restaurant-operations',
    title: 'Yapay Zekâ Restoran Operasyonlarına Nerede Destek Olabilir?',
    category: 'Yapay Zekâ ve İçgörüler',
    intro: 'Kaynak veriyi gizlemeden 9 restoran metriği üzerinde soru sorma, özetleme, karşılaştırma, uyarı, tahmin ve inceleme desteğinin nasıl kullanılabileceği.',
    image: '/site-assets/extra/friends-dinner.webp',
    articleImage: '/site-assets/extra/restaurant-entrance.webp',
    sections: [
      ['Faydalı bir soruyla başlayın', 'Yapay Zekâ; neyin değiştiği, neyin farklı performans gösterdiği veya hangi alanın dikkat gerektirdiği gibi gerçek bir operasyon sorusunu yanıtlamaya yardımcı olduğunda daha değerlidir.'],
      ['Kaynak veriyi görünür tutun', 'İşletme sahipleri ve yöneticilerin bir özetin veya gözlemin arkasındaki bağlamı anlayabilmesi için Yapay Zekâ desteği temel restoran verisiyle birlikte sunulmalıdır.'],
      ['Kararların yerine geçmek yerine onları destekleyin', 'Yapay Zekâ’nın faydalı rolü; bilgiyi araştırmayı, özetlemeyi ve karşılaştırmayı kolaylaştırırken operasyon kararlarının kontrolünü restoran ekibinde tutmaktır.']
    ]
  },
  {
    slug: 'guest-ordering-journey',
    title: 'Restoran Operasyonunun Parçası Kalan Müşteri Sipariş Yolculuğu Tasarlamak',
    category: 'Müşteri Deneyimi',
    intro: 'Tara, incele, sipariş ver ve öde şeklindeki 4 adımlı müşteri yolculuğunun servis personeli, mutfak ve ödeme süreçleri için nasıl net işler oluşturduğu.',
    image: '/site-assets/extra/payment-cafe-table.webp',
    articleImage: '/site-assets/extra/payment-dinner.webp',
    sections: [
      ['İlk işlemi açık hale getirin', 'Masa QR kodu, restoran bağlamı hazır olan ve bir sonraki işlemin kolayca anlaşıldığı net bir mobil deneyime açılmalıdır.'],
      ['Servis ekibini sürecin içinde tutun', 'Dijital sipariş; yemeği tamamen self-servis bir arayüze dönüştürmek yerine notları, garson çağrılarını ve gerçek servis ekibini desteklemeye devam etmelidir.'],
      ['Yolculuğu ödeme sonuna kadar koruyun', 'Müşteri yemeğin sonunda süreci baştan başlatmak zorunda kalmadığında sipariş ve ödeme daha kullanışlı hale gelir.']
    ]
  },
  {
    slug: 'reservations-and-floor-planning',
    title: 'Rezervasyon ve Salon Planlamasını Bir Araya Getirmek',
    category: 'Rezervasyon',
    intro: '7 rezervasyon ve oturma özelliğinin geliş yoğunluğunu, kişi sayısını ve canlı salon kapasitesini pratik bir masa kararına nasıl dönüştürdüğü.',
    image: '/site-assets/extra/tablet-dashboard.webp',
    articleImage: '/site-assets/extra/payment-approved.webp',
    sections: [
      ['Günün yoğunluğunu önceden görün', 'Yaklaşan rezervasyonlar, kişi sayıları ve geliş saatleri müşteriler kapıya gelmeden önce ekibin talebi anlamasına yardımcı olur.'],
      ['Salon durumunu aynı hikâyede tutun', 'Müsait, dolu ve rezervasyona hazır masalar rezervasyon listesini uygulanabilir bir oturma planına dönüştürmek için gereken bağlamı sağlar.'],
      ['Duruma uygun görünümü seçin', 'Takvim, zaman çizelgesi ve liste görünümleri planlamayı; canlı salon görünümü ise o anda verilen kararları destekleyebilir.']
    ]
  },
  {
    slug: 'pos-integration-planning',
    title: 'Faydalı Bir POS Entegrasyonu Planlamak',
    category: 'Entegrasyonlar',
    intro: 'Bir POS entegrasyonu geliştirmeden önce veri kaynağı, alanlar, yön, güncelleme sıklığı ve sorumlu rol nasıl tanımlanır?',
    image: '/site-assets/extra/power-up-pos.webp',
    articleImage: '/site-assets/extra/dashboard-menu-mockup.webp',
    sections: [
      ['Mevcut sistem ortamıyla başlayın', 'Neyin bağlanacağına karar vermeden önce restoranın bugün hangi sistemleri kullandığını ve hangi iş akışlarını iyileştirmek istediğini anlayın.'],
      ['Mevcut teknik imkânlara göre planlayın', 'Entegrasyon kapsamı mevcut POS ortamının sunduğu API’lere, yetkilere ve veri erişimine bağlıdır.'],
      ['Fayda sağlayan bağlantılara öncelik verin', 'Amaç varsayılan olarak her şeyi değiştirmek değildir. Amaç, operasyonu veya müşteri yolculuğunu gerçekten güçlendiren PayMyDine özelliklerini eklemektir.']
    ]
  }
];

export const integrations = ['SumUp', 'ready2order', 'Lightspeed', 'Square'];

export const integrationFeaturePills = [
  'POS verisi',
  'Muhasebe bağlamı',
  'Teslimat kanalları',
  'Ödeme sağlayıcıları',
  'Merkezi raporlama',
  'Stok'
];

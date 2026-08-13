export const productAreas = [{
  number: 1,
  icon: 'chart',
  title: 'PayMyDine AI',
  href: "/tr/ai",
  body: "6 AI-assisted eylemleri kullanın: sorular sor, günlük bir kısalık, bayrak sıra dışı hareket edin, dönemleri karşılaştırır, tahminleri karşılaştırır ve bir sonraki metrikleri araştırır.",
  navNote: "Sorular için 6 eylem, kısacalar, uyarılar, karşılaştırmalar, tahminler ve soruşturma.",
  image: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp',
  compactImage: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp'
}, {
  number: 2,
  icon: 'operations',
  title: "Restoran Operasyonları",
  href: "/tr/solutions/operations",
  body: "6 canlı görüş izleyin: pano, açık siparişler, masa statüsü, zemin haritaları, yemek yeme veya taksi ve mevcut restoran aktivite.",
  navNote: "Siparişler, masalar, zemin haritaları, kanallar ve aktif hizmet için 6 canlı görüş.",
  image: '/site-assets/custom/page-heroes/solutions-operations-hero-chatgpt-20260814.webp',
  compactImage: '/site-assets/custom/page-heroes/solutions-operations-hero-chatgpt-20260814.webp'
}, {
  number: 3,
  icon: 'calendar',
  title: "Rezervasyon ve Masa Yönetimi",
  href: "/tr/solutions/reservations",
  body: "Plan 7 rezervasyon ve oturma görevleri: takvim, zaman çizelgesi, kullanılabilirlik, yürüyüş-ins, masa atama, misafir akışı ve çok katlı.",
  navNote: "varış için 7 planlama aracı, kapasite, oturma, yürüyüş ve birden fazla zemin.",
  image: '/site-assets/table/1.webp',
  compactImage: '/site-assets/table/2.webp'
}, {
  number: 4,
  icon: 'kitchen',
  title: "Sipariş, Mutfak ve Menü",
  href: "/tr/solutions/kitchen",
  body: "7 kontrolden sipariş alın: garson girişi, KDS, hazırlık durumu, hazır durum, menü yönetimi, modifiers ve satılan öğeler.",
  navNote: "7 sipariş, mutfak ve menü girişten eloff'a girişten kontrol eder.",
  image: '/site-assets/extra/chef-warm-kitchen.webp',
  compactImage: '/site-assets/kitchen/2.webp'
}, {
  number: 5,
  icon: 'card',
  title: "Ödemeler ve Misafir Siparişleri",
  href: "/tr/solutions/payments",
  body: "Masa QR de dahil olmak üzere 8 misafir sipariş ve ödeme anılarını, mobil menüyü, ödeme amaçlı ve 3 bölünmüş yöntemi: eşit olarak, öğe veya hisselerle.",
  navNote: "3 fatura destekli yöntem de dahil olmak üzere 8 sipariş ve ödeme anları.",
  image: '/site-assets/custom/page-heroes/solutions-payments-hero-chatgpt-20260814.webp',
  compactImage: '/site-assets/custom/page-heroes/solutions-payments-hero-chatgpt-20260814.webp'
}, {
  number: 6,
  icon: 'chart',
  title: "Analitik, Tahminleme ve Karlılık",
  href: "/tr/solutions/insights",
  body: "9 karar metrikleri izleyin: gelir, konuklar, ortalama kontrol, masa cirosu, zaman, en iyi satıcılar, ödeme karışımı, tahmin ve kârlılık.",
  navNote: "Gelir, talep, masa performansı, tahminler ve kârlılık için 9 metrik.",
  image: '/site-assets/custom/page-heroes/solutions-insights-hero-chatgpt-20260814.webp',
  compactImage: '/site-assets/custom/page-heroes/solutions-insights-hero-chatgpt-20260814.webp'
}, {
  number: 7,
  icon: 'team',
  title: "Ekip Yönetimi",
  href: "/tr/solutions/team",
  body: "5 kişi kontrol eder: iş alanları, izinler, değişimler, performans bağlamı ve personel aktivitesi.",
  navNote: "5 kişi iş alanları, izinler, değişimler ve personel aktivitelerini kontrol eder.",
  image: '/site-assets/custom/page-heroes/solutions-team-hero-chatgpt-20260809.webp',
  compactImage: '/site-assets/custom/page-heroes/solutions-team-hero-chatgpt-20260809.webp'
}, {
  number: 8,
  icon: 'phone',
  title: "Misafir CRM, Pazarlama ve Büyüme",
  href: "/tr/solutions/guest-ordering",
  body: "6 büyüme aracı kullanın: profiller, sadakat, teklifler, kampanyalar, geri bildirim ve saklama, ilgili takip için mevcut olan ziyaret bağlamı.",
  navNote: "6 CRM ve misafir bağlamı, nişan ve saklama araçları.",
  image: '/site-assets/custom/page-heroes/solutions-guest-ordering-hero-chatgpt-20260814.webp',
  compactImage: '/site-assets/custom/page-heroes/solutions-guest-ordering-hero-chatgpt-20260814.webp'
}, {
  number: 9,
  icon: 'link',
  title: "Entegrasyonlar, Çoklu Lokasyon ve Envanter",
  href: "/tr/integrations",
  body: "Connect 4 sistem türü - POS, muhasebe, teslimat ve ödeme - sonra merkezi raporlama, paylaşılan menüler, envanter, yiyecek-maliyet ve satın alma bağlamı ekleyin.",
  navNote: "4 entegrasyon türleri artı merkezi raporlama, menüler, envanter, yiyecek maliyeti ve satın alma.",
  image: '/site-assets/custom/page-heroes/integrations-hero-chatgpt-20260814.webp',
  compactImage: '/site-assets/custom/page-heroes/integrations-hero-chatgpt-20260814.webp'
}];
const productLink = index => {
  const item = productAreas[index];
  return [item.title, item.href, item.navNote, item.number];
};
export const primaryNav = [{
  label: "Ürün",
  href: "/tr/platform",
  columns: [{
    title: "Platform & operasyonlar",
    links: [productLink(0), productLink(1), productLink(2)]
  }, {
    title: "Servis & performans",
    links: [productLink(3), productLink(4), productLink(5)]
  }, {
    title: "Takımlar, konuklar ve ölçek",
    links: [productLink(6), productLink(7), productLink(8)]
  }]
}, {
  label: "Ekipler İçin",
  href: "/tr/teams",
  columns: [{
    title: "Restoran liderlik",
    links: [["İşletme Sahibi", "/tr/teams/owner", "6 iş sinyalleri: gelir, konuklar, masalar, rezervasyonlar, mutfak durumu ve üst eşyalar."], ["Yönetici", "/tr/teams/manager", "5 canlı kuyruklar: masalar, siparişler, mutfak, rezervasyonlar ve takım aktivitesi."], ["Finans ve raporlama", "/tr/teams/finance", "Gelir, kategoriler, ödemeler, ortalama kontrol, en iyi satıcılar ve karşılaştırmalar için 6 raporlama görüşü kullanın."]]
  }, {
    title: "Restoran takımları",
    links: [["Servis ekibi", "/tr/teams/service-staff", "6 hizmet sinyallerine bakınız: masalar, siparişler, notlar, talepler, statü ve checkout."], ["Mutfak ve KDS", "/tr/teams/kitchen", "Biletleri alın, hazırlamak, hazır ve teslim edilen devletler zamanlama ve notlar görünür."], ["Rezervasyonlar", "/tr/teams/reservations", "varışlar için 6 planlama sinyalleri kullanın, parti büyüklüğü, kullanılabilirlik, yürüyüş ve oturma."]]
  }]
}, {
  label: "Entegrasyonlar",
  href: "/tr/integrations"
}, {
  label: "Fiyatlandırma",
  href: "/tr/pricing"
}, {
  label: "Şirket",
  href: "/tr/company"
}];
export const offerCards = productAreas;
export const homeStatusCards = [{
  image: '/site-assets/extra/chef-order-23.webp',
  eyebrow: "Konuk ödeme",
  title: "checkout ile bağlantılı masa ve ödeme statüsü tutun.",
  body: "Konuklar, personel masaya eklenmiş fatura statüsü tutarken miktarı, mevcut yöntem ve onay görürler."
}, {
  image: '/site-assets/comments/14.webp',
  eyebrow: "Split faturaları",
  title: "Bir fatura üç bölünmüş yöntemi destekler.",
  body: "Konuklar eşit bir şekilde bölünsün, sipariş edilen öğeleri veya toplamı ayrı bir çek başlamadan ayıralım."
}, {
  image: '/site-assets/comments/5.webp',
  eyebrow: "Takım durumu",
  title: "Sipariş durumu bir sonraki eloff için sorumlu rolüne taşınır.",
  body: "Servis personeli hizmet statüsünü görür, mutfak hazırlık durumunu görür ve yönetim aynı bilet bağlamında istisnaları görür."
}, {
  image: '/site-assets/comments/10.webp',
  eyebrow: "Masa QR sipariş ve ödeme",
  title: "Masa QR kodu, göz, sipariş ve masa bağlamını kaybetmeden ödeme yapın.",
  body: "Konuklar, masayı QR kodunu mobil menüyü açmak için taramayı, siparişi ve tam ödemeyi yaparken PayMyDine masayı, siparişi, faturayı ve ödeme statüsünü personelle bağlantılı tutar."
}];
export const workflowSteps = [["Misafir veya personel eylemi", "Bir misafir taramaları, resepsiyon koltukları, bir garson bir sipariş veya yönetici bir tablo değiştirir."], ["Restoran bağlamı", "Masa, misafir, sipariş, zamanlama, notlar ve izinler eylemle seyahat eder."], ["Rol-specific action", "Sorumlu rol bir sonraki adım için gerekli olan bağlam ve kontrollerle odaklanmış bir kuyruk alır."], ["Servis & checkoutout", "Hazırlık, hazır durum, eloff ve checkout aynı restoran ortamında devam ediyor."], ["Bilgi ve yardım", "Gelir, misafir, masa, satış ve kârlı veriler raporlama ve AI-assisted sorular için kullanılabilir."]];
export const imageGroups = {
  comments: Array.from({
    length: 17
  }, (_, i) => `/site-assets/comments/${i + 1}.webp`),
  kitchen: Array.from({
    length: 5
  }, (_, i) => `/site-assets/kitchen/${i + 1}.webp`),
  owner: Array.from({
    length: 3
  }, (_, i) => `/site-assets/owner/${i + 1}.webp`),
  payment: ['/site-assets/payment/1.webp', '/site-assets/payment/payment-experience.webp', '/site-assets/payment/3.webp', '/site-assets/payment/4.webp'],
  pos: ['/site-assets/pos/restaurant-platform.webp', '/site-assets/pos/pos-workflow.webp'],
  social: Array.from({
    length: 15
  }, (_, i) => `/site-assets/social/${i + 1}.webp`),
  staff: Array.from({
    length: 8
  }, (_, i) => `/site-assets/staff/${i + 1}.webp`),
  table: Array.from({
    length: 11
  }, (_, i) => `/site-assets/table/${i + 1}.webp`)
};
export const solutionPages = {
  operations: {
    eyebrow: "Restoran Operasyonları",
    title: "Masaları, siparişleri ve istisnaları servis sorunları olmadan görün.",
    intro: "6 canlı görüş kullanın - pano, açık siparişler, masa statüsü, zemin haritaları, yemek ya da kaçış ve mevcut faaliyet - neyin aktif olduğunu anlamak için, hangi bekliyor ve değişimin dikkat etmesi gerekiyor.",
    storyEyebrow: "Restoran operasyonları",
    capabilityEyebrow: "6 canlı işletim görüşleri",
    capabilityTitle: "Restoran durumunu ayrı ekranlardan yeniden inşa etmeden kontrol edin.",
    capabilityBody: "Yöneticiler açık siparişler, işgal masaları, sipariş kanalları, zemin pozisyonu ve aynı işletim ortamından istisnaları inceleyebilirler.",
    ctaTitle: "Kendi hizmet akışınızda 6 Restoran Operasyon görüşünü görün.",
    ctaBody: "Zemin planınızı, sipariş kanallarınızı ve yönetim sorularınızı getirin. Panelin, masaların, siparişlerin ve canlı aktivitenin birlikte nasıl uygun olduğunu göstereceğiz.",
    heroImage: '/site-assets/custom/page-heroes/solutions-operations-hero-chatgpt-20260814.webp',
    accent: 'green',
    highlights: [["Gösterge paneli", "Aktif tablolarla başlayın, açık siparişler, satışlar ve istisnalar, genel bir özet yerine."], ["Siparişler", "Filtre açık, gecikmiş veya tamamlanmış siparişler ve her bileti masaya ve kanalına bağlı tutmak."], ["Masalar", "Uygulamada servis statüsü ile meşgul, mevcut ve ödeme aşaması masalarını görün."], ["Kat haritaları", "Masaları, rezervasyonları ve hizmet basıncı bulmak için fiziksel zemin düzeni kullanın."]],
    story: [{
      title: "Bir değişim görüşü tekrarlanan durumu kontrol eder.",
      body: "Bir yönetici, her takımdan ayrı bir güncelleme için sormadan ayrıntılı bir şekilde hareket edebilir.",
      image: '/site-assets/owner/1.webp'
    }, {
      title: "Yemek yemeyin ve ayırt edilemez ama bağlantılı olun.",
      body: "Her kanal kendi masasını veya sipariş bağlamını aynı canlı iş yüküne ve raporlama resmine katkıda bulunurken tutar.",
      image: '/site-assets/extra/restaurant-team-planning.webp'
    }],
    bullets: ["Gösterge paneli", "Siparişler", "Masalar", "Kat haritaları", "Restoranda servis / paket servis", "Canlı aktivite"]
  },
  reservations: {
    eyebrow: "Rezervasyon ve Masa Yönetimi",
    title: "Maç rezervasyonları ve gerçek zemin kapasitesi için yürüyüş yapın.",
    intro: "7 rezervasyon araçlarını kullanın - takvim, zaman çizelgesi, kullanılabilirlik, yürüyüş-ins, masa ataması, misafir akışı ve birden fazla zemin kullanın - canlı zemine karşı talep etmeyi planlayın.",
    storyEyebrow: "Rezervasyonlar ve masa yönetimi",
    capabilityEyebrow: "7 rezervasyon ve oturma araçları",
    capabilityTitle: "Takvim ve zaman çizelgesi görüşleriyle önceden planlayın, sonra kullanılabilirlik ve masa atama ile birlikte yaşayın.",
    capabilityBody: "Resepsiyon parti boyutunu kullanabilir, varış zamanı, mevcut masalar, beklenen dönüşler, bir sonraki oturma kararı yapmak için yürüyüş ve zemin pozisyonu kullanabilir.",
    ctaTitle: "Rezervasyonları ve Masa Yönetimi'ni eylemde görmek ister misiniz?",
    ctaBody: "Bir demo kitabı ve takvimler, varışlar, ödev masası, yürüyüş-ins ve birden çok katlı kurulumlar yoluyla yürüyeceğiz.",
    heroImage: '/site-assets/extra/host-stand.webp',
    accent: 'blue',
    highlights: [["Takvim Takvim", "Rezervasyonları görün ve açık bir planlama görüşüne yaklaşan talep."], ["Zaman çizelgesi", "Hizmet döneminin şeklini anlayın ve bir sonraki neler geliyor."], ["Erişilebilirlik", "Mevcut masaları ve oturma kapasitelerini rezervasyon iş akışına yakın tut."], ["Rezervasyonsuz misafirler", "Daha geniş zemin resmini kaybetmeden planlanmamış varışları durdurun."]],
    story: [{
      title: "Hizmet başlamadan önce varış şekline bakın.",
      body: "Takvim ve görüş zaman çizelgesi varış yükü, parti boyutları ve zamanlaması, böylece ekip yoğun hale gelmeden önce kapasite hazırlayabilir.",
      image: '/site-assets/extra/shared-table-feast.webp'
    }, {
      title: "Canlı oturma planına bir rezervasyon listesi girin.",
      body: "Kullanılabilirlik, yürüyüş-ins, beklenen dönüşler ve çok katlı masa atama rezervasyon bağlamına bağlı kalır.",
      image: '/site-assets/custom/reservations-floor-story.webp'
    }],
    bullets: ["Takvim Takvim", "Zaman çizelgesi", "Erişilebilirlik", "Rezervasyonsuz misafirler", "Masa atama", "Konuk akış", "Birden çok kat"]
  },
  'guest-ordering': {
    eyebrow: "Misafir CRM, Pazarlama ve Büyüme",
    title: "Ziyaretlerden, siparişlerden ve geri bildirimden bir misafir kaydı oluşturun.",
    intro: "6 büyüme aracı kullanın - profiller, sadakat, teklifler, kampanyalar, geri bildirim ve saklama - onay ve veri kurallarının izin verildiği şekilde ilgili takip etmeyi anlamak.",
    storyEyebrow: "Konuk ilişkileri",
    capabilityEyebrow: "6 CRM ve büyüme araçları",
    capabilityTitle: "İlgili takip için anonim bir ziyaretten hareket edin.",
    capabilityBody: "Profiller tarihi, sipariş tercihleri, sadakat aktivitesi, kampanya yanıtı ve geri bildirimleri bağlanabilir, böylece bir sonraki mesajın açık bir nedeni vardır.",
    ctaTitle: "Guest CRM, Pazarlama ve Büyümeyi keşfetmek ister misiniz?",
    ctaBody: "Profiller, sadakat, teklifler, kampanyalar, geri bildirimler ve saklamayı destekleyebilecek misafir sinyalleri aracılığıyla yürüyebiliriz.",
    heroImage: '/site-assets/custom/page-heroes/solutions-guest-ordering-hero-chatgpt-20260814.webp',
    accent: 'green',
    highlights: [["Profiller", "Birlikte faydalı misafir bilgilerini tut, böylece ilişki daha bağlamsal hale gelebilir."], ["Loyaltyty", "Ziyaretleri daha net bir misafir katılımı ile tekrarlayın."], ["Teklifler", "Daha güçlü misafir ilişkilerini desteklemek için ilgili teklifler kullanın."], ["Kampanyalar", "Restoran seyircisi etrafında inşa edilen kampanyalarla misafir bağlamı."]],
    story: [{
      title: "misafir profili gerçek restoran etkileşimlerinden oluşturun.",
      body: "Bağlantı ziyaretleri, siparişler, tercihler ve sadakat faaliyetleri bir masanın veya işlemin ötesindeki ilişkiyi anlamak için.",
      image: '/site-assets/extra/qr-service.webp'
    }, {
      title: "Bir sonraki tutma eylemine karar vermek için geri bildirim kullanın.",
      body: "Bir sonraki eylemin hizmet kurtarma, sadakat veya ilgili bir kampanya olup olmadığını seçmek için geri bildirim ve ziyaret frekansı ekleyin.",
      image: '/site-assets/extra/cafe-conversations.webp'
    }],
    bullets: ["Profiller", "Loyaltyty", "Teklifler", "Kampanyalar", "Geri bildirim", "Misafir elde tutma"]
  },
  payments: {
    eyebrow: "Ödemeler ve Misafir Siparişleri",
    title: "QR'den bir masa alın, yolculuğu yeniden başlatmadan ödemeyi doğrulamak için.",
    intro: "8 konuk ve ödeme anlarını kapat: kart veya dijital ödeme, ödeme-taraf, eşit olarak bölün, öğe tarafından bölün, hisseler tarafından bölünmüş, masa QR, mobil menü ve misafir çekout.",
    storyEyebrow: "Konuk sipariş ve ödeme",
    capabilityEyebrow: "8 sipariş ve ödeme anları",
    capabilityTitle: "Masayı, siparişi, faturayı ve ödeme statüsünü teyit etmek için kapat.",
    capabilityBody: "Konuklar tarama, tarama, sipariş, istek servisi ve restoran masayı ve sipariş bağlamını görünür tutarken ödeme yapabilirler.",
    ctaTitle: "Ödemeleri ve Konuk siparişini keşfetmek ister misiniz?",
    ctaBody: "Bir demo kitap ve masaya odaklanacağız QR, mobil menüler, misafir çek, ödeme-at-table ve bölünmüş milyar akışlar.",
    heroImage: '/site-assets/custom/page-heroes/solutions-payments-hero-chatgpt-20260814.webp',
    accent: 'purple',
    highlights: [["Card / dijital ödeme", "Sınırlı sağlayıcı için mevcut olan kartı veya dijital yöntemleri gösterin ve fatura durumuna bağlı olarak seçilen yöntemi tut."], ["masada ödeme yapın", "Doğru faturayı masa bağlamından açın ve servis ekibine görünür ödeme statüsü tutun."], ["Split eşit eşit eşit eşit", "Seçilmiş maaş sayısına tamamen bile bölün."], ["Return by item", "Assign, kalan bakiyeyi görünürken bireysel maaşlara sipariş etti."]],
    story: [{
      title: "Dört misafir eylemi bir mobil yolda kalıyor.",
      body: "Scan, göz, sipariş ve ödeme masaya bağlanır ve her adımda sorumlu restoran rolünü besler.",
      image: '/site-assets/extra/payment-thank-you.webp'
    }, {
      title: "Bir fatura üç bölünmüş yöntemi destekler.",
      body: "Konuklar bir parti olarak veya eşit olarak bölünebilir, sipariş edilen eşya veya ücretsiz bakiye görünürken hisseler tarafından.",
      image: '/site-assets/custom/cafe-payment-confirmation-replacement.webp'
    }],
    bullets: ["Card / dijital ödeme", "masada ödeme yapın", "Split eşit eşit eşit eşit", "Return by item", "Bölünerek", "Masa QR", "Mobil menü", "Guest checkoutoutoutout"]
  },
  kitchen: {
    eyebrow: "Sipariş, Mutfak ve Menü",
    title: "Girişten her siparişi menü bağlamı ile hazır hale getirin.",
    intro: "7 kontrol kullanın - garson girişi, KDS, hazırlık durumu, hazır durum, menü yönetimi, modifiers and satıldı-out items - from order catch to service handoff.",
    storyEyebrow: "Sipariş etmek, mutfak ve menü",
    capabilityEyebrow: "7 sipariş, mutfak ve menü kontrolleri",
    capabilityTitle: "Hizmet personeli ve mutfak aynı ekran vermeden aynı bilet statüsü verin.",
    capabilityBody: "Bilet masa, eşya, modifier ve zamanlama bağlamını menü ve satılan değişiklikler akışın devam etmesini engeller.",
    ctaTitle: "Ordering, Kitchen & Menu'i eylemde görmek ister misiniz?",
    ctaBody: "Beklemek için gösterebiliriz, KDS hazırlığı, menü yönetimi, özelleştirme ve operasyonunuzun etrafında hazır-status handoff.",
    heroImage: '/site-assets/extra/chef-warm-kitchen.webp',
    accent: 'orange',
    highlights: [["Garson sipariş girişi", "Bekleme veya misafir akışından sipariş oluşturun ve doğru tabloyu, öğeleri, değiştiricileri ve notları ekleyin."], ['KDS', "Odaklı bir KDS kuyruklarını öğe detayı, zamanlama ve öncelik bağlamı ile yerleştirin."], ["Hazırlık durumu", "Verilen ve hazırlıklı ülkeler bu kadar mutfağı ve yönetimi neyin beklediğini ve neyin aktif olduğunu görebilir."], ["Hazır durum", "Hizmet personeline hazır statü, böylece tamamlanmış biletin bir sonraki sahibi vardır."]],
    story: [{
      title: "Mutfak tam hazırlık bağlamını alır, kopyalanmış bir sipariş özeti değil.",
      body: "Madde detayı, modifiers, bilet yaşı ve mevcut durum hizmet sırasında hazırlık kuyruklarında görünür.",
      image: '/site-assets/kitchen/2.webp'
    }, {
      title: "Menü kullanılabilirliği bir sonraki önlenebilir bilet problemini önler.",
      body: "Menü, modifier ve satılan değişiklikler sipariş bağlamı bu kadar kullanılamaz veya yanlış yapılandırılmış öğeler hazırlanmaya devam etmez.",
      image: '/site-assets/extra/team-planning.webp'
    }],
    bullets: ["Garson sipariş girişi", 'KDS', "Hazırlık durumu", "Hazır durum", "Menü yönetimi", "Menü özelleştirme", "Tükenen ürün bilgisi"]
  },
  team: {
    eyebrow: "Ekip Yönetimi",
    title: "Her rolü kontrollere ihtiyaç duyduğu ve ekip resmini yönetin.",
    intro: "5 kişi kontrol eder - rol iş alanları, izinler, değişimler, performans bağlamı ve personel aktivitesi - aynı yönetici ekranında her çalışan koymak olmadan.",
    storyEyebrow: "Takım yönetimi",
    capabilityEyebrow: "5 takım kontrolleri",
    capabilityTitle: "Roller arasında eloff korurken erişim ve arayüz gürültüsü.",
    capabilityBody: "Sahipler, yöneticiler, hizmet personeli, mutfak, rezervasyonlar ve finans aynı masa, sipariş ve iş bağlamını kullanırken farklı kontroller görebilir.",
    ctaTitle: "Team Management'ı keşfetmek ister misiniz?",
    ctaBody: "Bir demoyu okuyun ve rol iş alanları, izinler, takım yapısınız etrafında performans ve personel aktivitelerini haritalayacağız.",
    heroImage: '/site-assets/custom/page-heroes/solutions-team-hero-chatgpt-20260809.webp',
    accent: 'green',
    highlights: [["Rol çalışma alanları", "Odaklı bir kuyruk imzalayın ve işten sorumlu rolüne eylemleri ayarla."], ["Roller ve izinler", "Define view, oluşturma, değişim, onay ve ihracat izinlerini rolle onaylayın."], ["Vardiya yönetimi", "Görevi ve aktif takım bağlamı koordine edilen çalışmaya yakın tut."], ["Performans anlayışı", "Tamamlanan eylemler, zamanlama ve hizmet sonuçları sorumlu rolü ve bağlamı görünür."]],
    story: [{
      title: "Altı iş alanı gerçek restoran sorumlulukları etrafında erişim organize eder.",
      body: "Sahipler, yöneticiler, hizmet personeli, mutfak, rezervasyonlar ve finans, eloff bağlamı bağlı kalırken odaklanmış görüşler kullanabilir.",
      image: '/site-assets/extra/taqueria-handoff.webp'
    }, {
      title: "Yönetim her rol için yönetim kontrollerini açığa çıkarmadan takım aktivitesini görür.",
      body: "Yöneticiler atamaları, aktif iş ve tamamlama durumunu gözden geçirebilirler, her rol sorumluluğu için gerekli olan kontrolleri görmeye devam eder.",
      image: '/site-assets/extra/latte-handoff.webp'
    }],
    bullets: ["Rol çalışma alanları", "Roller ve izinler", "Vardiya yönetimi", "Performans anlayışı", "Personel aktivitesi"]
  },
  insights: {
    eyebrow: "Analitik, Tahminleme ve Karlılık",
    title: "Gelir, talep ve marjı açıklayan 9 metrikleri izleyin.",
    intro: "Gelirle kıyasla, konuklar, ortalama kontrol, masa cirosu, zaman, en iyi satıcılar, ödeme karışımı, tahmin ve kârlılık eşya veya yer tarafından.",
    storyEyebrow: "Analytics & kârlılık",
    capabilityEyebrow: "9 yönetim metrikleri",
    capabilityTitle: "Sayıları kıyasla, dönem ve bunun arkasındaki işletim bağlamı.",
    capabilityBody: "Bir metrik dönemi, yeri, kanalları ve kaynak bağlamını belirtmeli, böylece yönetim bunun arkasındaki restoran aktivitesini takip edebilir.",
    ctaTitle: "Analytics, Tahmin ve Karability keşfetmek ister misiniz?",
    ctaBody: "Gelirin ardındaki sinyalleri gösterebiliriz, konuklar, masa performansı, tahmin, en iyi satıcılar ve kârlılığı eşya veya yerle gösterebiliriz.",
    heroImage: '/site-assets/custom/page-heroes/solutions-insights-hero-chatgpt-20260814.webp',
    accent: 'blue',
    highlights: [["Gelir Gelir Gelir", "Dönem, hizmet penceresi, kanal veya konumu ile yapılandırılan veriler onu destekler."], ["Konukların konukları", "Misafir sayılarını takip edin veya misafir başına harcamayı ve hesaplamayı kapsar."], ["Ortalama kontrol", "Gelir ve misafir sayılarından ortalama kontrol edin, o zaman sonucu dönem veya konum ile karşılaştırın."], ["Masa cirosu", "Birçok parti masalarının nasıl hizmet ettiğini ve her hizmet aşamasında ne kadar uzun tablo kaldığını gözden geçirin."]],
    story: [{
      title: "Dokuz metrik bir karar görüşü yaratır.",
      body: "Gelir ve sipariş kanallarının yanı sıra talep edin, misafir aktivitesi, masa performansı, en iyi satıcılar ve ödeme karışımı.",
      image: '/site-assets/extra/manager-analytics.webp'
    }, {
      title: "Gerçek talep ve marj ile tahminlerle karşılaştırın.",
      body: "Bir tahmini desteklemek için tarihsel satış ve talep kalıpları kullanın, sonra gerçek sonuçlar ve kârlılık ile öğe veya konum tarafından karşılaştırın.",
      image: '/site-assets/extra/analytics-tablet-phone.webp'
    }],
    bullets: ["Gelir Gelir Gelir", "Konukların konukları", "Ortalama kontrol", "Masa cirosu", "Satışlar Tarafından Time", "En İyi satıcılar", "Ödeme karışımı", "Tahminleri Tahmin", "Madit veya konum tarafından kullanılabilirlik"]
  }
};

// === PMD PRODUCT PAGE DEPTH V2 START ===

const solutionDetailExpansions = {
  operations: {
    factsEyebrow: "Restoran operasyonları sayılarda",
    factsTitle: "Altı temel yetenek ve dört rol perspektifi etrafında inşa edilen canlı bir işletim görüşü.",
    factsIntro: "Sayılar yapısal ürün kapsamını tanımlar. Performans iyileştirmeleri restoran üssüne karşı ölçülmelidir.",
    facts: [['06', "Temel yetenekler", "Dashboard, siparişler, masalar, zemin haritaları, yemek-in veya kaçış ve canlı aktivite bir işletim alanında kalır."], ['04', "rol perspektifleri", "Sahibi, yönetici, hizmet personeli ve mutfak takımları aynı restoran bağlamını farklı detay seviyelerinde kullanır."], ['02', "Servis kanalları", "Dine-in ve takeaway, restoran gününün ayrı versiyonları olmadan birlikte takip edilebilir."], ['01', "Paylaşılan işletim resim resmi", "Bir durum değişikliği, bir kapanış ekranında sona erdirmek yerine aynı restoran hikayesini güncellemelidir."]],
    workflowEyebrow: "Beş adımda bir değişim",
    workflowTitle: "Canlı servis dönemi operasyonları katmanı aracılığıyla nasıl hareket eder.",
    workflowIntro: "İş akışı, mevcut durumu, sorumlu rolü ve bir sonraki eylemi tanımlamak için tasarlanmıştır.",
    workflow: [["Değişim bağlamı yükleme", "Açık rezervasyonlar, aktif tablolar, açık siparişler, kaçış işleri ve hizmet baskı inşalarından önce zemin görünümü."], ["istisna istisna istisnaları", "Beklemek konuklar, gecikmiş siparişler, ücretsiz masalar veya yönetim dikkatine ihtiyaç duyan zemin alanları bulun."], ["İşi sorumlu rolüne taşıyın", "Servis personeli hizmet eylemleri görür, mutfak hazırlık işi görür ve yöneticiler daha geniş istisna görüşünü tutar."], ["Hizmeti kapat", "Siparişi, masayı, hazırlığı ve ödeme durumunu güncelleyin, böylece bir sonraki ekip üyesi eski bir statüden çalışmaz."], ["Tamamlanan değişimi gözden geçirin", "Gelirle karşılaştırın, konuklar, masa hareketi ve hizmet periyodundan sonra operasyonel istisnalar."]],
    rolesTitle: "Her rol aynı restoran gününden farklı bir detay seviyesine sahiptir.",
    rolesIntro: "Hedef her kişiyi yönetim panounu kullanmamak değildir. Paylaşılan bağlamı korurken odaklandığı her rolü tutmaktır.",
    roleViews: [["İşletme Sahibi", "Yorumlar geliri, misafir hacmi, masa cirosu ve iş sonucunu etkileyen istisnalar."], ["Yönetici", "Zemini, açık siparişleri, gecikmeleri, kaçış aktivitelerini ve değişim sırasında koordinasyona ihtiyaç duyan eylemleri izleyin."], ["Servis ekibi", "Görevli masalar, siparişler, misafir talepleri, servis durumu ve kontrol bağlamı ile çalışır."], ["Mutfak Mutfak Mutfak", "Sipariş detayı, notlar, zamanlama ve hazır-serve handoff statüsü ile çalışmanızı sağlayın."]],
    metricsTitle: "İşletim akışının çalıştırmak için daha kolay hale geldiğini ölçül.",
    metricsIntro: "İlk önce bir temel alın, sonra uygulamadan sonra aynı tanımı ve hizmet süresini karşılaştır.",
    metrics: [["varış zamanı", "Konuklar varış veya check-in arasında ne kadar uzun bekler ve oturmaya, bu olayların nerede yakalanır."], ["Siparişten hazırlığa geçen süre", "Sipariş onayı ile çalışmayı alan ya da başlayan mutfak arasındaki aralığı ölçme."], ["Masa cirosu", "Her hizmet modeli için tutarlı bir tanım kullanarak masadan oturma zamanı izleyin."], ["Bill-to-search time", "Son checkout aşamasının ödeme statüsünü tamamlamak için fatura isteğinden ne kadar süre alır."]],
    implementationTitle: "Yerde, statüler ve mülkiyet devam etmeden önce.",
    implementationIntro: "İşletim görüşü sadece masa haritası, durum tanımları, rol izinleri ve bunun arkasında bağlantılı veriler olarak açıktır.",
    implementation: ["Kat haritaları, masa tanımlayıcıları ve kapasite yapısı", "Dine-in ve kanal tanımları", "Sipariş, masa, mutfak ve ödeme durumu sözlüğü", "Rol izinleri ve istisna mülkiyet", "POS veya çalışan görüşe mevcut ödeme verileri", "Basel dönemi ve metrik tanımları gözden geçirmek için"],
    faqs: [["PayMyDine POS yerini alıyor mu?", "Varsayılan olarak değil. Ürün, POS bağlantılarını veya seçilmiş standalone modüllerini destekleyen işletim, misafir, ekip ve anlayış katmanlarını ekleyebilir."], ["Bir kattan daha fazla destekleyebilir mi?", "Evet. Mevcut ürün haritası zemin haritaları ve birden çok katlı restoran kurulumları içerir."], ["Yemek yiyebilir ve ayrı kalabilir mi?", "Hala bir yönetim görüşüne katkıda bulunurken farklı kanal bağlamını tutabilirler."], ["Her statü gerçek zaman mı?", "Tazelik, dağıtımda mevcut olan modül, bağlantılı sistem, izinler ve yenileme yöntemine bağlıdır."]]
  },
  reservations: {
    factsEyebrow: "Rezervasyon ve oturma kapsamı",
    factsTitle: "Yedi planlama yetenekleri rezervasyonları, varışları ve canlı zemini bağlar.",
    factsIntro: "Geçerlilik ve oturma mantığı gerçek hizmet dönemleri, zemin yapısı ve işletim kuralları etrafında yapılandırılmalıdır.",
    facts: [['07', "rezervasyon yetenekleri", "Takvim, zaman çizelgesi, kullanılabilirlik, yürüyüş-ins, masa atama, misafir akışı ve birden çok kat mevcut ürün kapsamını oluşturur."], ['03', "Planlama görüşlerini planlama", "Takvim, zaman çizelgesi ve canlı zemin bağlamı daha önce ve hizmet sırasında farklı kararlar destekler."], ['02', "varış türleri", "Onaylanmış rezervasyonlar ve yürüyüşler daha geniş kapasite resmini kaybetmeden ele alınabilir."], ['LIVE', "Zemin bağlamı", "Osted, mevcut ve rezervasyon hazır masa eyaletleri oturma kararına yakın kalıyor."]],
    workflowEyebrow: "Oturmak için",
    workflowTitle: "Bir rezervasyon ayrı bir liste yerine masa kararı nasıl olur.",
    workflowIntro: "Planlama görüşü, restoranın canlı varışlara hazırlıktan hareket ettiğinde faydalı olmalıdır.",
    workflow: [["Servis yapısını yapılandırın", "Hizmet dönemleri, zemin haritaları, masa kapasitesi ve restoran tarafından kullanılan erişilebilir kurallar."], ["Seyahat rezervasyonları ve yürüyüş-ins", "Parti boyutunu tut, her beklenmeyen veya planlanmamış varışlara ek zaman ve kaynak bağlamı."], ["Varış görüşünü hazırlayın", "Konukların resepsiyona ulaşmadan önce bir sonraki talep penceresini anlamak için takvim veya zaman çizelgesi kullanın."], ["Zeminle koltuk görünür", "Adım veya reassign tabloları yalnızca rezervasyon listelerinden ziyade mevcut kullanılabilirlik ve hizmet durumunu kullanıyor."], ["Oturma sonucu", "Ön varışlar, hiçbir gösteri, zaman bekleme, masa kullanımı ve tutarlı olay tanımları ile ciro."]],
    rolesTitle: "Resepsiyon, yönetim kapasite ve hizmet tutarken kapıyı planlar.",
    rolesIntro: "Rezervasyon çalışması özelleştirilmiştir, ancak oturma kararı hala hizmet personeli, mutfak ve mülkiyet raporlamasını etkiler.",
    roleViews: [["Rezervasyonlar ve resepsiyon", "Gelecek varışlara bakın, parti büyüklüğü, rezervasyon detayları, kullanılabilirlik ve bir sonraki oturma kararı."], ["Yönetici", "Kapasite basıncı, yürüyüşleri, gecikmiş varışlar ve oturma seçimlerinin aktif zemini nasıl etkilediği."], ["Servis ekibi", "Oturmadan sonra hizmete başlamak için masa ve misafir bağlamı alın."], ["İşletme Sahibi", "Yorumlar örüntüleri talep eder, şovlar, kullanımlar ve masa ciroları dönemler veya yerlerde."]],
    metricsTitle: "Bir yüzdesi icat etmeden planlamayı geliştirmek için rezervasyon olayları kullanın.",
    metricsIntro: "Sistem, web sitesi veya ekip bir gelişme iddia etmeden önce her metrik hesaplamak için gerekli olayları yakalamalıdır.",
    metrics: [["Booking-to-arrival oranı", "Aynı iptal ve gösteri kuralları kullanarak gerçek varışlarla onaylanmış rezervasyonları karşılaştırın."], ["Gelmeme oranı", "Track, var olmayan tarafların, mevcut olan dönem, kaynak veya yer tarafından segmente edilmesi bekleniyor."], ["varış zamanı", "Misafir varışları arasındaki bekleyiş ve karşılaştırılabilir hizmet dönemlerinde oturmayı bekleyin."], ["Masa kullanımı ve ciro", "Mevcut kapasite nasıl kullanılır ve restoranın kendi tanımları altında uzun masalar işgal edilir."]],
    implementationTitle: "Rezervasyon doğruluğu yapılandırma doğruluğu ile başlar.",
    implementationIntro: "Kullanılabilirlik modeli ve bir masa veya rezervasyon durumunu değiştiren olaylar.",
    implementation: ["Hizmet süreleri ve rezervasyon kullanılabilirlik kuralları", "Kat haritaları, masa kapasitesi ve masa durumu tanımları", "Walk-in işleme ve resepsiyon sorumlulukları", "Varış, oturma, iptal ve gösteri olayları", "Kurulum için mevcut olan rezervasyon kaynakları veya entegrasyonlar", "Zaman bekleme kuralları, nemlendirme ve ciro"],
    faqs: [["Sayfa birden çok kat destekleyebilir mi?", "Evet. Birden çok katlı bağlam, mevcut rezervasyon ve masa yönetim kapsamının parçasıdır."], ["Yürüyüş nasıl yapılır?", "Walk-ins canlı varış ve zemin resmine eklenebilir, böylece bir sonraki oturma kararı mevcut kapasiteyi kullanır."], ["PayMyDine, kitabı ne zaman karar verir?", "Kullanılabilirlik kuralları yapılandırılmış restoran politikasına aittir. Platform, kabul edilen bir kural olmadan bir aşırı kitaplama stratejisini düşünmemelidir."], ["Veriler raporlamayı etkileyebilir mi?", "Evet, nerede rezervasyon, varış ve oturma etkinlikleri sürekli olarak yakalanır ve raporlama katmanına sunulur."]]
  },
  kitchen: {
    factsEyebrow: "sipariş ve mutfak kapsamı",
    factsTitle: "Yedi kontroller sipariş yakalama, hazırlık durumu ve menü kullanılabilirliği.",
    factsIntro: "Amaç, hizmet personeli, mutfak ve menü devlet konukları veya personeli arasındaki eksik bağlamı azaltmaktır.",
    facts: [['07', "İş akış kontrolleri", "Waiter ordering, KDS, hazırlama durumu, hazır durum, menü yönetimi, özelleştirme ve satılan bilgi dahil edilmiştir."], ['02', "eleştirel eloffs", "Sipariş hazırlık için hizmetten hareket eder, sonra hazır statü hizmet ekibine geri döner."], ['03', "sipariş bağlamları", "Masa, öğe veya modifier detay ve hazırlık durumu aynı çalışmaya bağlı kalır."], ['01', "Paylaşılan menü durumu", "Menü değişiklikleri ve satılan bilgi, onlara bağlı olan insanlara ve kanallara ulaşmalıdır."]],
    workflowEyebrow: "Hazır olmak için",
    workflowTitle: "Mutfak nasıl tam bir iş alır ve açık bir statü döndürür.",
    workflowIntro: "Yararlı sonuç başka bir bilet ekranı değildir. Güvenilir bir eloff ile okunabilir bir hazırlık kuyruğudur.",
    workflow: [["Siparişi yakalamak", "Masa veya kanal kaydetmek, hizmet akışında öğeleri, modifiers ve notları sipariş etti."], ["Hazırlık çalışması", "Mutfakta ilgili olmayan yönetim bilgileri olmadan çalışmaya başlamak için gerekli olan sipariş detayını ve öncelik bağlamını gösterin."], ["Güncelleme hazırlığı durumu", "Alınan ve in-progress eyaletleri aracılığıyla çalışmaya devam edin, böylece yöneticiler ve hizmet ekipleri neler olduğunu anlayabilir."], ["Mark hizmet için hazır", "Koleksiyonun veya masa servisinin sorumlu rolüne açık bir hazır durumu döndürür."], ["Menü kullanılabilirlik", "Güncelleme öğeleri, özelleştirme ve satılan bilgiler bu yüzden yeni siparişler restoranın hizmet edebileceğini yansıtıyor."]],
    rolesTitle: "Aynı sipariş hizmet, hazırlık ve yönetim için farklı olarak sunulmaktadır.",
    rolesIntro: "Her rol, işin arkasındaki tabloyu ve sipariş kimliğini kaybetmeden eylemleri için gerekli olan detayı görmeli.",
    roleViews: [["Servis ekibi", "Yararlayıcılar ve notlar, sonra doğru masa için hazırlık ve hazır statü takip eder."], ["Mutfak ve KDS", "Ürün detayı, notlar, elapd zaman ve hazırlık durumu ile odaklanmış bir kuyruktan çalışın."], ["Yönetici", "İş yüküne bakın, gecikmiş biletler, hazır elofflar ve menü kullanılabilirlik istisnaları servis sırasında."], ["Menü yönetici", "Menü öğelerini, özelleştirmeyi ve yapılandırılmış sipariş kanalları için tükenme durumunu koruyun."]],
    metricsTitle: "Eloffları ölçül, sadece son bilet zamanı değil.",
    metricsIntro: "Bir restoran her zamanr başladığında ve performansı karşılaştırmadan önce durmalıdır.",
    metrics: [["Order-to-kitchen görünürlük", "Sipariş onayı ile çalışmayı alan hazırlık görüşü arasındaki aralığı ölçme."], ["Hazırlık süresi süresi", "Kabul edilen hazırlığın zamanını, mevcut olan ürün, kategori veya hizmet dönemi ile hazır hale getirmeye başlar."], ["Ready-to-serve bekleme", "Servis eloff'un kabul edilmesinden önce ne kadar uzun süreli iş bekletilir."], ["Sold-out update gecikme gecikme", "Bir erişilebilirlik kararı ile güncel menü durumu ilgili kanala ulaşırken zaman ölçül."]],
    implementationTitle: "Mutfak performansını ölçmeden önce menü ve durum modelini tanımlayın.",
    implementationIntro: "Hazırlık raporlama sadece öğe yapısı, durum olayları ve kanal sahipliği tutarlı olduğunda karşılaştırılabilir.",
    implementation: ["Menü öğeleri, kategoriler, modifier ve hazırlık notları", "KDS görüş ve her kuyruktan sorumlu roller", "Kabul edildi, in-progress ve hazır durum tanımları", "Servis personeli kabul ve hizmet eloff kuralları", "Sold-out sahipliği ve kanal-update gereksinimleri", "POS veya entegrasyon kaynağının gerçek kararlarını sipariş etmek"],
    faqs: [["KDS aynı yönetici paneli olarak mı?", "Hayır. Mutfak görünümü hazırlık çalışmasına odaklanırken, yönetim daha geniş hizmet ve istisna resmi tutar."], ["Satılabilir bilgi güncelleme siparişi satabilir mi?", "Evet, menü kontrolü ve ilgili sipariş kanalları yapılandırılan kurulumun bir parçasıdır."], ["Modifiers ve notlar dahil edilir mi?", "Ürün kapsamı, hazırlık çalışması ile seyahat etmek için gereken menü özelleştirme ve sipariş notları içerir."], ["Farklı sipariş kanalları aynı mutfak akışını kullanabilir mi?", "Kanallarını ve masasını muhafaza ederken bir hazırlık resmine katkıda bulunabilirler ya da uzak bağlamı alabilirler."]]
  },
  payments: {
    factsEyebrow: "Misafir sipariş ve ödeme kapsamı",
    factsTitle: "Sekiz konuk ve checkout anları bir faturayı bölmek için üç pratik yol içerir.",
    factsIntro: "Tam ödeme yöntemleri ve yerleşim verileri dağıtımda mevcut olan sağlayıcı ve entegrasyona bağlıdır.",
    facts: [['08', "Yolculuk anları", "Kart veya dijital ödeme, tabloda ödeme, üç ayrı yöntem, masa QR, mobil menü ve misafir checkout formu mevcut kapsamı oluşturur."], ['03', "bill-split yöntemleri", "Konuklar eşit olarak bölünebilir, sipariş edilen eşyaları veya toplamı hisselerle bölebilir."], ['04', "rol perspektifleri", "Misafir, hizmet personeli, yönetim ve finans her birinin aynı çekin farklı bir görünümüne ihtiyacı vardır."], ['01', "bağlantılı yolculuk", "Menü erişim, sipariş, hizmet bağlamı ve ödeme ayrı deneyimler olarak yeniden başlamamalıdır."]],
    workflowEyebrow: "Masadan QR'e yerleşmek için",
    workflowTitle: "Bir misafir eylemi nasıl tamamlanmış ve görünür bir ödeme etkinliği haline gelir.",
    workflowIntro: "Masa, restoran sipariş ve yerleşim bağlamı korurken bir sonraki adımı anlamalıdır.",
    workflow: [["Masa yolculuğunu açın", "Bir misafir masa QR'i tarar veya yapılandırılmış mobil menüye girer ve deneyim sipariş eder."], ["Siparişi oluşturun veya gözden geçirin", "Maddeler, notlar ve masa bağlamı misafir veya ekip kontrol için hazırlar."], ["checkout", "Misafir faturayı inceliyor ve restoran kurulumunda mevcut olan ödeme yolunu seçiyor."], ["Bir maaşlayıcı veya bölünmüş bir yöntem seçin", "Bir maaşçı masaya girebilir veya grup, eşya sipariş ederek veya hisselerle aynı şekilde bölünebilir."], ["Restorana durumu Onaylayın", "Tamamlanmış, kısmi veya çözülmemiş ödeme bağlamı takıma geri döner ve desteklenen iş akışlarını rapor eder."]],
    rolesTitle: "Konukların netliğe ihtiyacı var; restoranın yerleşim bağlamına ve temiz bir eloffa ihtiyacı var.",
    rolesIntro: "Basit bir misafir arayüzü hala ekip tarafından gerekli olan operasyonel ve raporlama bilgilerini sağlamalıdır.",
    roleViews: [["Guest Guest Guest Guest Guest Konuk", "Gözler, siparişler, istekler hizmeti ve restoranın iç sistemlerini öğrenmeden yapılandırılmış masa yolculuğu aracılığıyla öder."], ["Servis ekibi", "Fatura statüsüne bakın, ödeme ilerlemesi ve masanın hala hizmet veya yerleşim dikkati gerektirdiğine bakın."], ["Yönetici", "Eksik ödemeler, istisnalar ve checkout zamanlamasının masa kullanılabilirliği üzerindeki etkisi."], ["Finans ve raporlama", "Ödeme faaliyetleri, sağlayıcı veya POS bağlantılarından mevcut yöntem karışımı ve uzlaşma bağlamı."]],
    metricsTitle: "Ön kontrol tamamlandı ve masayı serbest bırakmak için gereken zaman.",
    metricsIntro: "Metrikler aslında dağıtımda yakalanan sağlayıcı ve restoran etkinlikleri kullanmalıdır.",
    metrics: [["Bill-request-to- ödemeleri zamanı", "Misafir veya ekip kontrole başlayan ve doğrulanan tamamlanma arasındaki aralığı kontrol edin."], ["Dijital checkout tamamlandı", "Track, gerekli olayların mevcut olduğu yolculuklara karşı checkout yolculuklarını tamamladı."], ["Split-method karışımı", "Çoğu zaman konukların eşit, madde bazlı veya paylaşılan dönemler sırasında eşit olarak bölünmesini anlayın."], ["Ödeme ve istisna karışımı", "Ödeme yöntemleri, eksik girişimler ve çözülmemiş yerleşim durumlarını bağlantılı sistemlerden temin edin."]],
    implementationTitle: "Ödeme yapılandırması sağlayıcı, masa ve uzlaşma kararları gerektirir.",
    implementationIntro: "Misafir yolculuğu ve arka ofis statüsü, başlamadan önce aynı tanımlamalara ihtiyaç duyar.",
    implementation: ["Destekli ödeme sağlayıcısı ve mevcut statü alanları", "Masa ve QR her misafir yolculuğu için haritalama", "eşit, öğe ve bölünmüş kuralları paylaşıyor", "Partial, tamamlandı ve başarısız ödeme statüsü işleme", "POS veya finans uzlaşma sorumlulukları", "Ödeme istisnalarını görüntülemek ve çözmek için Rol izinleri"],
    faqs: [["Hangi bölünmüş yöntemler desteklenir?", "Mevcut ürün kapsamı eşit bölünmeler içerir, sipariş edilen öğe ve bölünmeyi hisselerle sipariş ederek."], ["Her restoran konuk siparişi kullanmalı mı?", "Hayır. Misafir siparişi, ödeme amaçlı ve ödeme modülleri restoran kurulumuna göre seçilebilir."], ["Her ödeme sağlayıcısı aynı verileri açığa çıkarır mı?", "Hayır. Ödeme yöntemleri, durum detayı, yerleşim alanları ve yenileme davranışı sağlayıcı ve entegrasyona bağlıdır."], ["Takım bir masanın ödediği zaman görebilir mi?", "Evet, nerede ödeme statüsü yapılandırılabilir ve izinler onu görme rolüne izin verir."]]
  },
  insights: {
    factsEyebrow: "Analytics ve kârlılık kapsamı",
    factsTitle: "Dokuz yönetim metrikleri talep, hizmet, satış ve kârlılığa bağlanır.",
    factsIntro: "Bir metrik, kaynağının tanımı, zaman süresi ve yer haritası belgelendiği zaman sadece güvenilirdir.",
    facts: [['09', "Yönetim metrics", "Gelir, konuklar, ortalama kontrol, masa cirosu, satış zamanlaması, en iyi satıcılar, ödeme karışımı, tahmin ve kârlılık dahil edilir."], ['02', "kârlılık seviyeleri", "Karability, gerekli maliyet ve satış verilerinin mevcut olduğu ürün veya konum tarafından incelenebilir."], ['04', "Karar rolleri", "Sahibi, yönetici, finans ve operasyonel farklı kararlar için aynı ölçümleri okur."], ['03', "Karşılaştırma boyutları", "Dönem, yer ve sipariş kanalı karşılaştırmaları bir başlık numarasının arkasındaki hareketi açıklayabilir."]],
    workflowEyebrow: "Olay verilerinden bir karara",
    workflowTitle: "Restoran aktivitesini nasıl araştırılabilir bir metrik haline gelir.",
    workflowIntro: "Raporlama katmanı, kaynak olaylarına ve tanımlarına geri bir özetten yolu korumalıdır.",
    workflow: [["Kaynak olayları toplayın", "Siparişler, masalar, konuklar, rezervasyonlar ve ödemeler raporlama ortamına mevcut verilere katkıda bulunur."], ["Kabul edilen tanımları uygulayın", "Define dönemleri, yerler, kanallar, gelir tedavisi, sonuçları karşılaştırmadan önce giriş ve maliyet girişleri."], ["İşletim panolarını gözden geçirin", "Mevcut sonuçları görün ve sistemli modüllerle ilgili yönetim ölçümlerinde değişiklikler."], ["Harekete Geçin", "Dönem, yer, kanal, kategori veya eşya değişikliğin arkasındaki işletim bağlamı bulmak için filtre."], ["Act ve tekrar karşılaştırın", "Bir sonraki operasyonel soruyu veya eylemi imzalarken, daha sonraki bir dönemde aynı metrik tanımı karşılaştırır."]],
    rolesTitle: "Aynı sayı, mülkiyet, yönetim ve finans için farklı soruları destekler.",
    rolesIntro: "Rol tabanlı raporlama, okuyucudan beklenen derinlik ve eylemi değiştirerek kaynağı tutarlı tutar.",
    roleViews: [["İşletme Sahibi", "Gelirle karşılaştırıldığında, misafir talebi, lokasyon performansı ve kârlılığı dikkat veya yatırımın gerekli olduğuna karar vermek."], ["Yönetici", "Bağlantılar masası, hizmet ve satış ölçümleri, değişimi şekillendiren operasyonel olaylara."], ["Finans Finans", "Yorumlar gelir tedavisi, ödeme karışımı, kategoriler, maliyet girişleri ve operasyonların dışındaki raporlama alanları."], ["Operasyonel liderlik", "Hizmet, menü veya personel kararları ayarlamak için zamanlama, en iyi-seller ve kanal verilerini kullanın."]],
    metricsTitle: "Dokuz metrik dört pratik yönetim grubu oluşturur.",
    metricsIntro: "Kullanılabilirlik ve doğruluk, restoran ortamında mevcut olan modüllere, entegrasyonlara ve maliyet verilere bağlıdır.",
    metrics: [["Talep ve gelir", "Gelir, misafir sayısı ve ortalama kontrol, seçilen dönemde talep ölçeği ve değerini gösterir."], ["Kat ve servis", "Masa cirosu ve satışlar, restoranın nasıl işlediğine kadar ticari sonucu bağlar."], ["Ürün ve ödeme", "En iyi satıcılar ve ödeme karışımı, konukların ne satın aldığını ve masanın nasıl yerleştiğini gösterir."], ["Tahminler ve kâr", "Tam girişler mevcut olduğunda öğe veya konum desteği ile artı kârlılığı tahmin edin."]],
    implementationTitle: "Bir raporlama projesi tanım ve veri mülkiyeti ile başlar.",
    implementationIntro: "Dashboards gelir, konuklar, maliyetler veya karşılaştırma dönemleri hakkında anlaşmazlıkları saklamamalıdır.",
    implementation: ["Sipariş, rezervasyon, masa ve ödeme veri kaynakları", "Konum, kanal, kategori ve ürün haritaları", "Gelir, misafir, ortalama kontrol ve ciro tanımları", "Gıda maliyeti veya diğer maliyet girişleri kârlılık için gereklidir", "Raporlama ve karşılaştırma kuralları", "Rol izinleri ve veri kalitesi inceleme mülkiyet"],
    faqs: [["PayMyDine maliyet verileri olmadan kârlılığı hesaplayabilir mi?", "Gerekli satışlar, eşya ve maliyet girişleri olmadan güvenilir bir kârlılık figürü üretilemez."], ["Garantili bir sonuç mu?", "Hayır. Tahminler, gerçek sonuçlarla karşılaştırılacak ve ekip tarafından incelenmelidir."], ["Yerler karşılaştırılabilir mi?", "Evet, yer haritaları ve metrik tanımları seçilmiş sitelerde tutarlı olduğunda."], ["AI bir metrik açıklayabilir mi?", "AI, mevcut verilerle ilgili summaries ve soruşturmayı destekleyebilir, kaynak görüşleri ve insan kararı görünürken."]]
  },
  team: {
    factsEyebrow: "Rol tabanlı takım kapsamı",
    factsTitle: "Altı iş alanı ve beş takım kontrolleri sorumlulukla uyumlu erişim tutar.",
    factsIntro: "Rol tabanlı tasarım her insanın ne gördüğünü değiştirir; altı ayrı restoran sistemi yaratmaz.",
    facts: [['06', "rol çalışma alanları", "Sahibi, yönetici, hizmet personeli, mutfak, rezervasyonlar ve finans PayMyDine'te farklı ürün hikayelerine sahiptir."], ['05', "Takım kontrolleri", "Rol çalışma alanları, izinler, değişim yönetimi, performans anlayışı ve personel aktivitesi mevcut kapsamı oluşturur."], ['02', "görünürlük seviyeleri", "Odaklı rol görüşleri günlük çalışmayı desteklerken, yönetim daha geniş operasyonel bağlam tutar."], ['01', "paylaşılan operasyon", "Masa, sipariş, rezervasyon, mutfak ve ödeme bağlamı aynı restoranın bir parçasıdır."]],
    workflowEyebrow: "Rol tasarımından günlük kullanım için",
    workflowTitle: "İzinler ve odaklanmış çalışma alanları nasıl bir işletim modeli haline gelir.",
    workflowIntro: "Yararlı sonuç açık sorumluluk, sadece daha fazla kullanıcı hesabı değildir.",
    workflow: [["Harita gerçek sorumlulukları", "Ekran veya izin vermeden önce her restoran rolüne ait kararlar ve eylemler."], ["Set erişim kasıtlı olarak", "Her bir rolü modüller, konumlar ve bilgileri gereksiz iş görünürlüğü olmadan çalışması için gereklidir."], ["Configure odaklanmış görüşler", "Masayı, siparişi, hazırlığı, rezervasyon veya raporlama bağlamını bir sonraki eylem etrafında düzenleyin."], ["Servis sırasında iş alanını kullanın", "Eloff'tan sorumlu kişi veya rolüne bağlı olarak eylemleri ve durumu değiştirin."], ["İnceleme ve adaptasyon", "Güncelleme izinleri, takım yapısı veya restoran sorumlulukları değişimi olarak gemi ve iş alanı kapsamı."]],
    rolesTitle: "Six workspaces altı farklı restoran soruya cevap verir.",
    rolesIntro: "Aşağıdaki örnekler, tek bir evrensel paniğe neden hem operasyonel hem de iş rolleri için gürültü oluşturacaktır.",
    roleViews: [["Sahibi ve finans", "Her masa veya mutfak bileti çalıştırmadan gelir, performans, ödeme ve raporlama bağlamına ihtiyaç var."], ["Yönetici", "Canlı zemine, açık çalışma, istisnalara ve takım aktiviteye ihtiyacınız var."], ["Servis personeli ve rezervasyonları", "Konuklara, masalara, rezervasyonlara, siparişlere ve hizmet eylemlerine ilişkin olmayan finansal yönetime ihtiyaç vardır."], ["Mutfak Mutfak Mutfak", "Yönetim arayüzünün geri kalanı olmadan ayrıntılı, zamanlama ve hazır eloff'a ihtiyaç vardır."]],
    metricsTitle: "Rol tasarımının belirsizliği ve eloff gecikmesini azaltıp azaltıp azaltıp azaltmadığını değerlendirin.",
    metricsIntro: "Bu metrikler kabul edilen olaylar veya takım-kömürgeme yöntemleri gerektirir; otomatik performans iddiaları değildir.",
    metrics: [["Erişim doğruluğu", "İnsanların sorumluluğu dışında izin almadan ihtiyaç duydukları bilgilere ulaşabileceklerini gözden geçirin."], ["Eloff zamanı", "Bir durumu tamamlamak ve bir sonraki sorumlu rolün çalışmayı kabul etme zamanı."], ["Workspace kabul", "Uygulama olaylarının mevcut ve uygun olduğu yapılandırılmış rol görüşlerinin aktif kullanımını takip edin."], ["Doğru çözüm", "Operasyonel istisnalar, karşılaştırılabilir hizmet süreleri sırasında ne kadar süre çözülmez."]],
    implementationTitle: "Bir işletim tasarımı olarak izinleri tedavi etmek, tek zamanlı bir teknik görev değil.",
    implementationIntro: "Ekip, erişim kararlarına kimin sahip olduğunu ve nasıl değişiklikler devam ettikten sonra incelenmelidir.",
    implementation: ["Rol ve sorumluluk matrisi", "Modül, yer ve veri izinleri", "Her rol için iş alanı içeriği", "Ofis ve rol özel eğitim", "Access-otel and offboarding process", "İzin ve iş akış değişiklikleri için mülkiyet"],
    faqs: [["Her rol farklı verileri görüyor mu?", "Roller aynı alt restoran ortamında çalışırken farklı seviyeleri ve eylemleri görebilir."], ["Bir kişinin birden fazla rolü olabilir mi?", "Bu sorumluluka göre yapılandırılabilir, izin modeli kasıtlı olarak incelenir."], ["Rol çalışma alanları yönetim görünürlüğünü ortadan kaldırır mı?", "Hayır. Odaklı ekip görüşleri daha geniş yönetici, sahibi ve finans görüşleriyle birlikte çalışabilir."], ["Başlamadan sonra değişiklik izin verebilir mi?", "Evet. Erişim ve çalışma alanı kapsamı insanlar, konumlar ve sorumluluklar değişir."]]
  },
  'guest-ordering': {
    factsEyebrow: "Guest CRM ve büyüme kapsamı",
    factsTitle: "Altı büyüme yetenekleri misafir kimliği, bağlılık ve tekrar ziyaretleri bağlar.",
    factsIntro: "Büyüme sonuçları onay, profil kalitesi, restoran yürütme ve mevcut ölçüm verilerine bağlıdır.",
    facts: [['06', "büyüme yetenekleri", "Profiller, sadakat, teklifler, kampanyalar, geri bildirim ve saklama mevcut konuk kapsamı oluşturur."], ['04', "rol perspektifleri", "Konuk, hizmet personeli, yönetim ve pazarlama veya mülkiyet ilişkinin farklı kısımlarını kullanır."], ['05', "Yaşam döngüsü adımları", "Tanım, anlamak, segment, meşgul ve ölçü pratik bir misafir-growth döngüsü yaratır."], ['01', "misafir ilişkisi", "Ziyaret, sipariş ve geri bildirim bağlamı, kimlik ve onayın izin verdiği bir profiline katkıda bulunabilir."]],
    workflowEyebrow: "Ziyaret bağlamından tekrarlanan bir ölçüye",
    workflowTitle: "Restoran etkileşimleri nasıl yararlı misafir ilişkisi verileri haline gelir.",
    workflowIntro: "İş akışı, her misafir etkileşimi bir indiscriminate pazarlama kaydına dönüştürmek olmadan ilgiyi geliştirmeli.",
    workflow: [["Misafiri tanımlayın veya ziyaret edin", "Mevcut kimlik, ziyaret veya masa bağlamını yapısal misafir yolculuğu ve onay kuralları kullanarak yakalayın."], ["Faydalı etkileşim verileri", "Connect siparişleri, verilerin mevcut ve uygun olduğu ilişki için sadakat aktivitesi veya geri bildirimler sunar."], ["Pratik segmentler oluşturun", "Grup misafirleri, aynı mesajı herkese göndermek yerine ilgili davranış veya ilişki kriterlerine göre."], ["Bir teklif veya kampanya çalıştırın", "Tanımlanmış bir seyirci ve hedef etrafında yapılandırılmış sadakat, teklif veya kampanya araçları kullanın."], ["Geri sinyal sinyali", "İnceleme, geri bildirim, tekrar ziyaretler veya diğer kabul edilen sonuçlar orijinal seyirci ve dönemlere karşı."]],
    rolesTitle: "Guest growth, restoran deneyimine de kampanya ekranına bağlıdır.",
    rolesIntro: "Profiller ve teklifler, hizmet personeli bağlamı, yönetim kararları ve misafir onayı uyumlu olduğunda faydalıdır.",
    roleViews: [["Guest Guest Guest Guest Guest Konuk", "İlgili bir sadakat, teklif, geri bildirim veya yapılandırılmış dokunuş noktası aracılığıyla deneyimi sipariş edin."], ["Servis ekibi", "gereksiz profil veya kampanya yönetimi olmadan hizmeti desteklemek için uygun misafir bağlamını kullanın."], ["Yönetici", "Yorumlar feedback temaları, servis sorunları ve restoran operasyonu ile kampanya etkileri."], ["Sahibi veya pazarlama", "Defines segmentleri, mevcut misafire dayanan ve verileri ziyaret eden kampanyalar ve saklama önlemleri sunar."]],
    metricsTitle: "İlişkinin tanımlanabilir, ilgili ve tekrarlanabilir olup olmadığını ölçmek.",
    metricsIntro: "seyirciye kadar bir saklama veya gelir asansörü iddia etmeyin, temel, dönem ve atama yöntemi belgelenir.",
    metrics: [["Idenated-guest rate", "Sınırlı onay modeli altında kullanılabilir bir misafir kimliğine bağlı olarak uygun ziyaretlerin payını ölçmek."], ["Tekrar denetim oranı", "Uygun bir kimlik kullanarak kabul edilen bir zaman içinde dönen konuklarla ve ziyaret tanımı."], ["Teklif", "Tüm restoran trafiğinden ziyade uygun kitleye ve kampanya dönemine karşı ayak uydurun."], ["Geri bildirim", "Önlemler ziyaretlere veya izleyicilere karşı geri bildirim ve inceleme temaları cevap vermeye davet etti."]],
    implementationTitle: "Guest growth açık onay, kimlik ve ilişkilendirme kuralları gerektirir.",
    implementationIntro: "İlişki modeli, restoran tarafından konuk ve denetim edilebilir anlaşılabilir olmalıdır.",
    implementation: ["Guest consent and data-responability model", "Profil alanları ve kimlik uyumlu kurallar", "Ziyaret, sipariş, sadakat ve geri bildirimler veri kaynakları", "İzleyici ve segment tanımları", "Teklif veya kampanya uygunluk ve kurtuluş kuralları", "Tekrar ziyaret ve kampanya-attribution ölçüm yöntemi"],
    faqs: [["Bu aynı masa QR ödemesi mi?", "Hayır. Ödeme ürünü işlem yolculuğunu kapsar; bu ürün alanı profiller, sadakat, kampanyalar, geri bildirim ve saklamaya odaklanır."], ["Her misafir bir profil oluşturmalı mı?", "Hayır. Profil oluşturma ve tanımlama, yapılandırılmış yolculuğa, misafir seçimine ve uygulanabilir onay kurallarına bağlıdır."], ["Tarih destek segmentasyonu sipariş edebilir mi?", "Evet, kimlik nerede, sipariş veri, izinler ve seçilmiş misafir-growth modüller bu bağlamı mevcut kılar."], ["Bir kampanya tekrar ziyaretleri garanti ediyor mu?", "Hayır. Kampanya ve saklama performansı, tanımlanmış bir seyirci, temel ve karşılaştırma süresine karşı ölçülmelidir."]]
  }
};
for (const [slug, details] of Object.entries(solutionDetailExpansions)) {
  if (!solutionPages[slug]) {
    throw new Error(`Missing solution page for detailed product copy: ${slug}`);
  }
  solutionPages[slug].details = details;
}

// === PMD PRODUCT PAGE DEPTH V2 END ===

export const resources = [{
  slug: 'getting-started',
  title: "PayMyDine ile başlayın",
  category: "Uygulama",
  intro: "Operasyonel keşif ve ürün kapsamından rol yapılandırması, entegrasyon incelemesi, geçerlilik ve ölçülmüş go-can.",
  image: '/site-assets/extra/team-planning.webp',
  articleImage: '/site-assets/extra/kitchen-orders.webp',
  sections: [["Restoranla başlayın, bir özellik listesi değil", "Mevcut işletim modelini, takım rollerini, misafir yolculuğunu ve teknoloji ortamını PayMyDine modüllerinin ilk kurulumda yer aldığına karar vermeden haritalayın."], ["Sorumluluklar etrafında yapılandırın", "İş alanları, izinler, zemin yapısı ve her takımın ihtiyaç duyduğu iş akışlarını tanımlayın, bu yüzden sistem restoranın aslında çalıştığını yansıtıyor."], ["Açık aşamalarda başlatılan plan", "İnceleme entegrasyonları, ekip hazırlar, işletim akışını doğrulayın ve ihtiyaçlar geliştikçe uzatılabilir bir yapılandırma ile birlikte hareket edin."]]
}, {
  slug: 'role-based-workspaces',
  title: "Rol tabanlı restoran çalışma alanları tasarımı",
  category: "Takımları",
  intro: "6 rol çalışma alanları, restoran bağlamını bağlı tutmak için gürültü ve izinleri nasıl azaltır.",
  image: '/site-assets/extra/qr-ordering-scene.webp',
  articleImage: '/site-assets/extra/outdoor-qr-toast.webp',
  sections: [["Sorumluluk için görüşe katılın", "Sahiplik performans bağlamına ihtiyaç duyar. Servis personeli masalara, siparişlere ve misafir taleplerine ihtiyaç duyuyor. Mutfak hazırlığı çalışmasına ihtiyaç duyar. Rol tabanlı tasarım her çalışma alanı odaklanmış tutar."], ["Daha geniş operasyonu bağlı tutmak", "Ayrı çalışma alanları restoranın ayrı versiyonları oluşturmamalıdır. Yararlı bağlam, bir sonraki adımdan sorumlu insanlar arasında hala hareket etmelidir."], ["İzinleri kasıtlı olarak kullanın", "Access sorumluluğu takip etmelidir, böylece her rol gereksiz yönetici veya iş bilgisi olmadan güvenle çalışabilir."]]
}, {
  slug: 'ai-in-restaurant-operations',
  title: "AI restoran operasyonlarına yardımcı olabilir",
  category: "AI ve içgörüler",
  intro: "Nasıl sorulur, özetleme, karşılaştırma, uyarı, tahmin ve kaynak verilerini saklamadan 9 restoran metrikleri araştırın.",
  image: '/site-assets/extra/friends-dinner.webp',
  articleImage: '/site-assets/extra/restaurant-entrance.webp',
  sections: [["Yararlı bir soru ile başlayın", "AI gerçek bir işletim soruyu cevaplamaya yardımcı olduğunda daha değerli hale gelir, ne değişti, farklı bir şekilde performans gösterir veya hangileri hak eder."], ["Kaynak verilerini görünür tutun", "AI yardımı alt restoran bilgilerinin yanında oturmalı, böylece sahipleri ve yöneticiler bir özet veya gözlemin arkasındaki bağlamı anlayabilirler."], ["Onları değiştirmek yerine destek kararları", "AI'in faydalı rolü, operasyonel kararların kontrolünü tutarken araştırma, özetleme ve karşılaştırma yapmak için daha kolay bilgi sağlamaktır."]]
}, {
  slug: 'guest-ordering-journey',
  title: "Restoranın bir parçası olan konuk sipariş yolculuğu tasarlayın",
  category: "Konuk deneyimi",
  intro: "4-action guest yolu - tarama, göz, sipariş ve ödeme - hizmet personeli, mutfak ve ödeme akışları için açık bir çalışma yaratır.",
  image: '/site-assets/extra/payment-cafe-table.webp',
  articleImage: '/site-assets/extra/payment-dinner.webp',
  sections: [["İlk eylemi açıklayın", "Masa QR, restoran bağlamı hazır ve bir sonraki eylemi anlamak için açık bir mobil deneyim haline gelmelidir."], ["Hizmeti yakın tut", "Dijital sipariş hala notları desteklemeli, garson aramaları ve gerçek hizmet ekibi, yemeği kendi hizmet arayüzüne dönüştürmek yerine."], ["Seyahati checkout aracılığıyla taşıyın", "Sipariş ve ödeme, misafirin yemek sonunda deneyimi yeniden başlatması gerektiğinde daha kullanışlı hale gelir."]]
}, {
  slug: 'reservations-and-floor-planning',
  title: "rezervasyonları ve zemin planlamasını birlikte getirin",
  category: "Rezervasyonlar",
  intro: "7 rezervasyon ve oturma yetenekleri varış yükü, parti büyüklüğü ve canlı zemin kapasitesi pratik bir oturma kararına nasıl dönüşür.",
  image: '/site-assets/extra/tablet-dashboard.webp',
  articleImage: '/site-assets/extra/payment-approved.webp',
  sections: [["Günün şekline bakın", "Önümüzdeki rezervasyonlar, parti boyutları ve zamanlaması, konukların kapıya ulaşmadan önce talep anlamalarına yardımcı olur."], ["Zemini aynı hikayede tut", "Kullanılabilirlik, işgal edilmiş masalar ve rezervasyon hazır masalar, bir rezervasyon listesini bir oturma planına dönüştürmek için gereken bağlamı ekleyin."], ["Şu anda uyanan manzarayı seçin", "Takvim, zaman çizelgesi ve liste görüşleri planlamayı destekleyebilir, canlı zemin şimdi gerçekleşen kararlarla yardımcı olur."]]
}, {
  slug: 'pos-integration-planning',
  title: "Yararlı bir POS entegrasyonu",
  category: "Entegrasyonlar",
  intro: "Bir POS entegrasyonu inşa etmeden önce veri kaynağını, alanları, yön, yenileme ve sorumlu rolü nasıl tanımlayabilirsiniz.",
  image: '/site-assets/extra/power-up-pos.webp',
  articleImage: '/site-assets/extra/dashboard-menu-mockup.webp',
  sections: [["Mevcut çevre ile başlayın", "Restoranın zaten ne kullandığını ve hangi iş akışlarının hangi bağlantı kurma gerektiğini karar vermeden önce geliştirmek istediğini anlayın."], ["Mevcut yeteneklerinden çalışmak", "Entegrasyon kapsamı API'lere, mevcut POS ortamı tarafından sağlanan izinlere ve verilere bağlıdır."], ["Öncekiitise faydalı bağlantılar", "Hedef her şeyi varsayılan olarak değiştirmek değildir. Operasyon veya misafir yolculuğu daha güçlü kılan PayMyDine yeteneklerini eklemektir."]]
}];
export const integrations = ['SumUp', 'ready2order', "Işık Hızlı", "Square Square Square"];
export const integrationFeaturePills = ["POS verileri", "Muhasebe bağlamı", "Teslimat kanalları", "Ödeme sağlayıcıları", "Central raporlama Merkezi", "Envanter"];

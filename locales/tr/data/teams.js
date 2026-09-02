export const teamPages = {
  owner: {
    label: "İşletme Sahibi",
    eyebrow: "İşletme sahipleri için - 6 iş göstergesi",
    title: "Tüm ekip ekranlarını tek tek açmadan işletmenin genel durumunu görün.",
    intro: "Tek bir işletme sahibi görünümünde gelir, müşteri sayısı, masa hareketliliği, rezervasyonlar, mutfak durumu ve en çok satan ürünleri inceleyin. Ardından neyin değiştiğini ve hangi metriğin daha yakından incelenmesi gerektiğini sorun.",
    heroImage: '/site-assets/owner/1.webp',
    accent: 'green',
    highlights: [
      [
        "Gelir ve talep",
        "Veri mevcut olduğunda geliri, müşteri sayısını ve ortalama hesap tutarını dönem, servis aralığı veya şubeye göre karşılaştırın."
      ],
      [
        "Salon ve servis",
        "Dolu masaları, masa devir hızını, açık siparişleri ve aktif servisi ekiplerden ayrı ayrı durum bilgisi istemeden takip edin."
      ],
      [
        "Mutfak ve menü",
        "Hazırlık durumunu, en çok satan ürünleri, tükenen ürün eğilimlerini ve ürün performansını işletmenin genel görünümü içinde inceleyin."
      ],
      [
        "Yapay Zekâ destekli sorular",
        "Neyin değiştiğini, hangi kategori veya şubede hareket olduğunu ve daha sonra hangi kaynak ekranının incelenmesi gerektiğini sorun."
      ]
    ],
    story: [
      {
        title: "Ekranlar arasında geçiş yapmak yerine altı temel göstergeyi tek görünümde takip edin.",
        body: "İşletme sahibi çalışma alanı, ticari sonuçlarla günlük operasyonu aynı bağlamda gösterir. Böylece üst düzey bir sonuçtan ilgili masalara, kanallara, ürünlere veya dönemlere ilerlemek mümkün olur.",
        image: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp'
      },
      {
        title: "Bir sonucu, doğru takip sorusuna dönüştürün.",
        body: "Yapay Zekâ desteği mevcut dönemleri veya şubeleri karşılaştırabilir ve olağan dışı değişimleri özetleyebilir. Kaynak veriyi doğrulamak ve alınacak kararı belirlemek ise işletme sahibinde kalır.",
        image: '/site-assets/extra/manager-analytics.webp'
      }
    ],
    bullets: [
      "Gelir ve satış",
      "Müşteri sayısı",
      "Masa hareketliliği",
      "Rezervasyonlar",
      "Mutfak durumu",
      "En çok satan ürünler"
    ]
  },

  manager: {
    label: "Yönetici",
    eyebrow: "Yöneticiler için - 5 canlı iş alanı",
    title: "Vardiyayı masalar, siparişler, mutfak, rezervasyonlar ve ekip hareketleri üzerinden yönetin.",
    intro: "Servisin akışını belirleyen beş canlı iş alanını tek yönetim görünümünde takip edin, sorunları hızlıca fark edin ve bir sonraki işi sorumlu role yönlendirin.",
    heroImage: '/site-assets/extra/restaurant-team-planning.webp',
    accent: 'blue',
    highlights: [
      [
        "Salon durumu",
        "Canlı salon planı üzerinde dolu, uygun, bekleyen ve ödeme aşamasındaki masaları görün."
      ],
      [
        "Açık siparişler",
        "Geciken, değiştirilen veya tamamlanmamış siparişleri belirleyin ve sorunun bağlı olduğu masa ile sipariş kanalına ulaşın."
      ],
      [
        "Mutfak ilerlemesi",
        "Mutfak ekranında çalışmak zorunda kalmadan alınan, hazırlanmakta olan ve hazır siparişleri takip edin."
      ],
      [
        "Gelişler ve ekip hareketleri",
        "Yaklaşan rezervasyonları, rezervasyonsuz müşterileri, görev dağılımını ve aktif iş devirlerini aynı vardiya görünümünde takip edin."
      ]
    ],
    story: [
      {
        title: "Durum bilgisi toplamak yerine istisnaları yönetin.",
        body: "Her ekip kendi iş alanında çalışmaya devam ederken yönetici bekleyen, geciken veya tıkanan işleri tek yerden görebilir.",
        image: '/site-assets/staff/6.webp'
      },
      {
        title: "Vardiya sonu değerlendirmesinde de aynı operasyon verisini kullanın.",
        body: "Masa hareketleri, sipariş süreleri, mutfak durumu ve ekip hareketleri daha sonra gelir, masa devir hızı ve servis sonuçlarının neden değiştiğini açıklamaya yardımcı olur.",
        image: '/site-assets/extra/team-tech-meeting.webp'
      }
    ],
    bullets: [
      "Masa durumu",
      "Açık siparişler",
      "Mutfak ilerlemesi",
      "Rezervasyonlar ve rezervasyonsuz müşteriler",
      "Ekip hareketleri",
      "Vardiya istisnaları"
    ]
  },

  'service-staff': {
    label: "Servis Ekibi",
    eyebrow: "Servis ekibi için - 6 servis göstergesi",
    title: "Atanmış masaları, sipariş notlarını, müşteri taleplerini ve ödeme durumunu tek servis görünümünde takip edin.",
    intro: "Servis ekibi, yönetimle ilgili gereksiz ekranlar olmadan altı temel servis göstergesine odaklanabilir. Her işlem doğru masa ve siparişle bağlantılı kalır.",
    heroImage: '/site-assets/staff/1.webp',
    accent: 'orange',
    highlights: [
      [
        "Atanmış masalar",
        "Ekip üyesinin veya servis bölümünün sorumlu olduğu masaları ve her masanın servis aşamasını görün."
      ],
      [
        "Siparişler ve notlar",
        "Sipariş edilen ürünleri, ürün seçeneklerini, alerji bilgilerini ve servis notlarını masa bağlamıyla birlikte tutun."
      ],
      [
        "Müşteri talepleri",
        "Garson çağrılarını ve dijital servis taleplerini, masa işleri için kullanılan aynı görev alanında alın."
      ],
      [
        "Ödeme takibi",
        "Bir masanın hesabı görüntülediğini, hesabı böldüğünü veya ödemeyi tamamladığını görün; böylece sıradaki servis adımı netleşsin."
      ]
    ],
    story: [
      {
        title: "Çalışma alanı gerçek servis sırasını takip eder.",
        body: "Masaya yerleştirme, sipariş, talep, servis ve ödeme süreçleri birbirinden kopuk mesajlar yerine aynı masa yolculuğunun adımları olarak görünür.",
        image: '/site-assets/staff/4.webp'
      },
      {
        title: "Müşterinin dijital işlemleri de restoran ekibinin sorumluluğunda kalır.",
        body: "QR üzerinden verilen bir sipariş veya servis talebi, masa ve sipariş bilgisiyle birlikte sorumlu servis ekibine ya da mutfak iş alanına ulaşır.",
        image: '/site-assets/comments/5.webp'
      }
    ],
    bullets: [
      "Atanmış masalar",
      "Siparişler ve ürün seçenekleri",
      "Müşteri talepleri",
      "Garson çağrıları",
      "Sipariş durumu",
      "Ödeme durumu"
    ]
  },

  kitchen: {
    label: "Mutfak ve KDS",
    eyebrow: "Mutfak için - 4 sipariş durumu",
    title: "Her mutfak fişini alındı durumundan hazırlanmaya, hazır olmaya ve servis ekibine devredilmeye kadar takip edin.",
    intro: "Mutfak çalışma alanı ürün ayrıntılarını, seçenekleri, süreleri ve dört görünür sipariş durumunu tek hazırlık kuyruğunda tutar; gereksiz salon veya yönetim kontrollerini mutfak ekranına taşımaz.",
    heroImage: '/site-assets/kitchen/1.webp',
    accent: 'orange',
    highlights: [
      [
        "Odaklı hazırlık kuyruğu",
        "Yapılandırılmış KDS'de bulunan bilgilere göre gelen işleri süre, istasyon, servis sırası veya önceliğe göre düzenleyin."
      ],
      [
        "Ürün ve seçenek ayrıntıları",
        "Hazırlık notlarını, miktarları, ürün seçeneklerini ve tükenen ürün bilgisini sipariş üzerinde görünür tutun."
      ],
      [
        "Süre ve ilerleme",
        "İşlerin ne kadar süredir beklediğini ve hangi siparişlerin alındığını, hazırlanmakta olduğunu veya hazır olduğunu görün."
      ],
      [
        "Hazır sipariş devri",
        "Hazır durumunu servis ekibine ve yönetime iletin; böylece mutfaktan servise geçişin tamamlandığı açıkça görülsün."
      ]
    ],
    story: [
      {
        title: "İyi bir KDS, önceliği ve tamamlanma durumunu ilk bakışta anlaşılır kılar.",
        body: "Mutfak ekibi neyin hazırlanacağını, hangi özel seçeneklerin bulunduğunu, siparişin ne kadar süredir beklediğini ve sıradaki durumun ne olduğunu hızla görebilmelidir.",
        image: '/site-assets/kitchen/2.webp'
      },
      {
        title: "Hazır durumu, sıradaki sorumlu ekip için de görünür olmalıdır.",
        body: "Hazırlık tamamlandığında servis ekibi ve yöneticiler, masa servisinin devam etmesi için gereken hazır bilgisini alır.",
        image: '/site-assets/extra/team-planning.webp'
      }
    ],
    bullets: [
      "Alınan siparişler",
      "Hazırlanan siparişler",
      "Hazır siparişler",
      "Ürün ve seçenek ayrıntıları",
      "Sipariş süreleri",
      "Servis ekibine devir"
    ]
  },

  reservations: {
    label: "Rezervasyon",
    eyebrow: "Rezervasyon ekibi için - 6 planlama göstergesi",
    title: "Gelen müşterileri ve rezervasyonsuz müşterileri gerçek masa kapasitesiyle eşleştirin.",
    intro: "Yaklaşan gelişleri, kişi sayısını, masa uygunluğunu, tahmini masa dönüş süresini, rezervasyonsuz müşterileri ve çok katlı salon yapısını birlikte değerlendirerek bir sonraki masa yerleştirme kararını verin.",
    heroImage: '/site-assets/extra/host-stand.webp',
    accent: 'blue',
    highlights: [
      [
        "Yaklaşan gelişler",
        "Müşteri işletmeye gelmeden önce geliş saatini, kişi sayısını ve rezervasyon durumunu görün."
      ],
      [
        "Takvim ve zaman çizelgesi",
        "Günün ilerleyen saatlerini planlamak için takvim görünümünü, servis sırasında ise canlı zaman akışını kullanın."
      ],
      [
        "Masa uygunluğu ve dönüş süresi",
        "Boş, dolu ve rezervasyona hazırlanmış masaları beklenen masa dönüş süresiyle birlikte değerlendirin."
      ],
      [
        "Rezervasyonsuz müşteriler ve salon yerleşimi",
        "Rezervasyon yükünü veya çok katlı kapasite görünümünü kaybetmeden rezervasyonsuz gelen müşterileri plana dahil edin."
      ]
    ],
    story: [
      {
        title: "Rezervasyon listesini canlı bir masa yerleşim planına dönüştürün.",
        body: "Bir rezervasyon, geliş saati ve kişi sayısı o gruba uygun masalarla birlikte değerlendirildiğinde gerçek bir servis kararına dönüşür.",
        image: '/site-assets/extra/shared-table-feast.webp'
      },
      {
        title: "Önceden planlayın, ardından gerçek zamanlı çalışmaya devam edin.",
        body: "Takvim ve zaman çizelgesi hazırlığı destekler; canlı masa uygunluğu, rezervasyonsuz müşteriler ve masa ataması ise kapıdaki anlık kararları destekler.",
        image: '/site-assets/custom/reservations-floor-story.webp'
      }
    ],
    bullets: [
      "Yaklaşan gelişler",
      "Kişi sayısı",
      "Takvim ve zaman çizelgesi",
      "Masa uygunluğu",
      "Rezervasyonsuz müşteriler",
      "Çok katlı masa yerleşimi"
    ]
  },

  finance: {
    label: "Finans ve Raporlama",
    eyebrow: "Finans için - 6 raporlama görünümü",
    title: "Gelir ve ödeme sonuçlarını, bu sonuçları oluşturan restoran hareketlerine kadar izleyin.",
    intro: "Gelir, kategori satışları, ödeme hareketleri, ortalama hesap tutarı, en çok satan ürünler ve dönem karşılaştırmalarını kullanarak operasyon bağlamını kaybetmeden daha anlaşılır raporlar oluşturun.",
    heroImage: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp',
    accent: 'green',
    highlights: [
      [
        "Dönem veya şubeye göre gelir",
        "Mevcut satış verileriyle raporlama dönemlerini veya şubeleri karşılaştırın ve hangi verilerin sonuca dahil olduğunu açık tutun."
      ],
      [
        "Ödeme hareketleri",
        "Ödeme yöntemini, durumunu ve mutabakat bilgisini ilgili masa veya sipariş süreciyle birlikte inceleyin."
      ],
      [
        "Kategori ve ürün performansı",
        "Hangi menü kategorilerinin veya ürünlerin gelire katkıda bulunduğunu ve hangi kârlılık sorularının daha ayrıntılı inceleme gerektirdiğini görün."
      ],
      [
        "Yapay Zekâ destekli karşılaştırma",
        "Dönem veya şube değişimlerini özetleyin ve finans ekibinin daha sonra doğrulaması gereken kaynak raporu belirleyin."
      ]
    ],
    story: [
      {
        title: "Kapsamı açık olan bir iş sonucuna güvenmek daha kolaydır.",
        body: "Raporlama; şubeyi, dönemi, satış kanallarını, ödeme dağılımını ve sonuca dahil edilen operasyon hareketlerini açıkça göstermelidir.",
        image: '/site-assets/extra/tablet-dashboard.webp'
      },
      {
        title: "Yapay Zekâyı cevabı onaylamak için değil, doğru finans sorusunu oluşturmak için kullanın.",
        body: "Yapay Zekâ desteği mevcut verileri karşılaştırabilir ve özetleyebilir. Kaynağı, muhasebe uygulamasını ve nihai yorumu doğrulamak finans ekibinin sorumluluğunda kalır.",
        image: '/site-assets/extra/analytics-tablet-phone.webp'
      }
    ],
    bullets: [
      "Gelir",
      "Satış kategorileri",
      "Ödeme hareketleri",
      "Ortalama hesap tutarı",
      "En çok satan ürünler",
      "Dönem ve şube karşılaştırması"
    ]
  }
};

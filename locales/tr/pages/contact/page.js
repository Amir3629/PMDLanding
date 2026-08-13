import PageHero from "@/locales/tr/components/PageHero";
import ContactForm from "@/locales/tr/components/ContactForm";
export const metadata = {
  title: "Demo Rezervasyonu Yap"
};
export default function ContactPage() {
  return <><PageHero eyebrow={"Pratik bir demo kitabı"} title={"Bir iş akışı getir, katılan roller ve geliştirmek istediğiniz metrik."} intro={"Bugün ne olacağını bize söyleyin, bilgi yeniden girin veya durum kaybediliyor, hangi sistemler zaten yerinde ve sonucu nasıl ölçüyorsunuz. Demoyu bu gerçek işletim bağlamı etrafında şekillendireceğiz."} image="/site-assets/extra/paris-cafe.webp" accent="green" actions={false} /><section className="section contactSection"><div className="container contactGrid"><div className="contactIntro"><span className="eyebrow">Ürün işlerini gözden geçirmek için seçin</span><h2>Kontrol listesi olarak 9 alanı kullanın, her şeyi satın almak için bir zorunluluk değil.</h2><ul><li>PayMyDine AI: sorular, özetler, uyarılar ve tahminler</li><li>Restoran Operasyonları: pano, siparişler, masalar ve zemin haritaları</li><li>Rezervasyonlar: takvim, varışlar, yürüyüşler ve masa atamaları</li><li>Sipariş ve Mutfak: garson girişi, KDS, statü ve menü kontrolü</li><li>Ödemeler: masa QR, misafir kontrol ve 3 fatura destekli yöntem</li><li>Analytics: 9 gelir, talep ve kârlılık metrikleri</li><li>Takım Yönetimi: 6 rol iş alanları ve izinler</li><li>Guest CRM: Profiller, sadakat, teklifler ve geri bildirimler</li><li>Entegrasyonlar: POS, muhasebe, teslimat, ödeme ve envanter bağlamı</li></ul></div><ContactForm /></div></section></>;
}

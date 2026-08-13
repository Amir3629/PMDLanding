import PageHero from "@/locales/tr/components/PageHero";
import CTA from "@/locales/tr/components/CTA";
import { resources } from "@/locales/tr/data/site";
import { Icon } from "@/locales/tr/components/Icons";
export const metadata = {
  title: "Rehberler ve Yardım"
};
export default function ResourcesPage() {
  return <>
      <PageHero eyebrow={"Pratik uygulama kılavuzları"} title={"Kontrol listelerini kullanın, rol soruları ve ölçülebilir iş tanımlarını platformu inşa etmeden önce kullanın."} intro={"Rehberler 6 aşamalı uygulama yolunu kaplar, 6 rol çalışma alanları, AI soruları, 4-action guest yolculuğu, 7 rezervasyon yetenekleri ve POS entegrasyonu planlama."} image="/site-assets/extra/friends-coffee.webp" compact />
      <section className="section resourcesSection"><div className="container resourceGrid">{resources.map(item => <a className="resourceCard" href={`/tr/resources/${item.slug}`} key={item.slug}><div className="resourceImage"><img src={item.image} alt="" loading="lazy" /></div><div className="resourceCopy"><span>{item.category}</span><h2>{item.title}</h2><p>{item.intro}</p><b>Pratik kılavuzluk okuyun <Icon name="arrow" size={15} /></b></div></a>)}</div></section>
      <CTA title={"Restoranınızda bir iş akışına kılavuz uygulayın."} body={"Mevcut adımları getir, sorumlu roller, sistemler ve temel metrik. Uygulama kılavuzu pratik bir PayMyDine kapsamına haritalayacağız."} />
    </>;
}

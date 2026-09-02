import PageHero from '@/locales/tr/components/PageHero';
import CTA from '@/locales/tr/components/CTA';
import { resources } from '@/locales/tr/data/site';
import { Icon } from '@/locales/tr/components/Icons';

export const metadata = {
  title: 'Restoran Operasyon Rehberleri ve Kaynakları',
  description: 'PayMyDine kurulumu, rol bazlı çalışma alanları, Yapay Zekâ, müşteri yolculuğu, rezervasyon ve POS entegrasyonu için pratik rehberleri inceleyin.'
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pratik kurulum rehberleri"
        title="Platformu yapılandırmadan önce kontrol listelerini, rol sorularını ve ölçülebilir iş akışı tanımlarını kullanın."
        intro="Rehberler; 6 aşamalı kurulum yolunu, 6 rol bazlı çalışma alanını, Yapay Zekâ sorularını, 4 adımlı müşteri yolculuğunu, 7 rezervasyon özelliğini ve POS entegrasyonu planlamasını kapsar."
        image="/site-assets/extra/friends-coffee.webp"
        compact
      />
      <section className="section resourcesSection"><div className="container resourceGrid">{resources.map((item) => <a className="resourceCard" href={`/tr/resources/${item.slug}`} key={item.slug}><div className="resourceImage"><img src={item.image} alt="" loading="lazy"/></div><div className="resourceCopy"><span>{item.category}</span><h2>{item.title}</h2><p>{item.intro}</p><b>Pratik rehberi okuyun <Icon name="arrow" size={15}/></b></div></a>)}</div></section>
      <CTA title="Bir rehberi restoranınızdaki gerçek bir iş akışına uygulayın." body="Mevcut adımları, sorumlu rolleri, sistemleri ve başlangıç metriğini paylaşın. Rehberi pratik bir PayMyDine kapsamına uyarlayalım." />
    </>
  );
}

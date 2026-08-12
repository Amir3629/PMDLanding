import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Book a Demo' };

export default function ContactPage() {
  return <><PageHero eyebrow="Book a demo" title="Show us how your restaurant works today." intro="Tell us about your team structure, current technology environment and the outcomes you want to improve. We’ll shape the PayMyDine conversation around that operating context." image="/site-assets/extra/paris-cafe.webp" accent="green" actions={false}/><section className="section contactSection"><div className="container contactGrid"><div className="contactIntro"><span className="eyebrow">Choose the areas that matter most</span><h2>Start with the restaurant. Then choose the technology.</h2><ul><li>PayMyDine AI, alerts and forecasting</li><li>Restaurant operations, orders, tables and floor maps</li><li>Reservations and table management</li><li>Ordering, kitchen and menu workflows</li><li>Payments, table QR and guest checkout</li><li>Analytics, forecasting and profitability</li><li>Team management and role workspaces</li><li>Guest CRM, marketing and growth</li><li>Integrations, multi-location and inventory</li></ul></div><ContactForm /></div></section></>;
}

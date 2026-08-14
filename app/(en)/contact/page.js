import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { metadataForRoute } from '@/lib/seo';

export const metadata = metadataForRoute('en', '/contact');

export default function ContactPage() {
  return <><PageHero eyebrow="Book a practical demo" title="Bring one workflow, the roles involved and the metric you want to improve." intro="Tell us what happens today, where information is re-entered or status is lost, which systems are already in place and how you measure the result. We will shape the demo around that real operating context." image="/site-assets/extra/paris-cafe.webp" accent="green" actions={false}/><section className="section contactSection"><div className="container contactGrid"><div className="contactIntro"><span className="eyebrow">Choose the product jobs to review</span><h2>Use the 9 areas as a checklist, not a requirement to buy everything.</h2><ul><li>PayMyDine AI: questions, briefings, alerts and forecasts</li><li>Restaurant Operations: dashboard, orders, tables and floor maps</li><li>Reservations: calendar, arrivals, walk-ins and table assignment</li><li>Ordering and Kitchen: waiter entry, KDS, status and menu control</li><li>Payments: table QR, guest checkout and 3 bill-split methods</li><li>Analytics: 9 revenue, demand and profitability metrics</li><li>Team Management: 6 role workspaces and permissions</li><li>Guest CRM: profiles, loyalty, offers, campaigns and feedback</li><li>Integrations: POS, accounting, delivery, payments and inventory context</li></ul></div><ContactForm /></div></section></>;
}

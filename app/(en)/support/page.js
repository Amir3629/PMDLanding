import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { metadataForRoute } from '@/lib/seo';

export const metadata = metadataForRoute('en', '/support');

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="4 support stages"
        title="Help for your PayMyDine setup."
        intro="Get help with setup, team access, integrations and everyday use."
        image="/site-assets/extra/team-cafe-meeting.webp"
        accent="green"
      />
      <section className="section companyValues">
        <div className="container companyValuesGrid">
          <div><span className="eyebrow">Support across the lifecycle</span><h2>Support from setup to daily service.</h2><p>Tell us the task and what went wrong. We will find the next step.</p></div>
          <div className="companyValueCards">
            <article><h3>Onboarding</h3><p>Confirm the selected product areas, role owners, baseline workflows and implementation contacts.</p></article>
            <article><h3>Configuration</h3><p>Review permissions, floor maps, menus, status rules, integrations and the expected handoffs between roles.</p></article>
            <article><h3>Team adoption</h3><p>Train each role on its own queue, controls, completion status and escalation path rather than one generic product tour.</p></article>
            <article><h3>Ongoing review</h3><p>Use support history and operating metrics to decide whether the issue needs training, configuration, integration or product change.</p></article>
          </div>
        </div>
      </section>
      <CTA title="Tell us what you need help with." body="Include the task, expected result and connected system." />
    </>
  );
}

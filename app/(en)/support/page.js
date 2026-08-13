import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Support',
  description: 'Support for PayMyDine onboarding, configuration, team adoption, integrations and operating questions.'
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="4 support stages"
        title="Support should know the configured roles, workflows, integrations and success metrics behind the question."
        intro="A useful answer depends on how PayMyDine is configured in the restaurant. Support therefore follows the setup from onboarding through configuration, team adoption and ongoing operating review."
        image="/site-assets/extra/team-cafe-meeting.webp"
        accent="green"
      />
      <section className="section companyValues">
        <div className="container companyValuesGrid">
          <div><span className="eyebrow">Support across the lifecycle</span><h2>Four stages, with the configuration and responsible role visible in every conversation.</h2><p>That context makes it easier to distinguish a training question, a workflow problem, an integration boundary and a product issue.</p></div>
          <div className="companyValueCards">
            <article><h3>Onboarding</h3><p>Confirm the selected product areas, role owners, baseline workflows and implementation contacts.</p></article>
            <article><h3>Configuration</h3><p>Review permissions, floor maps, menus, status rules, integrations and the expected handoffs between roles.</p></article>
            <article><h3>Team adoption</h3><p>Train each role on its own queue, controls, completion status and escalation path rather than one generic product tour.</p></article>
            <article><h3>Ongoing review</h3><p>Use support history and operating metrics to decide whether the issue needs training, configuration, integration or product change.</p></article>
          </div>
        </div>
      </section>
      <CTA title="Bring the configuration and workflow behind the support question." body="Tell us the role, action, expected status, connected system and result. That gives the support conversation a practical starting point." />
    </>
  );
}

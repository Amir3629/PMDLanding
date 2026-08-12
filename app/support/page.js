import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Support',
  description: 'Support around PayMyDine onboarding, configuration, team adoption and ongoing restaurant questions.'
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="A restaurant platform should come with people who understand the setup behind it."
        intro="PayMyDine support is positioned around onboarding, configuration, team adoption and the practical questions that come with running the platform inside a real restaurant environment."
        image="/site-assets/extra/team-cafe-meeting.webp"
        accent="green"
      />
      <section className="section companyValues">
        <div className="container companyValuesGrid">
          <div><span className="eyebrow">Support across the lifecycle</span><h2>Help should follow the restaurant journey, not stop after setup.</h2><p>The useful support conversation changes from implementation to team adoption and then to the questions that appear once the restaurant is operating with the platform.</p></div>
          <div className="companyValueCards">
            <article><h3>Onboarding</h3><p>Understand the selected modules, roles and operating flow before the team starts using them.</p></article>
            <article><h3>Configuration</h3><p>Keep the PayMyDine setup aligned with the restaurant structure, floor and responsibilities.</p></article>
            <article><h3>Team adoption</h3><p>Focus each role on the workspace and actions that matter to their part of the day.</p></article>
            <article><h3>Ongoing questions</h3><p>Review workflow, feature and integration questions as the restaurant setup evolves.</p></article>
          </div>
        </div>
      </section>
      <CTA title="Have a question about the right PayMyDine setup?" body="Book a conversation and we’ll focus on the restaurant workflow, roles or integration context behind the question." />
    </>
  );
}

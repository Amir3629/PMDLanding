import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Security & Data',
  description: 'How PayMyDine approaches role-based access, data responsibility, integrations and security conversations.'
};

const topics = [
  ['Role-based access', 'Access should follow responsibility so team members can work in focused spaces without unnecessary business or admin visibility.'],
  ['Data responsibility', 'Restaurant and guest data should be handled deliberately across the platform, integrations and any connected services.'],
  ['Integration boundaries', 'POS and payment connections depend on the access, permissions and interfaces provided by the relevant external systems.'],
  ['Deployment-specific controls', 'Exact technical controls, retention, backups and provider responsibilities should be reviewed for the deployed environment rather than assumed from a generic website claim.']
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security & data"
        title="Clear responsibilities matter as much as clear workflows."
        intro="PayMyDine is designed around role-based access and deliberate integration boundaries. Exact technical controls depend on the deployed environment, providers and configuration in use."
        image="/site-assets/extra/office-dashboard.webp"
        accent="green"
      />
      <section className="section highlightSection">
        <div className="container highlightGrid">
          {topics.map(([title, body], index) => <article className="highlightCard" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>
      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div><span className="eyebrow">Review the actual environment</span><h2>Security claims should match the deployment behind them.</h2><p>For a specific restaurant, the right security and data conversation includes PayMyDine configuration, hosting, connected POS systems, payment providers and the access model used by the team.</p></div>
          <div className="capabilityList"><span>Role permissions</span><span>Integration access</span><span>Provider responsibilities</span><span>Data flows</span><span>Deployment controls</span><span>Operational access</span></div>
        </div>
      </section>
      <CTA title="Need to review security or data requirements?" body="Tell us about your environment and the systems you plan to connect so the discussion can focus on the actual deployment context." />
    </>
  );
}

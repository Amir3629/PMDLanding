import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Security & Data',
  description: 'A practical review of role access, data flows, integration boundaries and deployment controls for PayMyDine.'
};

const topics = [
  ['Role access', 'Document which of the 6 workspaces can view, create, change, approve or export each type of restaurant and guest data.'],
  ['Data flow', 'Map the source, destination, purpose, retention and responsible party for table, order, guest, payment and reporting data.'],
  ['Integration boundary', 'Record the API permissions, available fields, authentication method and failure handling for every external POS, payment or delivery system.'],
  ['Deployment controls', 'Review hosting, backups, logging, monitoring, incident handling and provider responsibilities for the actual deployed environment.']
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="4 security review areas"
        title="Review access, data flow, integrations and deployment against the real configuration."
        intro="Security claims should describe the environment that is actually deployed. PayMyDine discussions therefore start with roles, connected systems, data responsibilities and operational controls rather than generic promises."
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
          <div><span className="eyebrow">Questions to document</span><h2>Who can act, which data moves, where it is stored and who responds when something fails?</h2><p>The answer may involve PayMyDine, the restaurant, the hosting environment and external POS or payment providers. Responsibilities should be explicit before go-live.</p></div>
          <div className="capabilityList"><span>Role permissions</span><span>Data inventory</span><span>Integration credentials</span><span>Retention and backups</span><span>Logging and monitoring</span><span>Incident responsibility</span></div>
        </div>
      </section>
      <CTA title="Review the actual deployment and data path." body="Bring the roles, providers, data types and integration diagram so the security conversation can assign clear controls and responsibilities." />
    </>
  );
}

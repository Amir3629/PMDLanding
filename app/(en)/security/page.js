import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { metadataForRoute } from '@/lib/seo';

export const metadata = metadataForRoute('en', '/security');

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
        title="Review security for your actual setup."
        intro="Review access, data flows, providers and deployment controls for your environment."
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
          <div><span className="eyebrow">Questions to document</span><h2>Know who can access your data.</h2><p>Review storage, system access and incident responsibilities before launch.</p></div>
          <div className="capabilityList"><span>Role permissions</span><span>Data inventory</span><span>Integration credentials</span><span>Retention and backups</span><span>Logging and monitoring</span><span>Incident responsibility</span></div>
        </div>
      </section>
      <CTA title="Review your security setup." body="Share your data flows and providers so responsibilities can be documented." />
    </>
  );
}

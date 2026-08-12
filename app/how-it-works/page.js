import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'How It Works',
  description: 'See how PayMyDine connects guest touchpoints, team workflows and restaurant visibility across the day.'
};

const journeyCards = [
  {
    eyebrow: 'Guest experience',
    title: 'Start with a familiar table experience.',
    body: 'A QR touchpoint can open the menu and ordering journey without taking attention away from the restaurant itself.',
    image: '/site-assets/comments/16.webp',
    alt: 'Guests using a PayMyDine QR experience at the table'
  },
  {
    eyebrow: 'Restaurant setting',
    title: 'Digital service should feel like part of the venue.',
    body: 'PayMyDine supports the restaurant experience in the background, helping the digital journey sit naturally alongside service.',
    image: '/site-assets/table/11.webp',
    alt: 'Restaurant environment supported by PayMyDine'
  }
];

const flowSteps = [
  ['01', 'Guest arrives', 'The restaurant experience begins as usual, with digital access available when it is useful.'],
  ['02', 'Menu & ordering', 'Guests can browse, order and interact from their own device while the table context stays attached to the restaurant journey.'],
  ['03', 'The right role takes over', 'Front of house or kitchen receives the next action inside a workspace focused on that responsibility.'],
  ['04', 'Service & payment', 'The table can move toward checkout with flexible payment and split-bill options while status stays visible to the restaurant.'],
  ['05', 'Insight & AI', 'Live activity becomes reporting, owner visibility and AI-assisted summaries or questions around the restaurant data available.']
];

const operationsCards = [
  {
    eyebrow: 'Restaurant operations',
    title: 'The team sees the part of the day that matters to them.',
    body: 'Owner, manager, waiter, kitchen and reservation roles can work from focused views while the wider restaurant stays connected.',
    image: '/site-assets/owner/1.webp',
    alt: 'PayMyDine restaurant operations view'
  },
  {
    eyebrow: 'Kitchen & team flow',
    title: 'Guest actions become clear work for the restaurant.',
    body: 'Orders can move into preparation with visible status and a cleaner handoff between the guest journey, front of house and kitchen.',
    image: '/site-assets/kitchen/2.webp',
    alt: 'Kitchen team working with PayMyDine'
  }
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How PayMyDine works"
        title="A connected restaurant day, from first guest touchpoint to final insight."
        intro="PayMyDine connects guest-facing moments with role-based team workspaces, kitchen flow, payment, reporting and AI-assisted understanding without forcing every person into the same interface."
        image="/site-assets/extra/izakaya-phone.webp"
        accent="orange"
      />

      <section className="section howJourneySection">
        <div className="container">
          <div className="sectionHeading centerHeading howJourneyHeading">
            <span className="eyebrow">Built around responsibilities</span>
            <h2>Digital touchpoints should support service while restaurant teams keep a clear operating role.</h2>
            <p>The guest journey, front of house, kitchen and ownership views can stay related without becoming one oversized workflow.</p>
          </div>

          <div className="demoShowcaseGrid howJourneyGrid">
            {journeyCards.map((card, index) => (
              <article className={`demoShowcaseCard ${index === 0 ? 'demoShowcaseWide' : ''}`} key={card.title}>
                <div className="demoShowcaseMedia demoShowcaseMediaPhoto">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </div>
                <div className="demoShowcaseCopy">
                  <span>{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section howFlowSection">
        <div className="container">
          <div className="splitHeading howFlowHeading">
            <div>
              <span className="eyebrow">One operating story</span>
              <h2>From arrival to insight, the context moves to the role responsible for the next step.</h2>
            </div>
            <p>Each workspace stays focused, while the useful restaurant context continues across service, preparation, checkout and reporting.</p>
          </div>

          <div className="howFlowGrid">
            {flowSteps.map(([number, title, body]) => (
              <article className="howFlowCard" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section howOperationsSection">
        <div className="container">
          <div className="sectionHeading howOperationsHeading">
            <span className="eyebrow">Behind the service</span>
            <h2>Every role works from a focused view while ownership keeps the wider picture.</h2>
            <p>Guest-facing convenience is one layer. The same restaurant environment can support service teams, kitchen preparation, reservations, management visibility and AI-assisted understanding.</p>
          </div>

          <div className="howOperationsGrid">
            {operationsCards.map((card) => (
              <article className="howOperationsCard" key={card.title}>
                <div className="howOperationsMedia">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </div>
                <div className="howOperationsCopy">
                  <span>{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="See how PayMyDine could fit your restaurant."
        body="We can walk through the guest journey, restaurant workflows, selected modules and integrations that make sense for your setup."
        primaryLabel="Book a Demo"
        primaryHref="/contact"
        secondaryLabel="Explore the Platform"
        secondaryHref="/platform"
      />
    </>
  );
}

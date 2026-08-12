export const teamPages = {
  owner: {
    label: 'Owner',
    eyebrow: 'For owners',
    title: 'See the whole restaurant without living in every screen.',
    intro: 'Bring performance, floor activity, reservations, kitchen signals and the questions that matter to ownership into one decision-focused view.',
    heroImage: '/site-assets/owner/1.webp',
    accent: 'green',
    highlights: [
      ['Performance at a glance', 'Follow revenue, guest volume, tables and key operating signals without opening every team workspace.'],
      ['Live restaurant context', 'See what is happening across service, reservations and kitchen while the day is still in motion.'],
      ['AI-assisted understanding', 'Use PayMyDine AI to explore changes, patterns and questions around the restaurant data available to you.'],
      ['Role-based control', 'Keep ownership visibility broad while other team members stay focused on the work that belongs to them.']
    ],
    story: [
      {
        title: 'A decision view, not another admin screen.',
        body: 'Ownership needs the operating picture behind the restaurant: what is moving, what changed and where attention may be useful next.',
        image: '/site-assets/owner/2.webp'
      },
      {
        title: 'Ask better questions of the restaurant day.',
        body: 'AI assistance can help turn live and historical restaurant information into clearer summaries, comparisons and follow-up questions.',
        image: '/site-assets/extra/manager-analytics.webp'
      }
    ],
    bullets: ['Revenue & sales', 'Guest and table activity', 'Reservations', 'Kitchen performance', 'Top-selling items', 'AI-assisted summaries']
  },
  manager: {
    label: 'Manager',
    eyebrow: 'For managers',
    title: 'Keep the shift moving with the right live view.',
    intro: 'Give managers the operational context behind tables, orders, reservations, kitchen progress and team activity while service is happening.',
    heroImage: '/site-assets/extra/restaurant-team-planning.webp',
    accent: 'blue',
    highlights: [
      ['Live floor context', 'Understand table status, active service and what is changing across the restaurant.'],
      ['Shift coordination', 'Keep front of house, kitchen and reservation activity easier to follow from one management view.'],
      ['Exceptions first', 'Make it easier to spot delays, unusual changes or areas that may need attention during the shift.'],
      ['Performance with context', 'See operational activity alongside the business signals that help explain the day.']
    ],
    story: [
      {
        title: 'Move from status checking to shift coordination.',
        body: 'A manager workspace should make the next operational decision easier to see instead of becoming another place to search for information.',
        image: '/site-assets/staff/6.webp'
      },
      {
        title: 'Keep team views specialised while management stays informed.',
        body: 'Waiters, kitchen and reservation teams can work in focused spaces while the manager keeps the wider service picture in view.',
        image: '/site-assets/extra/team-tech-meeting.webp'
      }
    ],
    bullets: ['Table status', 'Open orders', 'Kitchen progress', 'Reservations', 'Team activity', 'Shift performance']
  },
  'front-of-house': {
    label: 'Front of House',
    eyebrow: 'For front of house',
    title: 'Stay close to tables, guests and the next action.',
    intro: 'Keep service teams focused on the tables, orders, requests and payment moments that shape the guest experience during the shift.',
    heroImage: '/site-assets/staff/1.webp',
    accent: 'orange',
    highlights: [
      ['Tables first', 'See the table context that matters for service without unrelated ownership or admin information.'],
      ['Orders in context', 'Keep ordered items, notes and the guest journey attached to the right table.'],
      ['Guest requests', 'Bring service calls and table requests into the same front-of-house workflow.'],
      ['Checkout awareness', 'Stay aware of bill and payment status as the table moves toward the end of the meal.']
    ],
    story: [
      {
        title: 'The workspace follows the service rhythm.',
        body: 'Front-of-house teams need fast access to the guest and table information that helps them act now, not a dashboard built for ownership.',
        image: '/site-assets/staff/4.webp'
      },
      {
        title: 'Guest actions stay connected to the people serving them.',
        body: 'QR ordering and digital requests can feed into the restaurant workflow without removing the human service experience.',
        image: '/site-assets/comments/5.webp'
      }
    ],
    bullets: ['Assigned tables', 'Orders & notes', 'Guest requests', 'Waiter calls', 'Order status', 'Checkout context']
  },
  kitchen: {
    label: 'Kitchen & KDS',
    eyebrow: 'For kitchen & KDS',
    title: 'See what needs to be prepared next.',
    intro: 'Turn incoming orders into a focused preparation queue with the details, timing and status the kitchen needs during service.',
    heroImage: '/site-assets/kitchen/1.webp',
    accent: 'orange',
    highlights: [
      ['Focused ticket view', 'Keep preparation work visible without unrelated front-of-house or ownership information.'],
      ['Notes & item detail', 'Carry the preparation context the kitchen needs into the ticket itself.'],
      ['Timing visibility', 'Follow ticket time and preparation progress as the shift develops.'],
      ['Ready-to-serve handoff', 'Make the next service step visible when an order is ready to leave the kitchen.']
    ],
    story: [
      {
        title: 'Kitchen information should be operational, not decorative.',
        body: 'A KDS is useful when the team can read priorities, notes and status quickly during real preparation work.',
        image: '/site-assets/kitchen/2.webp'
      },
      {
        title: 'Ready status should reach the next role.',
        body: 'Preparation is one part of the guest journey. The handoff back to the floor should stay visible and easy to act on.',
        image: '/site-assets/extra/team-planning.webp'
      }
    ],
    bullets: ['Kitchen tickets', 'Preparation queue', 'Order notes', 'Ticket timing', 'Ready status', 'Front-of-house handoff']
  },
  reservations: {
    label: 'Reservations',
    eyebrow: 'For reservations & reception',
    title: 'Plan arrivals with the floor in view.',
    intro: 'Give reservation and reception teams the booking, arrival and table context they need to make the next seating decision easier.',
    heroImage: '/site-assets/extra/host-stand.webp',
    accent: 'blue',
    highlights: [
      ['Upcoming arrivals', 'See what is arriving next and how party size shapes the near-term floor plan.'],
      ['Calendar & timeline', 'Move between planning views depending on whether the team is looking ahead or working live.'],
      ['Table context', 'Keep free, occupied and reservation-ready tables close to the booking workflow.'],
      ['Guest coordination', 'Keep the booking story visible from confirmation through arrival and seating.']
    ],
    story: [
      {
        title: 'A booking list becomes more useful with floor context.',
        body: 'Reservations are easier to act on when the team can understand what is arriving alongside what the restaurant floor can support.',
        image: '/site-assets/extra/shared-table-feast.webp'
      },
      {
        title: 'Plan ahead, then operate in real time.',
        body: 'Calendar and timeline views help with preparation while live table visibility helps with the decisions happening at the door.',
        image: '/site-assets/custom/reservations-floor-story.webp'
      }
    ],
    bullets: ['Reservation calendar', 'Timeline view', 'Upcoming arrivals', 'Party size', 'Table availability', 'Seating context']
  },
  finance: {
    label: 'Finance & Reporting',
    eyebrow: 'For finance & reporting',
    title: 'Turn restaurant activity into cleaner business reporting.',
    intro: 'Bring revenue, payment activity, sales categories and reporting views together for the people responsible for the business side of service.',
    heroImage: '/site-assets/owner/2.webp',
    accent: 'green',
    highlights: [
      ['Revenue visibility', 'Follow sales and revenue information from the same restaurant environment that produced it.'],
      ['Payment context', 'Keep payment activity connected to the operating picture instead of treating it as an isolated endpoint.'],
      ['Category performance', 'Use sales and menu categories to understand where revenue is coming from.'],
      ['Reporting support', 'Use available reporting and export views to support the finance workflow around the restaurant.']
    ],
    story: [
      {
        title: 'Keep financial reporting close to restaurant context.',
        body: 'Numbers are easier to understand when they can be read alongside the tables, order channels and operating activity behind them.',
        image: '/site-assets/extra/tablet-dashboard.webp'
      },
      {
        title: 'Use AI to explore the story behind a number.',
        body: 'Where data is available, AI assistance can help owners and reporting teams compare periods, summarise changes and frame useful follow-up questions.',
        image: '/site-assets/extra/analytics-tablet-phone.webp'
      }
    ],
    bullets: ['Revenue', 'Sales categories', 'Payment activity', 'Performance views', 'Reporting', 'AI-assisted comparisons']
  }
};

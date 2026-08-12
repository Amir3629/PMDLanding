export const productAreas = [
  {
    number: 1,
    icon: 'chart',
    title: 'PayMyDine AI',
    href: '/ai',
    body: 'Use 6 AI-assisted actions: ask questions, receive a daily briefing, flag unusual movement, compare periods, support forecasts and identify the next metric to investigate.',
    navNote: '6 actions for questions, briefings, alerts, comparisons, forecasts and investigation.',
    image: '/site-assets/owner/2.webp',
    compactImage: '/site-assets/social/7.webp'
  },
  {
    number: 2,
    icon: 'operations',
    title: 'Restaurant Operations',
    href: '/solutions/operations',
    body: 'Monitor 6 live views: dashboard, open orders, table status, floor maps, dine-in or takeaway and current restaurant activity.',
    navNote: '6 live views for orders, tables, floor maps, channels and active service.',
    image: '/site-assets/table/11.webp',
    compactImage: '/site-assets/custom/shared-restaurant-hero-16.webp'
  },
  {
    number: 3,
    icon: 'calendar',
    title: 'Reservations & Table Management',
    href: '/solutions/reservations',
    body: 'Plan 7 reservation and seating tasks: calendar, timeline, availability, walk-ins, table assignment, guest flow and multiple floors.',
    navNote: '7 planning tools for arrivals, capacity, seating, walk-ins and multiple floors.',
    image: '/site-assets/table/1.webp',
    compactImage: '/site-assets/table/2.webp'
  },
  {
    number: 4,
    icon: 'kitchen',
    title: 'Ordering, Kitchen & Menu',
    href: '/solutions/kitchen',
    body: 'Move orders through 7 controls: waiter entry, KDS, preparation status, ready status, menu management, modifiers and sold-out items.',
    navNote: '7 order, kitchen and menu controls from entry to ready handoff.',
    image: '/site-assets/extra/chef-warm-kitchen.webp',
    compactImage: '/site-assets/kitchen/2.webp'
  },
  {
    number: 5,
    icon: 'card',
    title: 'Payments & Guest Ordering',
    href: '/solutions/payments',
    body: 'Cover 8 guest-ordering and payment moments, including table QR, mobile menu, pay-at-table and 3 split methods: equally, by item or by shares.',
    navNote: '8 ordering and payment moments, including 3 bill-split methods.',
    image: '/site-assets/payment/1.webp',
    compactImage: '/site-assets/payment/3.webp'
  },
  {
    number: 6,
    icon: 'chart',
    title: 'Analytics, Forecasting & Profitability',
    href: '/solutions/insights',
    body: 'Track 9 decision metrics: revenue, guests, average check, table turnover, sales by time, best sellers, payment mix, forecasting and profitability.',
    navNote: '9 metrics for revenue, demand, table performance, forecasts and profitability.',
    image: '/site-assets/extra/manager-analytics.webp',
    compactImage: '/site-assets/extra/analytics-tablet-phone.webp'
  },
  {
    number: 7,
    icon: 'team',
    title: 'Team Management',
    href: '/solutions/team',
    body: 'Coordinate 5 people controls: role workspaces, permissions, shifts, performance context and staff activity.',
    navNote: '5 people controls across workspaces, permissions, shifts and staff activity.',
    image: '/site-assets/staff/1.webp',
    compactImage: '/site-assets/staff/6.webp'
  },
  {
    number: 8,
    icon: 'phone',
    title: 'Guest CRM, Marketing & Growth',
    href: '/solutions/guest-ordering',
    body: 'Use 6 growth tools: profiles, loyalty, offers, campaigns, feedback and retention, with visit context available for relevant follow-up.',
    navNote: '6 CRM and growth tools for guest context, engagement and retention.',
    image: '/site-assets/social/18.webp',
    compactImage: '/site-assets/comments/7.webp'
  },
  {
    number: 9,
    icon: 'link',
    title: 'Integrations, Multi-location & Inventory',
    href: '/integrations',
    body: 'Connect 4 system types - POS, accounting, delivery and payments - then add central reporting, shared menus, inventory, food-cost and purchasing context.',
    navNote: '4 integration types plus central reporting, menus, inventory, food cost and purchasing.',
    image: '/site-assets/custom/integrations-capabilities-fit.webp',
    compactImage: '/site-assets/custom/integrations-operating-picture.webp'
  }
];

const productLink = (index) => {
  const item = productAreas[index];
  return [item.title, item.href, item.navNote, item.number];
};

export const primaryNav = [
  {
    label: 'Product',
    href: '/platform',
    columns: [
      {
        title: 'Operations & service',
        links: [productLink(1), productLink(2), productLink(3)]
      },
      {
        title: 'Guests & teams',
        links: [productLink(4), productLink(7), productLink(5)]
      },
      {
        title: 'Intelligence & scale',
        links: [productLink(0), productLink(6), productLink(8)]
      }
    ]
  },
  {
    label: 'For Teams',
    href: '/teams',
    columns: [
      {
        title: 'Restaurant leadership',
        links: [
          ['Owner', '/teams/owner', 'Review 6 business signals: revenue, guests, tables, reservations, kitchen status and top items.'],
          ['Manager', '/teams/manager', 'Coordinate 5 live queues: tables, orders, kitchen, reservations and team activity.'],
          ['Finance & reporting', '/teams/finance', 'Use 6 reporting views for revenue, categories, payments, average check, best sellers and comparisons.']
        ]
      },
      {
        title: 'Restaurant teams',
        links: [
          ['Front of house', '/teams/front-of-house', 'See 6 service signals: assigned tables, orders, notes, requests, status and checkout.'],
          ['Kitchen & KDS', '/teams/kitchen', 'Move tickets through received, preparing, ready and handed-off states with timing and notes visible.'],
          ['Reservations', '/teams/reservations', 'Use 6 planning signals for arrivals, party size, availability, walk-ins and seating.']
        ]
      }
    ]
  },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Company', href: '/company' }
];

export const offerCards = productAreas;

export const homeStatusCards = [
  {
    image: '/site-assets/extra/chef-order-23.webp',
    eyebrow: 'Guest payment',
    title: 'Keep table and payment status connected through checkout.',
    body: 'Guests see the amount, available method and confirmation while staff keep bill status attached to the table.'
  },
  {
    image: '/site-assets/comments/14.webp',
    eyebrow: 'Split bills',
    title: 'One bill supports three split methods.',
    body: 'Let guests split equally, assign ordered items or divide the total by shares without starting a separate checkout.'
  },
  {
    image: '/site-assets/comments/5.webp',
    eyebrow: 'Team status',
    title: 'Order status moves to the role responsible for the next handoff.',
    body: 'Front of house sees service status, kitchen sees preparation status and management sees exceptions from the same ticket context.'
  },
  {
    image: '/site-assets/comments/10.webp',
    eyebrow: 'Payments & guest ordering',
    title: 'Four guest actions stay in one mobile path.',
    body: 'A guest can scan, browse, order and pay while table context remains attached to the restaurant workflow.'
  }
];

export const workflowSteps = [
  ['Guest or staff action', 'A guest scans, reception seats, a waiter opens an order or a manager changes a table.'],
  ['Restaurant context', 'Table, guest, order, timing, notes and permissions travel with the action.'],
  ['Role-specific action', 'The responsible role receives a focused queue with the context and controls needed for the next step.'],
  ['Service & checkout', 'Preparation, ready status, handoff and checkout continue from the same restaurant context.'],
  ['Insight & assistance', 'Revenue, guest, table, sales and profitability data become available for reporting and AI-assisted questions.']
];

export const imageGroups = {
  comments: Array.from({ length: 17 }, (_, i) => `/site-assets/comments/${i + 1}.webp`),
  kitchen: Array.from({ length: 5 }, (_, i) => `/site-assets/kitchen/${i + 1}.webp`),
  owner: Array.from({ length: 3 }, (_, i) => `/site-assets/owner/${i + 1}.webp`),
  payment: ['/site-assets/payment/1.webp', '/site-assets/payment/payment-experience.webp', '/site-assets/payment/3.webp', '/site-assets/payment/4.webp'],
  pos: ['/site-assets/pos/restaurant-platform.webp', '/site-assets/pos/pos-workflow.webp'],
  social: Array.from({ length: 15 }, (_, i) => `/site-assets/social/${i + 1}.webp`),
  staff: Array.from({ length: 8 }, (_, i) => `/site-assets/staff/${i + 1}.webp`),
  table: Array.from({ length: 11 }, (_, i) => `/site-assets/table/${i + 1}.webp`)
};

export const solutionPages = {
  operations: {
    eyebrow: 'Restaurant Operations',
    title: 'See tables, orders and exceptions before they become service problems.',
    intro: 'Use 6 live views - dashboard, open orders, table status, floor maps, dine-in or takeaway and current activity - to understand what is active, what is waiting and where the shift needs attention.',
    storyEyebrow: 'Restaurant operations',
    capabilityEyebrow: '6 live operating views',
    capabilityTitle: 'Check the restaurant state without rebuilding it from separate screens.',
    capabilityBody: 'Managers can review open orders, occupied tables, order channels, floor position and live exceptions from the same operating context.',
    ctaTitle: 'See the 6 Restaurant Operations views in your own service flow.',
    ctaBody: 'Bring your floor plan, order channels and management questions. We will show how the dashboard, tables, orders and live activity fit together.',
    heroImage: '/site-assets/extra/management-app.webp',
    accent: 'green',
    highlights: [
      ['Dashboard', 'Start with active tables, open orders, sales and exceptions instead of a generic summary.'],
      ['Orders', 'Filter open, delayed or completed orders and keep each ticket attached to its table and channel.'],
      ['Tables', 'See occupied, available and payment-stage tables with service status in view.'],
      ['Floor maps', 'Use the physical floor layout to locate tables, bookings and service pressure.']
    ],
    story: [
      {
        title: 'One shift view replaces repeated status checking.',
        body: 'A manager can move from floor state to order detail without asking each team for a separate update.',
        image: '/site-assets/owner/1.webp'
      },
      {
        title: 'Keep dine-in and takeaway distinguishable but connected.',
        body: 'Each channel keeps its own table or order context while contributing to the same live workload and reporting picture.',
        image: '/site-assets/extra/restaurant-team-planning.webp'
      }
    ],
    bullets: ['Dashboard', 'Orders', 'Tables', 'Floor maps', 'Dine-in / takeaway', 'Live activity']
  },
  reservations: {
    eyebrow: 'Reservations & Table Management',
    title: 'Match bookings and walk-ins to real floor capacity.',
    intro: 'Use 7 reservation tools - calendar, timeline, availability, walk-ins, table assignment, guest flow and multiple floors - to plan demand against the live floor.',
    storyEyebrow: 'Reservations & table management',
    capabilityEyebrow: '7 reservation and seating tools',
    capabilityTitle: 'Plan ahead with calendar and timeline views, then operate live with availability and table assignment.',
    capabilityBody: 'Reception can use party size, arrival time, available tables, expected turns, walk-ins and floor position to make the next seating decision.',
    ctaTitle: 'Want to see Reservations & Table Management in action?',
    ctaBody: 'Book a demo and we’ll walk through calendars, arrivals, table assignment, walk-ins and multiple-floor setups.',
    heroImage: '/site-assets/extra/host-stand.webp',
    accent: 'blue',
    highlights: [
      ['Calendar', 'See bookings and upcoming demand in a clear planning view.'],
      ['Timeline', 'Understand the shape of the service period and what is coming next.'],
      ['Availability', 'Keep available tables and seating capacity close to the reservation workflow.'],
      ['Walk-ins', 'Handle unplanned arrivals without losing the wider floor picture.']
    ],
    story: [
      {
        title: 'See the shape of arrivals before service starts.',
        body: 'Calendar and timeline views show arrival load, party sizes and timing so the team can prepare capacity before the door gets busy.',
        image: '/site-assets/extra/shared-table-feast.webp'
      },
      {
        title: 'Turn a booking list into a live seating plan.',
        body: 'Availability, walk-ins, expected turns and multi-floor table assignment remain attached to the reservation context.',
        image: '/site-assets/custom/reservations-floor-story.webp'
      }
    ],
    bullets: ['Calendar', 'Timeline', 'Availability', 'Walk-ins', 'Table assignment', 'Guest flow', 'Multiple floors']
  },
  'guest-ordering': {
    eyebrow: 'Guest CRM, Marketing & Growth',
    title: 'Build a usable guest record from visits, orders and feedback.',
    intro: 'Use 6 growth tools - profiles, loyalty, offers, campaigns, feedback and retention - to understand engagement and plan relevant follow-up where consent and data rules allow.',
    storyEyebrow: 'Guest relationships',
    capabilityEyebrow: '6 CRM and growth tools',
    capabilityTitle: 'Move from an anonymous visit to relevant follow-up.',
    capabilityBody: 'Profiles can connect visit history, order preferences, loyalty activity, campaign response and feedback so the next message has a clear reason.',
    ctaTitle: 'Want to explore Guest CRM, Marketing & Growth?',
    ctaBody: 'We can walk through profiles, loyalty, offers, campaigns, feedback and the guest signals that can support retention.',
    heroImage: '/site-assets/extra/scan-to-order.webp',
    accent: 'green',
    highlights: [
      ['Profiles', 'Keep useful guest information together so the relationship can become more contextual.'],
      ['Loyalty', 'Support repeat visits with a clearer view of guest engagement.'],
      ['Offers', 'Use relevant offers to support stronger guest relationships.'],
      ['Campaigns', 'Connect guest context with campaigns built around the restaurant audience.']
    ],
    story: [
      {
        title: 'Build the guest profile from real restaurant interactions.',
        body: 'Connect visits, orders, preferences and loyalty activity to understand the relationship beyond one table or transaction.',
        image: '/site-assets/extra/qr-service.webp'
      },
      {
        title: 'Use feedback to decide the next retention action.',
        body: 'Combine feedback, offer response and visit frequency to choose whether the next action is service recovery, loyalty or a relevant campaign.',
        image: '/site-assets/extra/cafe-conversations.webp'
      }
    ],
    bullets: ['Profiles', 'Loyalty', 'Offers', 'Campaigns', 'Feedback', 'Retention']
  },
  payments: {
    eyebrow: 'Payments & Guest Ordering',
    title: 'Take a table from QR scan to confirmed payment without restarting the journey.',
    intro: 'Cover 8 guest and payment moments: card or digital payment, pay-at-table, split equally, split by item, split by shares, table QR, mobile menu and guest checkout.',
    storyEyebrow: 'Guest ordering & payment',
    capabilityEyebrow: '8 ordering and payment moments',
    capabilityTitle: 'Keep the table, order, bill and payment status attached from scan to confirmation.',
    capabilityBody: 'Guests can scan, browse, order, request service and pay while the restaurant keeps the table and order context visible.',
    ctaTitle: 'Want to explore Payments & Guest Ordering?',
    ctaBody: 'Book a demo and we’ll focus on table QR, mobile menus, guest checkout, pay-at-table and split-bill flows.',
    heroImage: '/site-assets/extra/smoother-checkout.webp',
    accent: 'purple',
    highlights: [
      ['Card / digital payments', 'Show the card or digital methods available for the configured provider and keep the selected method attached to the bill status.'],
      ['Pay at table', 'Open the correct bill from the table context and keep payment status visible to the service team.'],
      ['Split equally', 'Divide the total evenly across the selected number of payers.'],
      ['Split by item', 'Assign ordered items to individual payers while keeping the remaining balance visible.']
    ],
    story: [
      {
        title: 'Four guest actions stay in one mobile path.',
        body: 'Scan, browse, order and pay remain attached to the table and feed the responsible restaurant role at each step.',
        image: '/site-assets/extra/payment-thank-you.webp'
      },
      {
        title: 'One bill supports three split methods.',
        body: 'Guests can pay as one party or split equally, by ordered item or by shares while the unpaid balance remains visible.',
        image: '/site-assets/custom/cafe-payment-confirmation-replacement.webp'
      }
    ],
    bullets: ['Card / digital payments', 'Pay at table', 'Split equally', 'Split by item', 'Split by shares', 'Table QR', 'Mobile menu', 'Guest checkout']
  },
  kitchen: {
    eyebrow: 'Ordering, Kitchen & Menu',
    title: 'Move every order from entry to ready status with menu context attached.',
    intro: 'Use 7 controls - waiter entry, KDS, preparation status, ready status, menu management, modifiers and sold-out items - from order capture to service handoff.',
    storyEyebrow: 'Ordering, kitchen & menu',
    capabilityEyebrow: '7 order, kitchen and menu controls',
    capabilityTitle: 'Give front of house and kitchen the same ticket status without giving them the same screen.',
    capabilityBody: 'The ticket carries table, item, modifier and timing context into the kitchen while menu and sold-out changes prevent unavailable items from continuing through the flow.',
    ctaTitle: 'Want to see Ordering, Kitchen & Menu in action?',
    ctaBody: 'We can show waiter ordering, KDS preparation, menu management, customization and ready-status handoff around your operation.',
    heroImage: '/site-assets/extra/chef-warm-kitchen.webp',
    accent: 'orange',
    highlights: [
      ['Waiter ordering', 'Create the order from the waiter or guest flow and attach the correct table, items, modifiers and notes.'],
      ['KDS', 'Place incoming tickets in a focused KDS queue with item detail, timing and priority context.'],
      ['Preparation status', 'Show received and preparing states so kitchen and management can see what is waiting and what is active.'],
      ['Ready status', 'Publish ready status to front of house so the completed ticket has a clear next owner.']
    ],
    story: [
      {
        title: 'The kitchen receives the complete preparation context, not a copied order summary.',
        body: 'Item detail, modifiers, ticket age and current state remain visible in the preparation queue during service.',
        image: '/site-assets/kitchen/2.webp'
      },
      {
        title: 'Menu availability prevents the next avoidable ticket problem.',
        body: 'Menu, modifier and sold-out changes update the ordering context so unavailable or incorrectly configured items do not continue into preparation.',
        image: '/site-assets/extra/team-planning.webp'
      }
    ],
    bullets: ['Waiter ordering', 'KDS', 'Preparation status', 'Ready status', 'Menu management', 'Menu customization', 'Sold-out info']
  },
  team: {
    eyebrow: 'Team Management',
    title: 'Give each role the controls it needs and management the team picture.',
    intro: 'Coordinate 5 people controls - role workspaces, permissions, shifts, performance context and staff activity - without putting every employee in the same admin screen.',
    storyEyebrow: 'Team management',
    capabilityEyebrow: '5 team controls',
    capabilityTitle: 'Limit access and interface noise while preserving the handoff between roles.',
    capabilityBody: 'Owners, managers, front of house, kitchen, reservations and finance can see different controls while using the same table, order and business context.',
    ctaTitle: 'Want to explore Team Management?',
    ctaBody: 'Book a demo and we’ll map role workspaces, permissions, shifts, performance and staff activity around your team structure.',
    heroImage: '/site-assets/extra/role-dashboard.webp',
    accent: 'green',
    highlights: [
      ['Role workspaces', 'Assign a focused queue and set of actions to the role responsible for the work.'],
      ['Roles & permissions', 'Define view, create, change, approve and export permissions by role.'],
      ['Shift management', 'Keep shift assignment and active team context close to the work being coordinated.'],
      ['Performance insight', 'Review completed actions, timing and service outcomes with the responsible role and shift context visible.']
    ],
    story: [
      {
        title: 'Six workspaces organise access around real restaurant responsibilities.',
        body: 'Owners, managers, front of house, kitchen, reservations and finance can use focused views while the handoff context stays connected.',
        image: '/site-assets/extra/taqueria-handoff.webp'
      },
      {
        title: 'Management sees team activity without exposing management controls to every role.',
        body: 'Managers can review assignments, active work and completion status while each role continues to see only the controls required for its responsibility.',
        image: '/site-assets/extra/latte-handoff.webp'
      }
    ],
    bullets: ['Role workspaces', 'Roles & permissions', 'Shift management', 'Performance insight', 'Staff activity']
  },
  insights: {
    eyebrow: 'Analytics, Forecasting & Profitability',
    title: 'Track 9 metrics that explain revenue, demand and margin.',
    intro: 'Compare revenue, guests, average check, table turnover, sales by time, best sellers, payment mix, forecasting and profitability by item or location.',
    storyEyebrow: 'Analytics & profitability',
    capabilityEyebrow: '9 management metrics',
    capabilityTitle: 'Compare the number, the period and the operating context behind it.',
    capabilityBody: 'A metric should state its period, location, channels and source context so management can trace a change to the restaurant activity behind it.',
    ctaTitle: 'Want to explore Analytics, Forecasting & Profitability?',
    ctaBody: 'We can show the signals behind revenue, guests, table performance, forecasting, best sellers and profitability by item or location.',
    heroImage: '/site-assets/custom/insights-hero.webp',
    accent: 'blue',
    highlights: [
      ['Revenue', 'Compare revenue by period, service window, channel or location where the configured data supports it.'],
      ['Guests', 'Track guest count or covers to explain demand and calculate spend per guest.'],
      ['Average check', 'Calculate average check from revenue and guest count, then compare the result by period or location.'],
      ['Table turnover', 'Review how many parties tables serve and how long tables remain in each service stage.']
    ],
    story: [
      {
        title: 'Nine metrics create one decision view.',
        body: 'Read revenue and demand alongside order channels, guest activity, table performance, best sellers and payment mix.',
        image: '/site-assets/extra/manager-analytics.webp'
      },
      {
        title: 'Compare forecasts with actual demand and margin.',
        body: 'Use historical sales and demand patterns to support a forecast, then compare it with actual results and profitability by item or location.',
        image: '/site-assets/extra/analytics-tablet-phone.webp'
      }
    ],
    bullets: ['Revenue', 'Guests', 'Average check', 'Table turnover', 'Sales by time', 'Best sellers', 'Payment mix', 'Forecasting', 'Profitability by item or location']
  }
};

export const resources = [
  {
    slug: 'getting-started',
    title: 'Getting started with PayMyDine',
    category: 'Implementation',
    intro: 'A 6-stage guide from operating discovery and product scope to role configuration, integration review, validation and measured go-live.',
    image: '/site-assets/extra/team-planning.webp',
    articleImage: '/site-assets/extra/kitchen-orders.webp',
    sections: [
      ['Start with the restaurant, not a feature list', 'Map the current operating model, team roles, guest journey and technology environment before deciding which PayMyDine modules belong in the first setup.'],
      ['Configure around responsibilities', 'Define the workspaces, permissions, floor structure and workflows that each team needs so the system reflects the way the restaurant actually operates.'],
      ['Plan the launch in clear stages', 'Review integrations, prepare the team, validate the operating flow and move into go-live with a configuration that can be extended as needs evolve.']
    ]
  },
  {
    slug: 'role-based-workspaces',
    title: 'Designing role-based restaurant workspaces',
    category: 'Teams',
    intro: 'How 6 role workspaces reduce noise and permissions risk while keeping the restaurant context connected.',
    image: '/site-assets/extra/qr-ordering-scene.webp',
    articleImage: '/site-assets/extra/outdoor-qr-toast.webp',
    sections: [
      ['Match the view to the responsibility', 'Ownership needs performance context. Front of house needs tables, orders and guest requests. Kitchen needs preparation work. Role-based design keeps each workspace focused.'],
      ['Keep the wider operation connected', 'Separate workspaces should not create separate versions of the restaurant. The useful context still needs to move between the people responsible for the next step.'],
      ['Use permissions deliberately', 'Access should follow responsibility so each role can work confidently without unnecessary admin or business information.']
    ]
  },
  {
    slug: 'ai-in-restaurant-operations',
    title: 'Where AI can assist restaurant operations',
    category: 'AI & insights',
    intro: 'How to ask, summarise, compare, alert, forecast and investigate across 9 restaurant metrics without hiding the source data.',
    image: '/site-assets/extra/friends-dinner.webp',
    articleImage: '/site-assets/extra/restaurant-entrance.webp',
    sections: [
      ['Start with a useful question', 'AI becomes more valuable when it helps answer a real operating question, such as what changed, what is performing differently or what deserves attention.'],
      ['Keep the source data visible', 'AI assistance should sit alongside the underlying restaurant information so owners and managers can understand the context behind a summary or observation.'],
      ['Support decisions rather than replace them', 'The useful role of AI is to make information easier to explore, summarise and compare while the restaurant team keeps control of operational decisions.']
    ]
  },
  {
    slug: 'guest-ordering-journey',
    title: 'Designing a guest ordering journey that stays part of the restaurant',
    category: 'Guest experience',
    intro: 'How the 4-action guest path - scan, browse, order and pay - creates clear work for front of house, kitchen and payment flows.',
    image: '/site-assets/extra/payment-cafe-table.webp',
    articleImage: '/site-assets/extra/payment-dinner.webp',
    sections: [
      ['Make the first action obvious', 'The table QR should lead into a clear mobile experience with the restaurant context ready and the next action easy to understand.'],
      ['Keep service close', 'Digital ordering should still support notes, waiter calls and the real service team rather than turning the meal into a self-service interface.'],
      ['Carry the journey through checkout', 'Ordering and payment become more useful when the guest does not have to restart the experience at the end of the meal.']
    ]
  },
  {
    slug: 'reservations-and-floor-planning',
    title: 'Bringing reservations and floor planning together',
    category: 'Reservations',
    intro: 'How 7 reservation and seating capabilities turn arrival load, party size and live floor capacity into a practical seating decision.',
    image: '/site-assets/extra/tablet-dashboard.webp',
    articleImage: '/site-assets/extra/payment-approved.webp',
    sections: [
      ['See the shape of the day', 'Upcoming reservations, party sizes and arrival timing help the team understand demand before guests reach the door.'],
      ['Keep the floor in the same story', 'Availability, occupied tables and reservation-ready tables add the context needed to turn a booking list into a seating plan.'],
      ['Choose the view that fits the moment', 'Calendar, timeline and list views can support planning, while the live floor helps with the decisions happening now.']
    ]
  },
  {
    slug: 'pos-integration-planning',
    title: 'Planning a useful POS integration',
    category: 'Integrations',
    intro: 'How to define the data source, fields, direction, refresh timing and responsible role before building a POS integration.',
    image: '/site-assets/extra/power-up-pos.webp',
    articleImage: '/site-assets/extra/dashboard-menu-mockup.webp',
    sections: [
      ['Start with the existing environment', 'Understand what the restaurant already uses and which workflows it wants to improve before deciding what should connect.'],
      ['Work from available capabilities', 'Integration scope depends on APIs, permissions and data access provided by the current POS environment.'],
      ['Prioritise useful connections', 'The goal is not to replace everything by default. It is to add the PayMyDine capabilities that make the operating or guest journey stronger.']
    ]
  }
];

export const integrations = ['SumUp', 'ready2order', 'Lightspeed', 'Square'];

export const integrationFeaturePills = ['POS data', 'Accounting context', 'Delivery channels', 'Payment providers', 'Central reporting', 'Inventory'];

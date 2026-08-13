export const productAreas = [
  {
    number: 1,
    icon: 'chart',
    title: 'PayMyDine AI',
    href: '/ai',
    body: 'Use 6 AI-assisted actions: ask questions, receive a daily briefing, flag unusual movement, compare periods, support forecasts and identify the next metric to investigate.',
    navNote: '6 actions for questions, briefings, alerts, comparisons, forecasts and investigation.',
    image: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp',
    compactImage: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp'
  },
  {
    number: 2,
    icon: 'operations',
    title: 'Restaurant Operations',
    href: '/solutions/operations',
    body: 'Monitor 6 live views: dashboard, open orders, table status, floor maps, dine-in or takeaway and current restaurant activity.',
    navNote: '6 live views for orders, tables, floor maps, channels and active service.',
    image: '/site-assets/custom/page-heroes/solutions-operations-hero-chatgpt-20260814.webp',
    compactImage: '/site-assets/custom/page-heroes/solutions-operations-hero-chatgpt-20260814.webp'
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
    image: '/site-assets/custom/page-heroes/solutions-payments-hero-chatgpt-20260814.webp',
    compactImage: '/site-assets/custom/page-heroes/solutions-payments-hero-chatgpt-20260814.webp'
  },
  {
    number: 6,
    icon: 'chart',
    title: 'Analytics, Forecasting & Profitability',
    href: '/solutions/insights',
    body: 'Track 9 decision metrics: revenue, guests, average check, table turnover, sales by time, best sellers, payment mix, forecasting and profitability.',
    navNote: '9 metrics for revenue, demand, table performance, forecasts and profitability.',
    image: '/site-assets/custom/page-heroes/solutions-insights-hero-chatgpt-20260814.webp',
    compactImage: '/site-assets/custom/page-heroes/solutions-insights-hero-chatgpt-20260814.webp'
  },
  {
    number: 7,
    icon: 'team',
    title: 'Team Management',
    href: '/solutions/team',
    body: 'Coordinate 5 people controls: role workspaces, permissions, shifts, performance context and staff activity.',
    navNote: '5 people controls across workspaces, permissions, shifts and staff activity.',
    image: '/site-assets/custom/page-heroes/solutions-team-hero-chatgpt-20260809.webp',
    compactImage: '/site-assets/custom/page-heroes/solutions-team-hero-chatgpt-20260809.webp'
  },
  {
    number: 8,
    icon: 'phone',
    title: 'Guest CRM, Marketing & Growth',
    href: '/solutions/guest-ordering',
    body: 'Use 6 growth tools: profiles, loyalty, offers, campaigns, feedback and retention, with visit context available for relevant follow-up.',
    navNote: '6 CRM and growth tools for guest context, engagement and retention.',
    image: '/site-assets/custom/page-heroes/solutions-guest-ordering-hero-chatgpt-20260814.webp',
    compactImage: '/site-assets/custom/page-heroes/solutions-guest-ordering-hero-chatgpt-20260814.webp'
  },
  {
    number: 9,
    icon: 'link',
    title: 'Integrations, Multi-location & Inventory',
    href: '/integrations',
    body: 'Connect 4 system types - POS, accounting, delivery and payments - then add central reporting, shared menus, inventory, food-cost and purchasing context.',
    navNote: '4 integration types plus central reporting, menus, inventory, food cost and purchasing.',
    image: '/site-assets/custom/page-heroes/integrations-hero-chatgpt-20260814.webp',
    compactImage: '/site-assets/custom/page-heroes/integrations-hero-chatgpt-20260814.webp'
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
        title: 'Platform & operations',
        links: [productLink(0), productLink(1), productLink(2)]
      },
      {
        title: 'Service & performance',
        links: [productLink(3), productLink(4), productLink(5)]
      },
      {
        title: 'Teams, guests & scale',
        links: [productLink(6), productLink(7), productLink(8)]
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
          ['Service staff', '/teams/service-staff', 'See 6 service signals: assigned tables, orders, notes, requests, status and checkout.'],
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
    body: 'Service staff sees service status, kitchen sees preparation status and management sees exceptions from the same ticket context.'
  },
  {
    image: '/site-assets/comments/10.webp',
    eyebrow: 'Table QR ordering & payment',
    title: 'Scan the table QR code, browse, order and pay without losing the table context.',
    body: 'Guests scan the table QR code to open the mobile menu, place the order and complete payment while PayMyDine keeps the table, order, bill and payment status connected for staff.'
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
    heroImage: '/site-assets/custom/page-heroes/solutions-operations-hero-chatgpt-20260814.webp',
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
    heroImage: '/site-assets/custom/page-heroes/solutions-guest-ordering-hero-chatgpt-20260814.webp',
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
        image: '/site-assets/custom/solution-story/guest-profile-interactions-20260809.webp'
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
    heroImage: '/site-assets/custom/page-heroes/solutions-payments-hero-chatgpt-20260814.webp',
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
    capabilityTitle: 'Give service staff and kitchen the same ticket status without giving them the same screen.',
    capabilityBody: 'The ticket carries table, item, modifier and timing context into the kitchen while menu and sold-out changes prevent unavailable items from continuing through the flow.',
    ctaTitle: 'Want to see Ordering, Kitchen & Menu in action?',
    ctaBody: 'We can show waiter ordering, KDS preparation, menu management, customization and ready-status handoff around your operation.',
    heroImage: '/site-assets/extra/chef-warm-kitchen.webp',
    accent: 'orange',
    highlights: [
      ['Waiter ordering', 'Create the order from the waiter or guest flow and attach the correct table, items, modifiers and notes.'],
      ['KDS', 'Place incoming tickets in a focused KDS queue with item detail, timing and priority context.'],
      ['Preparation status', 'Show received and preparing states so kitchen and management can see what is waiting and what is active.'],
      ['Ready status', 'Publish ready status to service staff so the completed ticket has a clear next owner.']
    ],
    story: [
      {
        title: 'The kitchen receives the complete preparation context, not a copied order summary.',
        body: 'Item detail, modifiers, ticket age and current state remain visible in the preparation queue during service.',
        image: '/site-assets/custom/solution-story/kitchen-preparation-context-20260809.webp'
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
    capabilityBody: 'Owners, managers, service staff, kitchen, reservations and finance can see different controls while using the same table, order and business context.',
    ctaTitle: 'Want to explore Team Management?',
    ctaBody: 'Book a demo and we’ll map role workspaces, permissions, shifts, performance and staff activity around your team structure.',
    heroImage: '/site-assets/custom/page-heroes/solutions-team-hero-chatgpt-20260809.webp',
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
        body: 'Owners, managers, service staff, kitchen, reservations and finance can use focused views while the handoff context stays connected.',
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
    heroImage: '/site-assets/custom/page-heroes/solutions-insights-hero-chatgpt-20260814.webp',
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

// === PMD PRODUCT PAGE DEPTH V2 START ===

const solutionDetailExpansions = {
  operations: {
    factsEyebrow: 'Restaurant operations in numbers',
    factsTitle: 'A live operating view built around six core capabilities and four role perspectives.',
    factsIntro: 'The numbers describe the configured product scope. Performance improvements must be measured against the restaurant baseline.',
    facts: [
      ['06', 'core capabilities', `Dashboard, orders, tables, floor maps, dine-in or takeaway and live activity stay in one operating area.`],
      ['04', 'role perspectives', `Owner, manager, service staff and kitchen teams use the same restaurant context at different levels of detail.`],
      ['02', 'service channels', `Dine-in and takeaway can be followed together without maintaining separate versions of the restaurant day.`],
      ['01', 'shared operating picture', `A status change should update the same restaurant story instead of ending in a disconnected screen.`]
    ],
    workflowEyebrow: 'A shift in five steps',
    workflowTitle: 'How a live service period moves through the operations layer.',
    workflowIntro: 'The workflow is designed to make the current state, responsible role and next action easier to identify.',
    workflow: [
      ['Load the shift context', `Open reservations, active tables, open orders, takeaway work and the floor view before service pressure builds.`],
      ['Identify exceptions', `Find waiting guests, delayed orders, unpaid tables or areas of the floor that need management attention.`],
      ['Move work to the responsible role', `Service staff sees service actions, kitchen sees preparation work and managers keep the wider exception view.`],
      ['Close the service loop', `Update the order, table, preparation and payment state so the next team member does not work from an old status.`],
      ['Review the completed shift', `Compare revenue, guests, table movement and operational exceptions after the service period.`]
    ],
    rolesTitle: 'Each role gets a different level of detail from the same restaurant day.',
    rolesIntro: 'The goal is not to make every person use the management dashboard. It is to keep each role focused while preserving shared context.',
    roleViews: [
      ['Owner', `Reviews revenue, guest volume, table turnover and the exceptions that affected the business result.`],
      ['Manager', `Monitors the floor, open orders, delays, takeaway activity and the actions that need coordination during the shift.`],
      ['Service staff', `Works with assigned tables, orders, guest requests, service status and checkout context.`],
      ['Kitchen', `Receives preparation work with order detail, notes, timing and ready-to-serve handoff status.`]
    ],
    metricsTitle: 'Measure whether the operating flow is becoming easier to run.',
    metricsIntro: 'Capture a baseline first, then compare the same definition and service period after implementation.',
    metrics: [
      ['Arrival-to-seat time', `Measure how long guests wait between arrival or check-in and being seated, where those events are captured.`],
      ['Order-to-preparation time', `Measure the interval between order confirmation and the kitchen receiving or starting the work.`],
      ['Table turnover', `Track the time from seating through table release using a consistent definition for each service model.`],
      ['Bill-to-payment time', `Measure how long the final checkout stage takes from bill request to completed payment status.`]
    ],
    implementationTitle: 'Agree on the floor, statuses and ownership before go-live.',
    implementationIntro: 'The operating view is only as clear as the table map, status definitions, role permissions and connected data behind it.',
    implementation: [
      'Floor maps, table identifiers and capacity structure',
      'Dine-in and takeaway channel definitions',
      'Order, table, kitchen and payment status vocabulary',
      'Role permissions and exception ownership',
      'POS or payment data available to the operating view',
      'Baseline periods and metric definitions for review'
    ],
    faqs: [
      ['Does PayMyDine replace the POS?', `Not by default. The product can add operating, guest, team and insight layers around supported POS connections or selected standalone modules.`],
      ['Can it support more than one floor?', `Yes. The current product map includes floor maps and multiple-floor restaurant setups.`],
      ['Can dine-in and takeaway stay separate?', `They can keep distinct channel context while still contributing to one management view.`],
      ['Is every status real time?', `Freshness depends on the originating module, connected system, permissions and refresh method available in the deployment.`]
    ]
  },

  reservations: {
    factsEyebrow: 'Reservation and seating scope',
    factsTitle: 'Seven planning capabilities connect bookings, arrivals and the live floor.',
    factsIntro: 'Availability and seating logic must be configured around the actual service periods, floor structure and operating rules.',
    facts: [
      ['07', 'reservation capabilities', `Calendar, timeline, availability, walk-ins, table assignment, guest flow and multiple floors form the current product scope.`],
      ['03', 'planning views', `Calendar, timeline and live floor context support different decisions before and during service.`],
      ['02', 'arrival types', `Confirmed bookings and walk-ins can be handled without losing the wider capacity picture.`],
      ['LIVE', 'floor context', `Occupied, available and reservation-ready table states stay close to the seating decision.`]
    ],
    workflowEyebrow: 'From availability to seating',
    workflowTitle: 'How a booking becomes a table decision instead of a separate list.',
    workflowIntro: 'The planning view should remain useful when the restaurant moves from preparation into live arrivals.',
    workflow: [
      ['Configure the service structure', `Define service periods, floor maps, table capacity and the availability rules used by the restaurant.`],
      ['Capture bookings and walk-ins', `Keep party size, arrival time and source context attached to each expected or unplanned arrival.`],
      ['Prepare the arrival view', `Use the calendar or timeline to understand the next demand window before guests reach reception.`],
      ['Seat with the floor visible', `Assign or reassign tables using the current availability and service state rather than the booking list alone.`],
      ['Review the seating result', `Measure arrivals, no-shows, waiting time, table use and turnover with consistent event definitions.`]
    ],
    rolesTitle: 'Reception plans the door while management keeps capacity and service in view.',
    rolesIntro: 'Reservation work is specialised, but the seating decision still affects service staff, kitchen and ownership reporting.',
    roleViews: [
      ['Reservations and reception', `Sees upcoming arrivals, party size, booking details, availability and the next seating decision.`],
      ['Manager', `Monitors capacity pressure, walk-ins, delayed arrivals and how seating choices affect the active floor.`],
      ['Service staff', `Receives the table and guest context needed to begin service after seating.`],
      ['Owner', `Reviews demand patterns, no-shows, utilisation and table turnover across periods or locations.`]
    ],
    metricsTitle: 'Use reservation events to improve planning without inventing a percentage.',
    metricsIntro: 'The system should capture the events required to calculate each metric before the website or team claims an improvement.',
    metrics: [
      ['Booking-to-arrival rate', `Compare confirmed bookings with actual arrivals using the same cancellation and no-show rules.`],
      ['No-show rate', `Track expected parties that do not arrive, segmented by period, source or location where available.`],
      ['Arrival-to-seat time', `Measure the wait between guest arrival and assigned seating during comparable service periods.`],
      ['Table utilisation and turnover', `Review how available capacity is used and how long tables remain occupied under the restaurant's own definitions.`]
    ],
    implementationTitle: 'Reservation accuracy begins with configuration accuracy.',
    implementationIntro: 'Document the availability model and the events that change a table or booking state.',
    implementation: [
      'Service periods and booking availability rules',
      'Floor maps, table capacities and table status definitions',
      'Walk-in handling and reception responsibilities',
      'Arrival, seating, cancellation and no-show events',
      'Booking sources or integrations available to the setup',
      'Measurement rules for wait time, utilisation and turnover'
    ],
    faqs: [
      ['Can the page support multiple floors?', `Yes. Multiple-floor context is part of the current reservation and table-management scope.`],
      ['How are walk-ins handled?', `Walk-ins can be added to the live arrival and floor picture so the next seating decision uses current capacity.`],
      ['Does PayMyDine decide when to overbook?', `Availability rules belong to the configured restaurant policy. The platform should not assume an overbooking strategy without an agreed rule.`],
      ['Can booking data affect reporting?', `Yes, where booking, arrival and seating events are captured consistently and available to the reporting layer.`]
    ]
  },

  kitchen: {
    factsEyebrow: 'Ordering and kitchen scope',
    factsTitle: 'Seven controls connect order capture, preparation status and menu availability.',
    factsIntro: 'The purpose is to reduce missing context between service staff, the kitchen and the menu state guests or staff see.',
    facts: [
      ['07', 'workflow controls', `Waiter ordering, KDS, preparation status, ready status, menu management, customisation and sold-out information are included.`],
      ['02', 'critical handoffs', `The order moves from service to preparation, then ready status moves back to the service team.`],
      ['03', 'order contexts', `Table, item or modifier detail and preparation status remain attached to the same work.`],
      ['01', 'shared menu state', `Menu changes and sold-out information should reach the people and channels that depend on them.`]
    ],
    workflowEyebrow: 'From order to ready handoff',
    workflowTitle: 'How the kitchen receives complete work and returns a clear status.',
    workflowIntro: 'The useful outcome is not another ticket screen. It is a readable preparation queue with a reliable handoff.',
    workflow: [
      ['Capture the order', `Record the table or channel, ordered items, modifiers and notes in the service workflow.`],
      ['Present the preparation work', `Show the kitchen the order detail and priority context needed to begin work without unrelated admin information.`],
      ['Update preparation status', `Move work through received and in-progress states so managers and service teams can understand what is happening.`],
      ['Mark ready for service', `Return a clear ready status to the role responsible for collection or table service.`],
      ['Maintain menu availability', `Update items, customisation and sold-out information so new orders reflect what the restaurant can serve.`]
    ],
    rolesTitle: 'The same order is presented differently to service, preparation and management.',
    rolesIntro: 'Each role should see the detail required for its action without losing the table and order identity behind the work.',
    roleViews: [
      ['Service staff', `Captures items, modifiers and notes, then follows preparation and ready status for the right table.`],
      ['Kitchen and KDS', `Works from a focused queue with item detail, notes, elapsed time and preparation status.`],
      ['Manager', `Sees workload, delayed tickets, ready handoffs and menu availability exceptions during service.`],
      ['Menu administrator', `Maintains menu items, customisation and sold-out state for the configured ordering channels.`]
    ],
    metricsTitle: 'Measure the handoffs, not only the final ticket time.',
    metricsIntro: 'A restaurant should agree when each timer starts and stops before comparing performance.',
    metrics: [
      ['Order-to-kitchen visibility', `Measure the interval between order confirmation and the preparation view receiving the work.`],
      ['Preparation duration', `Track time from the agreed preparation start event to ready status by item, category or service period where available.`],
      ['Ready-to-serve wait', `Measure how long completed work waits before the service handoff is acknowledged.`],
      ['Sold-out update delay', `Measure the time between an availability decision and the updated menu state reaching the relevant channel.`]
    ],
    implementationTitle: 'Define the menu and status model before measuring kitchen performance.',
    implementationIntro: 'Preparation reporting is only comparable when item structure, status events and channel ownership are consistent.',
    implementation: [
      'Menu items, categories, modifiers and preparation notes',
      'KDS views and the roles responsible for each queue',
      'Received, in-progress and ready status definitions',
      'Service staff acknowledgement and service handoff rules',
      'Sold-out ownership and channel-update requirements',
      'POS or ordering integration source-of-truth decisions'
    ],
    faqs: [
      ['Is the KDS the same as the manager dashboard?', `No. The kitchen view is focused on preparation work, while management keeps the wider service and exception picture.`],
      ['Can sold-out information update ordering?', `Yes, where menu control and the relevant ordering channels are part of the configured setup.`],
      ['Are modifiers and notes included?', `The product scope includes menu customisation and order notes that need to travel with preparation work.`],
      ['Can different order channels use the same kitchen flow?', `They can contribute to one preparation picture while retaining their channel and table or takeaway context.`]
    ]
  },

  payments: {
    factsEyebrow: 'Guest ordering and payment scope',
    factsTitle: 'Eight guest and checkout moments include three practical ways to split a bill.',
    factsIntro: 'The exact payment methods and settlement data depend on the provider and integration available in the deployment.',
    facts: [
      ['08', 'journey moments', `Card or digital payment, pay at table, three split methods, table QR, mobile menu and guest checkout form the current scope.`],
      ['03', 'bill-split methods', `Guests can split equally, assign ordered items or divide the total by shares.`],
      ['04', 'role perspectives', `Guest, service staff, management and finance each need a different view of the same checkout.`],
      ['01', 'connected journey', `Menu access, ordering, service context and payment should not restart as separate experiences.`]
    ],
    workflowEyebrow: 'From table QR to settled status',
    workflowTitle: 'How a guest action becomes a completed and visible payment event.',
    workflowIntro: 'The table should understand the next step while the restaurant retains order and settlement context.',
    workflow: [
      ['Open the table journey', `A guest scans the table QR or enters the configured mobile menu and ordering experience.`],
      ['Build or review the order', `Items, notes and the table context remain connected as the guest or team prepares for checkout.`],
      ['Start checkout', `The guest reviews the bill and selects the payment path available in the restaurant setup.`],
      ['Choose a payer or split method', `One payer can settle the table, or the group can split equally, by ordered item or by shares.`],
      ['Confirm status to the restaurant', `Completed, partial or unresolved payment context returns to the team and reporting workflow where supported.`]
    ],
    rolesTitle: 'Guests need clarity; the restaurant needs settlement context and a clean handoff.',
    rolesIntro: 'A simple guest interface should still provide the operational and reporting information required by the team.',
    roleViews: [
      ['Guest', `Browses, orders, requests service and pays through the configured table journey without learning the restaurant's internal systems.`],
      ['Service staff', `Sees bill status, payment progress and whether the table still requires service or settlement attention.`],
      ['Manager', `Monitors incomplete payments, exceptions and the effect of checkout timing on table availability.`],
      ['Finance and reporting', `Reviews payment activity, method mix and reconciliation context available from the provider or POS connection.`]
    ],
    metricsTitle: 'Measure checkout completion and the time required to release the table.',
    metricsIntro: 'Metrics must use provider and restaurant events that are actually captured in the deployment.',
    metrics: [
      ['Bill-request-to-payment time', `Measure the interval between the guest or team starting checkout and confirmed completion.`],
      ['Digital checkout completion', `Track completed checkout journeys against started journeys where the required events are available.`],
      ['Split-method mix', `Understand how often guests use equal, item-based or share-based splitting during comparable periods.`],
      ['Payment and exception mix', `Review payment methods, incomplete attempts and unresolved settlement states available from connected systems.`]
    ],
    implementationTitle: 'Payment configuration requires provider, table and reconciliation decisions.',
    implementationIntro: 'The guest journey and back-office status need the same definitions before launch.',
    implementation: [
      'Supported payment provider and available status fields',
      'Table and QR mapping for each guest journey',
      'Equal, item and share split rules',
      'Partial, completed and failed payment status handling',
      'POS or finance reconciliation responsibilities',
      'Role permissions for viewing and resolving payment exceptions'
    ],
    faqs: [
      ['Which split methods are supported?', `The current product scope includes equal splits, assignment by ordered item and division by shares.`],
      ['Must every restaurant use guest ordering?', `No. Guest ordering, pay-at-table and payment modules can be selected according to the restaurant setup.`],
      ['Does every payment provider expose the same data?', `No. Payment methods, status detail, settlement fields and refresh behaviour depend on the provider and integration.`],
      ['Can the team see when a table has paid?', `Yes, where payment status is available to the configured operating workflow and permissions allow the role to see it.`]
    ]
  },

  insights: {
    factsEyebrow: 'Analytics and profitability scope',
    factsTitle: 'Nine management metrics connect demand, service, sales and profitability.',
    factsIntro: 'A metric is only reliable when its source, definition, time period and location mapping are documented.',
    facts: [
      ['09', 'management metrics', `Revenue, guests, average check, table turnover, sales timing, best sellers, payment mix, forecasting and profitability are included.`],
      ['02', 'profitability levels', `Profitability can be examined by item or location where the required cost and sales data is available.`],
      ['04', 'decision roles', `Owner, manager, finance and operational leads read the same metrics for different decisions.`],
      ['03', 'comparison dimensions', `Period, location and order channel comparisons can explain movement behind a headline number.`]
    ],
    workflowEyebrow: 'From event data to a decision',
    workflowTitle: 'How restaurant activity becomes a metric that can be investigated.',
    workflowIntro: 'The reporting layer should preserve the path from a summary back to the source events and definitions.',
    workflow: [
      ['Collect the source events', `Orders, tables, guests, reservations and payments contribute the data available to the reporting environment.`],
      ['Apply agreed definitions', `Define periods, locations, channels, revenue treatment, covers and cost inputs before comparing results.`],
      ['Review the operating dashboard', `See current results and changes across the management metrics relevant to the configured modules.`],
      ['Investigate the movement', `Filter by period, location, channel, category or item to find the operating context behind the change.`],
      ['Act and compare again', `Assign the next operational question or action, then compare the same metric definition in a later period.`]
    ],
    rolesTitle: 'The same number supports different questions for ownership, management and finance.',
    rolesIntro: 'Role-based reporting keeps the source consistent while changing the depth and action expected from the reader.',
    roleViews: [
      ['Owner', `Compares revenue, guest demand, location performance and profitability to decide where attention or investment is required.`],
      ['Manager', `Connects table, service and sales metrics to the operational events that shaped the shift.`],
      ['Finance', `Reviews revenue treatment, payment mix, categories, cost inputs and the reporting fields used outside operations.`],
      ['Operational lead', `Uses timing, best-seller and channel data to adjust service, menu or staffing decisions.`]
    ],
    metricsTitle: 'The nine metrics form four practical management groups.',
    metricsIntro: 'Availability and accuracy depend on the modules, integrations and cost data present in the restaurant environment.',
    metrics: [
      ['Demand and revenue', `Revenue, guest count and average check show the scale and value of demand during the selected period.`],
      ['Floor and service', `Table turnover and sales by time connect the commercial result to how the restaurant operated.`],
      ['Product and payment', `Best sellers and payment mix show what guests bought and how the table settled.`],
      ['Forecast and profit', `Forecasting plus profitability by item or location support forward planning when complete inputs are available.`]
    ],
    implementationTitle: 'A reporting project begins with definitions and data ownership.',
    implementationIntro: 'Dashboards should not hide disagreements about revenue, guests, costs or comparison periods.',
    implementation: [
      'Order, reservation, table and payment data sources',
      'Location, channel, category and item mappings',
      'Revenue, guest, average-check and turnover definitions',
      'Food-cost or other cost inputs required for profitability',
      'Reporting-period and comparison rules',
      'Role permissions and data-quality review ownership'
    ],
    faqs: [
      ['Can PayMyDine calculate profitability without cost data?', `No reliable profitability figure can be produced without the required sales, item and cost inputs.`],
      ['Is a forecast a guaranteed result?', `No. Forecasts are decision-support estimates that should be compared with actual results and reviewed by the team.`],
      ['Can locations be compared?', `Yes, when location mappings and metric definitions are consistent across the selected sites.`],
      ['Can AI explain a metric?', `AI can support summaries and investigation around available data, while the source views and human decision remain visible.`]
    ]
  },

  team: {
    factsEyebrow: 'Role-based team scope',
    factsTitle: 'Six workspaces and five team controls keep access aligned with responsibility.',
    factsIntro: 'Role-based design changes what each person sees; it does not create six disconnected restaurant systems.',
    facts: [
      ['06', 'role workspaces', `Owner, manager, service staff, kitchen, reservations and finance have distinct product stories in PayMyDine.`],
      ['05', 'team controls', `Role workspaces, permissions, shift management, performance insight and staff activity form the current scope.`],
      ['02', 'visibility levels', `Focused role views support daily work while management keeps wider operational context.`],
      ['01', 'shared operation', `Table, order, reservation, kitchen and payment context remains part of the same restaurant.`]
    ],
    workflowEyebrow: 'From role design to daily use',
    workflowTitle: 'How permissions and focused workspaces become an operating model.',
    workflowIntro: 'The useful result is clear responsibility, not simply more user accounts.',
    workflow: [
      ['Map real responsibilities', `List the decisions and actions owned by each restaurant role before assigning screens or permissions.`],
      ['Set access deliberately', `Give each role the modules, locations and information needed for its work without unnecessary business visibility.`],
      ['Configure focused views', `Arrange the table, order, preparation, reservation or reporting context around the role's next action.`],
      ['Use the workspace during service', `Keep actions and status changes attached to the person or role responsible for the handoff.`],
      ['Review and adapt access', `Update permissions, onboarding and workspace scope as team structure or restaurant responsibilities change.`]
    ],
    rolesTitle: 'Six workspaces answer six different restaurant questions.',
    rolesIntro: 'The examples below show why a single universal dashboard would create noise for both operational and business roles.',
    roleViews: [
      ['Owner and finance', `Need revenue, performance, payment and reporting context without operating every table or kitchen ticket.`],
      ['Manager', `Needs the live floor, open work, exceptions and team activity required to coordinate the shift.`],
      ['Service staff and reservations', `Need guests, tables, bookings, orders and service actions without unrelated financial administration.`],
      ['Kitchen', `Needs preparation detail, timing and ready handoff without the rest of the management interface.`]
    ],
    metricsTitle: 'Evaluate whether role design reduces ambiguity and handoff delay.',
    metricsIntro: 'These metrics require agreed events or team-review methods; they are not automatic performance claims.',
    metrics: [
      ['Access accuracy', `Review whether people can reach the information they need without receiving permissions outside their responsibility.`],
      ['Handoff time', `Measure the time between one role completing a status and the next responsible role acknowledging the work.`],
      ['Workspace adoption', `Track active use of the configured role views where usage events are available and appropriate.`],
      ['Exception resolution', `Measure how long assigned operational exceptions remain unresolved during comparable service periods.`]
    ],
    implementationTitle: 'Treat permissions as an operating design, not a one-time technical task.',
    implementationIntro: 'The team should know who owns access decisions and how changes are reviewed after go-live.',
    implementation: [
      'Role and responsibility matrix',
      'Module, location and data permissions',
      'Workspace content for each role',
      'Staff onboarding and role-specific training',
      'Access-review and offboarding process',
      'Ownership for permission and workflow changes'
    ],
    faqs: [
      ['Does every role see different data?', `Roles can see different levels and actions while working from the same underlying restaurant context.`],
      ['Can one person have more than one role?', `That can be configured according to responsibility, provided the permission model is reviewed deliberately.`],
      ['Do role workspaces remove management visibility?', `No. Focused team views can coexist with wider manager, owner and finance views.`],
      ['Can permissions change after launch?', `Yes. Access and workspace scope should be reviewed as people, locations and responsibilities change.`]
    ]
  },

  'guest-ordering': {
    factsEyebrow: 'Guest CRM and growth scope',
    factsTitle: 'Six growth capabilities connect guest identity, engagement and repeat visits.',
    factsIntro: 'Growth outcomes depend on consent, profile quality, restaurant execution and the measurement data available.',
    facts: [
      ['06', 'growth capabilities', `Profiles, loyalty, offers, campaigns, feedback and retention form the current guest-growth scope.`],
      ['04', 'role perspectives', `Guest, service staff, management and marketing or ownership use different parts of the relationship.`],
      ['05', 'lifecycle steps', `Identify, understand, segment, engage and measure create a practical guest-growth loop.`],
      ['01', 'guest relationship', `Visit, order and feedback context can contribute to one profile where identity and consent allow it.`]
    ],
    workflowEyebrow: 'From visit context to a repeat-visit measure',
    workflowTitle: 'How restaurant interactions become useful guest relationship data.',
    workflowIntro: 'The workflow should improve relevance without turning every guest interaction into an indiscriminate marketing record.',
    workflow: [
      ['Identify the guest or visit', `Capture the available identity, visit or table context using the configured guest journey and consent rules.`],
      ['Attach useful interaction data', `Connect orders, offers, loyalty activity or feedback to the relationship where the data is available and appropriate.`],
      ['Create practical segments', `Group guests by relevant behaviour or relationship criteria instead of sending the same message to everyone.`],
      ['Run an offer or campaign', `Use the configured loyalty, offer or campaign tools around a defined audience and objective.`],
      ['Measure the return signal', `Review redemption, feedback, repeat visits or other agreed outcomes against the original audience and period.`]
    ],
    rolesTitle: 'Guest growth depends on the restaurant experience as well as the campaign screen.',
    rolesIntro: 'Profiles and offers are useful when service staff context, management decisions and guest consent remain aligned.',
    roleViews: [
      ['Guest', `Receives a relevant loyalty, offer, feedback or ordering experience through the configured touchpoint.`],
      ['Service staff', `Uses appropriate guest context to support service without exposing unnecessary profile or campaign administration.`],
      ['Manager', `Reviews feedback themes, service issues and campaign effects alongside the restaurant operation.`],
      ['Owner or marketing', `Defines segments, offers, campaigns and retention measures based on available guest and visit data.`]
    ],
    metricsTitle: 'Measure whether the relationship becomes identifiable, relevant and repeatable.',
    metricsIntro: 'Do not claim a retention or revenue lift until the audience, baseline, period and attribution method are documented.',
    metrics: [
      ['Identified-guest rate', `Measure the share of eligible visits connected to a usable guest identity under the configured consent model.`],
      ['Repeat-visit rate', `Compare guests who return within an agreed time window using a consistent identity and visit definition.`],
      ['Offer redemption', `Track redemptions against the eligible audience and campaign period rather than total restaurant traffic.`],
      ['Feedback response', `Measure completed feedback requests and review themes against the visits or audiences invited to respond.`]
    ],
    implementationTitle: 'Guest growth requires clear consent, identity and attribution rules.',
    implementationIntro: 'The relationship model should be understandable to the guest and auditable by the restaurant.',
    implementation: [
      'Guest consent and data-responsibility model',
      'Profile fields and identity-matching rules',
      'Visit, order, loyalty and feedback data sources',
      'Audience and segment definitions',
      'Offer or campaign eligibility and redemption rules',
      'Repeat-visit and campaign-attribution measurement method'
    ],
    faqs: [
      ['Is this the same as table QR payment?', `No. The payment product covers the transaction journey; this product area focuses on profiles, loyalty, campaigns, feedback and retention.`],
      ['Must every guest create a profile?', `No. Profile creation and identification depend on the configured journey, guest choice and applicable consent rules.`],
      ['Can order history support segmentation?', `Yes, where identity, order data, permissions and the selected guest-growth modules make that context available.`],
      ['Does a campaign guarantee repeat visits?', `No. Campaign and retention performance must be measured against a defined audience, baseline and comparison period.`]
    ]
  }
};

for (const [slug, details] of Object.entries(solutionDetailExpansions)) {
  if (!solutionPages[slug]) {
    throw new Error(`Missing solution page for detailed product copy: ${slug}`);
  }
  solutionPages[slug].details = details;
}

// === PMD PRODUCT PAGE DEPTH V2 END ===

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
      ['Match the view to the responsibility', 'Ownership needs performance context. Service staff needs tables, orders and guest requests. Kitchen needs preparation work. Role-based design keeps each workspace focused.'],
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
    intro: 'How the 4-action guest path - scan, browse, order and pay - creates clear work for service staff, kitchen and payment flows.',
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

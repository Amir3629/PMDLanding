export const productAreas = [
  {
    number: 1,
    icon: 'chart',
    title: 'PayMyDine AI',
    href: '/ai',
    body: 'Ask questions, get daily briefings, smart alerts, forecasts and next-best-action guidance.',
    navNote: 'Questions, briefings, alerts, forecasting and profitability guidance.',
    image: '/site-assets/owner/2.webp',
    compactImage: '/site-assets/social/7.webp'
  },
  {
    number: 2,
    icon: 'operations',
    title: 'Restaurant Operations',
    href: '/solutions/operations',
    body: 'Run dashboards, orders, tables, floor maps and dine-in or takeaway activity from one operating view.',
    navNote: 'Dashboard, orders, tables, floor maps and live restaurant activity.',
    image: '/site-assets/table/11.webp',
    compactImage: '/site-assets/custom/shared-restaurant-hero-16.webp'
  },
  {
    number: 3,
    icon: 'calendar',
    title: 'Reservations & Table Management',
    href: '/solutions/reservations',
    body: 'Manage calendars, availability, walk-ins, table assignments, guest flow and multiple floors.',
    navNote: 'Calendar, timeline, availability, seating and multi-floor table planning.',
    image: '/site-assets/table/1.webp',
    compactImage: '/site-assets/table/2.webp'
  },
  {
    number: 4,
    icon: 'kitchen',
    title: 'Ordering, Kitchen & Menu',
    href: '/solutions/kitchen',
    body: 'Connect waiter ordering, KDS preparation, menu management, customization and sold-out status.',
    navNote: 'Waiter ordering, KDS, preparation, menu management and sold-out control.',
    image: '/site-assets/extra/chef-warm-kitchen.webp',
    compactImage: '/site-assets/kitchen/2.webp'
  },
  {
    number: 5,
    icon: 'card',
    title: 'Payments & Guest Ordering',
    href: '/solutions/payments',
    body: 'Combine card and digital payments, pay-at-table, split bills, table QR, mobile menus and guest checkout.',
    navNote: 'Payments, split bills, table QR, mobile menu and guest checkout.',
    image: '/site-assets/payment/1.webp',
    compactImage: '/site-assets/payment/3.webp'
  },
  {
    number: 6,
    icon: 'chart',
    title: 'Analytics, Forecasting & Profitability',
    href: '/solutions/insights',
    body: 'Understand revenue, guests, average check, table turnover, sales patterns, payment mix and profitability.',
    navNote: 'Revenue, demand, forecasting, best sellers and profitability by item or location.',
    image: '/site-assets/extra/manager-analytics.webp',
    compactImage: '/site-assets/extra/analytics-tablet-phone.webp'
  },
  {
    number: 7,
    icon: 'team',
    title: 'Team Management',
    href: '/solutions/team',
    body: 'Manage role workspaces, permissions, shifts, performance and staff activity in one team layer.',
    navNote: 'Role workspaces, permissions, shifts, performance and staff activity.',
    image: '/site-assets/staff/1.webp',
    compactImage: '/site-assets/staff/6.webp'
  },
  {
    number: 8,
    icon: 'phone',
    title: 'Guest CRM, Marketing & Growth',
    href: '/solutions/guest-ordering',
    body: 'Build richer guest profiles and turn loyalty, offers, campaigns and feedback into repeat visits.',
    navNote: 'Profiles, loyalty, offers, campaigns, feedback and retention.',
    image: '/site-assets/social/18.webp',
    compactImage: '/site-assets/comments/7.webp'
  },
  {
    number: 9,
    icon: 'link',
    title: 'Integrations, Multi-location & Inventory',
    href: '/integrations',
    body: 'Connect POS, accounting, delivery and payment providers while supporting central control, menus, reporting and inventory.',
    navNote: 'POS, accounting, delivery, payments, central control, inventory and purchasing.',
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
          ['Owner', '/teams/owner', 'A decision-focused view of performance, priorities and the restaurant day.'],
          ['Manager', '/teams/manager', 'Live operational context for tables, service, kitchen and the shift.'],
          ['Finance & reporting', '/teams/finance', 'Revenue, payment and reporting views for the business side of service.']
        ]
      },
      {
        title: 'Restaurant teams',
        links: [
          ['Front of house', '/teams/front-of-house', 'Tables, orders and guest requests without unrelated admin clutter.'],
          ['Kitchen & KDS', '/teams/kitchen', 'Preparation, timing, notes and ready-to-serve status in one focused view.'],
          ['Reservations', '/teams/reservations', 'Bookings, arrivals and floor context for reception and reservation teams.']
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
    title: 'Checkout stays visible to the table.',
    body: 'Keep the final payment step easy to understand for both the guest and the restaurant team.'
  },
  {
    image: '/site-assets/comments/14.webp',
    eyebrow: 'Split bills',
    title: 'Different tables can settle in different ways.',
    body: 'Support Split Equally, By Order Items and By Shares from the same payment journey.'
  },
  {
    image: '/site-assets/comments/5.webp',
    eyebrow: 'Team status',
    title: 'The next action reaches the right role.',
    body: 'Front-of-house and kitchen teams can follow the order state without sharing the same workspace.'
  },
  {
    image: '/site-assets/comments/10.webp',
    eyebrow: 'Payments & guest ordering',
    title: 'A table journey that starts on the guest’s phone.',
    body: 'Bring menu discovery, ordering, service requests and checkout into one mobile path.'
  }
];

export const workflowSteps = [
  ['Guest or staff action', 'The journey starts from the table, reservation flow or team workspace.'],
  ['Restaurant context', 'Table, order and guest context stay attached to the work that follows.'],
  ['Role-specific action', 'The next team member sees the information needed for their responsibility.'],
  ['Service & checkout', 'Preparation, service and payment continue without breaking the operating picture.'],
  ['Insight & assistance', 'Live activity becomes reporting, context and AI-assisted understanding for the business.']
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
    title: 'Run the restaurant from one clear operating view.',
    intro: 'Bring the dashboard, orders, tables, floor maps, dine-in and takeaway activity into one live operating layer for the restaurant day.',
    storyEyebrow: 'Restaurant operations',
    capabilityEyebrow: 'Operating toolkit',
    capabilityTitle: 'Keep the live restaurant picture close to the people running the shift.',
    capabilityBody: 'The operating layer keeps daily activity visible without forcing teams to jump between disconnected workflows.',
    ctaTitle: 'Want to see Restaurant Operations in action?',
    ctaBody: 'We can focus the demo on dashboards, orders, tables, floor maps and the live activity that matters to your team.',
    heroImage: '/site-assets/extra/management-app.webp',
    accent: 'green',
    highlights: [
      ['Dashboard', 'Keep the main restaurant picture visible from one operating view.'],
      ['Orders', 'Follow open and active orders as service moves through the day.'],
      ['Tables', 'Keep table status and activity attached to the restaurant context.'],
      ['Floor maps', 'Understand the floor visually while service is in motion.']
    ],
    story: [
      {
        title: 'From the dashboard to the floor, the operation stays connected.',
        body: 'Orders, tables, service activity and floor context can stay together so the next decision is easier to see.',
        image: '/site-assets/owner/1.webp'
      },
      {
        title: 'Built for both dine-in and takeaway.',
        body: 'Different order channels can still feed one operating picture while each team works from the context it needs.',
        image: '/site-assets/extra/restaurant-team-planning.webp'
      }
    ],
    bullets: ['Dashboard', 'Orders', 'Tables', 'Floor maps', 'Dine-in / takeaway', 'Live activity']
  },
  reservations: {
    eyebrow: 'Reservations & Table Management',
    title: 'Plan bookings, arrivals and seating with the floor in view.',
    intro: 'Bring calendar planning, availability, walk-ins, table assignment and guest flow together so the next seating decision is easier to make.',
    storyEyebrow: 'Reservations & table management',
    capabilityEyebrow: 'Reservation toolkit',
    capabilityTitle: 'Keep planning views and live floor context in the same story.',
    capabilityBody: 'Use the views that help the team prepare ahead, then keep table availability and guest flow close when the restaurant gets busy.',
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
        title: 'A booking view made for restaurant pace.',
        body: 'Calendar and timeline views help the team understand what is coming before the next guest reaches the door.',
        image: '/site-assets/extra/shared-table-feast.webp'
      },
      {
        title: 'The floor stays part of the reservation decision.',
        body: 'Table assignment, guest flow and multiple floors can stay connected to the booking context.',
        image: '/site-assets/custom/reservations-floor-story.webp'
      }
    ],
    bullets: ['Calendar', 'Timeline', 'Availability', 'Walk-ins', 'Table assignment', 'Guest flow', 'Multiple floors']
  },
  'guest-ordering': {
    eyebrow: 'Guest CRM, Marketing & Growth',
    title: 'Turn guest relationships into a stronger growth loop.',
    intro: 'Bring guest profiles, loyalty, offers, campaigns and feedback into a connected view designed to support repeat visits and better guest relationships.',
    storyEyebrow: 'Guest relationships',
    capabilityEyebrow: 'CRM & growth toolkit',
    capabilityTitle: 'Keep guest context useful before, during and after the visit.',
    capabilityBody: 'The goal is to turn restaurant interactions into a clearer guest picture that can support retention, loyalty and more relevant marketing.',
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
        title: 'Guest information becomes more useful when it stays connected to the visit.',
        body: 'The restaurant can use guest context to understand relationships beyond a single order or table moment.',
        image: '/site-assets/extra/qr-service.webp'
      },
      {
        title: 'Feedback and retention belong in the same growth story.',
        body: 'Use feedback, offers and engagement signals to understand what brings guests back and where the experience can improve.',
        image: '/site-assets/extra/cafe-conversations.webp'
      }
    ],
    bullets: ['Profiles', 'Loyalty', 'Offers', 'Campaigns', 'Feedback', 'Retention']
  },
  payments: {
    eyebrow: 'Payments & Guest Ordering',
    title: 'Connect ordering, checkout and flexible ways to pay.',
    intro: 'Combine card and digital payments, pay-at-table, split-bill flows, table QR, mobile menus and guest checkout in one connected journey.',
    storyEyebrow: 'Guest ordering & payment',
    capabilityEyebrow: 'Guest journey toolkit',
    capabilityTitle: 'Let the table move naturally from menu discovery to payment.',
    capabilityBody: 'Ordering and checkout stay connected so guests can choose how they order and how they settle the bill without restarting the journey.',
    ctaTitle: 'Want to explore Payments & Guest Ordering?',
    ctaBody: 'Book a demo and we’ll focus on table QR, mobile menus, guest checkout, pay-at-table and split-bill flows.',
    heroImage: '/site-assets/extra/smoother-checkout.webp',
    accent: 'purple',
    highlights: [
      ['Card / digital payments', 'Support the payment methods available through the restaurant setup.'],
      ['Pay at table', 'Give guests a practical way to move from the table journey into checkout.'],
      ['Split equally', 'Divide the bill evenly across the group when that is the simplest option.'],
      ['Split by item', 'Let guests assign ordered items to the people paying for them.']
    ],
    story: [
      {
        title: 'A guest journey that stays connected from menu to checkout.',
        body: 'Table QR and mobile ordering can carry the guest through the restaurant journey without breaking the connection to the operating flow.',
        image: '/site-assets/extra/payment-thank-you.webp'
      },
      {
        title: 'Flexible payment moments for real tables.',
        body: 'From a single payer to shared bills, the checkout can adapt to how guests actually want to settle the table.',
        image: '/site-assets/custom/cafe-payment-confirmation-replacement.webp'
      }
    ],
    bullets: ['Card / digital payments', 'Pay at table', 'Split equally', 'Split by item', 'Split by shares', 'Table QR', 'Mobile menu', 'Guest checkout']
  },
  kitchen: {
    eyebrow: 'Ordering, Kitchen & Menu',
    title: 'Connect waiter ordering, kitchen flow and menu control.',
    intro: 'Keep waiter ordering, KDS preparation, menu management, customization and sold-out information aligned from the first order to the ready handoff.',
    storyEyebrow: 'Ordering, kitchen & menu',
    capabilityEyebrow: 'Ordering & menu toolkit',
    capabilityTitle: 'Keep the order, preparation and menu state in one connected flow.',
    capabilityBody: 'The front-of-house order should reach the kitchen clearly, while menu changes and sold-out information stay visible to the people who need them.',
    ctaTitle: 'Want to see Ordering, Kitchen & Menu in action?',
    ctaBody: 'We can show waiter ordering, KDS preparation, menu management, customization and ready-status handoff around your operation.',
    heroImage: '/site-assets/extra/chef-warm-kitchen.webp',
    accent: 'orange',
    highlights: [
      ['Waiter ordering', 'Capture the order in the service workflow and keep it attached to the right table.'],
      ['KDS', 'Give the kitchen a focused preparation workspace for incoming work.'],
      ['Preparation status', 'Keep received and in-progress work visible as the kitchen moves.'],
      ['Ready status', 'Make the handoff back to the service team easy to follow.']
    ],
    story: [
      {
        title: 'The order should reach the kitchen with the context it needs.',
        body: 'A focused KDS keeps preparation details, notes and status readable when service gets busy.',
        image: '/site-assets/kitchen/2.webp'
      },
      {
        title: 'Menu control stays part of the operating flow.',
        body: 'Menu management, customization and sold-out information can stay aligned with what the restaurant can actually serve.',
        image: '/site-assets/extra/team-planning.webp'
      }
    ],
    bullets: ['Waiter ordering', 'KDS', 'Preparation status', 'Ready status', 'Menu management', 'Menu customization', 'Sold-out info']
  },
  team: {
    eyebrow: 'Team Management',
    title: 'Manage people, permissions and performance around the restaurant day.',
    intro: 'Give every role the right workspace while keeping roles, permissions, shift management, performance and staff activity connected to one restaurant operation.',
    storyEyebrow: 'Team management',
    capabilityEyebrow: 'People & permissions',
    capabilityTitle: 'Keep each role focused while management keeps the wider team visible.',
    capabilityBody: 'Separate workspaces reduce interface noise without separating the restaurant into disconnected systems.',
    ctaTitle: 'Want to explore Team Management?',
    ctaBody: 'Book a demo and we’ll map role workspaces, permissions, shifts, performance and staff activity around your team structure.',
    heroImage: '/site-assets/extra/role-dashboard.webp',
    accent: 'green',
    highlights: [
      ['Role workspaces', 'Give each person the view that matches the work they are responsible for.'],
      ['Roles & permissions', 'Control access deliberately so the right people see the right information.'],
      ['Shift management', 'Keep staffing and day-to-day shift context easier to coordinate.'],
      ['Performance insight', 'Bring team activity and performance context closer to management.']
    ],
    story: [
      {
        title: 'The right workspace for the right responsibility.',
        body: 'Owners, managers, front of house and kitchen teams can work from focused views while staying connected to the same restaurant operation.',
        image: '/site-assets/extra/taqueria-handoff.webp'
      },
      {
        title: 'Staff activity stays visible without adding noise.',
        body: 'Management can keep the wider team picture while each role stays focused on the actions that belong to it.',
        image: '/site-assets/extra/latte-handoff.webp'
      }
    ],
    bullets: ['Role workspaces', 'Roles & permissions', 'Shift management', 'Performance insight', 'Staff activity']
  },
  insights: {
    eyebrow: 'Analytics, Forecasting & Profitability',
    title: 'See what is happening, what is changing and where profitability is moving.',
    intro: 'Bring revenue, guests, average check, table turnover, sales timing, best sellers, payment mix, forecasting and profitability into one decision-focused view.',
    storyEyebrow: 'Analytics & profitability',
    capabilityEyebrow: 'Decision toolkit',
    capabilityTitle: 'Turn restaurant activity into a clearer financial and operating picture.',
    capabilityBody: 'Live analytics become more useful when demand, sales, tables, payment mix and item or location profitability can be understood together.',
    ctaTitle: 'Want to explore Analytics, Forecasting & Profitability?',
    ctaBody: 'We can show the signals behind revenue, guests, table performance, forecasting, best sellers and profitability by item or location.',
    heroImage: '/site-assets/custom/insights-hero.webp',
    accent: 'blue',
    highlights: [
      ['Revenue', 'Track restaurant revenue and sales movement in the operating picture.'],
      ['Guests', 'Understand guest volume and demand across the restaurant.'],
      ['Average check', 'See how spend per guest is changing over time.'],
      ['Table turnover', 'Understand how the floor is performing as service moves.']
    ],
    story: [
      {
        title: 'A clearer view for daily decisions.',
        body: 'Bring revenue, order channels, guest activity, best sellers and payment mix into one operating picture.',
        image: '/site-assets/extra/manager-analytics.webp'
      },
      {
        title: 'Forecasting becomes more useful when profitability stays visible.',
        body: 'Use sales patterns, demand signals and profitability by item or location to understand what deserves attention next.',
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
    intro: 'A practical view of discovery, configuration, team setup, integrations and go-live planning.',
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
    intro: 'Why owners, managers, front of house and kitchen teams should not all work from the same screen.',
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
    intro: 'A practical approach to using AI for summaries, questions, patterns and decision support around restaurant data.',
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
    intro: 'How QR access, mobile ordering, service requests and checkout can support the table experience without taking it over.',
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
    intro: 'Use bookings, expected arrivals and live table context to make the next seating decision easier to understand.',
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
    intro: 'A practical way to decide what should connect, what should stay in place and which PayMyDine capabilities add the most value.',
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

export const integrationFeaturePills = ['POS integrations', 'Accounting', 'Delivery', 'Payment providers', 'Central owner view', 'Inventory'];

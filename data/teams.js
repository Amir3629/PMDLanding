export const teamPages = {
  owner: {
    label: 'Owner',
    eyebrow: 'For owners - 6 business signals',
    title: 'Review the restaurant without opening every team workspace.',
    intro: 'Use one owner view to review revenue, guest volume, table activity, reservations, kitchen status and top-selling items, then ask what changed and which metric needs investigation.',
    heroImage: '/site-assets/owner/1.webp',
    accent: 'green',
    highlights: [
      ['Revenue and demand', 'Compare revenue, guest count and average check by period, service window or location where the data is available.'],
      ['Floor and service', 'Review occupied tables, turnover, open orders and active service without asking each team for a separate update.'],
      ['Kitchen and menu', 'See preparation status, best sellers, sold-out patterns and item performance in the wider business picture.'],
      ['AI-assisted questions', 'Ask what changed, which category or location moved and what source view should be checked next.']
    ],
    story: [
      {
        title: 'Replace screen-hopping with a six-signal owner view.',
        body: 'The owner workspace brings business and operating context together so a high-level number can be traced to the tables, channels, items or periods behind it.',
        image: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp'
      },
      {
        title: 'Turn a result into a follow-up question.',
        body: 'AI assistance can compare available periods or locations and summarise unusual movement while the owner verifies the source data and chooses the action.',
        image: '/site-assets/extra/manager-analytics.webp'
      }
    ],
    bullets: ['Revenue and sales', 'Guest volume', 'Table activity', 'Reservations', 'Kitchen status', 'Top-selling items']
  },
  manager: {
    label: 'Manager',
    eyebrow: 'For managers - 5 live queues',
    title: 'Coordinate the shift from tables, orders, kitchen, reservations and team activity.',
    intro: 'Use one live management view to see the five queues that shape service, identify exceptions and route the next action to the responsible role.',
    heroImage: '/site-assets/extra/restaurant-team-planning.webp',
    accent: 'blue',
    highlights: [
      ['Floor state', 'See occupied, available, waiting and payment-stage tables against the live floor map.'],
      ['Open orders', 'Identify delayed, modified or incomplete orders and move from the exception to the table and channel behind it.'],
      ['Kitchen progress', 'Review received, preparing and ready tickets without working inside the kitchen screen.'],
      ['Arrivals and team activity', 'Keep upcoming bookings, walk-ins, assigned roles and active handoffs in the same shift picture.']
    ],
    story: [
      {
        title: 'Manage exceptions instead of collecting status updates.',
        body: 'A manager can focus on what is waiting, delayed or blocked while each role continues to work in its own queue.',
        image: '/site-assets/staff/6.webp'
      },
      {
        title: 'Use the same operating context for the post-shift review.',
        body: 'Table movement, order timing, kitchen status and team activity can later explain revenue, turnover and service results.',
        image: '/site-assets/extra/team-tech-meeting.webp'
      }
    ],
    bullets: ['Table status', 'Open orders', 'Kitchen progress', 'Reservations and walk-ins', 'Team activity', 'Shift exceptions']
  },
  'service-staff': {
    label: 'Service Staff',
    eyebrow: 'For service staff - 6 service signals',
    title: 'Keep assigned tables, order notes, guest requests and checkout status in one service view.',
    intro: 'Service staff teams can focus on six service signals without unrelated ownership or admin controls, while each action remains attached to the correct table and ticket.',
    heroImage: '/site-assets/staff/1.webp',
    accent: 'orange',
    highlights: [
      ['Assigned tables', 'See the tables and service stage owned by the current team member or section.'],
      ['Orders and notes', 'Keep ordered items, modifiers, allergies and service notes attached to the table context.'],
      ['Guest requests', 'Receive waiter calls and digital service requests in the same queue used for table work.'],
      ['Checkout awareness', 'See when a table is viewing the bill, splitting it or completing payment so the next service action is clear.']
    ],
    story: [
      {
        title: 'The workspace follows the real service sequence.',
        body: 'Seat, order, request, serve and settle are visible as table actions, not as unrelated messages across different tools.',
        image: '/site-assets/staff/4.webp'
      },
      {
        title: 'Guest digital actions remain accountable restaurant work.',
        body: 'A QR order or service request reaches the responsible service staff or kitchen queue with the table and order context attached.',
        image: '/site-assets/comments/5.webp'
      }
    ],
    bullets: ['Assigned tables', 'Orders and modifiers', 'Guest requests', 'Waiter calls', 'Order status', 'Checkout status']
  },
  kitchen: {
    label: 'Kitchen & KDS',
    eyebrow: 'For kitchen - 4 ticket states',
    title: 'Move every ticket from received to preparing, ready and handed off.',
    intro: 'The kitchen workspace keeps item detail, modifiers, timing and four visible ticket states in one preparation queue, without unrelated table or business controls.',
    heroImage: '/site-assets/kitchen/1.webp',
    accent: 'orange',
    highlights: [
      ['Focused queue', 'Sort incoming work by time, station, course or priority using the context available in the configured KDS.'],
      ['Item and modifier detail', 'Keep preparation notes, quantities, modifiers and sold-out information visible on the ticket.'],
      ['Timing and progress', 'See how long work has been waiting and which tickets are received, preparing or ready.'],
      ['Ready handoff', 'Publish ready status to service staff and management so the service handoff has a clear completion signal.']
    ],
    story: [
      {
        title: 'A useful KDS makes priority and completion obvious.',
        body: 'The kitchen should be able to read what to prepare, how it differs, how long it has waited and which status comes next at a glance.',
        image: '/site-assets/kitchen/2.webp'
      },
      {
        title: 'Ready status belongs to the next role as well.',
        body: 'When preparation is complete, service staff and managers receive the status needed to finish the table journey.',
        image: '/site-assets/extra/team-planning.webp'
      }
    ],
    bullets: ['Received tickets', 'Preparing tickets', 'Ready tickets', 'Item and modifier detail', 'Ticket timing', 'Service staff handoff']
  },
  reservations: {
    label: 'Reservations',
    eyebrow: 'For reservations - 6 planning signals',
    title: 'Match arrivals and walk-ins to live table capacity.',
    intro: 'Use upcoming arrivals, party size, table availability, turn timing, walk-ins and multi-floor context to make the next seating decision with the real floor in view.',
    heroImage: '/site-assets/extra/host-stand.webp',
    accent: 'blue',
    highlights: [
      ['Upcoming arrivals', 'See arrival time, party size and booking status before the guest reaches the door.'],
      ['Calendar and timeline', 'Use planning views for the day ahead and a live sequence for the service period.'],
      ['Availability and turn timing', 'Combine free, occupied and reservation-ready tables with expected turnover.'],
      ['Walk-ins and floor assignment', 'Add unplanned arrivals without losing the booking load or multi-floor capacity picture.']
    ],
    story: [
      {
        title: 'Turn the booking list into a live seating plan.',
        body: 'A reservation becomes actionable when arrival timing and party size are read alongside the tables that can support it.',
        image: '/site-assets/extra/shared-table-feast.webp'
      },
      {
        title: 'Plan ahead, then keep operating in real time.',
        body: 'Calendar and timeline views support preparation while live availability, walk-ins and table assignment support decisions at the door.',
        image: '/site-assets/custom/reservations-floor-story.webp'
      }
    ],
    bullets: ['Upcoming arrivals', 'Party size', 'Calendar and timeline', 'Table availability', 'Walk-ins', 'Multi-floor seating']
  },
  finance: {
    label: 'Finance & Reporting',
    eyebrow: 'For finance - 6 reporting views',
    title: 'Trace revenue and payment results back to the restaurant activity behind them.',
    intro: 'Use revenue, category sales, payment activity, average check, best sellers and period comparisons to build cleaner reporting with the operating context still available.',
    heroImage: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp',
    accent: 'green',
    highlights: [
      ['Revenue by period or location', 'Compare the reporting period or location using the available sales data and keep the source scope explicit.'],
      ['Payment activity', 'Review payment method, status and settlement context alongside the table or order journey that produced it.'],
      ['Category and item performance', 'See which menu categories or items contribute revenue and where margin questions need deeper review.'],
      ['AI-assisted comparison', 'Summarise period or location changes and identify the source report that finance should verify next.']
    ],
    story: [
      {
        title: 'A business number is easier to trust when its scope is clear.',
        body: 'Reporting should state the location, period, channels, payment mix and operating activity included in the result.',
        image: '/site-assets/extra/tablet-dashboard.webp'
      },
      {
        title: 'Use AI to frame the next finance question, not to approve the answer.',
        body: 'AI assistance can compare and summarise available data while finance verifies the source, accounting treatment and final interpretation.',
        image: '/site-assets/extra/analytics-tablet-phone.webp'
      }
    ],
    bullets: ['Revenue', 'Sales categories', 'Payment activity', 'Average check', 'Best sellers', 'Period and location comparison']
  }
};

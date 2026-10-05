import HardwareShowcase from '@/components/HardwareShowcase';
import { metadataForRoute } from '@/lib/seo';

export const metadata = metadataForRoute('en', '/hardware', {
  title: 'Restaurant POS Hardware and Payment Devices',
  description: 'Explore PayMyDine restaurant hardware: table QR and pay displays, dual-screen cashier POS systems, mobile POS terminals, printers, cash drawers, KDS and kiosks.'
});

const copy = {
  contactHref: '/contact',
  hero: {
    eyebrow: 'PayMyDine Hardware',
    title: 'Restaurant hardware, ready for service.',
    intro: 'Build a complete PayMyDine setup with table-side QR and payment devices, cashier POS, mobile terminals, printers, kitchen screens and self-service kiosks. Choose the combination that fits your operation.',
    primaryCta: 'Plan my hardware setup',
    secondaryCta: 'Explore the devices',
    meta: ['Buy', 'Lease', 'Rent', 'One connected ecosystem']
  },
  productsEyebrow: 'Hardware range',
  productsTitle: 'From the table to the kitchen, every device has a clear job.',
  productsIntro: 'Choose only the hardware your restaurant needs today and expand the setup as your service model grows.',
  productCta: 'Ask about this device',
  products: [
    { type: 'payment', shortLabel: 'PAY', category: 'Front counter', name: 'Dual-Screen Cashier POS', body: 'A compact dual-screen cashier POS for restaurants that need another counter-ready order and checkout station.', bullets: ['Dual-screen cashier setup', 'Orders and checkout at the counter', 'Connected to the PayMyDine setup'] },
    { type: 'table', shortLabel: 'QR + PAY', category: 'Table-side', name: 'Table QR & Pay Display', body: 'A compact device for each table that gives guests a clear QR entry point and supports table-side payment.', bullets: ['QR menu and ordering entry', 'Table-side payment flow', 'Always visible at the table'] },
    { type: 'cashier', shortLabel: 'POS', category: 'Front counter', name: 'Dual-Screen Cashier POS Desktop', body: 'The main cashier workstation with a staff-facing POS and a second customer-facing display for a smoother checkout.', bullets: ['Two-screen setup', 'Orders and checkout in one station', 'Built for daily restaurant service'] },
    { type: 'mobile', shortLabel: 'MOBILE', category: 'Floor service', name: 'Mobile POS Terminal', body: 'A portable tablet-style POS for taking orders, checking tables and completing payments directly on the restaurant floor.', bullets: ['Portable service workflow', 'Order and table access', 'Payment-ready operation'] },
    { type: 'kds', shortLabel: 'KDS', category: 'Kitchen', name: 'KDS', body: 'A kitchen screen that replaces scattered paper tickets with a focused view of incoming orders and preparation status.', bullets: ['Live kitchen order queue', 'Preparation status visibility', 'Clear handoff to service'] },
    { type: 'kiosk', shortLabel: 'KIOSK', category: 'Self-service', name: 'Kiosk', body: 'A customer-facing ordering screen for restaurants that want to offer a faster self-service ordering path.', bullets: ['Customer self-ordering', 'Reduced queue pressure', 'Connected menu and order flow'] },
    { type: 'printer', shortLabel: 'PRINT', category: 'Receipts', name: 'Printer', body: 'Reliable printing for customer receipts and operational order slips where paper is still part of the workflow.', bullets: ['Fast receipt printing', 'Compact counter footprint', 'Works alongside the POS setup'] },
    { type: 'drawer', shortLabel: 'CASH', category: 'Cash handling', name: 'Cash Drawer', body: 'A secure cash drawer for restaurants that still accept cash alongside card and digital payments.', bullets: ['Secure cash storage', 'Counter-ready format', 'Fits the cashier workflow'] }
  ],
  ecosystem: {
    eyebrow: 'One connected setup',
    title: 'Hardware that works as one restaurant system.',
    body: 'Keep the guest table, cashier, payment, kitchen and self-service journey connected to the same PayMyDine operating environment.',
    steps: ['Table & guest', 'POS & payment', 'Kitchen & printing', 'Kiosk & growth']
  },
  options: {
    eyebrow: 'Flexible commercial options',
    title: 'Buy, lease or rent the setup that fits your restaurant.',
    body: 'Choose the commercial model that matches your budget, rollout plan and operating horizon.',
    items: [
      { title: 'Buy', body: 'Own the hardware outright and build a long-term setup around your restaurant.' },
      { title: 'Lease', body: 'Spread hardware cost over a longer period while keeping a predictable monthly structure.' },
      { title: 'Rent', body: 'Use a flexible rental model for shorter-term, seasonal or changing hardware requirements.' }
    ],
    note: 'Hardware availability, configuration and commercial terms can vary by market, restaurant setup and selected payment provider.'
  },
  finalCta: {
    eyebrow: 'Build your setup',
    title: 'Tell us how your restaurant serves guests. We’ll map the hardware around it.',
    body: 'Share your number of tables, service model, cashier setup, kitchen flow and payment needs. We can define a practical hardware package from there.',
    button: 'Talk to Sales'
  }
};

export default function HardwarePage() {
  return <HardwareShowcase copy={copy} />;
}

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
    title: 'Restaurant devices. Ready for service.',
    intro: 'Choose cashier terminals, table displays, kitchen screens and kiosks for your restaurant.',
    primaryCta: 'Plan my hardware setup',
    secondaryCta: 'Explore the devices',
    meta: ['Buy', 'Lease', 'Rent', 'One connected ecosystem']
  },
  productsEyebrow: 'Hardware range',
  productsTitle: 'The right device for every task.',
  productsIntro: 'Start with the devices you need. Add more when you grow.',
  productCta: 'Ask about this device',
  products: [
    { type: 'payment', shortLabel: 'PAY', category: 'Front counter', name: 'Dual Cashier POS', body: 'A compact dual-screen cashier POS for restaurants that need another counter-ready order and checkout station.', bullets: ['Dual-screen cashier setup', 'Orders and checkout at the counter', 'Connected to the PayMyDine setup'] },
    { type: 'table', shortLabel: 'QR + PAY', category: 'Table-side', name: 'Table QR & Pay Display', body: 'A compact device for each table that gives guests a clear QR entry point and supports table-side payment.', bullets: ['QR menu and ordering entry', 'Table-side payment flow', 'Always visible at the table'] },
    { type: 'cashier', shortLabel: 'POS', category: 'Front counter', name: 'Cashier POS Desktop', body: 'The main cashier workstation with a staff-facing POS and a second customer-facing display for a smoother checkout.', bullets: ['Two-screen setup', 'Orders and checkout in one station', 'Built for daily restaurant service'] },
    { type: 'mobile', shortLabel: 'MOBILE', category: 'Floor service', name: 'Mobile POS Terminal', body: 'A portable tablet-style POS for taking orders, checking tables and completing payments directly on the restaurant floor.', bullets: ['Portable service workflow', 'Order and table access', 'Payment-ready operation'] },
    { type: 'kds', shortLabel: 'KDS', category: 'Kitchen', name: 'Kitchen Screen', body: 'A kitchen screen that replaces scattered paper tickets with a focused view of incoming orders and preparation status.', bullets: ['Live kitchen order queue', 'Preparation status visibility', 'Clear handoff to service'] },
    { type: 'kiosk', shortLabel: 'KIOSK', category: 'Self-service', name: 'Kiosk', body: 'A customer-facing ordering screen for restaurants that want to offer a faster self-service ordering path.', bullets: ['Customer self-ordering', 'Reduced queue pressure', 'Connected menu and order flow'] },
    { type: 'printer', shortLabel: 'PRINT', category: 'Receipts', name: 'Printer', body: 'Reliable printing for customer receipts and operational order slips where paper is still part of the workflow.', bullets: ['Fast receipt printing', 'Compact counter footprint', 'Works alongside the POS setup'] },
    { type: 'drawer', shortLabel: 'CASH', category: 'Cash handling', name: 'Cash Drawer', body: 'A secure cash drawer for restaurants that still accept cash alongside card and digital payments.', bullets: ['Secure cash storage', 'Counter-ready format', 'Fits the cashier workflow'] }
  ],
  ecosystem: {
    eyebrow: 'One connected setup',
    title: 'Devices that work together.',
    body: 'Connect tables, checkout, kitchen and self-service.',
    steps: ['Table & guest', 'POS & payment', 'Kitchen & printing', 'Kiosk & growth']
  },
  options: {
    eyebrow: 'Flexible commercial options',
    title: 'Buy, lease or rent your devices.',
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
    title: 'Get a hardware setup for your restaurant.',
    body: 'Tell us your table count, service flow and payment needs.',
    button: 'Talk to Sales'
  }
};

export default function HardwarePage() {
  return <HardwareShowcase copy={copy} />;
}

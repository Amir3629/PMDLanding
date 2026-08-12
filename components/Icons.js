export function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  };

  const icons = {
    operations: <svg {...common}><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M7 8h10M7 12h5M7 16h8"/></svg>,
    calendar: <svg {...common}><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>,
    phone: <svg {...common}><rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M10 6h4M11 18h2"/></svg>,
    card: <svg {...common}><rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18M7 15h4"/></svg>,
    chart: <svg {...common}><path d="M4 20V10M10 20V5M16 20v-8M22 20V3"/><path d="M2 20h21"/></svg>,
    team: <svg {...common}><path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 20v-2.2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    kitchen: <svg {...common}><path d="M5 3v8M9 3v8M5 7h4M7 11v10M16 3v18M16 3c3 2 3 7 0 9"/></svg>,
    table: <svg {...common}><path d="M4 8h16M6 8v10M18 8v10M3 5h18"/></svg>,
    qr: <svg {...common}><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM15 14h2v2h-2zM19 14h2v4h-2zM14 19h4v2h-4zM20 20h1v1h-1z"/></svg>,
    link: <svg {...common}><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7.07-7.07l-1.15 1.15"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7.07 7.07l1.15-1.15"/></svg>,
    check: <svg {...common}><path d="m5 12 4 4L19 6"/></svg>,
    arrow: <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
    down: <svg {...common}><path d="m7 9 5 5 5-5"/></svg>,
    play: <svg {...common}><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/></svg>,
    close: <svg {...common}><path d="M6 6l12 12M18 6 6 18"/></svg>,
    reset: <svg {...common}><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>,
    plus: <svg {...common}><path d="M12 5v14M5 12h14"/></svg>,
    map: <svg {...common}><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15"/></svg>
  };

  return icons[name] || icons.operations;
}

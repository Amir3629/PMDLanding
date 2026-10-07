'use client';

import { useState } from 'react';
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return <form className="contactForm" onSubmit={event => {
    event.preventDefault();
    setSent(true);
  }}>
      <div className="formRow"><label>Vorname<input required name="firstName" /></label><label>Nachname<input required name="lastName" /></label></div>
      <label>Geschäftliche E-Mail<input required type="email" name="email" /></label>
      <label>Restaurant / Unternehmen<input required name="company" /></label>
      <div className="formRow"><label>Restaurantkonfiguration<select name="type" defaultValue=""><option value="" disabled>Bitte auswählen</option><option>Restaurant mit Bedienung</option><option>Casual-Dining-Restaurant</option><option>Restaurant mit hohem Gästeaufkommen</option><option>Großer / mehrzoniger Betrieb</option><option>Andere Restaurantkonfiguration</option></select></label><label>Aktuelles POS-System<input name="pos" placeholder={"Optional"} /></label></div>
      <label>Welche PayMyDine-Bereiche möchten Sie kennenlernen?<textarea name="message" rows="5" placeholder={"Betrieb, Team-Arbeitsbereiche, Reservierungen, Gästebestellung, Küche, Zahlungen, KI, Analysen, Integrationen ..."} /></label>
      <button className="button" type="submit">Demo anfragen</button>
      {sent && <p className="formSuccess">Vielen Dank — Ihre Demo-Anfrage wurde in diesem Prototyp erfasst. Verbinden Sie das Formular vor dem Start mit Ihrem bevorzugten Postfach oder CRM.</p>}
    </form>;
}

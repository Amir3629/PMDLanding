'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form className="contactForm" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
      <div className="formRow"><label>First name<input required name="firstName" /></label><label>Last name<input required name="lastName" /></label></div>
      <label>Work email<input required type="email" name="email" /></label>
      <label>Restaurant / company<input required name="company" /></label>
      <div className="formRow"><label>Restaurant setup<select name="type" defaultValue=""><option value="" disabled>Select one</option><option>Full-service restaurant</option><option>Casual dining</option><option>High-volume dining</option><option>Large / multi-zone venue</option><option>Other restaurant setup</option></select></label><label>Current POS<input name="pos" placeholder="Optional" /></label></div>
      <label>Which PayMyDine areas would you like to explore?<textarea name="message" rows="5" placeholder="Operations, team workspaces, reservations, guest ordering, kitchen, payments, AI, insights, integrations..." /></label>
      <button className="button" type="submit">Book My Demo</button>
      {sent && <p className="formSuccess">Thanks — your demo request has been captured in this prototype. Connect the form to your preferred inbox or CRM before launch.</p>}
    </form>
  );
}

'use client';

import { useState } from 'react';
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return <form className="contactForm" onSubmit={event => {
    event.preventDefault();
    setSent(true);
  }}>
      <div className="formRow"><label>Ad<input required name="firstName" /></label><label>Soyad<input required name="lastName" /></label></div>
      <label>İş e-postası<input required type="email" name="email" /></label>
      <label>Restoran / şirket<input required name="company" /></label>
      <div className="formRow"><label>Restoran yapısı<select name="type" defaultValue=""><option value="" disabled>Birini seçin</option><option>Tam hizmet restoranı</option><option>Gündelik restoran</option><option>Yüksek hacimli restoran</option><option>Büyük / çok bölgeli mekan</option><option>Diğer restoran yapısı</option></select></label><label>Mevcut POS<input name="pos" placeholder={"İsteğe bağlı"} /></label></div>
      <label>Hangi PayMyDine alanları keşfetmek ister misiniz?<textarea name="message" rows="5" placeholder={"Operasyonlar, ekip çalışma alanları, rezervasyonlar, misafir siparişi, mutfak, ödemeler, AI, içgörüler, entegrasyonlar..."} /></label>
      <button className="button" type="submit">Demo Talebimi Gönder</button>
      {sent && <p className="formSuccess">Teşekkürler - demo isteğiniz bu prototipde yakalandı. Formu, başlamadan önce tercih edilen kutunuza veya CRM'e bağlayın.</p>}
    </form>;
}

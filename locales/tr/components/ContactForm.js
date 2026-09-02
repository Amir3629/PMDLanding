'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form className="contactForm" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
      <div className="formRow"><label>Ad<input required name="firstName" /></label><label>Soyad<input required name="lastName" /></label></div>
      <label>İş e-postası<input required type="email" name="email" /></label>
      <label>Restoran / işletme<input required name="company" /></label>
      <div className="formRow"><label>İşletme yapısı<select name="type" defaultValue=""><option value="" disabled>Bir seçenek belirleyin</option><option>Tam servis restoran</option><option>Rahat ve günlük servis restoranı</option><option>Yüksek hacimli restoran</option><option>Büyük / çok alanlı işletme</option><option>Diğer restoran yapısı</option></select></label><label>Mevcut POS sistemi<input name="pos" placeholder="İsteğe bağlı" /></label></div>
      <label>PayMyDine'ın hangi alanlarını incelemek istersiniz?<textarea name="message" rows="5" placeholder="Operasyon, ekip çalışma alanları, rezervasyonlar, müşteri siparişi, mutfak, ödemeler, Yapay Zekâ, analiz ve içgörüler, entegrasyonlar..." /></label>
      <button className="button" type="submit">Demo Talebimi Gönder</button>
      {sent && <p className="formSuccess">Teşekkürler — demo talebiniz bu prototipte kaydedildi. Yayına almadan önce formu tercih ettiğiniz e-posta kutusuna veya CRM sistemine bağlayın.</p>}
    </form>
  );
}

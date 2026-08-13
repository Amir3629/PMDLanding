'use client';

import { useState } from 'react';
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return <form className="contactForm" onSubmit={event => {
    event.preventDefault();
    setSent(true);
  }}>
      <div className="formRow"><label>الاسم الأول<input required name="firstName" /></label><label>اسم العائلة<input required name="lastName" /></label></div>
      <label>البريد الإلكتروني للعمل<input required type="email" name="email" /></label>
      <label>المطعم / الشركة<input required name="company" /></label>
      <div className="formRow"><label>إعداد المطعم<select name="type" defaultValue=""><option value="" disabled>اختر واحدًا</option><option>مطعم متكامل الخدمة</option><option>مطعم غير رسمي</option><option>مطعم عالي الحجم</option><option>منشأة كبيرة / متعددة المناطق</option><option>إعداد مطعم آخر</option></select></label><label>نظام POS الحالي<input name="pos" placeholder={"اختياري"} /></label></div>
      <label>أي منطقة من مناطق (زكس كيز) ترغب في استكشافها؟<textarea name="message" rows="5" placeholder={"العمليات، أماكن عمل الفريق، التحفظات، طلب الضيوف، المطبخ، الدفعات، AI، البصيرة، الإدماجات..."} /></label>
      <button className="button" type="submit">احجز عرضي التوضيحي</button>
      {sent && <p className="formSuccess">شكرًا - لقد تم تسجيل طلبك في هذا النموذج الأولي إربطي النموذج بصندوقك المفضل أو CRM قبل الإطلاق</p>}
    </form>;
}

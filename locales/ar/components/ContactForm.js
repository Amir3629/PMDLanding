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
      <div className="formRow"><label>نوع إعداد المطعم<select name="type" defaultValue=""><option value="" disabled>اختر خيارًا</option><option>مطعم بخدمة كاملة</option><option>مطعم غير رسمي</option><option>مطعم ذو حجم خدمة مرتفع</option><option>منشأة كبيرة / متعددة المناطق</option><option>إعداد مطعم آخر</option></select></label><label>نظام POS الحالي<input name="pos" placeholder={"اختياري"} /></label></div>
      <label>ما مجالات PayMyDine التي ترغب في استكشافها؟<textarea name="message" rows="5" placeholder={"العمليات، ومساحات عمل الفرق، والحجوزات، وطلبات الضيوف، والمطبخ، والمدفوعات، والذكاء الاصطناعي، والرؤى، والتكاملات..."} /></label>
      <button className="button" type="submit">احجز عرضي التوضيحي</button>
      {sent && <p className="formSuccess">شكرًا — تم تسجيل طلب العرض التوضيحي في هذا النموذج الأولي. اربط النموذج بصندوق البريد أو نظام CRM الذي تفضله قبل الإطلاق.</p>}
    </form>;
}

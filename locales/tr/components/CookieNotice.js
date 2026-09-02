'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'pmd_cookie_consent_v1';

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;

    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        document.documentElement.dataset.cookieConsent = saved;
        return undefined;
      }
    } catch (_) {
      // Depolama kullanılamıyorsa ziyaretçi yine de seçim yapabilsin.
    }

    timer = window.setTimeout(() => setVisible(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  const choose = (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (_) {
      // Seçim, bu sayfa görünümünde bildirimi kapatmaya devam eder.
    }

    document.documentElement.dataset.cookieConsent = value;
    window.dispatchEvent(new CustomEvent('pmd-cookie-consent', { detail: { value } }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="cookieNotice" role="dialog" aria-label="Çerez tercihleri" aria-live="polite">
      <span className="cookieNoticeEyebrow">Çerez tercihleri</span>
      <h2>Bu sitenin çerezleri nasıl kullanacağını seçin.</h2>
      <p>
        Site tercihlerini saklamak için gerekli tarayıcı depolamasını kullanıyoruz. Analiz özelliği etkin olduğunda site kullanımını anlamamıza yardımcı olması için isteğe bağlı analiz çerezlerine de izin verebilirsiniz.
      </p>
      <div className="cookieNoticeActions">
        <button className="cookieNoticeSecondary" type="button" onClick={() => choose('necessary')}>
          Yalnızca gerekli olanlar
        </button>
        <button className="cookieNoticePrimary" type="button" onClick={() => choose('all')}>
          İsteğe bağlı çerezlere izin ver
        </button>
      </div>
    </aside>
  );
}

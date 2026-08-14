'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import { Icon } from './Icons';
import { primaryNav } from "@/locales/tr/data/site";
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mega, setMega] = useState(null);
  useEffect(() => {
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setMega(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  /* PMD_OUTSIDE_MEGA_CLOSE_V16 */
  useEffect(() => {
    const onPointerDown = (event) => {
      if (!mega) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      if (target.closest('.navItem')) {
        return;
      }

      setMega(null);
    };

    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [mega]);

const toggleMobileNav = () => {
    if (mobileOpen) {
      setMega(null);
    }
    setMobileOpen(value => !value);
  };
  return <header className="siteHeader">
      <div className="container headerInner">
        <Logo />
        <nav className={`mainNav ${mobileOpen ? 'isOpen' : ''}`} aria-label={"İlk navigasyon"}>
          {primaryNav.map(item => {
          const hasMenu = Boolean(item.columns);
          const isMegaOpen = mega === item.label;
          return <div className="navItem" key={item.label}>
                {hasMenu ? <button className={isMegaOpen ? 'navTrigger active' : 'navTrigger'} type="button" aria-expanded={isMegaOpen} onClick={() => setMega(current => current === item.label ? null : item.label)}>
                    {item.label} <Icon name="down" size={14} />
                  </button> : <a href={item.href} onClick={() => {
              setMega(null);
              setMobileOpen(false);
            }}>{item.label}</a>}

                {hasMenu && <div className={`megaMenu ${item.href === "/tr/platform" ? 'megaMenuProduct' : ''} ${isMegaOpen ? 'isOpen' : ''}`} aria-hidden={!isMegaOpen}>
                    <div className="megaMenuTop">
                      <strong>{item.label}</strong>
                      <a href={item.href} onClick={() => {
                  setMega(null);
                  setMobileOpen(false);
                }}>Genel bakışı görüntüle <Icon name="arrow" size={15} /></a>
                    </div>
                    <div className="megaColumns">
                      {item.columns.map(column => <div key={column.title}>
                          <span className="megaLabel">{column.title}</span>
                          {column.links.map(([label, href, note, number]) => <a className="megaLink" href={href} key={label} onClick={() => {
                    setMega(null);
                    setMobileOpen(false);
                  }}>
                              <span className="megaLinkTitle">{number ? <b className="megaLinkNumber">{number}</b> : null}<span>{label}</span></span>
                              <small>{note}</small>
                            </a>)}
                        </div>)}
                    </div>
                  </div>}
              </div>;
        })}
        </nav>
        <div className="headerActions">
          <a className="loginLink desktopOnly" href="/tr/how-it-works">Nasıl Çalışır</a>
          <a className="button buttonSmall" href="/tr/contact">Demo Rezervasyonu Yap <Icon name="arrow" size={16} /></a>
          <button className="menuButton" type="button" aria-label={"Toggle navigasyon"} aria-expanded={mobileOpen} onClick={toggleMobileNav}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      <button className={`megaBackdrop ${mega ? 'isOpen' : ''}`} aria-label={"Yakın menü"} aria-hidden={!mega} tabIndex={mega ? 0 : -1} onClick={() => setMega(null)} />
    </header>;
}

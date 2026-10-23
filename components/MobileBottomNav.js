
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const items = [
  {
    label: "Home",
    href: "/",
    icon: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M9 20v-7h6v7" /></>,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <><rect x="3" y="3" width="8" height="8" rx="2" /><rect x="13" y="3" width="8" height="5" rx="2" /><rect x="13" y="10" width="8" height="11" rx="2" /><rect x="3" y="13" width="8" height="8" rx="2" /></>,
  },
  {
    label: "Overview",
    href: "/dashboard#overview",
    icon: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="m7 15 4-4 3 2 5-6" /></>,
  },
  {
    label: "About",
    href: "/about",
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><path d="M12 8h.01" /></>,
  },
];

function NavIcon({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function MobileBottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [hash, setHash] = useState("");
  const [desktopExpanded, setDesktopExpanded] = useState(true);
  const [dragIndex, setDragIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const navRef = useRef(null);
  const pressTimer = useRef(null);
  const dragStarted = useRef(false);
  const startPoint = useRef(null);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, [pathname]);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("nexa-desktop-nav-expanded");
      if (saved !== null) setDesktopExpanded(saved === "true");
    } catch (_) {}
  }, []);

  useEffect(() => {
    document.body.classList.toggle("desktop-nav-expanded", desktopExpanded);
    document.body.classList.toggle("desktop-nav-collapsed", !desktopExpanded);
    try {
      window.localStorage.setItem("nexa-desktop-nav-expanded", String(desktopExpanded));
    } catch (_) {}
    return () => {
      document.body.classList.remove("desktop-nav-expanded", "desktop-nav-collapsed");
    };
  }, [desktopExpanded]);

  const active = useCallback((item) => {
    if (item.label === "Home") return pathname === "/" && hash !== "#about";
    if (item.label === "Dashboard") return pathname === "/dashboard" && hash !== "#overview";
    if (item.label === "Overview") return pathname === "/dashboard" && hash === "#overview";
    if (item.label === "About") return pathname === "/about" || (pathname === "/" && hash === "#about");
    return false;
  }, [pathname, hash]);

  const activeIndex = Math.max(0, items.findIndex(active));
  const indicatorIndex = dragIndex === null ? activeIndex : dragIndex;

  const cancelPressTimer = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  const indexFromPointer = (clientX) => {
    const element = navRef.current;
    if (!element) return activeIndex;
    const rect = element.getBoundingClientRect();
    const usableX = Math.max(0, Math.min(rect.width - 1, clientX - rect.left));
    return Math.max(0, Math.min(items.length - 1, Math.floor((usableX / rect.width) * items.length)));
  };

  const startPress = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    startPoint.current = { x: event.clientX, y: event.clientY };
    dragStarted.current = false;
    cancelPressTimer();
    pressTimer.current = setTimeout(() => {
      dragStarted.current = true;
      setIsDragging(true);
      setDragIndex(indexFromPointer(startPoint.current?.x ?? event.clientX));
      if (navigator.vibrate) navigator.vibrate(12);
    }, 220);
  };

  const movePress = (event) => {
    if (!startPoint.current) return;
    const distance = Math.hypot(event.clientX - startPoint.current.x, event.clientY - startPoint.current.y);
    if (!dragStarted.current && distance > 9) {
      cancelPressTimer();
      // A deliberate horizontal swipe can begin a selection drag without waiting for a long press.
      if (Math.abs(event.clientX - startPoint.current.x) > Math.abs(event.clientY - startPoint.current.y) * 1.2) {
        dragStarted.current = true;
        setIsDragging(true);
      }
    }
    if (dragStarted.current) {
      setDragIndex(indexFromPointer(event.clientX));
      if (event.cancelable) event.preventDefault();
    }
  };

  const endPress = () => {
    cancelPressTimer();
    if (dragStarted.current && dragIndex !== null) {
      const target = items[dragIndex];
      if (target) router.push(target.href);
    }
    startPoint.current = null;
    dragStarted.current = false;
    setIsDragging(false);
    setDragIndex(null);
  };

  const toggleDesktop = () => setDesktopExpanded((current) => !current);

  return (
    <>
      <aside className={`desktop-nav-drawer${desktopExpanded ? " is-expanded" : " is-collapsed"}`} aria-label="Desktop navigation">
        <div className="desktop-nav-brand-row">
          <Link href="/" className="desktop-nav-brand" aria-label="Nexa home">
            <span className="desktop-nav-brand-mark">N</span>
            <span className="desktop-nav-brand-name">Nexa</span>
          </Link>
          <button
            className="desktop-nav-toggle"
            type="button"
            onClick={toggleDesktop}
            aria-label={desktopExpanded ? "Collapse navigation" : "Expand navigation"}
            title={desktopExpanded ? "Collapse navigation" : "Expand navigation"}
          >
            <NavIcon>
              {desktopExpanded ? <path d="m14.5 5-7 7 7 7" /> : <path d="m9.5 5 7 7-7 7" />}
            </NavIcon>
          </button>
        </div>

        <div className="desktop-nav-caption">NAVIGATION</div>
        <nav className="desktop-nav-list" aria-label="Main navigation">
          {items.map((item) => {
            const selected = active(item);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`desktop-nav-item${selected ? " is-active" : ""}`}
                aria-current={selected ? "page" : undefined}
                title={!desktopExpanded ? item.label : undefined}
              >
                <span className="desktop-nav-item-icon"><NavIcon>{item.icon}</NavIcon></span>
                <span className="desktop-nav-item-label">{item.label}</span>
                {selected && <span className="desktop-nav-active-dot" aria-hidden="true" />}
              </Link>
            );
          })}
        </nav>
        <div className="desktop-nav-footer">
          <span className="desktop-nav-footer-dot" />
          <span className="desktop-nav-footer-text">Your ideas, made clear.</span>
        </div>
      </aside>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <div className={`mobile-bottom-nav__inner${isDragging ? " is-dragging" : ""}`} ref={navRef} style={{ "--active-index": indicatorIndex }} onPointerDown={startPress} onPointerMove={movePress} onPointerUp={endPress} onPointerCancel={endPress}>
          <span className="mobile-bottom-nav__indicator" aria-hidden="true" />
          {items.map((item, index) => {
            const selected = active(item);
            return (
              <Link
                key={item.label}
                href={item.href}
                draggable="false"
                className={`mobile-bottom-nav__item${selected ? " is-active" : ""}${indicatorIndex === index ? " is-indicator-target" : ""}`}
                aria-current={selected ? "page" : undefined}
                onClick={(event) => {
                  if (isDragging || dragStarted.current) event.preventDefault();
                  setHash(item.href.includes("#") ? `#${item.href.split("#")[1]}` : "");
                }}
              >
                <span className="mobile-bottom-nav__icon"><NavIcon>{item.icon}</NavIcon></span>
                <span className="mobile-bottom-nav__label">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const items = [
  {
    label: "Home",
    href: "/",
    icon: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M9 20v-7h6v7" /></>,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <><rect x="3" y="3" width="8" height="8" rx="2" /><rect x="13" y="3" width="8" height="5" rx="2" /><rect x="13" y="10" width="8" height="11" rx="2" /><rect x="3" y="13" width="8" height="8" rx="2" /></>,
  },
  {
    label: "Overview",
    href: "/dashboard#overview",
    icon: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="m7 15 4-4 3 2 5-6" /></>,
  },
  {
    label: "About",
    href: "/about",
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><path d="M12 8h.01" /></>,
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, [pathname]);

  function active(item) {
    if (item.label === "Home") return pathname === "/" && !hash;
    if (item.label === "Dashboard") return pathname === "/dashboard" && hash !== "#overview";
    if (item.label === "Overview") return pathname === "/dashboard" && hash === "#overview";
    if (item.label === "About") return pathname === "/about";
    return false;
  }

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      <div className="mobile-bottom-nav__inner">
        {items.map((item) => {
          const selected = active(item);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`mobile-bottom-nav__item${selected ? " is-active" : ""}`}
              aria-current={selected ? "page" : undefined}
              onClick={() => setHash(item.href.includes("#") ? `#${item.href.split("#")[1]}` : "")}
            >
              <span className="mobile-bottom-nav__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {item.icon}
                </svg>
              </span>
              <span className="mobile-bottom-nav__label">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import BrandLogo from "./BrandLogo";

const items = [
  { label: "Home", href: "/", icon: <><path d="m3 10 9-7 9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M9 20v-6h6v6"/></> },
  { label: "Search", href: "/search", icon: <><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/></> },
  { label: "Explore", href: "/explore", icon: <><circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.5 5.1-5.1 2.5 2.5-5.1 5.1-2.5Z"/></> },
  { label: "Trending", href: "/trending", icon: <><path d="M12.2 21c4 0 6.8-2.8 6.8-6.6 0-2.5-1.3-4.5-3.8-6.7.1 2.2-.7 3.2-1.8 3.8C13.5 7.4 11 4.8 8 3c.7 4.4-3 6.6-3 11.2C5 18.3 8 21 12.2 21Z"/><path d="M12 21c-1.8-.8-2.7-2.1-2.7-3.8 0-1.4.8-2.5 2.2-3.6.1 1.3.6 2 1.5 2.5.8 1.9.4 3.6-1 4.9Z"/></> },
  { label: "About", href: "/about", icon: <><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 7.8h.01"/></> },
];

function NavIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>;
}

export default function MobileBottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [desktopExpanded, setDesktopExpanded] = useState(true);
  const [mobileDragIndex, setMobileDragIndex] = useState(null);
  const [desktopDragIndex, setDesktopDragIndex] = useState(null);
  const [mobileDragging, setMobileDragging] = useState(false);
  const [desktopDragging, setDesktopDragging] = useState(false);
  const mobileNavRef = useRef(null);
  const desktopNavRef = useRef(null);
  const pressTimer = useRef(null);
  const startPoint = useRef(null);
  const dragStarted = useRef(false);
  const suppressClick = useRef(false);
  const mobileDragIndexRef = useRef(null);
  const desktopDragIndexRef = useRef(null);
  const activeIndex = Math.max(0, items.findIndex((item) => item.href === pathname));

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("nexa-desktop-nav-expanded");
      if (saved !== null) setDesktopExpanded(saved === "true");
    } catch (_) {}
  }, []);

  useEffect(() => {
    document.body.classList.toggle("desktop-nav-expanded", desktopExpanded);
    document.body.classList.toggle("desktop-nav-collapsed", !desktopExpanded);
    try { window.localStorage.setItem("nexa-desktop-nav-expanded", String(desktopExpanded)); } catch (_) {}
    return () => document.body.classList.remove("desktop-nav-expanded", "desktop-nav-collapsed");
  }, [desktopExpanded]);

  useEffect(() => {
    setMobileDragIndex(null);
    setDesktopDragIndex(null);
    mobileDragIndexRef.current = null;
    desktopDragIndexRef.current = null;
  }, [pathname]);

  const cancelTimer = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
    pressTimer.current = null;
  };

  const mobileIndexAt = (clientX) => {
    const element = mobileNavRef.current;
    if (!element) return activeIndex;
    const rect = element.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width - 1, clientX - rect.left));
    return Math.max(0, Math.min(items.length - 1, Math.floor((x / rect.width) * items.length)));
  };

  const desktopIndexAt = (clientY) => {
    const element = desktopNavRef.current;
    if (!element) return activeIndex;
    const links = [...element.querySelectorAll(".desktop-nav-item")];
    if (!links.length) return activeIndex;
    let nearest = 0;
    let nearestDistance = Infinity;
    links.forEach((link, index) => {
      const rect = link.getBoundingClientRect();
      const distance = Math.abs(clientY - (rect.top + rect.height / 2));
      if (distance < nearestDistance) { nearest = index; nearestDistance = distance; }
    });
    return nearest;
  };

  const beginPress = (event, surface) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    startPoint.current = { x: event.clientX, y: event.clientY, surface, pointerId: event.pointerId };
    dragStarted.current = false;
    suppressClick.current = false;
    cancelTimer();
    if (surface === "mobile") { try { event.currentTarget.setPointerCapture(event.pointerId); } catch (_) {} }
    pressTimer.current = setTimeout(() => {
      dragStarted.current = true;
      suppressClick.current = true;
      if (surface === "mobile") {
        const index = mobileIndexAt(startPoint.current?.x ?? event.clientX);
        mobileDragIndexRef.current = index;
        setMobileDragIndex(index);
        setMobileDragging(true);
      } else {
        const index = desktopIndexAt(startPoint.current?.y ?? event.clientY);
        desktopDragIndexRef.current = index;
        setDesktopDragIndex(index);
        setDesktopDragging(true);
      }
      if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(10);
    }, 220);
  };

  const movePress = (event, surface) => {
    if (!startPoint.current || startPoint.current.surface !== surface) return;
    const dx = event.clientX - startPoint.current.x;
    const dy = event.clientY - startPoint.current.y;
    const distance = Math.hypot(dx, dy);
    const intentional = surface === "mobile"
      ? Math.abs(dx) > Math.abs(dy) * 1.15
      : Math.abs(dy) > Math.abs(dx) * 1.05;
    if (!dragStarted.current && distance > 15) {
      cancelTimer();
      if (intentional) {
        dragStarted.current = true;
        suppressClick.current = true;
        try { event.currentTarget.setPointerCapture(event.pointerId); } catch (_) {}
        if (surface === "mobile") setMobileDragging(true);
        else setDesktopDragging(true);
      }
    }
    if (dragStarted.current) {
      if (surface === "mobile") {
        const index = mobileIndexAt(event.clientX);
        mobileDragIndexRef.current = index;
        setMobileDragIndex(index);
      } else {
        const index = desktopIndexAt(event.clientY);
        desktopDragIndexRef.current = index;
        setDesktopDragIndex(index);
      }
      if (event.cancelable) event.preventDefault();
    }
  };

  const endPress = (surface) => {
    cancelTimer();
    const wasDragging = dragStarted.current;
    if (wasDragging) {
      const index = surface === "mobile" ? mobileDragIndexRef.current : desktopDragIndexRef.current;
      const targetIndex = index ?? activeIndex;
      const target = items[targetIndex];
      // Keep the glass indicator at the dropped position until the new route is active.
      if (surface === "mobile") setMobileDragIndex(targetIndex);
      else setDesktopDragIndex(targetIndex);
      if (target) router.push(target.href);
    } else {
      setMobileDragIndex(null);
      setDesktopDragIndex(null);
    }
    startPoint.current = null;
    dragStarted.current = false;
    mobileDragIndexRef.current = null;
    desktopDragIndexRef.current = null;
    setMobileDragging(false);
    setDesktopDragging(false);
    // Keep the flag until the synthetic click from the pointer release has been suppressed.
    window.setTimeout(() => { suppressClick.current = false; }, 0);
  };

  const handleLinkClick = (event) => {
    if (suppressClick.current) {
      event.preventDefault();
      event.stopPropagation();
      suppressClick.current = false;
    }
  };

  const toggleDesktop = () => setDesktopExpanded((current) => !current);
  const desktopIndicatorIndex = desktopDragIndex === null ? activeIndex : desktopDragIndex;
  const mobileIndicatorIndex = mobileDragIndex === null ? activeIndex : mobileDragIndex;

  return (
    <>
      <aside className={`desktop-nav-drawer${desktopExpanded ? " is-expanded" : " is-collapsed"}`} aria-label="Desktop navigation">
        <div className="desktop-nav-brand-row">
          <Link href="/" className="desktop-nav-brand" aria-label="Nexa home">
            <BrandLogo className="desktop-nav-brand-mark" /><span className="desktop-nav-brand-name">Nexa</span>
          </Link>
          <button className="desktop-nav-toggle" type="button" onClick={toggleDesktop} aria-label={desktopExpanded ? "Collapse navigation" : "Expand navigation"} title={desktopExpanded ? "Collapse navigation" : "Expand navigation"}>
            <NavIcon>{desktopExpanded ? <path d="m14.5 5-7 7 7 7" /> : <path d="m9.5 5 7 7-7 7" />}</NavIcon>
          </button>
        </div>
        <div className="desktop-nav-caption">NAVIGATION</div>
        <nav
          className={`desktop-nav-list${desktopDragging ? " is-dragging" : ""}`}
          aria-label="Main navigation"
          ref={desktopNavRef}
          style={{ "--desktop-active-index": desktopIndicatorIndex }}
          onPointerDown={(event) => beginPress(event, "desktop")}
          onPointerMove={(event) => movePress(event, "desktop")}
          onPointerUp={() => endPress("desktop")}
          onPointerCancel={() => endPress("desktop")}
          onClickCapture={handleLinkClick}
        >
          <span className="desktop-nav-indicator" aria-hidden="true" />
          {items.map((item, index) => {
            const selected = item.href === pathname;
            const indicatorTarget = index === desktopIndicatorIndex;
            return <Link key={item.label} href={item.href} className={`desktop-nav-item${selected ? " is-active" : ""}${indicatorTarget ? " is-indicator-target" : ""}`} aria-current={selected ? "page" : undefined} title={!desktopExpanded ? item.label : undefined}>
              <span className="desktop-nav-item-icon"><NavIcon>{item.icon}</NavIcon></span>
              <span className="desktop-nav-item-label">{item.label}</span>
              {selected && <span className="desktop-nav-active-dot" aria-hidden="true" />}
            </Link>;
          })}
        </nav>
        <div className="desktop-nav-footer"><span className="desktop-nav-footer-dot" /><span className="desktop-nav-footer-text">Your ideas, made clear.</span></div>
      </aside>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <div
          className={`mobile-bottom-nav__inner${mobileDragging ? " is-dragging" : ""}`}
          ref={mobileNavRef}
          style={{ "--active-index": mobileIndicatorIndex }}
          onPointerDown={(event) => beginPress(event, "mobile")}
          onPointerMove={(event) => movePress(event, "mobile")}
          onPointerUp={() => endPress("mobile")}
          onPointerCancel={() => endPress("mobile")}
          onClickCapture={handleLinkClick}
        >
          <span className="mobile-bottom-nav__indicator" aria-hidden="true" />
          {items.map((item) => {
            const selected = item.href === pathname;
            return <Link key={item.label} href={item.href} draggable="false" className={`mobile-bottom-nav__item${selected ? " is-active" : ""}${mobileIndicatorIndex === items.indexOf(item) ? " is-indicator-target" : ""}`} aria-current={selected ? "page" : undefined}>
              <span className="mobile-bottom-nav__icon"><NavIcon>{item.icon}</NavIcon></span>
              <span className="mobile-bottom-nav__label">{item.label}</span>
            </Link>;
          })}
        </div>
      </nav>
    </>
  );
}

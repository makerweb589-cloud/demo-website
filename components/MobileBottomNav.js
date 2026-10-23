"use client";

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

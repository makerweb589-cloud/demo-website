
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: "home",
    isActive: (pathname) => pathname === "/",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    isActive: (pathname, hash) =>
      pathname === "/dashboard" && hash !== "#overview",
  },
  {
    label: "Overview",
    href: "/dashboard#overview",
    icon: "overview",
    isActive: (pathname, hash) =>
      pathname === "/dashboard" && hash === "#overview",
  },
  {
    label: "About",
    href: "/about",
    icon: "about",
    isActive: (pathname) => pathname === "/about",
  },
];

function NavIcon({ name }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "home":
      return (
        <svg {...props}>
          <path d="m3 10 9-7 9 7" />
          <path d="M5 9v11h14V9" />
          <path d="M9 20v-7h6v7" />
        </svg>
      );

    case "dashboard":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="8" height="8" rx="2" />
          <rect x="13" y="3" width="8" height="5" rx="2" />
          <rect x="13" y="10" width="8" height="11" rx="2" />
          <rect x="3" y="13" width="8" height="8" rx="2" />
        </svg>
      );

    case "overview":
      return (
        <svg {...props}>
          <path d="M3 3v18h18" />
          <path d="m7 14 4-4 3 3 6-7" />
          <path d="M15 6h5v5" />
        </svg>
      );

    case "about":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5" />
          <path d="M12 7h.01" />
        </svg>
      );

    default:
      return null;
  }
}

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    updateHash();

    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, [pathname]);

  return (
    <nav
      className="mobile-bottom-nav"
      aria-label="Mobile navigation"
    >
      {navItems.map((item) => {
        const active = item.isActive(pathname, hash);

        return (
          <a
            key={item.label}
            href={item.href}
            className={`mobile-bottom-nav-item${active ? " active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <span className="mobile-bottom-nav-icon">
              <NavIcon name={item.icon} />
            </span>

            <span className="mobile-bottom-nav-label">
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

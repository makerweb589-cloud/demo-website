"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function NavIcon({ name }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  };

  switch (name) {
    case "home":
      return (
        <svg {...props}>
          <path d="m3 10 9-7 9 7" />
          <path d="M5 9v12h14V9" />
          <path d="M9 21v-7h6v7" />
        </svg>
      );

    case "dashboard":
      return (
        <svg {...props}>
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
        </svg>
      );

    case "overview":
      return (
        <svg {...props}>
          <path d="M4 19.5h16" />
          <path d="M6 16V10" />
          <path d="M12 16V5" />
          <path d="M18 16v-4" />
        </svg>
      );

    case "about":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5" />
          <path d="M12 8h.01" />
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
    function updateHash() {
      setHash(window.location.hash);
    }

    updateHash();

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [pathname]);

  const items = [
    {
      label: "Home",
      href: "/",
      icon: "home",
      active: pathname === "/"
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
      active: pathname === "/dashboard" && hash !== "#overview"
    },
    {
      label: "Overview",
      href: "/dashboard#overview",
      icon: "overview",
      active: pathname === "/dashboard" && hash === "#overview"
    },
    {
      label: "About",
      href: "/about",
      icon: "about",
      active: pathname === "/about"
    }
  ];

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`mobile-bottom-nav-item ${
            item.active ? "active" : ""
          }`}
          aria-current={item.active ? "page" : undefined}
          key={item.label}
        >
          <span className="mobile-bottom-nav-icon">
            <NavIcon name={item.icon} />
          </span>

          <span className="mobile-bottom-nav-label">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}

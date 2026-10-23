"use client";

import { useEffect } from "react";

const CARD_SELECTOR = [
  ".service-card", ".process-item", ".stat-card", ".requests-panel",
  ".request-card", ".dashboard-banner", ".dashboard-summary-card",
  ".dashboard-widget", ".overview-card", ".about-card", ".about-value-card",
  ".feature-card", ".metric-card", ".dashboard-empty", ".demo-contact-note"
].join(",");

export default function EdgeGlowEffect() {
  useEffect(() => {
    const targets = new Set();
    let frame = 0;
    let pointerX = -10000;
    let pointerY = -10000;
    const proximity = 86;

    const refreshTargets = () => {
      document.querySelectorAll(CARD_SELECTOR).forEach((element) => {
        if (targets.has(element)) return;
        targets.add(element);
        element.classList.add("edge-glow-target");
      });
    };

    const update = () => {
      frame = 0;
      refreshTargets();
      targets.forEach((element) => {
        if (!element.isConnected) {
          targets.delete(element);
          return;
        }
        const rect = element.getBoundingClientRect();
        const closestX = Math.max(rect.left, Math.min(pointerX, rect.right));
        const closestY = Math.max(rect.top, Math.min(pointerY, rect.bottom));
        const dx = pointerX - closestX;
        const dy = pointerY - closestY;
        const distance = Math.hypot(dx, dy);
        const near = distance <= proximity && rect.width > 0 && rect.height > 0;

        if (near) {
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const angle = Math.atan2(pointerY - centerY, pointerX - centerX) * 180 / Math.PI + 90;
          element.style.setProperty("--edge-angle", `${angle}deg`);
          element.classList.add("edge-glow-active");
        } else {
          element.classList.remove("edge-glow-active");
        }
      });
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const onPointerMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      scheduleUpdate();
    };
    const observer = new MutationObserver(() => {
      refreshTargets();
      scheduleUpdate();
    });

    refreshTargets();
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", scheduleUpdate, { passive: true, capture: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", scheduleUpdate, true);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      targets.forEach((element) => {
        element.classList.remove("edge-glow-target", "edge-glow-active");
        element.style.removeProperty("--edge-angle");
      });
    };
  }, []);

  return null;
}

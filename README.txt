NEXA — RESPONSIVE GLASS NAVIGATION UPDATE

This ZIP contains complete replacement files:
1. app/layout.js
2. app/page.js
3. app/dashboard/page.js
4. app/globals.css
5. components/MobileBottomNav.js

WHAT CHANGED
- Desktop (769px+): a collapsible left-side glass navigation drawer appears.
- Drawer header shows the Nexa name and a small arrow toggle.
- The arrow smoothly expands/collapses the drawer; preference is saved in localStorage.
- The same Home, Dashboard, Overview and About navigation items appear in the drawer.
- Mobile (768px and below): a fixed bottom liquid-glass navigation bar appears.
- Selected mobile item uses a smaller pill-shaped glass indicator that smoothly slides between options.
- A long press or horizontal swipe across the mobile navigation can move the selection pill; release navigates to the selected item.
- The bottom navigation remains fixed while scrolling, with extra content space reserved beneath pages.

HOW TO APPLY
Extract this ZIP and replace each matching file in your Next.js project, keeping the exact folder paths. Keep your existing API routes and package files. Redeploy after replacement.

NOTES
- The desktop drawer is hidden on mobile; the mobile bar is hidden on desktop.
- Overview points to /dashboard#overview. The Dashboard page should have an element with id="overview".
- About points to /about, as in the existing project navigation.

import "./globals.css";
import MobileBottomNav from "../components/MobileBottomNav";

export const metadata = {
  title: "Nexa",
  description: "Thoughtful strategies and modern digital solutions for business growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">{children}</div>
        <MobileBottomNav />
      </body>
    </html>
  );
}

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap");

:root {
  --ink: #20221f;
  --muted: #797c74;
  --line: #e8e9e3;
  --paper: #fbfbf8;
  --white: #ffffff;
  --accent: #d5f36a;
  --accent-dark: #b8d94b;
  --soft: #f1f3eb;
  --radius: 18px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: "DM Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input,
textarea {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid #7b9630;
  outline-offset: 3px;
}

.container {
  width: min(1160px, 88%);
  margin: 0 auto;
}

/* Header */

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(251, 251, 248, 0.94);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}

.nav {
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-size: 25px;
  letter-spacing: -1.4px;
  flex-shrink: 0;
}

.brand-icon {
  width: 29px;
  height: 29px;
  display: grid;
  place-items: center;
  background: var(--accent);
  border-radius: 9px;
  font-size: 17px;
  letter-spacing: -1px;
}

.brand-dot {
  color: #8ba92c;
  margin-left: -7px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links a {
  color: #64675f;
  font-size: 13px;
  transition: color 0.2s;
}

.nav-links a:hover,
.footer-column a:hover {
  color: #7e9e25;
}

.nav-cta {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  padding: 12px 16px;
  background: var(--ink);
  color: white;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
}

.nav-cta span {
  color: var(--accent);
}

/* Hero */

.hero {
  padding-top: 86px;
  padding-bottom: 84px;
  display: grid;
  grid-template-columns: 1fr 0.91fr;
  gap: 70px;
  align-items: center;
}

.eyebrow,
.section-label {
  display: inline-block;
  color: #777a70;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.8px;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;
}

.status-dot {
  width: 7px;
  height: 7px;
  background: #9cbf34;
  border-radius: 50%;
}

.hero h1,
.section-heading h2,
.process-heading h2,
.demo-copy h2,
.about-hero h1 {
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  letter-spacing: -3.8px;
  line-height: 1.12;
}

.hero h1 {
  font-size: clamp(48px, 5.2vw, 70px);
  margin: 25px 0 22px;
}

.hero h1 > span,
.section-heading h2 > span,
.process-heading h2 > span,
.demo-copy h2 > span,
.about-hero h1 > span {
  color: #8ba92c;
}

.hero-description {
  max-width: 430px;
  color: var(--muted);
  line-height: 1.9;
  font-size: 14px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 30px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 15px 19px;
  border: 0;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  transition: transform 0.2s, background 0.2s;
}

.button:hover {
  transform: translateY(-2px);
}

.button-dark {
  background: var(--ink);
  color: white;
}

.button-dark:hover {
  background: #353a30;
}

.button-dark span {
  color: var(--accent);
}

.text-link {
  font-size: 12px;
  font-weight: 700;
}

.text-link span {
  margin-left: 5px;
}

.hero-note {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 44px;
}

.avatar-stack {
  display: flex;
  padding-left: 5px;
}

.avatar-stack span {
  width: 29px;
  height: 29px;
  margin-left: -5px;
  border: 2px solid var(--paper);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #e3e8d8;
  font-size: 10px;
  font-weight: 700;
}

.avatar-stack span:nth-child(2) {
  background: #e8dfd0;
}

.avatar-stack span:nth-child(3) {
  background: #e3e0f0;
}

.hero-note p {
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
  margin: 0;
}

/* Hero graphic */

.hero-visual {
  min-height: 400px;
  padding: 22px;
  background: #f0f2e9;
  border: 1px solid #e5e8db;
  border-radius: 20px;
  overflow: hidden;
}

.visual-top,
.visual-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.visual-top {
  font-size: 9px;
  letter-spacing: 1.2px;
  font-weight: 700;
  color: #777b6d;
}

.visual-graphic {
  height: 270px;
  position: relative;
  display: grid;
  place-items: center;
}

.graphic-circle {
  position: absolute;
  border: 1px solid #d3d8c5;
  border-radius: 50%;
}

.circle-one {
  width: 130px;
  height: 130px;
}

.circle-two {
  width: 210px;
  height: 210px;
}

.circle-three {
  width: 290px;
  height: 290px;
}

.graphic-center {
  z-index: 2;
  width: 82px;
  height: 82px;
  display: grid;
  place-items: center;
  border-radius: 26px;
  background: var(--accent);
  box-shadow: 0 8px 25px #9cbf3420;
}

.graphic-center span {
  font-family: "Manrope", sans-serif;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -5px;
}

.graphic-label {
  position: absolute;
  z-index: 3;
  background: white;
  border: 1px solid #e6e8df;
  border-radius: 8px;
  padding: 10px 13px;
  font-size: 10px;
  font-weight: 700;
  box-shadow: 0 5px 15px #20221f08;
}

.label-one {
  top: 42px;
  left: 18%;
}

.label-two {
  top: 80px;
  right: 6%;
}

.label-three {
  bottom: 34px;
  right: 17%;
}

.visual-bottom {
  border-top: 1px solid #dfe3d5;
  padding-top: 17px;
}

.mini-label {
  color: #777b6d;
  font-size: 9px;
  letter-spacing: 1px;
  font-weight: 700;
}

.visual-bottom p {
  font-size: 11px;
  margin-bottom: 0;
}

.visual-arrow {
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  background: var(--accent);
  border-radius: 50%;
}

/* Trust strip */

.trust-strip {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: #f6f7f1;
}

.trust-inner {
  min-height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.trust-inner > p {
  color: var(--muted);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.trust-items {
  display: flex;
  gap: 42px;
  color: #55594f;
  font-size: 12px;
  font-weight: 600;
}

/* Services */

.section {
  padding-top: 105px;
  padding-bottom: 105px;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 45px;
  margin-bottom: 40px;
}

.section-heading h2,
.process-heading h2,
.demo-copy h2 {
  font-size: clamp(35px, 4vw, 48px);
  margin: 18px 0 0;
}

.section-intro {
  max-width: 355px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
  margin-bottom: 5px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.service-card {
  background: white;
  border: 1px solid var(--line);
  border-radius: 13px;
  padding: 26px;
  transition: transform 0.2s, border-color 0.2s;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: #cdd7ad;
}

.service-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #777a70;
  font-size: 10px;
}

.service-arrow {
  width: 31px;
  height: 31px;
  display: grid;
  place-items: center;
  background: var(--soft);
  border-radius: 50%;
  color: var(--ink);
}

.service-card h3 {
  margin: 36px 0 12px;
  font-family: "Manrope", sans-serif;
  font-size: 19px;
  letter-spacing: -0.6px;
}

.service-card > p {
  min-height: 77px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.9;
}

.service-link {
  display: inline-block;
  margin-top: 16px;
  font-size: 11px;
  font-weight: 700;
}

.service-link span {
  margin-left: 8px;
}

/* Process */

.process-section {
  background: #f0f2e9;
  border-top: 1px solid #e5e8db;
  border-bottom: 1px solid #e5e8db;
}

.process-inner {
  padding-top: 90px;
  padding-bottom: 90px;
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  gap: 100px;
}

.process-heading h2 {
  margin-bottom: 23px;
}

.process-heading > p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
  max-width: 350px;
}

.process-list {
  border-top: 1px solid #daddd1;
}

.process-item {
  display: flex;
  gap: 24px;
  padding: 26px 0;
  border-bottom: 1px solid #daddd1;
}

.process-number {
  color: #849c40;
  font-size: 11px;
  font-weight: 700;
}

.process-item h3 {
  margin: 0 0 9px;
  font-family: "Manrope", sans-serif;
  font-size: 17px;
}

.process-item p {
  color: var(--muted);
  margin: 0;
  font-size: 12px;
  line-height: 1.8;
}

/* Demo form */

.demo-section {
  padding-top: 110px;
  padding-bottom: 110px;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 100px;
  align-items: start;
}

.demo-copy h2 {
  margin-bottom: 22px;
}

.demo-copy > p {
  max-width: 360px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
}

.demo-contact-note {
  display: flex;
  gap: 14px;
  margin-top: 40px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
}

.contact-icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  background: var(--accent);
  border-radius: 10px;
}

.demo-contact-note strong {
  font-size: 11px;
}

.demo-contact-note p {
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

.demo-form {
  padding: 30px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 14px;
}

.form-heading {
  margin-bottom: 25px;
}

.form-heading h3 {
  margin: 0 0 8px;
  font-family: "Manrope", sans-serif;
  font-size: 22px;
}

.form-heading p {
  color: var(--muted);
  font-size: 11px;
}

.demo-form label {
  display: block;
  margin: 19px 0 8px;
  font-size: 11px;
  font-weight: 700;
}

.demo-form input,
.demo-form textarea {
  width: 100%;
  padding: 13px 14px;
  border: 1px solid #e5e6df;
  border-radius: 7px;
  background: #fdfdfb;
  color: var(--ink);
  font-size: 12px;
  outline: none;
}

.demo-form input:focus,
.demo-form textarea:focus {
  border-color: #9cb64e;
}

.demo-form input::placeholder,
.demo-form textarea::placeholder {
  color: #a1a398;
}

.demo-form textarea {
  resize: vertical;
  min-height: 105px;
}

.submit-button {
  width: 100%;
  margin-top: 22px;
  justify-content: space-between;
  cursor: pointer;
}

.submit-button:disabled {
  opacity: 0.65;
  cursor: wait;
}

.form-notice {
  margin-top: 15px;
  padding: 13px;
  border-radius: 7px;
  font-size: 12px;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.form-notice.success {
  color: #355a21;
  background: #edf6e4;
}

.form-notice.error {
  color: #963b32;
  background: #fff0ed;
}

.form-disclaimer {
  margin-top: 16px;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.7;
}

/* Footer */

.site-footer {
  background: #f0f2e9;
  border-top: 1px solid #e3e6d9;
}

.footer-main {
  padding-top: 50px;
  padding-bottom: 45px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 50px;
}

.footer-description {
  max-width: 240px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.footer-column h4 {
  margin: 6px 0;
  color: #777a70;
  font-size: 9px;
  letter-spacing: 1.4px;
}

.footer-column a {
  font-size: 11px;
  color: #51544c;
}

.footer-bottom {
  padding: 22px 0;
  border-top: 1px solid #dfe2d6;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: var(--muted);
  font-size: 10px;
}

.footer-star {
  color: #829e32;
}

/* About */

.inner-page {
  min-height: 100vh;
}

.inner-header {
  height: 75px;
  padding: 0 6%;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-link {
  color: var(--muted);
  font-size: 12px;
}

.about-hero {
  padding: 100px 8% 85px;
  background: #f0f2e9;
  text-align: center;
}

.about-hero h1 {
  margin: 24px 0;
  font-size: clamp(40px, 6vw, 68px);
}

.about-hero > p {
  max-width: 620px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 14px;
  line-height: 2;
}

.about-values {
  width: min(1050px, 88%);
  margin: 0 auto;
  padding: 80px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.about-values article {
  padding: 25px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: white;
}

.about-values article > span {
  color: #8ba92c;
  font-size: 11px;
  font-weight: 700;
}

.about-values h2 {
  font-family: "Manrope", sans-serif;
  font-size: 19px;
}

.about-values p {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.9;
}

.about-cta {
  padding: 60px 20px;
  text-align: center;
  background: #f0f2e9;
}

.about-cta h2 {
  font-family: "Manrope", sans-serif;
  font-size: 30px;
}

.about-cta p {
  color: var(--muted);
  font-size: 13px;
  margin-bottom: 25px;
}

.simple-footer {
  padding: 25px;
  text-align: center;
  color: var(--muted);
  font-size: 11px;
}

/* Dashboard */

.dashboard-layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 245px minmax(0, 1fr);
  background: #f8f9f6;
}

.dashboard-sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  background: white;
  border-right: 1px solid var(--line);
}

.dashboard-brand {
  margin-bottom: 50px;
}

.sidebar-label {
  margin: 0 0 17px 10px;
  color: #9b9d95;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
  padding: 13px;
  color: #6d7067;
  border-radius: 8px;
  font-size: 12px;
}

.sidebar-link > span {
  width: 20px;
  text-align: center;
  font-size: 15px;
}

.sidebar-link.active {
  background: #f0f4e5;
  color: #425b20;
  font-weight: 700;
}

.sidebar-bottom {
  margin-top: auto;
  padding-top: 22px;
  border-top: 1px solid var(--line);
  display: flex;
  align-items: center;
  gap: 11px;
}

.profile-avatar {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  background: var(--accent);
  border-radius: 10px;
  font-weight: 800;
}

.sidebar-bottom strong,
.sidebar-bottom span {
  display: block;
}

.sidebar-bottom strong {
  font-size: 11px;
}

.sidebar-bottom span {
  margin-top: 5px;
  color: var(--muted);
  font-size: 10px;
}

.dashboard-main {
  width: 100%;
  max-width: 1500px;
  padding: 35px;
  min-width: 0;
  margin: 0 auto;
}

.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
}

.dashboard-header h1 {
  margin: 12px 0 7px;
  font-family: "Manrope", sans-serif;
  font-size: 31px;
  letter-spacing: -1px;
}

.dashboard-header p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
}

.dashboard-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 27px;
  border: 1px solid #e1e6d3;
  border-radius: 12px;
  background: #f0f3e6;
}

.dashboard-banner > div:first-child > span {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #78854f;
}

.dashboard-banner h2 {
  font-family: "Manrope", sans-serif;
  font-size: 22px;
  letter-spacing: -0.6px;
  margin: 12px 0;
}

.dashboard-banner p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

.banner-symbol {
  width: 75px;
  height: 75px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--accent);
  font-size: 40px;
}

.stats-grid {
  margin: 22px 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 17px;
}

.stat-card {
  padding: 22px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 11px;
}

.stat-card > span {
  color: var(--muted);
  font-size: 11px;
}

.stat-card > strong {
  display: block;
  margin: 15px 0 8px;
  font-family: "Manrope", sans-serif;
  font-size: 33px;
  letter-spacing: -1px;
}

.stat-card > small {
  color: #92958b;
  font-size: 10px;
}

.requests-panel {
  background: white;
  border: 1px solid var(--line);
  border-radius: 11px;
  overflow: hidden;
}

.requests-heading {
  padding: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid var(--line);
}

.requests-heading h2 {
  margin: 0 0 8px;
  font-family: "Manrope", sans-serif;
  font-size: 17px;
}

.requests-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.7;
}

.refresh-button {
  flex-shrink: 0;
  padding: 10px 13px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 7px;
  font-size: 10px;
  font-weight: 700;
}

.table-scroll {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
}

th {
  padding: 15px 18px;
  text-align: left;
  background: #fcfcfa;
  color: #8a8d83;
  font-size: 9px;
  letter-spacing: 0.8px;
}

td {
  padding: 18px;
  border-top: 1px solid #f0f0eb;
  font-size: 11px;
  color: #565950;
}

td strong,
td small {
  display: block;
}

td strong {
  color: var(--ink);
}

td small {
  margin-top: 6px;
  color: #999b93;
  font-size: 9px;
}

.status-pill {
  display: inline-block;
  padding: 6px 9px;
  border-radius: 20px;
  font-size: 9px;
  font-weight: 700;
}

.status-pending {
  background: #fff3d9;
  color: #986c18;
}

.status-completed {
  background: #e8f4e2;
  color: #46752d;
}

.dashboard-empty {
  padding: 50px 20px;
  text-align: center;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.dashboard-empty > span {
  font-size: 30px;
}

.dashboard-empty h3 {
  color: var(--ink);
  font-size: 15px;
}

.dashboard-empty p {
  max-width: 330px;
  margin: 0 auto 18px;
}

.dashboard-error {
  margin: 15px;
  color: #a83b30;
  font-size: 12px;
}

.dashboard-disclaimer {
  margin-top: 20px;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.7;
}

/* Responsive */

@media (max-width: 950px) {
  .hero {
    gap: 35px;
  }

  .hero-visual {
    min-height: 350px;
  }

  .visual-graphic {
    height: 220px;
  }

  .circle-three {
    width: 245px;
    height: 245px;
  }

  .circle-two {
    width: 185px;
    height: 185px;
  }

  .process-inner,
  .demo-section {
    gap: 45px;
  }

  .dashboard-layout {
    grid-template-columns: 195px minmax(0, 1fr);
  }

  .dashboard-main {
    padding: 25px;
  }

  .dashboard-sidebar {
    padding: 25px 13px;
  }

  .stats-grid {
    gap: 10px;
  }

  .stat-card {
    padding: 16px;
  }
}

@media (max-width: 700px) {
  .container {
    width: 90%;
  }

  .nav {
    height: 67px;
    gap: 10px;
  }

  .brand {
    font-size: 22px;
  }

  .nav-links {
    display: none;
  }

  .nav-cta {
    padding: 11px 12px;
    font-size: 10px;
  }

  .hero {
    padding-top: 55px;
    padding-bottom: 55px;
    grid-template-columns: 1fr;
    gap: 38px;
  }

  .hero h1 {
    font-size: clamp(45px, 11vw, 64px);
    letter-spacing: -3px;
  }

  .hero-description {
    font-size: 13px;
  }

  .hero-visual {
    min-height: 350px;
  }

  .visual-graphic {
    height: 225px;
  }

  .trust-inner {
    padding: 20px 0;
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }

  .trust-items {
    width: 100%;
    flex-wrap: wrap;
    gap: 12px 22px;
  }

  .section {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 25px;
  }

  .section-heading h2,
  .process-heading h2,
  .demo-copy h2 {
    font-size: 38px;
    letter-spacing: -2px;
  }

  .section-intro {
    font-size: 12px;
  }

  .service-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .service-card {
    padding: 22px;
  }

  .service-card h3 {
    margin-top: 25px;
  }

  .service-card > p {
    min-height: auto;
  }

  .process-inner,
  .demo-section {
    padding-top: 65px;
    padding-bottom: 65px;
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .process-item {
    gap: 18px;
  }

  .demo-form {
    padding: 22px;
  }

  .footer-main {
    padding-top: 40px;
    grid-template-columns: 1fr 1fr;
    gap: 35px 20px;
  }

  .footer-main > div:first-child {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
  }

  .about-hero {
    padding: 70px 6%;
  }

  .about-hero h1 {
    font-size: 43px;
    letter-spacing: -2px;
  }

  .about-hero > p {
    font-size: 12px;
  }

  .about-values {
    padding: 45px 0;
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .dashboard-layout {
    display: block;
  }

  .dashboard-sidebar {
    position: static;
    width: 100%;
    height: auto;
    padding: 15px 5%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .dashboard-brand {
    margin: 0;
  }

  .sidebar-label,
  .sidebar-bottom {
    display: none;
  }

  .sidebar-link {
    margin: 0;
    padding: 10px 8px;
    gap: 5px;
    font-size: 10px;
  }

  .sidebar-link > span {
    display: none;
  }

  .dashboard-main {
    padding: 25px 5%;
  }

  .dashboard-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .dashboard-header h1 {
    font-size: 27px;
  }

  .dashboard-banner {
    padding: 20px;
  }

  .dashboard-banner h2 {
    font-size: 19px;
    line-height: 1.5;
  }

  .banner-symbol {
    width: 48px;
    height: 48px;
    font-size: 25px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .stat-card {
    padding: 19px;
  }

  .stat-card > strong {
    font-size: 29px;
  }

  .requests-heading {
    align-items: flex-start;
    padding: 18px;
  }

  .requests-heading h2 {
    font-size: 15px;
  }

  .refresh-button {
    padding: 9px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}










/* ============================================
   NEXA — FINAL FULL PILL BUTTON DESIGN
   100% rounded + perfectly centered text
============================================ */

/* Apply full pill shape to all buttons */
.button,
.button-dark,
.nav-cta,
.submit-button,
.refresh-button,
.about-cta .button,
.dashboard-header .button {
  display: inline-flex !important;

  align-items: center !important;
  justify-content: center !important;

  text-align: center !important;
  text-indent: 0 !important;

  border-radius: 9999px !important;

  min-height: 48px;
  padding: 14px 28px !important;

  line-height: 1.2 !important;
  white-space: nowrap;

  box-sizing: border-box;
  gap: 0 !important;
}

/* Full-width demo form button */
.submit-button {
  display: flex !important;
  width: 100% !important;

  align-items: center !important;
  justify-content: center !important;

  text-align: center !important;
  border-radius: 9999px !important;
}

/* Remove arrows/icons inside buttons */
.button > span,
.nav-cta > span,
.submit-button > span,
.refresh-button > span,
.about-cta .button > span,
.dashboard-header .button > span {
  display: none !important;
}

/* Prevent pseudo-elements from affecting button layout */
.button::before,
.button::after,
.nav-cta::before,
.nav-cta::after,
.submit-button::before,
.submit-button::after,
.refresh-button::before,
.refresh-button::after {
  pointer-events: none;
}

/* Keep button labels centered */
.button,
.button-dark,
.nav-cta,
.submit-button,
.refresh-button {
  position: relative;
  text-indent: 0 !important;
}

/* Mobile button styling */
@media (max-width: 600px) {
  .button,
  .button-dark,
  .nav-cta,
  .submit-button,
  .refresh-button,
  .about-cta .button,
  .dashboard-header .button {
    min-height: 46px;
    padding: 13px 22px !important;
    border-radius: 9999px !important;
  }

  .submit-button {
    width: 100% !important;
  }
}

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap");

:root {
  --ink: #20221f;
  --muted: #797c74;
  --line: #e8e9e3;
  --paper: #fbfbf8;
  --white: #ffffff;
  --accent: #d5f36a;
  --accent-dark: #b8d94b;
  --soft: #f1f3eb;
  --radius: 18px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: "DM Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input,
textarea {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid #7b9630;
  outline-offset: 3px;
}

.container {
  width: min(1160px, 88%);
  margin: 0 auto;
}

/* Header */

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(251, 251, 248, 0.94);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}

.nav {
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-size: 25px;
  letter-spacing: -1.4px;
  flex-shrink: 0;
}

.brand-icon {
  width: 29px;
  height: 29px;
  display: grid;
  place-items: center;
  background: var(--accent);
  border-radius: 9px;
  font-size: 17px;
  letter-spacing: -1px;
}

.brand-dot {
  color: #8ba92c;
  margin-left: -7px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links a {
  color: #64675f;
  font-size: 13px;
  transition: color 0.2s;
}

.nav-links a:hover,
.footer-column a:hover {
  color: #7e9e25;
}

.nav-cta {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  padding: 12px 16px;
  background: var(--ink);
  color: white;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
}

.nav-cta span {
  color: var(--accent);
}

/* Hero */

.hero {
  padding-top: 86px;
  padding-bottom: 84px;
  display: grid;
  grid-template-columns: 1fr 0.91fr;
  gap: 70px;
  align-items: center;
}

.eyebrow,
.section-label {
  display: inline-block;
  color: #777a70;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.8px;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;
}

.status-dot {
  width: 7px;
  height: 7px;
  background: #9cbf34;
  border-radius: 50%;
}

.hero h1,
.section-heading h2,
.process-heading h2,
.demo-copy h2,
.about-hero h1 {
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  letter-spacing: -3.8px;
  line-height: 1.12;
}

.hero h1 {
  font-size: clamp(48px, 5.2vw, 70px);
  margin: 25px 0 22px;
}

.hero h1 > span,
.section-heading h2 > span,
.process-heading h2 > span,
.demo-copy h2 > span,
.about-hero h1 > span {
  color: #8ba92c;
}

.hero-description {
  max-width: 430px;
  color: var(--muted);
  line-height: 1.9;
  font-size: 14px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 30px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 15px 19px;
  border: 0;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  transition: transform 0.2s, background 0.2s;
}

.button:hover {
  transform: translateY(-2px);
}

.button-dark {
  background: var(--ink);
  color: white;
}

.button-dark:hover {
  background: #353a30;
}

.button-dark span {
  color: var(--accent);
}

.text-link {
  font-size: 12px;
  font-weight: 700;
}

.text-link span {
  margin-left: 5px;
}

.hero-note {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 44px;
}

.avatar-stack {
  display: flex;
  padding-left: 5px;
}

.avatar-stack span {
  width: 29px;
  height: 29px;
  margin-left: -5px;
  border: 2px solid var(--paper);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #e3e8d8;
  font-size: 10px;
  font-weight: 700;
}

.avatar-stack span:nth-child(2) {
  background: #e8dfd0;
}

.avatar-stack span:nth-child(3) {
  background: #e3e0f0;
}

.hero-note p {
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
  margin: 0;
}

/* Hero graphic */

.hero-visual {
  min-height: 400px;
  padding: 22px;
  background: #f0f2e9;
  border: 1px solid #e5e8db;
  border-radius: 20px;
  overflow: hidden;
}

.visual-top,
.visual-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.visual-top {
  font-size: 9px;
  letter-spacing: 1.2px;
  font-weight: 700;
  color: #777b6d;
}

.visual-graphic {
  height: 270px;
  position: relative;
  display: grid;
  place-items: center;
}

.graphic-circle {
  position: absolute;
  border: 1px solid #d3d8c5;
  border-radius: 50%;
}

.circle-one {
  width: 130px;
  height: 130px;
}

.circle-two {
  width: 210px;
  height: 210px;
}

.circle-three {
  width: 290px;
  height: 290px;
}

.graphic-center {
  z-index: 2;
  width: 82px;
  height: 82px;
  display: grid;
  place-items: center;
  border-radius: 26px;
  background: var(--accent);
  box-shadow: 0 8px 25px #9cbf3420;
}

.graphic-center span {
  font-family: "Manrope", sans-serif;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -5px;
}

.graphic-label {
  position: absolute;
  z-index: 3;
  background: white;
  border: 1px solid #e6e8df;
  border-radius: 8px;
  padding: 10px 13px;
  font-size: 10px;
  font-weight: 700;
  box-shadow: 0 5px 15px #20221f08;
}

.label-one {
  top: 42px;
  left: 18%;
}

.label-two {
  top: 80px;
  right: 6%;
}

.label-three {
  bottom: 34px;
  right: 17%;
}

.visual-bottom {
  border-top: 1px solid #dfe3d5;
  padding-top: 17px;
}

.mini-label {
  color: #777b6d;
  font-size: 9px;
  letter-spacing: 1px;
  font-weight: 700;
}

.visual-bottom p {
  font-size: 11px;
  margin-bottom: 0;
}

.visual-arrow {
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  background: var(--accent);
  border-radius: 50%;
}

/* Trust strip */

.trust-strip {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: #f6f7f1;
}

.trust-inner {
  min-height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.trust-inner > p {
  color: var(--muted);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.trust-items {
  display: flex;
  gap: 42px;
  color: #55594f;
  font-size: 12px;
  font-weight: 600;
}

/* Services */

.section {
  padding-top: 105px;
  padding-bottom: 105px;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 45px;
  margin-bottom: 40px;
}

.section-heading h2,
.process-heading h2,
.demo-copy h2 {
  font-size: clamp(35px, 4vw, 48px);
  margin: 18px 0 0;
}

.section-intro {
  max-width: 355px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
  margin-bottom: 5px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.service-card {
  background: white;
  border: 1px solid var(--line);
  border-radius: 13px;
  padding: 26px;
  transition: transform 0.2s, border-color 0.2s;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: #cdd7ad;
}

.service-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #777a70;
  font-size: 10px;
}

.service-arrow {
  width: 31px;
  height: 31px;
  display: grid;
  place-items: center;
  background: var(--soft);
  border-radius: 50%;
  color: var(--ink);
}

.service-card h3 {
  margin: 36px 0 12px;
  font-family: "Manrope", sans-serif;
  font-size: 19px;
  letter-spacing: -0.6px;
}

.service-card > p {
  min-height: 77px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.9;
}

.service-link {
  display: inline-block;
  margin-top: 16px;
  font-size: 11px;
  font-weight: 700;
}

.service-link span {
  margin-left: 8px;
}

/* Process */

.process-section {
  background: #f0f2e9;
  border-top: 1px solid #e5e8db;
  border-bottom: 1px solid #e5e8db;
}

.process-inner {
  padding-top: 90px;
  padding-bottom: 90px;
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  gap: 100px;
}

.process-heading h2 {
  margin-bottom: 23px;
}

.process-heading > p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
  max-width: 350px;
}

.process-list {
  border-top: 1px solid #daddd1;
}

.process-item {
  display: flex;
  gap: 24px;
  padding: 26px 0;
  border-bottom: 1px solid #daddd1;
}

.process-number {
  color: #849c40;
  font-size: 11px;
  font-weight: 700;
}

.process-item h3 {
  margin: 0 0 9px;
  font-family: "Manrope", sans-serif;
  font-size: 17px;
}

.process-item p {
  color: var(--muted);
  margin: 0;
  font-size: 12px;
  line-height: 1.8;
}

/* Demo form */

.demo-section {
  padding-top: 110px;
  padding-bottom: 110px;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 100px;
  align-items: start;
}

.demo-copy h2 {
  margin-bottom: 22px;
}

.demo-copy > p {
  max-width: 360px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
}

.demo-contact-note {
  display: flex;
  gap: 14px;
  margin-top: 40px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
}

.contact-icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  background: var(--accent);
  border-radius: 10px;
}

.demo-contact-note strong {
  font-size: 11px;
}

.demo-contact-note p {
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

.demo-form {
  padding: 30px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 14px;
}

.form-heading {
  margin-bottom: 25px;
}

.form-heading h3 {
  margin: 0 0 8px;
  font-family: "Manrope", sans-serif;
  font-size: 22px;
}

.form-heading p {
  color: var(--muted);
  font-size: 11px;
}

.demo-form label {
  display: block;
  margin: 19px 0 8px;
  font-size: 11px;
  font-weight: 700;
}

.demo-form input,
.demo-form textarea {
  width: 100%;
  padding: 13px 14px;
  border: 1px solid #e5e6df;
  border-radius: 7px;
  background: #fdfdfb;
  color: var(--ink);
  font-size: 12px;
  outline: none;
}

.demo-form input:focus,
.demo-form textarea:focus {
  border-color: #9cb64e;
}

.demo-form input::placeholder,
.demo-form textarea::placeholder {
  color: #a1a398;
}

.demo-form textarea {
  resize: vertical;
  min-height: 105px;
}

.submit-button {
  width: 100%;
  margin-top: 22px;
  justify-content: space-between;
  cursor: pointer;
}

.submit-button:disabled {
  opacity: 0.65;
  cursor: wait;
}

.form-notice {
  margin-top: 15px;
  padding: 13px;
  border-radius: 7px;
  font-size: 12px;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.form-notice.success {
  color: #355a21;
  background: #edf6e4;
}

.form-notice.error {
  color: #963b32;
  background: #fff0ed;
}

.form-disclaimer {
  margin-top: 16px;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.7;
}

/* Footer */

.site-footer {
  background: #f0f2e9;
  border-top: 1px solid #e3e6d9;
}

.footer-main {
  padding-top: 50px;
  padding-bottom: 45px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 50px;
}

.footer-description {
  max-width: 240px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.footer-column h4 {
  margin: 6px 0;
  color: #777a70;
  font-size: 9px;
  letter-spacing: 1.4px;
}

.footer-column a {
  font-size: 11px;
  color: #51544c;
}

.footer-bottom {
  padding: 22px 0;
  border-top: 1px solid #dfe2d6;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: var(--muted);
  font-size: 10px;
}

.footer-star {
  color: #829e32;
}

/* About */

.inner-page {
  min-height: 100vh;
}

.inner-header {
  height: 75px;
  padding: 0 6%;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-link {
  color: var(--muted);
  font-size: 12px;
}

.about-hero {
  padding: 100px 8% 85px;
  background: #f0f2e9;
  text-align: center;
}

.about-hero h1 {
  margin: 24px 0;
  font-size: clamp(40px, 6vw, 68px);
}

.about-hero > p {
  max-width: 620px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 14px;
  line-height: 2;
}

.about-values {
  width: min(1050px, 88%);
  margin: 0 auto;
  padding: 80px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.about-values article {
  padding: 25px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: white;
}

.about-values article > span {
  color: #8ba92c;
  font-size: 11px;
  font-weight: 700;
}

.about-values h2 {
  font-family: "Manrope", sans-serif;
  font-size: 19px;
}

.about-values p {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.9;
}

.about-cta {
  padding: 60px 20px;
  text-align: center;
  background: #f0f2e9;
}

.about-cta h2 {
  font-family: "Manrope", sans-serif;
  font-size: 30px;
}

.about-cta p {
  color: var(--muted);
  font-size: 13px;
  margin-bottom: 25px;
}

.simple-footer {
  padding: 25px;
  text-align: center;
  color: var(--muted);
  font-size: 11px;
}

/* Dashboard */

.dashboard-layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 245px minmax(0, 1fr);
  background: #f8f9f6;
}

.dashboard-sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  background: white;
  border-right: 1px solid var(--line);
}

.dashboard-brand {
  margin-bottom: 50px;
}

.sidebar-label {
  margin: 0 0 17px 10px;
  color: #9b9d95;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
  padding: 13px;
  color: #6d7067;
  border-radius: 8px;
  font-size: 12px;
}

.sidebar-link > span {
  width: 20px;
  text-align: center;
  font-size: 15px;
}

.sidebar-link.active {
  background: #f0f4e5;
  color: #425b20;
  font-weight: 700;
}

.sidebar-bottom {
  margin-top: auto;
  padding-top: 22px;
  border-top: 1px solid var(--line);
  display: flex;
  align-items: center;
  gap: 11px;
}

.profile-avatar {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  background: var(--accent);
  border-radius: 10px;
  font-weight: 800;
}

.sidebar-bottom strong,
.sidebar-bottom span {
  display: block;
}

.sidebar-bottom strong {
  font-size: 11px;
}

.sidebar-bottom span {
  margin-top: 5px;
  color: var(--muted);
  font-size: 10px;
}

.dashboard-main {
  width: 100%;
  max-width: 1500px;
  padding: 35px;
  min-width: 0;
  margin: 0 auto;
}

.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
}

.dashboard-header h1 {
  margin: 12px 0 7px;
  font-family: "Manrope", sans-serif;
  font-size: 31px;
  letter-spacing: -1px;
}

.dashboard-header p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
}

.dashboard-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 27px;
  border: 1px solid #e1e6d3;
  border-radius: 12px;
  background: #f0f3e6;
}

.dashboard-banner > div:first-child > span {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #78854f;
}

.dashboard-banner h2 {
  font-family: "Manrope", sans-serif;
  font-size: 22px;
  letter-spacing: -0.6px;
  margin: 12px 0;
}

.dashboard-banner p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

.banner-symbol {
  width: 75px;
  height: 75px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--accent);
  font-size: 40px;
}

.stats-grid {
  margin: 22px 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 17px;
}

.stat-card {
  padding: 22px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 11px;
}

.stat-card > span {
  color: var(--muted);
  font-size: 11px;
}

.stat-card > strong {
  display: block;
  margin: 15px 0 8px;
  font-family: "Manrope", sans-serif;
  font-size: 33px;
  letter-spacing: -1px;
}

.stat-card > small {
  color: #92958b;
  font-size: 10px;
}

.requests-panel {
  background: white;
  border: 1px solid var(--line);
  border-radius: 11px;
  overflow: hidden;
}

.requests-heading {
  padding: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid var(--line);
}

.requests-heading h2 {
  margin: 0 0 8px;
  font-family: "Manrope", sans-serif;
  font-size: 17px;
}

.requests-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.7;
}

.refresh-button {
  flex-shrink: 0;
  padding: 10px 13px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 7px;
  font-size: 10px;
  font-weight: 700;
}

.table-scroll {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
}

th {
  padding: 15px 18px;
  text-align: left;
  background: #fcfcfa;
  color: #8a8d83;
  font-size: 9px;
  letter-spacing: 0.8px;
}

td {
  padding: 18px;
  border-top: 1px solid #f0f0eb;
  font-size: 11px;
  color: #565950;
}

td strong,
td small {
  display: block;
}

td strong {
  color: var(--ink);
}

td small {
  margin-top: 6px;
  color: #999b93;
  font-size: 9px;
}

.status-pill {
  display: inline-block;
  padding: 6px 9px;
  border-radius: 20px;
  font-size: 9px;
  font-weight: 700;
}

.status-pending {
  background: #fff3d9;
  color: #986c18;
}

.status-completed {
  background: #e8f4e2;
  color: #46752d;
}

.dashboard-empty {
  padding: 50px 20px;
  text-align: center;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.dashboard-empty > span {
  font-size: 30px;
}

.dashboard-empty h3 {
  color: var(--ink);
  font-size: 15px;
}

.dashboard-empty p {
  max-width: 330px;
  margin: 0 auto 18px;
}

.dashboard-error {
  margin: 15px;
  color: #a83b30;
  font-size: 12px;
}

.dashboard-disclaimer {
  margin-top: 20px;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.7;
}

/* Responsive */

@media (max-width: 950px) {
  .hero {
    gap: 35px;
  }

  .hero-visual {
    min-height: 350px;
  }

  .visual-graphic {
    height: 220px;
  }

  .circle-three {
    width: 245px;
    height: 245px;
  }

  .circle-two {
    width: 185px;
    height: 185px;
  }

  .process-inner,
  .demo-section {
    gap: 45px;
  }

  .dashboard-layout {
    grid-template-columns: 195px minmax(0, 1fr);
  }

  .dashboard-main {
    padding: 25px;
  }

  .dashboard-sidebar {
    padding: 25px 13px;
  }

  .stats-grid {
    gap: 10px;
  }

  .stat-card {
    padding: 16px;
  }
}

@media (max-width: 700px) {
  .container {
    width: 90%;
  }

  .nav {
    height: 67px;
    gap: 10px;
  }

  .brand {
    font-size: 22px;
  }

  .nav-links {
    display: none;
  }

  .nav-cta {
    padding: 11px 12px;
    font-size: 10px;
  }

  .hero {
    padding-top: 55px;
    padding-bottom: 55px;
    grid-template-columns: 1fr;
    gap: 38px;
  }

  .hero h1 {
    font-size: clamp(45px, 11vw, 64px);
    letter-spacing: -3px;
  }

  .hero-description {
    font-size: 13px;
  }

  .hero-visual {
    min-height: 350px;
  }

  .visual-graphic {
    height: 225px;
  }

  .trust-inner {
    padding: 20px 0;
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }

  .trust-items {
    width: 100%;
    flex-wrap: wrap;
    gap: 12px 22px;
  }

  .section {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 25px;
  }

  .section-heading h2,
  .process-heading h2,
  .demo-copy h2 {
    font-size: 38px;
    letter-spacing: -2px;
  }

  .section-intro {
    font-size: 12px;
  }

  .service-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .service-card {
    padding: 22px;
  }

  .service-card h3 {
    margin-top: 25px;
  }

  .service-card > p {
    min-height: auto;
  }

  .process-inner,
  .demo-section {
    padding-top: 65px;
    padding-bottom: 65px;
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .process-item {
    gap: 18px;
  }

  .demo-form {
    padding: 22px;
  }

  .footer-main {
    padding-top: 40px;
    grid-template-columns: 1fr 1fr;
    gap: 35px 20px;
  }

  .footer-main > div:first-child {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
  }

  .about-hero {
    padding: 70px 6%;
  }

  .about-hero h1 {
    font-size: 43px;
    letter-spacing: -2px;
  }

  .about-hero > p {
    font-size: 12px;
  }

  .about-values {
    padding: 45px 0;
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .dashboard-layout {
    display: block;
  }

  .dashboard-sidebar {
    position: static;
    width: 100%;
    height: auto;
    padding: 15px 5%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .dashboard-brand {
    margin: 0;
  }

  .sidebar-label,
  .sidebar-bottom {
    display: none;
  }

  .sidebar-link {
    margin: 0;
    padding: 10px 8px;
    gap: 5px;
    font-size: 10px;
  }

  .sidebar-link > span {
    display: none;
  }

  .dashboard-main {
    padding: 25px 5%;
  }

  .dashboard-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .dashboard-header h1 {
    font-size: 27px;
  }

  .dashboard-banner {
    padding: 20px;
  }

  .dashboard-banner h2 {
    font-size: 19px;
    line-height: 1.5;
  }

  .banner-symbol {
    width: 48px;
    height: 48px;
    font-size: 25px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .stat-card {
    padding: 19px;
  }

  .stat-card > strong {
    font-size: 29px;
  }

  .requests-heading {
    align-items: flex-start;
    padding: 18px;
  }

  .requests-heading h2 {
    font-size: 15px;
  }

  .refresh-button {
    padding: 9px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}










/* ============================================
   NEXA — FINAL FULL PILL BUTTON DESIGN
   100% rounded + perfectly centered text
============================================ */

/* Apply full pill shape to all buttons */
.button,
.button-dark,
.nav-cta,
.submit-button,
.refresh-button,
.about-cta .button,
.dashboard-header .button {
  display: inline-flex !important;

  align-items: center !important;
  justify-content: center !important;

  text-align: center !important;
  text-indent: 0 !important;

  border-radius: 9999px !important;

  min-height: 48px;
  padding: 14px 28px !important;

  line-height: 1.2 !important;
  white-space: nowrap;

  box-sizing: border-box;
  gap: 0 !important;
}

/* Full-width demo form button */
.submit-button {
  display: flex !important;
  width: 100% !important;

  align-items: center !important;
  justify-content: center !important;

  text-align: center !important;
  border-radius: 9999px !important;
}

/* Remove arrows/icons inside buttons */
.button > span,
.nav-cta > span,
.submit-button > span,
.refresh-button > span,
.about-cta .button > span,
.dashboard-header .button > span {
  display: none !important;
}

/* Prevent pseudo-elements from affecting button layout */
.button::before,
.button::after,
.nav-cta::before,
.nav-cta::after,
.submit-button::before,
.submit-button::after,
.refresh-button::before,
.refresh-button::after {
  pointer-events: none;
}

/* Keep button labels centered */
.button,
.button-dark,
.nav-cta,
.submit-button,
.refresh-button {
  position: relative;
  text-indent: 0 !important;
}

/* Mobile button styling */
@media (max-width: 600px) {
  .button,
  .button-dark,
  .nav-cta,
  .submit-button,
  .refresh-button,
  .about-cta .button,
  .dashboard-header .button {
    min-height: 46px;
    padding: 13px 22px !important;
    border-radius: 9999px !important;
  }

  .submit-button {
    width: 100% !important;
  }
}

/* =====================================================
   FIXED MOBILE BOTTOM NAVIGATION — FINAL OVERRIDES
   Desktop: hidden. Mobile: fixed to the viewport bottom.
===================================================== */

.app-shell { min-height: 100vh; }
.mobile-bottom-nav { display: none; }

@media screen and (max-width: 768px) {
  .mobile-bottom-nav {
    display: block !important;
    position: fixed !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    max-width: none !important;
    height: auto !important;
    margin: 0 !important;
    padding: 7px 8px calc(7px + env(safe-area-inset-bottom, 0px)) !important;
    box-sizing: border-box !important;
    background: rgba(255,255,255,.98) !important;
    border-top: 1px solid #e5e7df !important;
    box-shadow: 0 -5px 24px rgba(20,25,15,.09) !important;
    z-index: 2147483000 !important;
    transform: none !important;
    isolation: isolate;
  }

  .mobile-bottom-nav__inner {
    display: grid !important;
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    align-items: center !important;
    justify-items: stretch !important;
    width: 100% !important;
    max-width: 520px;
    margin: 0 auto !important;
    padding: 0 !important;
    box-sizing: border-box;
  }

  .mobile-bottom-nav__item {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 4px !important;
    min-width: 0 !important;
    min-height: 48px !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 4px 2px !important;
    box-sizing: border-box !important;
    border: 0 !important;
    border-radius: 11px !important;
    background: transparent;
    color: #777b70 !important;
    text-align: center !important;
    text-decoration: none !important;
    font-family: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  .mobile-bottom-nav__icon {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 24px !important;
    height: 24px !important;
    flex: 0 0 24px !important;
    margin: 0 !important;
  }

  .mobile-bottom-nav__icon svg {
    display: block !important;
    width: 22px !important;
    height: 22px !important;
    flex-shrink: 0;
  }

  .mobile-bottom-nav__label {
    display: block !important;
    width: 100% !important;
    overflow: hidden;
    color: inherit !important;
    font-size: 10px !important;
    font-weight: 600 !important;
    line-height: 1.25 !important;
    text-align: center !important;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mobile-bottom-nav__item.is-active {
    color: #405522 !important;
    background: #f0f4e6 !important;
  }
  .mobile-bottom-nav__item.is-active .mobile-bottom-nav__label { font-weight: 800 !important; }
  .mobile-bottom-nav__item:focus-visible { outline: 2px solid #82945d; outline-offset: -2px; }

  /* Reserve room so page content is not covered by the fixed bar. */
  body { padding-bottom: 0 !important; }
  .app-shell { padding-bottom: calc(78px + env(safe-area-inset-bottom, 0px)); }
  .dashboard-layout { padding-bottom: 0 !important; }
  .dashboard-main { padding-bottom: 28px; }
  #overview, #about { scroll-margin-top: 24px; }
}

@media screen and (max-width: 360px) {
  .mobile-bottom-nav { padding-left: 4px !important; padding-right: 4px !important; }
  .mobile-bottom-nav__item { gap: 3px !important; padding-left: 1px !important; padding-right: 1px !important; }
  .mobile-bottom-nav__label { font-size: 9px !important; }
}

@media screen and (min-width: 769px) {
  .mobile-bottom-nav { display: none !important; }
}

.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.dashboard-filter select {
  min-height: 38px;
  padding: 8px 12px;
  border: 1px solid var(--line, #e5e7df);
  border-radius: 8px;
  background: #fff;
  color: var(--ink, #20221f);
  font: inherit;
  font-size: 11px;
}

.request-message { max-width: 260px; white-space: normal; overflow-wrap: anywhere; }

@media (max-width: 700px) {
  .dashboard-layout { display: block !important; }
  .dashboard-sidebar { display: none !important; }
  .dashboard-main { padding: 24px 16px !important; }
  .dashboard-header { align-items: flex-start; flex-direction: column; }
  .dashboard-banner { padding: 20px !important; }
  .stats-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; gap: 8px !important; }
  .stat-card { padding: 12px 9px !important; min-width: 0; }
  .stat-card > strong { font-size: 25px !important; }
  .stat-card > span { font-size: 10px !important; }
  .stat-card > small { font-size: 9px !important; }
  .requests-heading { align-items: flex-start; flex-direction: column; padding: 17px !important; }
}

/* =====================================================
   NEXA RESPONSIVE NAVIGATION — GLASS / PILL UPDATE
   Desktop: collapsible glass sidebar.
   Mobile: compact fixed liquid-glass bottom bar.
===================================================== */

/* Desktop drawer */
.desktop-nav-drawer {
  display: none;
}

@media (min-width: 769px) {
  .desktop-nav-drawer {
    display: flex;
    position: fixed;
    z-index: 10000;
    top: 18px;
    left: 18px;
    bottom: 18px;
    width: 248px;
    flex-direction: column;
    padding: 17px 12px 13px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.76);
    border-radius: 24px;
    background: rgba(250, 251, 246, 0.78);
    box-shadow: 0 18px 55px rgba(36, 43, 25, 0.10), inset 0 1px 0 rgba(255,255,255,.9);
    -webkit-backdrop-filter: blur(28px) saturate(1.35);
    backdrop-filter: blur(28px) saturate(1.35);
    transition: width 420ms cubic-bezier(.22, 1, .36, 1), padding 420ms cubic-bezier(.22, 1, .36, 1), background 250ms ease;
  }

  .desktop-nav-drawer.is-collapsed {
    width: 76px;
    padding-left: 9px;
    padding-right: 9px;
  }

  body.desktop-nav-expanded .app-shell {
    padding-left: 284px;
    transition: padding-left 420ms cubic-bezier(.22, 1, .36, 1);
  }

  body.desktop-nav-collapsed .app-shell {
    padding-left: 110px;
    transition: padding-left 420ms cubic-bezier(.22, 1, .36, 1);
  }

  .desktop-nav-brand-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 42px;
    gap: 8px;
    margin-bottom: 31px;
  }

  .desktop-nav-brand {
    display: flex;
    align-items: center;
    min-width: 0;
    gap: 10px;
    overflow: hidden;
    color: var(--ink, #20221f);
  }

  .desktop-nav-brand-mark {
    display: grid;
    place-items: center;
    width: 37px;
    height: 37px;
    flex: 0 0 37px;
    border-radius: 13px;
    background: var(--accent, #d5f36a);
    color: #20221f;
    font-family: Manrope, sans-serif;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: -1px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.7);
  }

  .desktop-nav-brand-name {
    opacity: 1;
    transform: translateX(0);
    font-family: Manrope, sans-serif;
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -1.2px;
    transition: opacity 180ms ease, transform 300ms cubic-bezier(.22, 1, .36, 1);
  }

  .desktop-nav-toggle {
    display: grid;
    place-items: center;
    width: 31px;
    height: 31px;
    flex: 0 0 31px;
    padding: 0;
    border: 1px solid rgba(40, 45, 31, .08);
    border-radius: 50%;
    background: rgba(255,255,255,.76);
    color: #51564a;
    cursor: pointer;
    transition: transform 320ms cubic-bezier(.22, 1, .36, 1), background 180ms ease, box-shadow 180ms ease;
  }

  .desktop-nav-toggle:hover {
    background: #fff;
    box-shadow: 0 4px 13px rgba(30,35,20,.10);
  }

  .desktop-nav-toggle:active { transform: scale(.91); }
  .desktop-nav-toggle svg { width: 16px; height: 16px; }

  .desktop-nav-caption {
    padding: 0 12px;
    margin-bottom: 12px;
    color: #9a9d91;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1.7px;
    white-space: nowrap;
    transition: opacity 160ms ease;
  }

  .desktop-nav-list {
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
  }

  .desktop-nav-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 13px;
    width: 100%;
    min-height: 49px;
    padding: 0 13px;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 15px;
    color: #777b70;
    white-space: nowrap;
    transition: color 220ms ease, background 220ms ease, border-color 220ms ease, transform 220ms ease, padding 320ms cubic-bezier(.22, 1, .36, 1);
  }

  .desktop-nav-item:hover {
    color: #303529;
    background: rgba(255,255,255,.56);
  }

  .desktop-nav-item:active { transform: scale(.975); }

  .desktop-nav-item.is-active {
    color: #34441e;
    border-color: rgba(165, 191, 91, .22);
    background: linear-gradient(135deg, rgba(222, 244, 162, .86), rgba(241, 248, 222, .82));
    box-shadow: inset 0 1px 0 rgba(255,255,255,.85), 0 5px 14px rgba(111, 135, 54, .08);
  }

  .desktop-nav-item-icon {
    display: grid;
    place-items: center;
    width: 23px;
    height: 23px;
    flex: 0 0 23px;
  }

  .desktop-nav-item-icon svg { width: 22px; height: 22px; }

  .desktop-nav-item-label {
    flex: 1;
    opacity: 1;
    transform: translateX(0);
    font-size: 12px;
    font-weight: 700;
    transition: opacity 170ms ease, transform 320ms cubic-bezier(.22, 1, .36, 1);
  }

  .desktop-nav-active-dot {
    width: 5px;
    height: 5px;
    flex: 0 0 5px;
    border-radius: 50%;
    background: #718d34;
    box-shadow: 0 0 0 3px rgba(113,141,52,.10);
  }

  .desktop-nav-footer {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: auto;
    padding: 13px 10px 5px;
    border-top: 1px solid rgba(36,43,25,.07);
    color: #92968a;
    white-space: nowrap;
  }

  .desktop-nav-footer-dot {
    width: 7px;
    height: 7px;
    flex: 0 0 7px;
    border-radius: 50%;
    background: #a7c75a;
    box-shadow: 0 0 0 4px rgba(167,199,90,.13);
  }

  .desktop-nav-footer-text { font-size: 10px; font-weight: 600; transition: opacity 150ms ease; }

  .desktop-nav-drawer.is-collapsed .desktop-nav-brand-row { flex-direction: column; gap: 13px; margin-bottom: 28px; }
  .desktop-nav-drawer.is-collapsed .desktop-nav-brand-name,
  .desktop-nav-drawer.is-collapsed .desktop-nav-caption,
  .desktop-nav-drawer.is-collapsed .desktop-nav-item-label,
  .desktop-nav-drawer.is-collapsed .desktop-nav-active-dot,
  .desktop-nav-drawer.is-collapsed .desktop-nav-footer-text { display: none; }
  .desktop-nav-drawer.is-collapsed .desktop-nav-brand { justify-content: center; }
  .desktop-nav-drawer.is-collapsed .desktop-nav-toggle { transform: rotate(180deg); }
  .desktop-nav-drawer.is-collapsed .desktop-nav-item { justify-content: center; gap: 0; padding: 0; }
  .desktop-nav-drawer.is-collapsed .desktop-nav-footer { justify-content: center; padding-left: 0; padding-right: 0; }
}

/* Mobile liquid-glass pill bar */
@media (max-width: 768px) {
  .desktop-nav-drawer { display: none !important; }
  body.desktop-nav-expanded .app-shell,
  body.desktop-nav-collapsed .app-shell { padding-left: 0 !important; }

  .mobile-bottom-nav {
    display: block !important;
    position: fixed !important;
    z-index: 2147483000 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 8px 12px calc(8px + env(safe-area-inset-bottom, 0px)) !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    isolation: isolate;
    transform: none !important;
    pointer-events: none;
  }

  .mobile-bottom-nav__inner {
    --pill-inset: 4px;
    position: relative;
    display: grid !important;
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    align-items: stretch !important;
    width: min(100%, 480px) !important;
    min-height: 62px;
    margin: 0 auto !important;
    padding: 4px !important;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.78);
    border-radius: 25px;
    background: rgba(248, 250, 243, .76);
    box-shadow: 0 8px 28px rgba(31, 39, 22, .13), inset 0 1px 0 rgba(255,255,255,.95), inset 0 -1px 0 rgba(255,255,255,.35);
    -webkit-backdrop-filter: blur(28px) saturate(1.7);
    backdrop-filter: blur(28px) saturate(1.7);
    touch-action: pan-y;
    pointer-events: auto;
  }

  .mobile-bottom-nav__indicator {
    position: absolute;
    z-index: 0;
    top: 4px;
    bottom: 4px;
    left: 4px;
    width: calc((100% - 8px) / 4);
    border: 1px solid rgba(255,255,255,.96);
    border-radius: 20px;
    background: linear-gradient(145deg, rgba(255,255,255,.94), rgba(244, 249, 229, .90));
    box-shadow: 0 3px 10px rgba(54, 67, 35, .10), inset 0 1px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(191, 210, 150, .14);
    transform: translateX(calc(var(--active-index, 0) * 100%));
    transition: transform 420ms cubic-bezier(.22, 1, .36, 1), top 220ms ease, bottom 220ms ease, border-radius 220ms ease;
    pointer-events: none;
  }

  .mobile-bottom-nav__inner.is-dragging .mobile-bottom-nav__indicator {
    top: 3px;
    bottom: 3px;
    border-radius: 19px;
    transition: transform 100ms linear, top 100ms ease, bottom 100ms ease;
    box-shadow: 0 5px 15px rgba(54,67,35,.14), inset 0 1px 0 rgba(255,255,255,1);
  }

  .mobile-bottom-nav__item {
    position: relative;
    z-index: 1;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 3px !important;
    width: 100% !important;
    min-width: 0 !important;
    min-height: 52px !important;
    margin: 0 !important;
    padding: 4px 1px !important;
    border: 0 !important;
    border-radius: 18px !important;
    background: transparent !important;
    color: #7b8172 !important;
    text-align: center !important;
    text-decoration: none !important;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: color 220ms ease, transform 220ms ease;
  }

  .mobile-bottom-nav__item.is-active,
  .mobile-bottom-nav__item.is-indicator-target { color: #35451e !important; }
  .mobile-bottom-nav__item:active { transform: scale(.94); }
  .mobile-bottom-nav__item.is-active:active { background: transparent !important; }

  .mobile-bottom-nav__icon {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 23px !important;
    height: 23px !important;
    flex: 0 0 23px !important;
    margin: 0 !important;
  }

  .mobile-bottom-nav__icon svg { display: block !important; width: 21px !important; height: 21px !important; flex-shrink: 0; }
  .mobile-bottom-nav__label {
    display: block !important;
    width: 100% !important;
    overflow: hidden;
    color: inherit !important;
    font-size: 9px !important;
    font-weight: 650 !important;
    line-height: 1.2 !important;
    text-align: center !important;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mobile-bottom-nav__item.is-active .mobile-bottom-nav__label,
  .mobile-bottom-nav__item.is-indicator-target .mobile-bottom-nav__label { font-weight: 800 !important; }

  .app-shell { padding-bottom: calc(88px + env(safe-area-inset-bottom, 0px)) !important; }
  .dashboard-layout { padding-bottom: 0 !important; }
  .dashboard-main { padding-bottom: 28px; }
  #overview, #about { scroll-margin-top: 24px; }
}

@media (max-width: 360px) {
  .mobile-bottom-nav { padding-left: 7px !important; padding-right: 7px !important; }
  .mobile-bottom-nav__inner { min-height: 59px; border-radius: 23px; }
  .mobile-bottom-nav__item { min-height: 49px !important; gap: 2px !important; }
  .mobile-bottom-nav__label { font-size: 8px !important; }
  .mobile-bottom-nav__icon svg { width: 20px !important; height: 20px !important; }
}

@media (prefers-reduced-motion: reduce) {
  .desktop-nav-drawer,
  .desktop-nav-brand-name,
  .desktop-nav-item,
  .desktop-nav-item-label,
  .mobile-bottom-nav__indicator,
  .mobile-bottom-nav__item,
  .app-shell { transition-duration: .01ms !important; }
}

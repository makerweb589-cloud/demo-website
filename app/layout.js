import "./globals.css";
import MobileBottomNav from "../components/MobileBottomNav";
import AppProviders from "../components/AppProviders";
import EdgeGlowEffect from "../components/EdgeGlowEffect";

const webLogo = process.env.WEB_LOGO || "";

export const metadata = {
  title: "Nexa News — The world, in focus",
  description: "A clean, fast news reader for the latest headlines, stories, and trending topics.",
  icons: webLogo ? { icon: webLogo, shortcut: webLogo, apple: webLogo } : undefined,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProviders logoUrl={webLogo}>
          <div className="app-shell">{children}</div>
          <EdgeGlowEffect />
          <MobileBottomNav />
        </AppProviders>
      </body>
    </html>
  );
}

import "./globals.css";
import MobileBottomNav from "../components/MobileBottomNav";
import AppProviders from "../components/AppProviders";
import EdgeGlowEffect from "../components/EdgeGlowEffect";

const webLogo = process.env.WEB_LOGO || "";

export const metadata = {
  title: "Nexa",
  description: "Thoughtful strategies and modern digital solutions for business growth.",
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

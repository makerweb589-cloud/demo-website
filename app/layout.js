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

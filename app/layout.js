import "./globals.css";

export const metadata = {
  title: "Nexa — Business Solutions",
  description:
    "A modern business demo website with services, demo requests and dashboard."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

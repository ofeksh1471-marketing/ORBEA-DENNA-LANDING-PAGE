import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORBEA DENNA | יותר עוצמה. יותר טווח. יותר כיף.",
  description: "ORBEA Denna - אופני גראבל חשמליים לרכיבות ארוכות, חזקות ובעיקר מהנות.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Rubik:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

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
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {

    if (window.parent === window)
        return;

    let lastHeight = 0;
    let timer = null;

    function getHeight() {
        return Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight
        );
    }

    function sendHeight(force = false) {

        clearTimeout(timer);

        timer = setTimeout(function () {

            const height = getHeight();

            if (height < 100)
                return;

            if (!force && height === lastHeight)
                return;

            lastHeight = height;

            window.parent.postMessage({
                type: "update-iframe-height",
                height: height
            }, "*");

        }, 50);
    }

    sendHeight(true);

    window.addEventListener("load", () => sendHeight(true));
    window.addEventListener("resize", () => sendHeight());

    const observer = new ResizeObserver(() => {
        sendHeight();
    });

    if (document.body) {
        observer.observe(document.body);
    } else {
        window.addEventListener("DOMContentLoaded", function () {
            observer.observe(document.body);
        });
    }

    setTimeout(sendHeight, 200);
    setTimeout(sendHeight, 1000);
    setTimeout(sendHeight, 3000);

})();`,
          }}
        />
      </body>
    </html>
  );
}

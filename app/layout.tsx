import type { Metadata } from "next";
import { Raleway, Titillium_Web } from "next/font/google";
import classNames from "classnames";
import "./globals.css";
import "./styles.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "aos/dist/aos.css";
import CustomProvider from "_shared/provider";
import ScrollToTop from "components/common/scrollToTop";
import WhatsAppCTA from "components/common/whatsAppCTA";

export const metadata: Metadata = {
  title: "Noyr - Premium Contemporary Fashion",
  description:
    "Discover Noyr's premium collection of contemporary fashion. Shop our curated selection of shirts, trousers, and jeans designed for modern style and comfort.",
  keywords:
    "Noyr, fashion, clothing, shirts, trousers, jeans, contemporary style, premium fashion",
  openGraph: {
    title: "Noyr - Premium Contemporary Fashion",
    description:
      "Discover Noyr's premium collection of contemporary fashion. Shop our curated selection of shirts, trousers, and jeans designed for modern style and comfort.",
    url: "https://noyr.store",
    siteName: "Noyr Store",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Noyr Store - Premium Contemporary Fashion",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noyr - Premium Contemporary Fashion",
    description:
      "Discover Noyr's premium collection of contemporary fashion. Shop our curated selection of shirts, trousers, and jeans designed for modern style and comfort.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://noyr.store",
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  display: "swap",
  subsets: ["latin"],
});
const titilliumWeb = Titillium_Web({
  variable: "--font-titillium",
  display: "swap",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={classNames(raleway.variable, titilliumWeb.variable)}
    >
      <head>
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2730615080467623');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>
        {/* Meta Pixel NoScript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2730615080467623&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <CustomProvider>
          {children}
          <WhatsAppCTA />
          <ScrollToTop />
        </CustomProvider>
      </body>
    </html>
  );
}

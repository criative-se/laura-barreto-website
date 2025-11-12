import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const PlayfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
  display: "swap",
  style: ["italic", "normal"],
});

const montSerratSerif = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Laura Barreto | Estrategista digital",
  description:
    "Em 2 meses te ensino a se posicionar, construir sua reputação digital e vender mais com estratégia.",
  keywords: [
    "estratégia digial",
    "posicionamento digital",
    "reputação digital",
    "vender mais",
  ],
  openGraph: {
    locale: "pt-BR",
    type: "website",
    title:
      "Laura Barreto | Estrategista digital especialista em reputação e posicionamento",
    description:
      "Em 2 meses te ensino a se posicionar, construir sua reputação digital e vender mais com estratégia.",
    url: "https://laurabarretomkt.com.br",
    siteName:
      "Laura Barreto | Estrategista digital especialista em reputação e posicionamento",
    phoneNumbers: "+55 (48) 98859-3834",
    images: [
      {
        url: "https://laurabarretomkt.com.br/laura-barreto.jpg",
        width: 3648,
        height: 5472,
        alt: "Laura Barreto | Estrategista digital especialista em reputação e posicionamento",
      },
    ],
    countryName: "Brasil",
  },
  metadataBase: new URL("https://laurabarretomkt.com.br"),
  alternates: {
    canonical: "/",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link href="https://vitals.vercel-insights.com" rel="dns-prefetch" />

        <link
          as="image"
          fetchPriority="high"
          href="/laura-barreto.avif"
          rel="preload"
          type="image/avif"
        />
      </Head>

      <body
        className={`${PlayfairDisplay.variable} ${montSerratSerif.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

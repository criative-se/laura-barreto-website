import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const PlayfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ['400', '700'],
  preload: true,
  style: ["italic", "normal"]
});

const montSerratSerif = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
  weight: ['400', '500'],
  preload: true,
});

export const metadata: Metadata = {
  title: "Laura Barreto | Estrategista digital especialista em reputação e posicionamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PlayfairDisplay.variable} ${montSerratSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import { Noto_Sans_JP, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const notoSansJP = Noto_Sans_JP({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata = {
  title: "AI Sensei",
  description: "Your 24H AI Tutor for Learning Japanese",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${notoSansJP.variable}`}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

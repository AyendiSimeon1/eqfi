import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EQFI Invest | Wealth & Investment Management",
  description: "EQFI Invest - Professional wealth management, investment strategies, and financial planning for individuals and institutions.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#003366",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/eqfi-logo.jpg" type="image/jpeg" />
        <title>EQFI Invest | Wealth & Investment Management</title>
        <meta name="description" content="EQFI Invest - Professional wealth management, investment strategies, and financial planning for individuals and institutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#003366" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="EQFI Invest" />
      </head>
      <body
        className={`antialiased font-segoe`}
      >
        {children}
      </body>
    </html>
  );
}

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/eqfi-logo.jpg" type="image/jpeg" />
        <title>EQFI Invest | Wealth & Investment Management</title>
        <meta name="description" content="EQFI Invest - Professional wealth management, investment strategies, and financial planning for individuals and institutions." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

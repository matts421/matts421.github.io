import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components/Navigation";

import "./globals.css";
import "./globalicons.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Matthew Smith",
  description: "Matthew's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

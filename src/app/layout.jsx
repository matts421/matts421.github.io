import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components/Navigation";
import KeyboardNavigator from "@/components/KeyboardNavigator";

import "./globals.css";
import "./code-themes.css";

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
      <KeyboardNavigator />
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

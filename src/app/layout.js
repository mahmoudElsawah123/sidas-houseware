import { Cairo } from "next/font/google";
import "./globals.css";
import TopAds from "./component/TopAds.js/TopAds";
import Navbar, { NavbarLayout } from "./component/navbar/Navbar";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display : 'swap'
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body
        className={`${cairo.variable} antialiased`}
      >
            <nav><TopAds/></nav>
           <nav  className="sticky top-0 start-0 w-full z-20"><NavbarLayout/></nav>
        {children}
      </body>
    </html>
  );
}

import { Kanit as KanitFont } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/Footer";

const kanit = KanitFont({
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className={kanit.className}>
      <body className={kanit.className}>
        <Navbar />
        {children}
        <div>
        <Footer/>
        </div>
      </body>
    </html>
  );
}

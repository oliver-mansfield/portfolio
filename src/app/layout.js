import { Inter, EB_Garamond } from "next/font/google";

import "./globals.css";
import HeaderBar from "@/components/HeaderBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond"
});




export const metadata = {
  title: "Oliver Mansfield Digital",
  description: "Portfolio of Oliver Mansfield Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} ${inter.variable} bg-grayDarker`}>
        <div className="p-4">
          <HeaderBar />
          {children}
        </div>
      </body>
    </html>
  );
}

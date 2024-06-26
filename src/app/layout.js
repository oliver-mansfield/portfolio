import { Inter, EB_Garamond, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"


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
// const Jacquard = Julee({
//   subsets: ["latin"],
//   variable: "--font-jacquard_12"
// });

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito"
});



export const metadata = {
  title: "Oliver Mansfield Digital",
  description: "Portfolio of Oliver Mansfield Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} ${inter.variable} ${nunito.variable}   bg-grayDark p-2 md:p-4`}>
        <div>
          <HeaderBar />
          <Analytics />
          {children}
        </div>
      </body>
    </html>
  );
}

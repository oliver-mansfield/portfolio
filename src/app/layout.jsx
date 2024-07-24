import { Inter, EB_Garamond, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import HeaderBar from "@/components/HeaderBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});
// const Jacquard = Julee({
//   subsets: ["latin"],
//   variable: "--font-jacquard_12"
// });

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Oliver Mansfield Digital",
  description: "Portfolio of Oliver Mansfield Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${inter.variable} ${nunito.variable} `}
      >
        <div>
          <HeaderBar />
          <div className="bg-grayDark pb-2 pl-2 pr-2 md:pb-4 md:pl-4 md:pr-4">
            <Analytics />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

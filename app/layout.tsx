import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google"; // Fonts imported from google

/* next/font/google is google API
Instead of importing fonts via <link> tags in HTML, you can import them directly in code
TypeScript understands this import because it's fully typed by Next.js.
*/
import { Outfit, Ovo } from "next/font/google"; // I prefer these
import "./globals.css";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

// const Outfit = Outfit({ Error
const outfit = Outfit({
  // Calling Outfit() function to figure out how you want the font loaded
  subsets: ["latin"], // subsets	Limits characters to reduce file size
  weight: ["400", "500", "600", "700"], // How thick/bold the text appears
  // variable: "--font-outfit", // this makes it a CSS variable
});

/* The Outfit() basically returns the following to outfit
const outfit:{
  className: string;
  variable: string;
  style: {};
}

*/

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"], // is not able to take 500-700 and others
  // variable: "--font-ovo", // this makes it a CSS variable
});

// Now change it in rootlayout

export const metadata: Metadata = {
  title: "Laxman Katneni Portfolio",
  description: "Laxman Katneni Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Helps screen readers and SEO */}
      {/* This was inside body as part of the template className={`${geistSans.variable} ${geistMono.variable} antialiased`}*/}
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-[#11001F] dark:text-white`}
      >
        {/* Anything inside {} is JS code
        Use Backticks as this should be a template string 
        and inside back ticks, use ${} to interpolate JS values
        antialiased is a Tailwind utility that smooths text edges
        */}
        {children}
        {/*{children}	This is a special React prop that inserts all nested content into this layout*/}
      </body>
    </html>
  );
}

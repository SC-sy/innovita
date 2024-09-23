import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import AuthOverlay from "./components/AuthOverlay";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Innovita",
  description: "Innovita",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthOverlay/> {children} </body>
    </html>
  );
}

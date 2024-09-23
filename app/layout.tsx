import type { Metadata } from "next";

import "./globals.css";
import AuthOverlay from "./components/AuthOverlay";



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

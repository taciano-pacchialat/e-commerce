import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/navbar";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className=" h-screen">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

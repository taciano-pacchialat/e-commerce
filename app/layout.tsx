import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/navbar";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-screen w-screen">
      <body className="w-full h-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

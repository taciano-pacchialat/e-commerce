"use client";

import { ReactNode, useState } from "react";
import "./globals.css";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en" className="h-screen w-screen">
      <body className="w-full h-full">
        {isOpen && <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} />}
        {children}
      </body>
    </html>
  );
}

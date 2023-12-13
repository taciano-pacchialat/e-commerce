import Link from "next/link";
import { ReactNode } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import logoPlaceholder from "@/images/logo-Placeholder.jpg";
import Image from "next/image";
import { navlinks } from "@/constants/navlinks";
import { link } from "fs";

interface NavbarProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

const Navbar = ({ isOpen, toggleNavbar }: NavbarProps) => {
  return (
    <nav
      className={`bg-lightbrown flex justify-between transition-all duration-500 ${
        isOpen ? "h-2/3" : "h-auto"
      }`}
    >
      <Image src={logoPlaceholder} alt="logo" className="w-20 h-20 pl-4 pt-1 pb-1"></Image>
      <i className="md:hidden text-xl pt-6 pr-4 pl-4 h-16 cursor-pointer" onClick={toggleNavbar}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </i>
      <ul
        className={`md:flex md:justify-evenly hidden  w-1/3 items-center text-lg transition-all duration-500 ${
          isOpen ? "right-0 " : "right-full"
        }`}
      >
        {navlinks.map((link) => (
          <li key={link.key}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface NavbarLinkProps {
  href: string;
  text: string;
}

export default Navbar;

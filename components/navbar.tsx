import { NavbarLinkProps } from "@/interfaces/navbarInterfaces";
import Link from "next/link";
import { ReactNode } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import logoPlaceholder from "@/images/logo-Placeholder.jpg";
import Image from "next/image";

interface NavbarProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, toggleNavbar }) => {
  return (
    <nav
      className={`bg-lightbrown w-screen transition-height duration-300 ${
        isOpen ? "h-4/5" : "h-28"
      }`}
    >
      <div className="flex flex-row justify-between">
        <Image src={logoPlaceholder} alt="logo" className="self-center w-24 pt-5 pl-7" />
        <i className="pr-5 curson-pointer text-2xl self-center" onClick={toggleNavbar}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </i>
      </div>
      <div
        className={`w-full h-full pl-10 pb-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="w-full h-full flex flex-col justify-evenly items-start pl-10">
          <NavbarLink {...{ props: { whereto: "/", text: "Efectos" } }} />
          <NavbarLink {...{ props: { whereto: "/", text: "Amplificadores" } }} />
          <NavbarLink {...{ props: { whereto: "/", text: "Guitarras" } }} />
          <NavbarLink {...{ props: { whereto: "/", text: "Sonido" } }} />
          <NavbarLink {...{ props: { whereto: "/", text: "Otros" } }} />
        </ul>
      </div>
    </nav>
  );
};

const NavbarLink = ({ props }: { props: NavbarLinkProps }) => {
  //TODO change the logo based on the state of the navbar
  //TODO make each link and arrow unify and love each other
  return (
    <li className="w-full flex flex-row justify-between items-center pr-14">
      <Link href={props.whereto} className="text-2xl cursor-pointer">
        {props.text}
      </Link>
      <i className="text-lg">
        <BsChevronRight />
      </i>
    </li>
  );
};

export default Navbar;

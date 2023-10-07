import { NavbarLinkProps } from "@/interfaces/navbarInterfaces";
import Link from "next/link";
import { ReactNode } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import logoPlaceholder from "@/images/logo-Placeholder.jpg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-lightbrown w-screen h-4/5 flex flex-col shadow-lg">
      <div className="flex flex-row justify-between">
        <Image src={logoPlaceholder} alt="logo" className="self-center w-24 pt-5 pl-7" />
        <NavbarIcon {...{ icon: <AiOutlineClose /> }} />
      </div>
      <div className="w-full h-full flex flex-col justify-evenly items-start pl-10">
        <NavbarLink {...{ props: { whereto: "/", text: "Efectos" } }} />
        <NavbarLink {...{ props: { whereto: "/", text: "Amplificadores" } }} />
        <NavbarLink {...{ props: { whereto: "/", text: "Guitarras" } }} />
        <NavbarLink {...{ props: { whereto: "/", text: "Sonido" } }} />
        <NavbarLink {...{ props: { whereto: "/", text: "Otros" } }} />
      </div>
    </nav>
  );
};

const NavbarIcon = ({ icon }: { icon: ReactNode }) => {
  return <i className="pr-5 curson-pointer text-2xl self-center">{icon}</i>;
};

const NavbarLink = ({ props }: { props: NavbarLinkProps }) => {
  return (
    <div className="w-full flex flex-row justify-between items-center pr-14">
      <Link href={props.whereto} className="text-2xl cursor-pointer">
        {props.text}
      </Link>
      <i className="text-lg">
        <BsChevronRight />
      </i>
    </div>
  );
};

export default Navbar;

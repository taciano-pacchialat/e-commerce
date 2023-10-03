import { NavbarElementProps } from "@/interfaces/navbarInterfaces";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed m-0 flex flex-row items-center justify-around bg-lightbrown w-screen h-80 shadow-lg">
      <NavbarElement {...{ props: { whereto: "/", text: "placeholder" } }} />
      <NavbarElement {...{ props: { whereto: "/", text: "placeholder" } }} />
      <NavbarElement {...{ props: { whereto: "/", text: "placeholder" } }} />
      <NavbarElement {...{ props: { whereto: "/", text: "placeholder" } }} />
      <NavbarElement {...{ props: { whereto: "/", text: "placeholder" } }} />
    </nav>
  );
};

const NavbarElement = ({ props }: { props: NavbarElementProps }) => {
  return (
    <Link href={props.whereto} className=" hover:underline">
      {props.text}
    </Link>
  );
};

export default Navbar;

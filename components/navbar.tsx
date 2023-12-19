import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import logoPlaceholder from "@/images/logo-Placeholder.jpg";
import Image from "next/image";
import { navlinks } from "@/constants/navlinks";
import { link } from "fs";
import { motion, AnimatePresence } from "framer-motion";
import { linkVariants, listVariants, navbarVariants } from "@/constants/motion";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleNavbar = () => {
    if (isOpen) {
      setIsAnimating(true);
      setIsOpen(false);
      setTimeout(() => {
        setIsAnimating(false);
      }, 700); // Adjust this value to match the duration of your animation
    } else {
      setIsOpen(true);
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate={isOpen ? "show" : "hidden"}
      transition={{ duration: 0.7, type: "spring" }}
      variants={navbarVariants}
      className={`bg-lightbrown flex flex-row justify-between`}
    >
      <Image
        src={logoPlaceholder}
        alt="logo"
        className="w-auto h-16 pl-4 pt-1 pb-1 order-1"
      ></Image>
      <i
        className={`md:hidden text-xl pt-6 pr-4 pl-4 h-16 cursor-pointer order-3`}
        onClick={toggleNavbar}
      >
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </i>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={listVariants}
            initial="hidden"
            exit="exit"
            animate={isOpen ? "show" : "hidden"}
            className={`flex md:flex-row flex-col justify-evenly w-1/3 items-center text-xl ${
              isOpen || isAnimating ? "order-2" : ""
            }`}
          >
            {navlinks.map((link) => (
              <motion.li key={link.key} variants={linkVariants}>
                <Link href={link.href}>{link.text}</Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

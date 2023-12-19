import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logoPlaceholder from "@/images/logo-Placeholder.jpg";
import Image from "next/image";
import { navlinks } from "@/constants/navlinks";
import { motion, AnimatePresence } from "framer-motion";
import { linkVariants, listVariants, navbarVariants } from "@/constants/motion";

const mediumScreenSize = 768;

function useIsMdScreen() {
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= mediumScreenSize);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= mediumScreenSize);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMdScreen;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMidScreen = useIsMdScreen();

  const toggleNavbar = () => {
    if (isOpen) {
      setIsAnimating(true);
      setIsOpen(false);
      setTimeout(() => {
        setIsAnimating(false);
      }, 700);
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
      className={`bg-lightbrown flex flex-row md:justify-center justify-between`}
    >
      <Link href="/" className="md:mr-[7rem]">
        <Image src={logoPlaceholder} alt="logo" className="w-16 h-16 p-1"></Image>
      </Link>

      <AnimatePresence>
        <i
          className={`md:hidden text-xl pt-6 pr-4 pl-4 h-16 cursor-pointer order-3 md:order-1`}
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65 }}
            >
              <AiOutlineClose />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65 }}
            >
              <AiOutlineMenu />
            </motion.div>
          )}
        </i>
      </AnimatePresence>

      {/* small screen links */}
      <AnimatePresence>
        {(isOpen || isAnimating) && !isMidScreen && (
          <motion.ul
            variants={listVariants}
            initial={"hidden"}
            exit="exit"
            animate={isOpen ? "show" : "hidden"}
            className={`flex flex-col justify-evenly w-1/3 items-center text-xl order-2`}
          >
            {navlinks.map((link) => (
              <motion.li key={link.key} variants={linkVariants}>
                <Link href={link.href}>{link.text}</Link>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* mid screen or larger links */}
        {isMidScreen && (
          <ul className="flex flex-row justify-evenly w-2/5 items-center text-xl order-2">
            {navlinks.map((link) => (
              <li key={link.key} className="mr-4 ml-4">
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

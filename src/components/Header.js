import React from "react";
import Navbar from "./Navbar";
import TypeWriter from "./TypeWriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { BiLogoGithub, BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header
      data-section
      id="home"
      className="h-screen bg-black bg-cover bg-top before:absolute before:left-0 before:right-0 before:top-0 before:h-screen before:w-full before:bg-gradient-to-b lg:bg-fixed lg:bg-center"
    >
      <Navbar />
      <div className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 transform text-center text-off-white">
        <TypeWriter />
        <div className=" flex items-center justify-center gap-5">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <a
              href="https://github.com/ibtisamath"
              target="_blank"
              title="Github"
            >
              <BiLogoGithub className="h-6 w-6 transition-all duration-300 ease-in-out hover:brightness-75" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <a
              href="mailto:soumanouibtisamath@gmail.com"
              target="blank"
              title="Gmail"
            >
              <BiLogoGmail className="mt-[2px] h-6 w-6 transition-all duration-300 ease-in-out hover:brightness-75" />
            </a>
          </motion.div>

        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 translate-x-[-50%] ">
        <a href="#about" title="Voir plus">
          <FontAwesomeIcon
            icon={faChevronDown}
            bounce
            className="text-3xl text-off-white"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
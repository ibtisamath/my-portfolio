import React from "react";
import { BiLogoGithub, BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-40 bg-bg-black bg-cover bg-center p-8">
      <div className=" flex items-center justify-center gap-9 ">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <a
            href="https://github.com/ibtisamath"
            target="_blank"
            title="Github"
          >
            <BiLogoGithub className="h-7  w-7 text-off-white transition-all duration-300 ease-in-out hover:brightness-75" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <a
            href="mailto:soumanouibtisamath@gmail.com"
            target="blank"
            title="Gmail"
          >
            <BiLogoGmail className="mt-[2px] h-7 w-7 text-off-white transition-all duration-300 ease-in-out hover:brightness-75" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

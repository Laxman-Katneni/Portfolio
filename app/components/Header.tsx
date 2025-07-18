import Image from "next/image";
import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

interface Props {
  isDarkMode: boolean;
}

function Header({ isDarkMode }: Props) {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.lucky_image}
          alt="profile pic"
          className="rounded-full w-32"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        Hey! I&apos;m Laxman Katneni{" "}
        <Image src={assets.hand_icon} alt="hand_icon" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        AI & Data Engineer
      </motion.h1>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        Full-Stack Web Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        I design and build intelligent, end-to-end solutions—ranging from web
        apps to AI tools to data pipelines. With a strong CS foundation and deep
        passion for real-world problem solving, I bring together the best of AI,
        engineering, and analytics
      </motion.p>
      <div className="flex flex-column sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className="w-4"
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="LaxmanResume2025.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 light-hover duration-500 bg-white dark:text-black"
        >
          my Resume{" "}
          <Image src={assets.download_icon} alt="right arrow" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
}

export default Header;

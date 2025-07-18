import Image from "next/image";
import React from "react";
import { assets } from "../../assets/assets";

interface Props {
  isDarkMode: boolean;
}

function Footer({ isDarkMode }: Props) {
  return (
    <div className="mt-30">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.laxmanLogoDark2 : assets.laxmanLogo2}
          alt="logo"
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          {" "}
          {/*to group icon and text*/}
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail-icon"
            className="w-6"
          />{" "}
          katnenilaxman01@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; Created by Laxman Katneni</p>
        <ul className="flex item-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Laxman-Katneni">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/in/laxman-katneni">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

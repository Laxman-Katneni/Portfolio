import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

interface Props {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

function Navbar({ isDarkMode, setIsDarkMode }: Props) {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const openMenu = () => {
    sideMenuRef.current!.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current!.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    //<div>Navbar</div>
    <>
      {/* 
          A background or decorative element positioned behind everything:
          - fixed: Stays in place even when scrolling
          - top-0 right-0: Anchors the element to the top-right corner
          - w-11/12: Sets the width to 91.67% of the parent (almost full width)
          - -z-10: Pushes the element behind others (negative z-index)
          - translate-y-[-80%]: Moves it upward by 80% of its own height
        */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="Background-gradient"
          className="w-full"
        ></Image>
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? " bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-[#11001F] dark:shadow-white/20"
            : ""
        } `}
      >
        {/*<nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">*/}
        {/* Flex made them horizontal from being vertical previously, justify-between made equally spaced each item in nav bar not inside the element inside navbar, z-50 makes sure navbar stays on top unless something else with high z- comes up, until that, the navbar doesn't get hidden under anything else., just */}

        <a href="#top">
          <Image
            src={isDarkMode ? assets.laxmanLogoDark2 : assets.laxmanLogo2}
            alt={"Logo"}
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        {/*<ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">*/}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {/* Hidden on phone screen, but visible on medium screen 
        🧠 Class-by-class breakdown:

            Class	What it means	Visual/Behavior
            hidden	display: none;	Hides the <ul> on all screen sizes by default
            md:flex	display: flex; starting at 768px width	Makes the list visible + horizontal on medium+ screens
            items-center	align-items: center;	Vertically centers <li> items inside the <ul>
            gap-6	Horizontal spacing of 1.5rem (24px) between <li> items	Adds spacing between nav links (on md+)
            lg:gap-8	Gap increases to 2rem (32px) on lg (1024px+) screens	Responsive spacing boost on large screens
            rounded-full	Full border-radius (9999px)	Makes the <ul> look pill-shaped if there's a background
            px-12	Horizontal padding: 3rem (48px)	Adds left/right spacing inside the <ul>
            py-3	Vertical padding: 0.75rem (12px)	Adds top/bottom spacing inside the <ul>
                    
        
        */}

          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex item-center gap-4">
          <button
            className="cursor-pointer"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moonIcon"
              className="w-6"
            />
          </button>
          {/* 
                Contact button (shown only on large screens):
                - Pill-shaped with border
                - Uses flex for icon + text alignment
                - Hidden on small screens (mobile)
            */}
          <a
            href="#contact"
            className="hidden lg:flex gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo items-center dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt={"arrow_icon"}
              className="w-3"
            />
          </a>
          {/* 
              Mobile-only button (e.g. for hamburger menu):
              - block: Makes the button a block-level element
              - md:hidden: Hides it on medium (768px) and larger screens
              - ml-3: Adds left margin (0.75rem = 12px) for spacing from adjacent elements
          */}

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-6 cursor-pointer"
            />
          </button>
        </div>
        {/* Mobile Menu */}
        {/*
            Mobile slide-in menu (hidden off-screen by default):
            - flex md:hidden: Shows on mobile, hidden on medium+ screens
            - flex-col: Stack list items vertically
            - gap-4: Adds vertical spacing (1rem) between items
            - py-20 px-10: Padding top/bottom (5rem) and sides (2.5rem)
            - fixed: Positions menu relative to viewport (not page flow)
            - -right-64: Starts hidden off-screen to the right (-16rem)
            - top-0 bottom-0: Stretches full vertical height
            - w-64 h-screen: Width of 16rem, full screen height
            - z-50: High stacking order so it appears above other elements
            - bg-rose-50: Very light pink background
            - transition duration-500: Smooth animation (500ms) when position/style changes (e.g. sliding in/out)
          */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#2a004a] dark:text-white"
        >
          {/* 
            Absolutely positioned element (e.g. close button in mobile menu):
            - absolute: Positioned relative to the nearest positioned ancestor
            - right-6: Moves it 1.5rem (24px) from the right edge
            - top-6: Moves it 1.5rem (24px) from the top edge
          */}
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="cursor-pointer w-5"
            />
          </div>
          <li>
            <a href="#top" className="font-ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

/* Why tsx over jsx:
You can define the types of props passed to the navbar (like links, onClick, etc.)
You'll get instant error checking and suggestions while coding
Works seamlessly with the rest of your .tsx layout (layout.tsx, page.tsx, etc.)
 */

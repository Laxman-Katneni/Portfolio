"use client"; // To render this component as client side rendering
/* 
It’s a directive (not code) that tells Next.js:
“This file should run in the browser (client-side), not just on the server.” 

You place it at the top of the file that uses client-side logic
When you should use 'use client':
You only need it when the component:

Uses state (useState)
Uses hooks like useEffect, useRef, useContext
Handles events (onClick, onChange, etc.) eg: Darkmode in navbar
Is interactive (dropdowns, menus, animations, modals, etc.)
Needs access to window or localStorage
❌ When you don’t need it:
For purely static layout or content
Components that just return JSX with no interactivity


*/
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);
  // Whenever the state of isDarkMode changes, this useeffect is executed
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}

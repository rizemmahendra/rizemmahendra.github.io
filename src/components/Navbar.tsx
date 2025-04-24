import { useCallback, useEffect, useState } from "react";
import { APP_NAME } from "@constants/index";
import HumbergerButton from "./HumbergerButton";
import DekstopMenu from "./DekstopMenu";
import MobileMenu from "./MobileMenu";
import { IoMoon, IoSunny } from "react-icons/io5";

const Navbar = (): JSX.Element => {
  const [isHumbergerOpen, setIsHumbergerOpen] = useState<boolean>(false);
  const [sectionActive, setSectionActive] = useState<string>("hero-section");

  const handleHumbergerClick = useCallback(() => {
    setIsHumbergerOpen((value) => !value);
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionActive(entry.target.id);
            console.log(entry.target.id);
          }
        });
      },
      { threshold: 0.8 },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 z-10 flex w-screen items-center justify-between bg-gray-950/80 px-6 py-2 backdrop-blur-xl md:justify-around md:px-2">
        <span className="z-10 font-ZenDots text-2xl text-secondary duration-300 hover:drop-shadow-[0px_0px_10px_#0f0]">
          {APP_NAME}
        </span>

        {/* Dekstop Menu */}
        <DekstopMenu sectionActive={sectionActive} />

        <div className="relative z-10 flex items-center md:hidden">
          <HumbergerButton
            isHumbergerOpen={isHumbergerOpen}
            handleHumbergerClick={handleHumbergerClick}
          />
        </div>
        <div className="hidden min-w-16 items-center justify-between gap-2 rounded-full border-2 px-1 py-1 md:flex">
          <span className="rounded-full">
            <IoSunny className="m-1 text-secondary" />
          </span>
          <span className="rounded-full bg-blue-900">
            <IoMoon className="m-1 text-secondary" />
          </span>
        </div>
      </nav>
      {/* Sidebar */}
      <MobileMenu isHumbergerOpen={isHumbergerOpen} />
    </>
  );
};

export default Navbar;

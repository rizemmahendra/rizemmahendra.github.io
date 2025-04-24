import { FaUser, FaCode, FaHouse, FaAddressBook } from "react-icons/fa6";

export const ROUTES = [
  { name: "Home", path: "/", icon: FaHouse, sectionId: "hero-section" },
  {
    name: "Project",
    path: "/project",
    icon: FaCode,
    sectionId: "project-section",
  },
  { name: "About", path: "/about", icon: FaUser, sectionId: "about-section" },
  {
    name: "Contact",
    path: "/contact",
    icon: FaAddressBook,
    sectionId: "contact-section",
  },
];

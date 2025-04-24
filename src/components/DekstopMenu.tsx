import { ROUTES } from "@constants/navigation";
// import { NavLink } from "react-router-dom";

interface DekstopMenuProps {
  sectionActive: string;
}

const DekstopMenu = ({ sectionActive }: DekstopMenuProps): JSX.Element => {
  return (
    <ul className="right-0 hidden md:flex md:space-x-4">
      {ROUTES.map((route) => (
        <li key={route.path}>
          {/* <NavLink
            to={route.path}
            className={({ isActive }) =>
              `${
                isActive ? "after:scale-x-100" : "hover:after:scale-x-100"
              } text-md after:content[''] relative mx-2 flex items-center justify-between gap-2 px-2 py-1 font-Montserrat font-bold text-secondary duration-200 ease-in-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-blue-600 after:duration-500`
            }
          >
            {route.icon && <route.icon />} {route.name}
          </NavLink> */}

          {/* TODO : ganti Navlink ke tag a */}
          <a
            href={`#${route.sectionId}`}
            className={`${sectionActive == route.sectionId ? "after:scale-x-100" : "hover:after:scale-x-100"} text-md after:content[''] relative mx-2 flex items-center justify-between gap-2 px-2 py-1 font-Montserrat font-bold text-secondary duration-200 ease-in-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-blue-600 after:duration-500`}
          >
            {route.icon && <route.icon />} {route.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DekstopMenu;

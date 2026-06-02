import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/react.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Departments", path: "/departments" },
    { name: "Programs", path: "/programs" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm relative z-50">

      {/* ================= DESKTOP NAV ================= */}
      <div className="hidden lg:flex items-center justify-between h-26 px-0">

        {/* LOGO */}
        <img src={logo} alt="logo" className="w-20 ml-40" />

        {/* LINKS */}
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `group relative pb-10 text-[17px] uppercase transition ${
                    isActive ? "text-gray-700" : "text-gray-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 rounded-t-[3px] h-[3px] bg-black transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <button className="w-[7vw] py-3 px-3 bg-black mr-20 text-white rounded-[7px] hover:bg-white hover:text-black border border-black transition">
          Enroll Now
        </button>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <div className="flex lg:hidden items-center justify-between px-5 py-4">

        {/* LOGO */}
        <img src={logo} alt="logo" className="w-14" />

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-[5px]"
        >
          <span className={`h-[2px] w-6 bg-black transition ${open && "rotate-45 translate-y-[7px]"}`} />
          <span className={`h-[2px] w-6 bg-black transition ${open && "opacity-0"}`} />
          <span className={`h-[2px] w-6 bg-black transition ${open && "-rotate-45 -translate-y-[7px]"}`} />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          lg:hidden
          absolute top-full left-0 w-full bg-white shadow-md
          overflow-hidden transition-all duration-300
          ${open ? "max-h-[500px] py-4" : "max-h-0 py-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                onClick={() => setOpen(false)}
                to={link.path}
                end={link.path === "/"}
                className="text-gray-700 uppercase text-sm hover:font-bold hover:scale-105 transition"
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          <button className="mt-2 px-6 py-3 bg-black text-white rounded-md hover:bg-white hover:text-black border border-black transition">
            Enroll Now
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
import React, { useState } from "react";
import { NavbarMenu } from "../mockData/data";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { li } from "motion/react-client";
import ResponsiveMenu from "./ResponsiveMenu";
// https://www.youtube.com/watch?v=6c2FR6dvq6I
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between py-8 items-center">
          {/* logo */}
          <div className=" text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className=" text-[#df5f39]">Gym</p>
          </div>

          {/* menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      className="inline-block py-1 px-3 hover:text-[#df5f39] "
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* icons */}
          <div className=" flex items-center gap-4">
            <button className="duration-200 text-2xl hover:bg-[#df5f39] p-2 rounded-full hover:text-white">
              <CiSearch />
            </button>

            <button className="duration-200 text-2xl hover:bg-[#df5f39] p-2 rounded-full hover:text-white">
              <PiShoppingCartThin />
            </button>

            <button className="hidden md:block duration-200 text-2xl hover:bg-[#df5f39] p-2 rounded-md border-2 border-[#df5f39] px-6 py-2 hover:text-white">
              Login
            </button>
          </div>

          {/* mobile */}

          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-3xl" />
          </div>
        </div>
      </nav>
      {/* mobile sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;

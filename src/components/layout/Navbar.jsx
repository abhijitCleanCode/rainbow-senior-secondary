import React from "react";
import NavItem from "../ui/NavItem";
import NavDropdown from "../ui/NavDropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { title: "Home", path: "/" },
    {
      title: "About Us",
      path: "/about",
      // dropdownItems: [
      //   { title: "Our History", path: "/about#history" },
      //   { title: "Vision & Mission", path: "/about#vision" },
      //   { title: "Principal's Message", path: "/about#message" },
      //   { title: "Management", path: "/about#management" },
      // ],
    },
    {
      title: "Academics",
      path: "/academics",
    },
    {
      title: "Admissions",
      path: "/admissions",
      dropdownItems: [
        { title: "Fee Structure", path: "/admissions#fees" },
        { title: "Apply Online", path: "/admissions#apply" },
      ],
    },
    { title: "Gallery", path: "/gallery" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex items-center px-6">
      <ul className="flex space-x-1 items-center">
        {navLinks.map((link, index) => (
          <li key={index} className="flex items-center">
            {link.dropdownItems ? (
              <NavDropdown title={link.title} items={link.dropdownItems} />
            ) : (
              <NavItem title={link.title} path={link.path} />
            )}
          </li>
        ))}
        <li>
          <Link
            to="http://rainbowschool.webholicinfotech.com/site/login"
            className="px-3 py-2 text-gray-800 hover:text-blue-800 font-medium relative group transition-colors duration-200"
          >
            Admin
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </li>
          <Link
            to="http://rainbowschool.webholicinfotech.com/site/userlogin"
            className="px-3 py-2 text-gray-800 hover:text-blue-800 font-medium relative group transition-colors duration-200"
          >
            User
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

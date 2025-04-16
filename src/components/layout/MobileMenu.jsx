import React from "react";
import { X, Phone, Mail } from "lucide-react";
import { Transition } from "@headlessui/react";
import MobileNavItem from "../ui/MobileNavItem";
import MobileAccordion from "../ui/MobileAccordion";
import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const navLinks = [
    { title: "Home", path: "/" },
    {
      title: "About Us",
      path: "/about",
      dropdownItems: [
        { title: "Our History", path: "/about#history" },
        { title: "Vision & Mission", path: "/about#vision" },
        { title: "Principal's Message", path: "/about#message" },
        { title: "Management", path: "/about#management" },
      ],
    },
    {
      title: "Academics",
      path: "/academics",
      dropdownItems: [
        { title: "Curriculum", path: "/academics#curriculum" },
        { title: "Facilities", path: "/academics#facilities" },
        { title: "Faculty", path: "/academics#faculty" },
        { title: "Achievements", path: "/academics#achievements" },
      ],
    },
    {
      title: "Admissions",
      path: "/admissions",
      dropdownItems: [
        { title: "Admission Process", path: "/admissions#process" },
        { title: "Fee Structure", path: "/admissions#fees" },
        { title: "Apply Online", path: "/admissions#apply" },
      ],
    },
    { title: "Gallery", path: "/gallery" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="lg:hidden fixed inset-0 z-50 bg-white">
        <div className="flex justify-between items-center p-4 border-b">
          <a href="/" className="flex items-center">
            <img
              src="/IMG-20250309-WA0003.jpg"
              alt="Rainbow Sr Secondary School Logo"
              className="h-12 mr-2"
            />
            <div>
              <h1 className="text-lg font-bold text-blue-800">
                Rainbow Sr Secondary School
              </h1>
              <p className="text-xs text-gray-600">Excellence in Education</p>
            </div>
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4 overflow-y-auto max-h-screen pb-24">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.dropdownItems ? (
                  <MobileAccordion
                    title={link.title}
                    items={link.dropdownItems}
                    onClick={() => setIsOpen(false)}
                  />
                ) : (
                  <MobileNavItem
                    title={link.title}
                    path={link.path}
                    onClick={() => setIsOpen(false)}
                  />
                )}
              </li>
            ))}
            <li>
              <Link
                to="https://rain-bow-school-service-beta.vercel.app"
                className="px-3 py-2 text-gray-800 hover:text-blue-800 font-medium relative group transition-colors duration-200"
              >
                Login
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>

          <div className="mt-8 border-t border-gray-200 pt-4">
            <a
              href="/admissions#apply"
              className="block w-full bg-blue-800 text-white text-center py-3 rounded-md hover:bg-blue-900 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </a>

            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-700">
                <Phone size={18} className="mr-2" />
                <a href="tel:+911234567890">6901522862</a>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone size={18} className="mr-2" />
                <a href="tel:+911234567890">8822031202</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default MobileMenu;

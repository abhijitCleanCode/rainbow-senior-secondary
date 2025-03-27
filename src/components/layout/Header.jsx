import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";
import { Menu } from "lucide-react";
import { school_logo_holy_cross } from "../../assets";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full z-50">
      <TopBar />
      <div
        className={`transition-all duration-300 py-2 ${
          isScrolled ? "bg-white shadow-md" : "bg-white/95"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={school_logo_holy_cross}
                alt="Rainbow Sr Secondary School Logo"
                className="h-16 mr-2"
              />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-danger">
                  Rainbow Sr Secondary School
                </h1>
              </div>
            </a>
          </div>

          <div className="hidden lg:block">
            <Navbar />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </header>
  );
};

export default Header;

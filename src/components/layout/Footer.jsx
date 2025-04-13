import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { school_logo_holy_cross } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-primaryBlue-700 text-white sm:px-16 px-6 sm:py-16 py-10 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <img
              src={school_logo_holy_cross}
              alt="Rainbow Sr Secondary School"
              className="h-16 mb-4 rounded-full"
            />
            <h3 className="h3 mb-4">Rainbow Sr Secondary School</h3>
            <p className="mb-4 text-gray-300">
              Empowering young minds through holistic education.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="hover:text-blue-400">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-blue-400">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="hover:text-blue-400">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-blue-300">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-blue-300">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-blue-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="https://rain-bow-school-beta.vercel.app"
                  className="hover:text-blue-300"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Jamira Part-III, Hailakandi Assam</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>6901522862 / 8822031202</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@schoolname.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="mt-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded text-black focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-brand-100 text-white px-4 py-2 rounded transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Rainbow Sr Secondary School. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Phone, Mail, Calendar } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-blue-900 text-white py-2 hidden md:block px-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-4 text-sm">
          <a
            href="tel:9435197068"
            className="flex items-center hover:text-blue-200"
          >
            <Phone size={14} className="mr-1" />
            <span>9435197068</span>
          </a>
          <a
            href="holycrossschoollala@gmail.com"
            className="flex items-center hover:text-blue-200"
          >
            <Mail size={14} className="mr-1" />
            <span>holycrossschoollala@gmail.com</span>
          </a>
        </div>
        <div className="flex space-x-4 text-sm">
          {/* <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>Academic Calendar</span>
          </div> */}
          <a
            href="/admissions#apply"
            className="bg-yellow-600 hover:bg-yellow-700 px-3 py-1 rounded-sm text-white transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

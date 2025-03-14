import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';

const NavDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="px-3 py-2 text-gray-800 hover:text-blue-800 font-medium flex items-center relative group transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown size={16} className="ml-1" />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300"></span>
      </button>

      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-150 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <div className="py-1">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default NavDropdown;
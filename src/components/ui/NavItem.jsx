import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ title, path }) => {
  return (
    <Link 
      to={path}
      className="px-3 py-2 text-gray-800 hover:text-blue-800 font-medium relative group transition-colors duration-200"
    >
      {title}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

export default NavItem;
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const MobileNavItem = ({ title, path, onClick }) => {
  return (
    <Link
      to={path}
      className="flex items-center justify-between p-3 text-gray-800 hover:bg-blue-50 rounded-md transition-colors duration-200"
      onClick={onClick}
    >
      <span className="font-medium">{title}</span>
      <ChevronRight size={18} className="text-gray-400" />
    </Link>
  );
};

export default MobileNavItem;
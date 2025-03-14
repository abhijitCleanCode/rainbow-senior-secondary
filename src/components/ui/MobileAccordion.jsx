import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Transition } from '@headlessui/react';

const MobileAccordion = ({ title, items, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full flex items-center justify-between p-3 text-gray-800 hover:bg-blue-50 rounded-md transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      
      <Transition
        show={isOpen}
        enter="transition-all duration-200 ease-out"
        enterFrom="opacity-0 max-h-0"
        enterTo="opacity-100 max-h-96"
        leave="transition-all duration-150 ease-in"
        leaveFrom="opacity-100 max-h-96"
        leaveTo="opacity-0 max-h-0"
        className="overflow-hidden"
      >
        <div className="pl-4 border-l-2 border-gray-200 ml-4 mt-1 space-y-1">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block py-2 px-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded-md transition-colors duration-200"
              onClick={onClick}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default MobileAccordion;
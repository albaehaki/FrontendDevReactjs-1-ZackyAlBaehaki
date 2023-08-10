import React, { useState } from 'react';

interface DropdownButtonProps {
  buttonText: string;
  options: string[];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ buttonText, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left my-auto">
      <button
        type="button"
        className=" text-gray-700 border-b-2 flex hover:text-black focus:outline-none focus:border-blue-300 my-3"
        onClick={toggleDropdown}
      >
        {buttonText}
        <svg
          className={`ml-2 h-4 w-4 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;

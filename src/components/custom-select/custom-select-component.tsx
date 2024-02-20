import React, { useState } from 'react';

interface CustomSelectProps {
  label: string;
  options: string[];
  onSelect: (selectedOption: string | null) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onSelect,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className='relative '>
      <span className='text-gray-700'>{label}</span>
      <div
        className='w-[500px] bg-white border border-gray-300 rounded-md py-2 px-4 w-32 cursor-pointer'
        onClick={toggleDropdown}
      >
        <div className='flex items-center justify-between'>
          <span className='text-gray-700'>
            {selectedOption ?? 'Select one'}
          </span>
          <svg
            className={`w-4 h-4 fill-current text-gray-500 transform transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M6 8l4 4 4-4'></path>
          </svg>
        </div>
      </div>
      {isOpen && (
        <ul className='absolute z-10 bg-white border border-gray-300 rounded-md py-1 mt-1 w-32 w-[500px]'>
          {options.map((option, index) => (
            <li
              key={index}
              className='cursor-pointer px-4 py-2 hover:bg-gray-100'
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;

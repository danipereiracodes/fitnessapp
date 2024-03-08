import React from 'react';

interface CustomSelectProps {
  label: string;
  options: string[];
  onSelect: (selectedOption: string | null) => void;
  onHandleAllInputs: () => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onSelect,
  label,
  onHandleAllInputs,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
    onHandleAllInputs();
  };

  return (
    <div className='relative inline-block'>
      <label className='block text-gray-700 mb-1'>{label}</label>
      <div className='bg-white border border-gray-300 rounded-md py-2 px-4 w-32 cursor-pointer'>
        <select name='gender' id='gender-select' onChange={handleChange}>
          <option>Select</option>
          {options.map((option, index) => (
            <option
              key={index}
              className='cursor-pointer px-4 py-2 hover:bg-gray-100'
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;

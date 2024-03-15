import React from 'react';

interface CustomNumberInputProps {
  type: string;
  min?: number;
  max?: number;
  label: string;
  value: number | string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomNumberInput: React.FC<CustomNumberInputProps> = ({
  type,
  min,
  max,
  label,
  value,
  onChange,
}) => {
  return (
    <div className='relative inline-block'>
      <label className='block text-white mb-1'>{label}</label>
      <div className='bg-white border border-gray-300 rounded-md py-2 px-4 w-32 cursor-pointer'>
        <input
          type={type}
          min={min}
          max={max}
          className='w-full text-right text-black'
          value={value ?? 0}
          onChange={onChange}
          placeholder='0'
        />
      </div>
    </div>
  );
};

export default CustomNumberInput;

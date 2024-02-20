import React from 'react';

interface CustomNumberInputProps {
  label: string;
  value: number | string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomNumberInput: React.FC<CustomNumberInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className='relative inline-block'>
      <label className='block text-gray-700 mb-1'>{label}</label>
      <div className='bg-white border border-gray-300 rounded-md py-2 px-4 w-32 cursor-pointer'>
        <input
          type='text'
          className='w-full text-right'
          value={value ?? 0}
          onChange={onChange}
          placeholder='0'
        />
      </div>
    </div>
  );
};

export default CustomNumberInput;

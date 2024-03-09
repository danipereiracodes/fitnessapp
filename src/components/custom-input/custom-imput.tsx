import React from 'react';

interface CustomNumberInputProps {
  type: string;
  min?: number;
  max?: number;
  label: string;
  value: number | string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleAllInputs: () => void;
}

const CustomNumberInput: React.FC<CustomNumberInputProps> = ({
  type,
  min,
  max,
  label,
  value,
  onChange,
  onHandleAllInputs,
}) => {
  let timeout: number | undefined = undefined;

  const handleKeyUp = () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      onHandleAllInputs();
    }, 2000);
  };

  const handleKeyDown = () => {
    clearTimeout(timeout);
  };

  return (
    <div className='relative inline-block'>
      <label className='block text-gray-700 mb-1'>{label}</label>
      <div className='bg-white border border-gray-300 rounded-md py-2 px-4 w-32 cursor-pointer'>
        <input
          type={type}
          min={min}
          max={max}
          className='w-full text-right'
          value={value ?? 0}
          onChange={onChange}
          placeholder='0'
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default CustomNumberInput;

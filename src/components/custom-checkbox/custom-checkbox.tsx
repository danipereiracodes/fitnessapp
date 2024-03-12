import { useEffect, useState } from 'react';

interface CustomCheckboxProps {
  legend: string;
  options?: string[];
  onFasten: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  legend,
  options,
  onFasten,
}) => {
  const [checkboxInput, setCheckboxInput] = useState('');

  const handleCheckboxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxInput(e.target.value);
    console.log(checkboxInput);
  };

  useEffect(() => {
    if (checkboxInput !== 'yes') return;
    onFasten();
  }, [checkboxInput]);

  return (
    //TODO: ALOUD ONLY ONE CHECKBOX TO BE CHECKED
    <fieldset className='grid grid-cols-5 gap-2'>
      <legend>{legend}</legend>

      {options &&
        options.map((element, index) => {
          return (
            <div key={index}>
              <input
                type='checkbox'
                id={element}
                name={element}
                className='mr-2 w-[20px] h-[20px] overflow-auto'
                value={element}
                onChange={handleCheckboxInput}
              />
              <label htmlFor={element}>{element}</label>
            </div>
          );
        })}
    </fieldset>
  );
};

export default CustomCheckbox;

import { useState } from 'react';

interface FastingCheckboxProps {
  legend: string;
  options?: { id: number; title: string; checked: boolean }[];
  onSetIsFasting: React.Dispatch<React.SetStateAction<boolean>>;
  onHandleSelect: (selectedOption: string | null) => void;
}

const FastingCheckbox: React.FC<FastingCheckboxProps> = ({
  legend,
  options,
  onSetIsFasting,
  onHandleSelect,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [checkboxInput, setCheckboxInput] = useState('');
  const [checkedItem, setCheckedItem] = useState<null | number>(null);

  const trackChecked = (index: number) => {
    setCheckedItem(index);
    if (index === 0) {
      onSetIsFasting(true);
    } else {
      onSetIsFasting(false);
      onHandleSelect(null);
    }
  };

  const handleCheckboxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxInput(e.target.value);
  };

  return (
    <fieldset className='grid grid-cols-5 gap-2'>
      <legend>{legend}</legend>

      {options &&
        options.map((element, index) => {
          return (
            <div key={index}>
              <input
                type='checkbox'
                id={element.title}
                name={element.title}
                className='mr-2 w-[20px] h-[20px] overflow-auto'
                value={element.title}
                onChange={(e) => {
                  handleCheckboxInput(e);
                  trackChecked(index);
                }}
                checked={index === checkedItem}
              />
              <label htmlFor={element.title}>{element.title}</label>
            </div>
          );
        })}
    </fieldset>
  );
};

export default FastingCheckbox;

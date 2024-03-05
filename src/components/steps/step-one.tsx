import React, { useState } from 'react';
import CustomNumberInput from '../custom-input/custom-imput';
import CustomSelect from '../custom-select/custom-select-component';

interface StepOneProps {
  isLoading: boolean;
  title: string;

  onIsAllInputFilled: React.Dispatch<React.SetStateAction<boolean>>;
  onLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const StepOne: React.FC<StepOneProps> = ({
  isLoading,
  title,

  onIsAllInputFilled,
  onLoading,
}) => {
  const [noGender, setNoGender] = useState(false);

  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [inputValueAge, setInputValueAge] = useState<number | string | null>(0);
  const [inputValueHeight, setInputValueHeight] = useState<
    number | string | null
  >(0);
  const [inputValueWeight, setInputValueWeight] = useState<
    number | string | null
  >(0);

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValueAge(newValue);

    if (newValue === '') {
      setInputValueAge(null);
    } else {
      const parsedValue = parseFloat(newValue);
      setInputValueAge(isNaN(parsedValue) ? null : parsedValue);
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValueWeight(newValue);

    if (newValue === '') {
      setInputValueWeight(null);
    } else {
      const parsedValue = parseFloat(newValue);
      setInputValueWeight(isNaN(parsedValue) ? null : parsedValue);
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValueHeight(newValue);

    if (newValue === '') {
      setInputValueHeight(null);
    } else {
      const parsedValue = parseFloat(newValue);
      setInputValueHeight(isNaN(parsedValue) ? null : parsedValue);
    }
  };

  const handleSelect = (selectedOption: string | null) => {
    setSelectedValue(selectedOption);
    if (selectedOption !== 'none') {
      return setNoGender(false);
    }
    return setNoGender(true);
  };

  const handleLastInputBlur = (
    selectedValue: string | null,
    inputAge: number | string | null,
    inputWeight: number | string | null,
    inputHeight: number | string | null,
    loading: (arg0: boolean) => void,
    allFilled: (arg0: boolean) => void
  ) => {
    if (
      selectedValue !== null &&
      typeof inputAge === 'number' &&
      inputAge > 0 &&
      typeof inputWeight === 'number' &&
      inputWeight > 0 &&
      typeof inputHeight === 'number' &&
      inputHeight > 0
    ) {
      loading(true);
      setTimeout(() => {
        loading(false);
        allFilled(true);
      }, 2000);
    } else {
      allFilled(false);
    }
  };

  const handleAllInputs = () => {
    handleLastInputBlur(
      selectedValue,
      inputValueAge,
      inputValueHeight,
      inputValueWeight,
      onLoading,
      onIsAllInputFilled
    );
  };

  /* const handleClick = () => {}; */

  return (
    <section className='flex flex-col justify-evenly items-center p-4 absolute inset-0 z-20 bg-[#e3e3e3] w-[75%] h-[75vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      {isLoading ? (
        <div className='loader'></div>
      ) : (
        <>
          {' '}
          <div className='absolute top-0 pt-8'>
            <h2 className='font-roboto text-2xl '>{title}</h2>
          </div>
          <div className='flex flex-col gap-4'>
            <CustomNumberInput
              label="What's your age?"
              value={inputValueAge}
              onChange={handleAgeChange}
              onHandleAllInputs={handleAllInputs}
            />
            <CustomSelect
              label={'Select your gender'}
              options={['Female', 'Male', 'Non-binary', 'none']}
              onSelect={handleSelect}
              onHandleAllInputs={handleAllInputs}
            />
            <span className='text-[#f95959]'>
              {noGender &&
                '* With this option the information could not be 100% accurate'}
            </span>

            <CustomNumberInput
              label='What is your weight in kg?'
              value={inputValueWeight}
              onChange={handleWeightChange}
              onHandleAllInputs={handleAllInputs}
            />
            <CustomNumberInput
              label='What is your height in cm?'
              value={inputValueHeight}
              onChange={handleHeightChange}
              onHandleAllInputs={handleAllInputs}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default StepOne;

import React, { useEffect, useState } from 'react';
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

  const [selectedValue, setSelectedValue] = useState<string>('');
  const [inputValueAge, setInputValueAge] = useState<number | null>(0);
  const [inputValueHeight, setInputValueHeight] = useState<number | null>(0);
  const [inputValueWeight, setInputValueWeight] = useState<number | null>(0);

  const firstStepData = localStorage.getItem('first-step-data');
  const parsedFirstStepData = firstStepData ? JSON.parse(firstStepData) : null;

  useEffect(() => {
    if (parsedFirstStepData !== null && parsedFirstStepData !== '') {
      setSelectedValue(parsedFirstStepData.gender);
      setInputValueAge(parsedFirstStepData.age);
      setInputValueHeight(parsedFirstStepData.height);
      setInputValueWeight(parsedFirstStepData.weight);
    }
  }, []);

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setInputValueAge(newValue);

    if (newValue === 0) {
      setInputValueAge(null);
    } else {
      setInputValueAge(newValue);
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setInputValueWeight(newValue);

    if (newValue === 0) {
      setInputValueWeight(null);
    } else {
      setInputValueWeight(newValue);
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setInputValueHeight(newValue);

    if (newValue === 0) {
      setInputValueHeight(null);
    } else {
      setInputValueHeight(newValue);
    }
  };

  const handleSelect = (selectedOption: string) => {
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

  const saveDataToLocalStorage = () => {
    const data = {
      age: inputValueAge,
      height: inputValueHeight,
      weight: inputValueWeight,
      gender: selectedValue,
    };
    localStorage.setItem('first-step-data', JSON.stringify(data));
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

    saveDataToLocalStorage();
  };

  //TODO DELETE
  const fillAll = () => {
    onIsAllInputFilled(true);
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
              type='number'
              min={14}
              max={110}
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
              value={selectedValue}
            />
            <span className='text-[#f95959]'>
              {noGender &&
                '* With this option the information could not be 100% accurate'}
            </span>

            <CustomNumberInput
              type='number'
              label='What is your weight in kg?'
              value={inputValueWeight}
              onChange={handleWeightChange}
              onHandleAllInputs={handleAllInputs}
            />
            <CustomNumberInput
              type='number'
              label='What is your height in cm?'
              value={inputValueHeight}
              onChange={handleHeightChange}
              onHandleAllInputs={handleAllInputs}
            />
          </div>
          <button onClick={fillAll}>FILL ALL</button>
        </>
      )}
    </section>
  );
};

export default StepOne;

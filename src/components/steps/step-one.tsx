import React, { useEffect, useState } from 'react';
import CustomNumberInput from '../custom-input/custom-imput';
import CustomSelect from '../custom-select/custom-select-component';
import { checkAllStepOneFieldsFilled } from '../../helpers/all-fields-validation';

interface StepOneProps {
  isLoading: boolean;
  title: string;
  step: number;
  onSetStep: (action: string | null) => void;
  onIsAllInputFilled: React.Dispatch<React.SetStateAction<boolean>>;
  onLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const StepOne: React.FC<StepOneProps> = ({
  isLoading,
  title,
  step,
  onSetStep,
  onIsAllInputFilled,
  onLoading,
}) => {
  console.log('step', step);

  const [selectGender, setSelectGender] = useState<string>('');
  const [inputValueAge, setInputValueAge] = useState<number | null>(0);
  const [inputValueHeight, setInputValueHeight] = useState<number | null>(0);
  const [inputValueWeight, setInputValueWeight] = useState<number | null>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const firstStepData = localStorage.getItem('first-step-data');
  const parsedFirstStepData = firstStepData ? JSON.parse(firstStepData) : null;

  useEffect(() => {
    if (parsedFirstStepData !== null && parsedFirstStepData !== '') {
      setSelectGender(parsedFirstStepData.gender);
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

  const handleGenderChange = (selectedOption: string) => {
    setSelectGender(selectedOption);
    console.log(selectedOption);
  };

  const saveDataToLocalStorage = () => {
    const data = {
      age: inputValueAge,
      height: inputValueHeight,
      weight: inputValueWeight,
      gender: selectGender,
    };
    localStorage.setItem('first-step-data', JSON.stringify(data));
  };

  const renderErrorMessage = (message: string | null) => {
    setErrorMessage(message);
  };

  const handleSubmitData = () => {
    const isStepOneFieldsFilled = checkAllStepOneFieldsFilled(
      selectGender,
      inputValueAge,
      inputValueHeight,
      inputValueWeight,
      onLoading,
      onIsAllInputFilled,
      renderErrorMessage
    );

    onSetStep(isStepOneFieldsFilled);
    saveDataToLocalStorage();
  };

  return (
    <section className=" relative flex flex-col justify-evenly items-center p-4  w-full h-full  bg-[url('/image/fitness_info_background.avif')] bg-center bg-cover">
      <div className='absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.41)]'></div>
      <div className='flex flex-col justify-center items-center z-10'>
        {isLoading ? (
          <div className='loader'></div>
        ) : (
          <>
            <h1>Step {step}</h1>
            <h2 className='font-roboto text-2xl '>{title}</h2>
            <div className='flex flex-col gap-4'>
              <CustomNumberInput
                type='number'
                min={14}
                max={110}
                label="What's your age?"
                value={inputValueAge}
                onChange={handleAgeChange}
              />
              <CustomSelect
                label={'Select your gender'}
                options={['Female', 'Male', 'Non-binary', 'none']}
                onSelect={handleGenderChange}
                value={selectGender}
              />

              <CustomNumberInput
                type='number'
                label='What is your weight in kg?'
                value={inputValueWeight}
                onChange={handleWeightChange}
              />
              <CustomNumberInput
                type='number'
                label='What is your height in cm?'
                value={inputValueHeight}
                onChange={handleHeightChange}
              />
            </div>
            <button onClick={handleSubmitData}>Next Step</button>
            {errorMessage}
          </>
        )}
      </div>
    </section>
  );
};

export default StepOne;

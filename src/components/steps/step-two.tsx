/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import FastingCheckbox from '../custom-checkbox/fasting-checkbox';
import CustomSelect from '../custom-select/custom-select-component';
import { checkAllStepTwoFieldsFilled } from '../../helpers/all-fields-validation';
import { useNavigate } from 'react-router-dom';

interface StepTwoProps {
  title: string;
  onIsAllInputFilled: React.Dispatch<React.SetStateAction<boolean>>;
  onLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}

const fastingOptions = [
  {
    id: 0,
    title: 'yes',
    checked: false,
  },
  {
    id: 1,
    title: 'no',
    checked: false,
  },
  {
    id: 2,
    title: 'dunno',
    checked: false,
  },
];

const StepTwo: React.FC<StepTwoProps> = ({
  title,
  onLoading,
  isLoading,
  onIsAllInputFilled,
}) => {
  const [textInput, setTextInput] = useState<string>('');
  const [selectFastingFreq, setSelectFastingFreq] = useState<string | null>('');
  const [selectDiet, setSelectDiet] = useState<string>('');
  const [isFasting, setIsFasting] = useState<boolean | null>(null);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  //TODO: MAKE MODEL
  const [userData, setUserData] = useState<{
    age: number;
    height: number;
    weight: number;
    gender: string | null;
  }>();

  const [newData, setNewData] = useState<{
    diet: string;
    fasting: boolean | null;
    fastingFreq: string;
    allergies: string[];
  } | null>(null);
  /*   useEffect(() => {
    const prevData = localStorage.getItem('first-step-data');

    if (prevData !== '' || prevData) {
      setUserData(JSON.parse(prevData ?? ''));
    }
  }, []); */

  let splittedText: string[];

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
    splittedText = textInput.split(',');
    console.log(splittedText);
  };

  const handleSelectFastingFreqChange = (selectedOption: string | null) => {
    setSelectFastingFreq(selectedOption);
    console.log(selectedOption);
  };

  const handleSelectDietChange = (selectedOption: string) => {
    setSelectDiet(selectedOption);
    console.log(selectedOption);
  };

  const handleBlur = () => {
    const splittedText = textInput.split(/[,. ]+/);
    setAllergies((prevAllergies) => [
      ...new Set([...prevAllergies, ...splittedText]),
    ]);
    console.log(allergies);
  };

  const handleNavigatePrevious = () => {
    navigate('/step-1');
  };

  const addNewData = () => {
    setNewData((prevData) => ({
      ...prevData,
      diet: selectDiet,
      fasting: isFasting,
      fastingFreq: selectFastingFreq || '',
      allergies: allergies,
    }));
  };

  const renderErrorMessage = (message: string | null) => {
    setErrorMessage(message);
  };

  const handleSubmitData = () => {
    checkAllStepTwoFieldsFilled(
      textInput,
      selectDiet,
      isFasting,
      allergies,
      onLoading,
      onIsAllInputFilled,
      renderErrorMessage,
      navigate
    );

    addNewData();
  };

  return (
    <section className="relative text-white flex flex-col w-full h-full justify-center items-center p-4  bg-[url('/image/fitness_food_background.avif')] bg-center">
      <div className='absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.41)]'></div>
      <div className='flex flex-col justify-center z-10'>
        <div className='flex gap-4 justify-center'>
          <div className='flex flex-col w-2/3'>
            <h2 className='font-roboto text-2xl '>{title}</h2>
            <div className='flex flex-col gap-4'>
              <CustomSelect
                label={'What is your diet?'}
                options={['Vegan', 'Vegeterian', 'Pescatarian', 'Meat Lover']}
                onSelect={handleSelectDietChange}
                value={selectDiet || ''}
              />

              <label htmlFor='alergies'>
                Any alergies? (add them separated by comas, dots or spaces.
                Example: "gluten,lactose etc..")
              </label>
              <input
                className='text-black'
                type='text'
                name='alergies'
                value={textInput}
                onChange={handleTextInputChange}
                onBlur={handleBlur}
              />
              {allergies?.map((item) => {
                return <h3>{item}</h3>;
              })}
              <FastingCheckbox
                legend='Do you practice intermittent fasting?'
                options={fastingOptions}
                onSetIsFasting={setIsFasting}
                onHandleSelect={handleSelectFastingFreqChange}
              />
              {isFasting && (
                <CustomSelect
                  label={'How often do you do it?'}
                  options={['12h', '14h', '16h']}
                  onSelect={handleSelectFastingFreqChange}
                  value={selectFastingFreq || ''}
                />
              )}
            </div>
            <div className='button-container text-white flex gap-4'>
              <button onClick={handleSubmitData}>Next</button>
              <button onClick={handleNavigatePrevious}>Back</button>
            </div>
            {errorMessage}
          </div>
          {/* <div className='flex flex-col items-center w-1/3 border-l border-black'>
            <h2 className='font-roboto text-2xl '>Your Information so far: </h2>
            {userData && (
              <ul>
                <li>Age: {userData && userData.age}</li>
                <li>Gender: {userData && userData.gender}</li>
                <li>Height: {userData && userData.height}</li>
                <li>Weight: {userData && userData.weight}</li>
              </ul>
            )}
            <button
              className='underline font-bold text-[red]'
              onClick={() => onIsAllInputFilled(false)}
            >
              edit
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default StepTwo;

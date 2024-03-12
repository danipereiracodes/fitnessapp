import React, { useEffect, useState } from 'react';
import CustomSelect from '../custom-select/custom-select-component';
import CustomCheckbox from '../custom-checkbox/custom-checkbox';

interface StepTwoProps {
  step: number;
  onSetStep: () => void;
  title: string;
  onIsAllInputFilled: React.Dispatch<React.SetStateAction<boolean>>;
}

const StepTwo: React.FC<StepTwoProps> = ({
  title,
  onIsAllInputFilled,
  step,
}) => {
  const [textInput, setTextInput] = useState<string>('');
  const [isFasten, setIsFasten] = useState<boolean>(false);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [userData, setUserData] = useState<{
    age: number;
    height: number;
    weight: number;
    gender: string | null;
  }>();
  useEffect(() => {
    const prevData = localStorage.getItem('first-step-data');

    if (prevData !== '' || prevData) {
      setUserData(JSON.parse(prevData ?? ''));
    }
  }, []);

  let splittedText: string[];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
    splittedText = textInput.split(',');
    console.log(splittedText);
  };

  const handleBlur = () => {
    const splittedText = textInput.split(/[,. ]+/);
    setAllergies((prevAllergies) => [
      ...new Set([...prevAllergies, ...splittedText]),
    ]);
    console.log(allergies);
  };

  const onHandleFasten = () => {
    setIsFasten(!isFasten);
  };

  const fastingDialogueOpen = () => {
    return (
      <div>
        <CustomSelect
          label={'How often do you do it?'}
          options={['12 hours', '14 hours', '16hours']}
          onSelect={() => {}}
          onHandleAllInputs={() => {}}
          value=''
        />
      </div>
    );
  };

  return (
    <section className="relative flex flex-col w-full h-full justify-center items-center p-4  bg-[url('/image/fitness_food_background.avif')] bg-center">
      <div className='absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.41)]'></div>
      <div className='flex flex-col justify-center z-10'>
        <h1>Step {step}</h1>
        <div className='flex gap-4'>
          <div className='flex flex-col w-2/3'>
            <h2 className='font-roboto text-2xl '>{title}</h2>
            <div className='flex flex-col gap-4'>
              <CustomSelect
                label={'What is your diet?'}
                options={['Vegan', 'Vegeterian', 'Pescatarian', 'Meat Lover']}
                onSelect={() => {}}
                onHandleAllInputs={() => {}}
                value=''
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
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {allergies?.map((item) => {
                return <h3>{item}</h3>;
              })}
              <CustomCheckbox
                legend='Do you practice intermittent fasting?'
                options={['yes', 'no', 'dunno']}
                onFasten={onHandleFasten}
              />
              {isFasten && fastingDialogueOpen()}
            </div>
          </div>
          <div className='flex flex-col items-center w-1/3 border-l border-black'>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepTwo;

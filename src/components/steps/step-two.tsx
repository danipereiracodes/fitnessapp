import React, { useEffect, useState } from 'react';
import CustomSelect from '../custom-select/custom-select-component';
import CustomCheckbox from '../custom-checkbox/custom-checkbox';

interface StepTwoProps {
  step: number;
  onSetStep: () => void;
  title: string;
  onIsAllInputFilled: React.Dispatch<React.SetStateAction<boolean>>;
}

//TODO EXTRACT DATA
const foodAllergies = [
  { allergie: 'gluten' },
  { allergie: 'lactose' },
  { allergie: 'nuts' },
  { allergie: 'shellfish' },
  { allergie: 'soy' },
  { allergie: 'eggs' },
  { allergie: 'fish' },
  { allergie: 'milk' },
  { allergie: 'wheat' },
  { allergie: 'peanuts' },
  { allergie: 'tree nuts' },
  { allergie: 'sesame seeds' },
  { allergie: 'sulfites' },
  { allergie: 'mustard' },
  { allergie: 'celery' },
  { allergie: 'mollusks' },
  { allergie: 'lupin' },
  { allergie: 'corn' },
  { allergie: 'garlic' },
  { allergie: 'onion' },
  { allergie: 'citrus fruits' },
];

const StepTwo: React.FC<StepTwoProps> = ({
  title,
  onIsAllInputFilled,
  step,
}) => {
  console.log('step 2', step);
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
  return (
    <section className="relative flex flex-col w-full h-full justify-center items-center p-4  bg-[url('/image/fitness_food_background.avif')] bg-center">
      <div className='absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.41)]'></div>
      <div className='flex justify-center z-10'>
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

              <CustomCheckbox
                legend='Do you have alergies?'
                foodAllergies={foodAllergies}
              />
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

import React from 'react';
import CustomSelect from '../custom-select/custom-select-component';
import CustomCheckbox from '../custom-checkbox/custom-checkbox';

interface StepTwoProps {
  title: string;
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

const StepTwo: React.FC<StepTwoProps> = ({ title }) => {
  return (
    <section className='flex flex-col justify-center items-center p-4 absolute inset-0 z-20 bg-[#e3e3e3] w-[75%] h-[75vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div className='absolute top-0 pt-8 '>
        <h2 className='font-roboto text-2xl '>{title}</h2>
        <div className='flex flex-col gap-4'>
          <CustomSelect
            label={'What is your diet?'}
            options={['Vegan', 'Vegeterian', 'Pescatarian', 'Meat Lover']}
            onSelect={() => {}}
            onHandleAllInputs={() => {}}
          />

          <CustomCheckbox
            legend='Do you have alergies?'
            foodAllergies={foodAllergies}
          />
        </div>
      </div>
    </section>
  );
};

export default StepTwo;

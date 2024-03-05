import React from 'react';
import CustomSelect from '../custom-select/custom-select-component';

interface StepTwoProps {
  title: string;
}

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
          <CustomSelect
            label={'Any Alergies?'}
            options={['Gluten', 'Lactose']}
            onSelect={() => {}}
            onHandleAllInputs={() => {}}
          />
          <input type='checkbox'></input>
        </div>
      </div>
    </section>
  );
};

export default StepTwo;

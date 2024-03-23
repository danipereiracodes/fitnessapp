import React from 'react';
import CustomNumberInput from '../custom-input/custom-imput';
import CustomSelect from '../custom-select/custom-select-component';

import useStepOne from '../../hooks/use-step-one';

interface StepOneProps {
  isLoading: boolean;
  title: string;
  onIsAllInputFilled: React.Dispatch<React.SetStateAction<boolean>>;
  onLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const StepOne: React.FC<StepOneProps> = ({
  isLoading,
  title,

  //onIsAllInputFilled,
  //onLoading,
}) => {
  const { data, handleInputChange, handleSelectChange } = useStepOne();

  return (
    <section className=" text-white relative flex flex-col justify-evenly items-center p-4  w-full h-full  bg-[url('/image/fitness_info_background.avif')] bg-center bg-cover">
      <div className='absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.41)]'></div>
      <div className='flex flex-col justify-center items-center z-10'>
        {isLoading ? (
          <div className='loader'></div>
        ) : (
          <>
            <h2 className='font-roboto text-2xl '>{title}</h2>
            <div className='flex flex-col gap-4'>
              <CustomNumberInput
                name='age'
                type='number'
                min={14}
                max={110}
                label="What's your age?"
                value={data.age}
                onChange={handleInputChange}
              />
              <CustomSelect
                label={'Select your gender'}
                options={['Female', 'Male', 'Non-binary', 'none']}
                onSelect={handleSelectChange}
                value={data.selectGender}
              />

              <CustomNumberInput
                name='weight'
                type='number'
                label='What is your weight in kg?'
                value={data.weight}
                onChange={handleInputChange}
              />
              <CustomNumberInput
                name='height'
                type='number'
                label='What is your height in cm?'
                value={data.height}
                onChange={handleInputChange}
              />
            </div>
            <div className='button-container text-white flex gap-4'>
              <button>Next</button>
              <button>Back</button>
            </div>
            {data.errorMessage}
          </>
        )}
      </div>
    </section>
  );
};

export default StepOne;

import React from 'react';

interface StepTwoProps {
  title: string;
}

const StepTwo: React.FC<StepTwoProps> = ({ title }) => {
  return (
    <section className='flex flex-col justify-center items-center p-4 absolute inset-0 z-20 bg-[#e3e3e3] w-[75%] h-[75vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div className='absolute top-0 pt-8 '>
        <h2 className='font-roboto text-2xl '>{title}</h2>
      </div>
    </section>
  );
};

export default StepTwo;

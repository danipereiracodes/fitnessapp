import React from 'react';

interface HomePageProps {
  onShowModal: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onShowModal }) => {
  return (
    <div className='w-full relative flex flex-col items-center justify-center flex-grow bg-[url("/image/fitness_background.avif")] bg-center text-white font-roboto gap-8'>
      <div className='flex flex-col z-10 relative text-center gap-8 items-center'>
        <h1 className='text-3xl '>
          Get your weekly meal prep and exercise plan{' '}
          <span className='font-bold underline'>in seconds</span>, starting now!
        </h1>
        <button
          className='bg-[#f95959] text-white font-bold py-2 px-4  rounded-lg'
          onClick={onShowModal}
        >
          Get started
        </button>
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-[#0000007d]'></div>
    </div>
  );
};

export default HomePage;

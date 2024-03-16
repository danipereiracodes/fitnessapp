import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/step-1');
  };

  return (
    <div className='w-full relative flex flex-col items-center justify-center flex-grow text-white font-roboto gap-8'>
      <div className='flex flex-col  text-center justify-center gap-8 items-center bg-[url("/image/fitness_background.avif")] bg-center h-full w-full'>
        <div className='absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.41)]'></div>
        <div className='flex flex-col justify-center items-center z-10'>
          <h1 className='text-3xl '>
            Get your weekly meal prep and exercise plan{' '}
            <span className='font-bold underline'>in seconds</span>, starting
            now!
          </h1>
          <button
            onClick={handleClick}
            className='bg-[#f95959] text-white font-bold py-2 px-4  rounded-lg'
          >
            Get started
          </button>
        </div>
      </div>

      <div className='absolute top-0 left-0 w-full h-full bg-[#0000007d]'></div>
    </div>
  );
};

export default HomePage;

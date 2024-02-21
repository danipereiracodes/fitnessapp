import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className='bg-[#f95959] text-white font-bold py-2 px-4  rounded-lg self-start '
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

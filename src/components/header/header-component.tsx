import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <header className='flex justify-center items-center  w-full bg-[#f95959] text-white  p-4'>
      <div
        className='w-[25%] flex justify-center items-center gap-2 text-4xl cursor-pointer'
        onClick={handleClick}
      >
        <img className=' h-[70px]' src='image/fitness-app-icon.png' />
        <h1 className='font-pacifico font-light'>feel-fit</h1>
      </div>
      {/* <nav className='flex w-[75%] justify-center font-roboto font-bold'>
        <ul className='flex gap-[3rem] flex-grow justify-center h-full text-xl'>
          <li>Home</li>
          <li>Plans</li>
          <li>My Account</li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;

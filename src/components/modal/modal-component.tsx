import CustomNumberInput from '../custom-input/custom-imput';
import CustomSelect from '../custom-select/custom-select-component';
import { useState } from 'react';

interface ModalProps {
  showModal: boolean;
}

const Modal: React.FC<ModalProps> = ({ showModal }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [isAllInputFilled, setIsAllInputFilled] = useState<boolean>(false);
  const [inputValueAge, setInputValueAge] = useState<number | string | null>(0);
  const [inputValueHeight, setInputValueHeight] = useState<
    number | string | null
  >(0);
  const [inputValueWeight, setInputValueWeight] = useState<
    number | string | null
  >(0);
  const [isLoading, setisLoading] = useState(false);
  const [noGender, setNoGender] = useState(false);

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValueAge(newValue);

    if (newValue === '') {
      setInputValueAge(null);
    } else {
      const parsedValue = parseFloat(newValue);
      setInputValueAge(isNaN(parsedValue) ? null : parsedValue);
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValueWeight(newValue);

    if (newValue === '') {
      setInputValueWeight(null);
    } else {
      const parsedValue = parseFloat(newValue);
      setInputValueWeight(isNaN(parsedValue) ? null : parsedValue);
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValueHeight(newValue);

    if (newValue === '') {
      setInputValueHeight(null);
    } else {
      const parsedValue = parseFloat(newValue);
      setInputValueHeight(isNaN(parsedValue) ? null : parsedValue);
    }
  };

  const handleSelect = (selectedOption: string | null) => {
    setSelectedValue(selectedOption);
    if (selectedOption !== 'none') {
      return setNoGender(false);
    }
    return setNoGender(true);
  };

  const handleLastInputBlur = () => {
    if (
      selectedValue !== null &&
      typeof inputValueAge === 'number' &&
      inputValueAge > 0 &&
      typeof inputValueHeight === 'number' &&
      inputValueHeight > 0 &&
      typeof inputValueWeight === 'number' &&
      inputValueWeight > 0
    ) {
      setisLoading(true);
      setTimeout(() => {
        setisLoading(false);
        setIsAllInputFilled(true);
      }, 2000);
    } else {
      setIsAllInputFilled(false);
    }
  };

  const renderStepOne = () => {
    return (
      <section className='flex flex-col justify-center items-center p-4 absolute inset-0 z-20 bg-[#e3e3e3] w-[75%] h-[75vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {isLoading ? (
          <div className='loader'></div>
        ) : (
          <>
            {' '}
            <div className='absolute top-0 pt-8'>
              <h2 className='font-roboto text-2xl '>
                Let's start with some information about you
              </h2>
            </div>
            <div className='flex flex-col gap-4'>
              <CustomNumberInput
                label="What's your age?"
                value={inputValueAge}
                onChange={handleAgeChange}
              />
              <CustomSelect
                label={'Select your gender'}
                options={['Female', 'Male', 'Non-binary', 'none']}
                onSelect={handleSelect}
              />
              <span className='text-[#f95959]'>
                {noGender &&
                  '* With this option the information could not be 100% accurate'}
              </span>

              <CustomNumberInput
                label='What is your weight in kg?'
                value={inputValueWeight}
                onChange={handleWeightChange}
              />
              <CustomNumberInput
                label='What is your height in cm?'
                value={inputValueHeight}
                onChange={handleHeightChange}
              />
              <button
                className='bg-[#f95959] text-white font-bold py-2 px-4  rounded-lg self-start '
                onClick={handleLastInputBlur}
              >
                Next step
              </button>
            </div>
          </>
        )}
      </section>
    );
  };

  const renderStepTwo = () => {
    return (
      <section className='flex flex-col justify-center items-center p-4 absolute inset-0 z-20 bg-[#e3e3e3] w-[75%] h-[75vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='absolute top-0 pt-8 '>
          <h2 className='font-roboto text-2xl '>
            Now tell us about your alergies or special diet
          </h2>
          <button
            className='bg-[#f95959] text-white font-bold py-2 px-4  rounded-lg self-start '
            onClick={handleLastInputBlur}
          >
            Next step
          </button>
        </div>
      </section>
    );
  };

  if (!showModal) return;
  if (isAllInputFilled) {
    if (isLoading) {
      return <div className='loader'></div>;
    }
    return renderStepTwo();
  }
  return renderStepOne();
};

export default Modal;

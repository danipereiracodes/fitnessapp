import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface stepOneData {
  selectGender: string;
  age: number;
  height: number;
  weight: number;
  errorMessage: string | null;
}

const prevData = localStorage.getItem('user-data');

const useStepOne = (
  onLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [data, setData] = useState<stepOneData>(() => {
    return prevData
      ? JSON.parse(prevData)
      : {
          selectGender: '',
          age: 0,
          height: 0,
          weight: 0,
          errorMessage: null,
        };
  });

  const navigate = useNavigate();

  useEffect(() => {
    saveToLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log('data changing', data);
  }, [data.age, data.height, data.weight, data.selectGender]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    console.log(value, name);
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (option: string) => {
    setData((prevData) => ({
      ...prevData,
      selectGender: option,
    }));
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('user-data', JSON.stringify(data));
  };
  //TODO: VALIDATIONS
  const handleClick = () => {
    if (
      data.age === 0 ||
      data.height === 0 ||
      data.weight === 0 ||
      !data.selectGender
    ) {
      setData((prevData) => ({
        ...prevData,
        errorMessage: 'You need to fill all to move forward',
      }));

      setTimeout(() => {
        setData((prevData) => ({
          ...prevData,
          errorMessage: null,
        }));
      }, 3000);
    } else {
      setData((prevData) => ({
        ...prevData,
        errorMessage: null,
      }));
      onLoading(true);
      setTimeout(() => {
        navigate('/step-2');
        onLoading(false);
      }, 1000);
    }
  };

  return { data, handleInputChange, handleSelectChange, handleClick };
};

export default useStepOne;

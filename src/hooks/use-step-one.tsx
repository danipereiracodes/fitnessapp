import { useState, useEffect } from 'react';

interface stepOneData {
  selectGender: string;
  age: number;
  height: number;
  weight: number;
  errorMessage: string | null;
}

const prevData = localStorage.getItem('user-data');

const useStepOne = () => {
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

  return { data, handleInputChange, handleSelectChange };
};

export default useStepOne;

/* eslint-disable @typescript-eslint/no-unused-vars */

import { NavigateFunction } from 'react-router-dom';

export const checkAllStepOneFieldsFilled = (
  selectGender: string | null,
  inputAge: number | string | null,
  inputWeight: number | string | null,
  inputHeight: number | string | null,
  loading: (arg0: boolean) => void,
  allFilled: (arg0: boolean) => void,
  onError: (message: string | null) => void,

  navigate: NavigateFunction
) => {
  if (
    selectGender !== '' &&
    typeof inputAge === 'number' &&
    inputAge > 0 &&
    typeof inputWeight === 'number' &&
    inputWeight > 0 &&
    typeof inputHeight === 'number' &&
    inputHeight > 0
  ) {
    loading(true);

    setTimeout(() => {
      loading(false);
      allFilled(true);
      navigate('/step-2');
    }, 1000);
  } else {
    allFilled(false);

    onError('You need to fill all form fields before moving forward');

    setTimeout(() => {
      onError(null);
    }, 4000);
  }
};

export const checkAllStepTwoFieldsFilled = (
  textInput: string,
  selectDiet: string,
  isFasting: boolean | null,
  allergies: string[],
  loading: (arg0: boolean) => void,
  allFilled: (arg0: boolean) => void,
  onError: (message: string | null) => void,
  navigate: NavigateFunction
) => {
  if (
    textInput !== '' &&
    selectDiet !== '' &&
    isFasting !== null &&
    allergies.length > 0
  ) {
    loading(true);
    setTimeout(() => {
      loading(false);

      allFilled(true);
      navigate('/step-3');
    }, 2000);
  } else {
    allFilled(false);

    onError('You need to fill all form fields before moving forward');
    setTimeout(() => {
      onError(null);
    }, 4000);
  }
};

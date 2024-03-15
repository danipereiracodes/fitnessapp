/* eslint-disable @typescript-eslint/no-unused-vars */
const SUM = 'sum';
const SUB = 'sub';

export const checkAllStepOneFieldsFilled = (
  selectGender: string | null,
  inputAge: number | string | null,
  inputWeight: number | string | null,
  inputHeight: number | string | null,
  loading: (arg0: boolean) => void,
  allFilled: (arg0: boolean) => void,
  onError: (message: string | null) => void
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
    }, 2000);
    return SUM;
  } else {
    allFilled(false);

    onError('You need to fill all form fields before moving forward');

    setTimeout(() => {
      onError(null);
    }, 4000);
    return null;
  }
};

export const checkAllStepTwoFieldsFilled = (
  textInput: string,
  selectDiet: string,
  isFasting: boolean,
  allergies: string[],
  loading: (arg0: boolean) => void,
  allFilled: (arg0: boolean) => void,
  onError: (message: string | null) => void,

  onStep: (action: string | null) => void
) => {
  if (
    textInput !== '' &&
    selectDiet !== '' &&
    isFasting &&
    allergies.length > 0
  ) {
    loading(true);
    setTimeout(() => {
      loading(false);
      onStep(SUM);
      allFilled(true);
    }, 2000);
  } else {
    allFilled(false);
    onStep(null);
    onError('You need to fill all form fields before moving forward');
    setTimeout(() => {
      onError(null);
    }, 4000);
  }
};

export const handleLastInputBlur = (
  selectedValue: string | null,
  inputAge: number | string | null,
  inputWeight: number | string | null,
  inputHeight: number | string | null,
  loading: (arg0: boolean) => void,
  allFilled: (arg0: boolean) => void
) => {
  if (
    selectedValue !== null &&
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
  } else {
    allFilled(false);
  }
};

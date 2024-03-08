interface CustomCheckboxProps {
  legend: string;
  foodAllergies: { allergie: string }[];
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  legend,
  foodAllergies,
}) => {
  return (
    <fieldset className='grid grid-cols-5 gap-2'>
      <legend>{legend}</legend>

      {foodAllergies.map((element) => {
        return (
          <div>
            <input
              type='checkbox'
              id={element.allergie}
              name={element.allergie}
              className='mr-2 w-[20px] h-[20px] overflow-auto'
            />
            <label htmlFor={element.allergie}>{element.allergie}</label>
          </div>
        );
      })}
    </fieldset>
  );
};

export default CustomCheckbox;

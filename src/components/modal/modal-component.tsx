import { useState } from 'react';
import StepOne from '../steps/step-one';
import StepTwo from '../steps/step-two';

interface ModalProps {
  showModal: boolean;
}

const Modal: React.FC<ModalProps> = ({ showModal }) => {
  const [isLoading, setisLoading] = useState(false);
  const [isAllInputStepOneFilled, setIsAllInputStepOneFilled] =
    useState<boolean>(false);

  if (!showModal) return;
  if (isAllInputStepOneFilled) {
    if (isLoading) {
      return <div className='loader'></div>;
    }
    return (
      <StepTwo
        title='Now tell us about your alergies or special diet'
        onIsAllInputFilled={setIsAllInputStepOneFilled}
      />
    );
  }
  return (
    <StepOne
      title="Let's start with some information about you"
      isLoading={isLoading}
      onIsAllInputFilled={setIsAllInputStepOneFilled}
      onLoading={setisLoading}
    />
  );
};

export default Modal;

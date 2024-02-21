import { useState } from 'react';
import StepOne from '../steps/step-one';
import StepTwo from '../steps/step-two';

interface ModalProps {
  showModal: boolean;
}

const Modal: React.FC<ModalProps> = ({ showModal }) => {
  const [isLoading, setisLoading] = useState(false);
  const [isAllInputFilled, setIsAllInputFilled] = useState<boolean>(false);

  if (!showModal) return;
  if (isAllInputFilled) {
    if (isLoading) {
      return <div className='loader'></div>;
    }
    return <StepTwo title='Now tell us about your alergies or special diet' />;
  }
  return (
    <StepOne
      title="Let's start with some information about you"
      isLoading={isLoading}
      onIsAllInputFilled={setIsAllInputFilled}
      onLoading={setisLoading}
    />
  );
};

export default Modal;

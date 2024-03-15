import { useState } from 'react';
import StepOne from '../steps/step-one';
import StepTwo from '../steps/step-two';

interface ModalProps {
  showModal: boolean;
  step: number;
  onSetStep: (action: string | null) => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, step, onSetStep }) => {
  const [isLoading, setisLoading] = useState(false);
  const [isAllInputStepOneFilled, setIsAllInputStepOneFilled] =
    useState<boolean>(false);

  if (!showModal) return;
  if (isAllInputStepOneFilled) {
    if (isLoading) {
      onSetStep('sum');
      return <div className='loader'></div>;
    }
    return (
      <StepTwo
        step={step}
        onSetStep={onSetStep}
        title='Now tell us about your alergies or special diet'
        onIsAllInputFilled={setIsAllInputStepOneFilled}
        onLoading={setisLoading}
        isLoading={isLoading}
      />
    );
  }
  return (
    <StepOne
      step={step}
      onSetStep={onSetStep}
      title="Let's start with some information about you"
      isLoading={isLoading}
      onIsAllInputFilled={setIsAllInputStepOneFilled}
      onLoading={setisLoading}
    />
  );
};

export default Modal;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/steps/home-page';
import Header from './components/header/header-component';
import './index.css';
import StepOne from './components/steps/step-one';
import StepTwo from './components/steps/step-two';
import { useState } from 'react';

function App() {
  const [isLoading, setisLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAllInputStepOneFilled, setIsAllInputStepOneFilled] =
    useState<boolean>(false);

  return (
    <section className='relative container mx-auto flex flex-col items-center justify-start h-screen'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route
            path='/step-1'
            element={
              <StepOne
                title="Let's start with some information about you"
                isLoading={isLoading}
                onIsAllInputFilled={setIsAllInputStepOneFilled}
                onLoading={setisLoading}
              />
            }
          />
          <Route
            path='/step-2'
            element={
              <StepTwo
                title='Now tell us about your alergies or special diet'
                onIsAllInputFilled={setIsAllInputStepOneFilled}
                onLoading={setisLoading}
                isLoading={isLoading}
              />
            }
          />
          <Route path='/step-3' element={<h1>STEP 3</h1>} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;

import { useState } from 'react';
import HomePage from './pages/home-page/home-page';
import Header from './components/header/header-component';
import './index.css';
import Modal from './components/modal/modal-component';

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = (): void => {
    setShowModal(true);
  };
  return (
    <section className='relative container mx-auto flex flex-col items-center justify-start h-screen'>
      <Header />
      <HomePage onShowModal={handleShowModal} />
      <Modal showModal={showModal} />
    </section>
  );
}

export default App;

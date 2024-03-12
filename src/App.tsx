import HomePage from './pages/home-page/home-page';
import Header from './components/header/header-component';
import './index.css';

function App() {
  return (
    <section className='relative container mx-auto flex flex-col items-center justify-start h-screen'>
      <Header />
      <HomePage />
    </section>
  );
}

export default App;

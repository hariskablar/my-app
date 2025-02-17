import './App.css';
import Footer from './Layout/Footer/Footer';
import { SimpleGrid } from '@mantine/core';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

function App() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='App'>
        <SimpleGrid
          cols={3}
          spacing='0'
          verticalSpacing='0'
          className='home-container'
        >
          <div
            className='home-content-col'
            onClick={() => {
              navigate('/mobilni-telefoni');
            }}
          >
            <img
              className='background'
              src='/mobilni-uredjaji-background.webp'
              alt='mobilni-uređaji-background'
            />
            <img
              className='logo'
              alt='mobilni-uređaji-logo'
              src='/mobilni-uredjaji-logo.png'
            />
            <p>
              Mobilni
              <br />
              Telefoni
            </p>
          </div>
          <div
            className='home-content-col col2'
            onClick={() => {
              navigate('/akcije');
            }}
          >
            <img
              className='background'
              src='/akcije-background.webp'
              alt='mobilni-uređaji-background'
            />
            <img
              className='logo'
              alt='mobilni-uređaji-logo'
              src='akcije-logo.png'
            />
            <p>Akcije</p>
          </div>
          <div
            className='home-content-col'
            onClick={() => {
              navigate('/dokupi-main');
            }}
          >
            <img
              className='background'
              src='/dokupi-background.webp'
              alt='mobilni-uređaji-background'
            />
            <img
              className='logo'
              alt='mobilni-uređaji-logo'
              src='/dokupi-logo.png'
            />
            <div className='text'>
              <span>Dokupi</span>
              <div className='dokupi-separator'></div>
              <span>Tourist</span>
            </div>
          </div>
        </SimpleGrid>
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;

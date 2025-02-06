import './App.css';
import Footer from './Layout/Footer/Footer';
import { SimpleGrid } from '@mantine/core';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const sheetId = '1xYiZB_95fmNbnFdU-HcPm8rp3BZKYq7t7e7ihF13NY0';
  //     const apiKey = 'AIzaSyAH788aOIO7jj9l2C-VsSBkQQy4m0Xbp9Q';
  //     const range = 'Sheet1!A1:Z';
  //     const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  //     try {
  //       const response = await axios.get(url);
  //       console.log(response.data);
  //       setData(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);
  const navigate = useNavigate();
  return (
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
            navigate('/dokupi-tourist');
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
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { sitemap } from './Shared/Sitemap/sitemap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DigitalDisplayProvider } from './Shared/AppContext';

const theme = createTheme({
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'normal',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DigitalDisplayProvider>
      <MantineProvider theme={theme} withGlobalStyles>
        <BrowserRouter>
          <Routes>
            {sitemap &&
              sitemap.map((element) => {
                return (
                  <Route
                    path={element.path}
                    element={element.component}
                    key={element.path}
                  />
                );
              })}
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </DigitalDisplayProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

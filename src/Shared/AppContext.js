import { useContext, createContext, useState, useEffect } from 'react';
import googleSheetClient from '../api/axiosConfig';

const digitalDisplayContext = createContext();

export const DigitalDisplayProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchUredaji = async () => {
    const sheetId = '1xYiZB_95fmNbnFdU-HcPm8rp3BZKYq7t7e7ihF13NY0';
    const range = 'Sheet1!A1:Z';
    try {
      const response = await googleSheetClient.get(
        `/${sheetId}/values/${range}`
      );
      const headers = response.data.values[0];
      const rows = response.data.values.slice(1);
      const finalData = rows.map((row) =>
        headers.reduce((acc, header, index) => {
          acc[header.toLowerCase()] = row[index] || '';
          return acc;
        }, {})
      );
      setData(finalData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUredaji();
  }, []);

  return (
    <digitalDisplayContext.Provider value={{ data, googleSheetClient }}>
      {children}
    </digitalDisplayContext.Provider>
  );
};

export const useDigitalDisplay = () => {
  const context = useContext(digitalDisplayContext);
  if (!context) {
    throw new Error(
      'useDigitalDisplay must be used within a DigitalDisplayProvider'
    );
  }
  return context;
};

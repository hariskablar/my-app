import { useContext, createContext, useState, useEffect } from 'react';
import googleSheetClient from '../api/axiosConfig';

const digitalDisplayContext = createContext();

export const DigitalDisplayProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [akcije, setAkcije] = useState([]);
  const [dokupi, setDokupi] = useState([]);
  const [cjenovnikUredjajaMojaTV, setCjenovnikUredjajaMojaTV] = useState([]);
  const [cjenovnikUredjajaExtra, setCjenovnikUredjajaExtra] = useState([]);
  const [selectedCjenovnik, setSelectedCjenovnik] = useState([]);

  const fetchMojaTvCjenovnikUsluga = async () => {
    const sheetId = '1xYiZB_95fmNbnFdU-HcPm8rp3BZKYq7t7e7ihF13NY0';
    const sheetName = 'MojaTV cjenovnik';

    try {
      const response = await googleSheetClient.get(
        `/${sheetId}/values/${sheetName}`
      );
      const formattedCjenovnik = response.data.values.map((row) => {
        return row.filter((cell) => {
          return cell !== '';
        });
      });
      setCjenovnikUredjajaMojaTV(formattedCjenovnik);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchExtraCjenovnikUsluga = async () => {
    const sheetId = '1xYiZB_95fmNbnFdU-HcPm8rp3BZKYq7t7e7ihF13NY0';
    const sheetName = 'Extra mobilne usluge cjenovnik';
    try {
      const response = await googleSheetClient.get(
        `/${sheetId}/values/${sheetName}`
      );
      const formattedCjenovnik = response.data.values.map((row) => {
        return row.filter((cell) => {
          return cell !== '';
        });
      });
      setCjenovnikUredjajaExtra(formattedCjenovnik);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUredaji = async () => {
    const sheetId = '1xYiZB_95fmNbnFdU-HcPm8rp3BZKYq7t7e7ihF13NY0';
    const sheetName = 'Sheet1';
    try {
      const response = await googleSheetClient.get(
        `/${sheetId}/values/${sheetName}`
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

  const fetchAkcije = async () => {
    const sheetId = '1xYiZB_95fmNbnFdU-HcPm8rp3BZKYq7t7e7ihF13NY0';
    const sheetName = 'Akcije';

    try {
      const response = await googleSheetClient.get(
        `/${sheetId}/values/${sheetName}`
      );
      const headers = response.data.values[0];
      const rows = response.data.values.slice(1);
      const finalData = rows.map((row) =>
        headers.reduce((acc, header, index) => {
          acc[header.toLowerCase()] = row[index] || '';
          return acc;
        }, {})
      );
      setAkcije(finalData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDokupi = async () => {
    const sheetId = '1xYiZB_95fmNbnFdU-HcPm8rp3BZKYq7t7e7ihF13NY0';
    const sheetName = 'Dokupi';

    try {
      const response = await googleSheetClient.get(
        `/${sheetId}/values/${sheetName}`
      );
      const headers = response.data.values[0];
      const rows = response.data.values.slice(1);
      const finalData = rows.map((row) =>
        headers.reduce((acc, header, index) => {
          acc[header.toLowerCase()] = row[index] || '';
          return acc;
        }, {})
      );
      setDokupi(finalData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUredaji();
    fetchAkcije();
    fetchDokupi();
    fetchMojaTvCjenovnikUsluga();
    fetchExtraCjenovnikUsluga();
  }, []);

  return (
    <digitalDisplayContext.Provider
      value={{
        data,
        akcije,
        dokupi,
        cjenovnikUredjajaMojaTV,
        cjenovnikUredjajaExtra,
        selectedCjenovnik,
        setSelectedCjenovnik,
        googleSheetClient,
      }}
    >
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

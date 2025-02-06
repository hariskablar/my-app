import axios from 'axios';

const googleSheetClient = axios.create({
  baseURL: process.env.REACT_APP_SHEET_URL,
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});

export default googleSheetClient;

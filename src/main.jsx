import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import AdvertisementProvider from 'components/AdvertisementProvider';
import Map from 'components/Map';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <AdvertisementProvider>
      <Map />
    </AdvertisementProvider>
  </React.StrictMode>,
);

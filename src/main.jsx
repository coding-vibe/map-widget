import React from 'react';
import ReactDOM from 'react-dom/client';
import { Buffer } from 'buffer';
import CssBaseline from '@mui/material/CssBaseline';
import AdvertisementProvider from 'components/AdvertisementProvider';
import Map from 'components/Map';

// Used because of error "Buffer is not defined"
// https://github.com/Developer-Amit/react-aws-s3/issues/35
window.Buffer = window.Buffer || Buffer;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <AdvertisementProvider>
      <Map />
    </AdvertisementProvider>
  </React.StrictMode>,
);

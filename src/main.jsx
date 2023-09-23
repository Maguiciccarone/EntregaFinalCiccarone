import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from 'firebase/app';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Configuracion de firebase

const firebaseConfig = {
  apiKey: import.meta.env.VITE_ONASHAGAEXPEDITIONS_API_KEY,
  authDomain: import.meta.env.VITE_ONASHAGAEXPEDITIONS_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_ONASHAGAEXPEDITIONS_PROJECT_ID,
  storageBucket: import.meta.env.VITE_ONASHAGAEXPEDITIONS_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_ONASHAGAEXPEDITIONS_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_ONASHAGAEXPEDITIONS_MESSAGE_APP_ID,
  measurementId: import.meta.env.VITE_ONASHAGAEXPEDITIONS_MEASUREMENT_ID,
};

// Inicializacion de firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

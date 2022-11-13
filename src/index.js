import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-day-picker/dist/style.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer position='top-right' />
      <App />
    </AuthProvider>
  </React.StrictMode>
);


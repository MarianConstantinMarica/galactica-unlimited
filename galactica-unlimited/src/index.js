import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAuD6odBjPIjOk15T9l-sLFShe-QZQnoyA",
  authDomain: "galactica-unlimited-e63b1.firebaseapp.com",
  projectId: "galactica-unlimited-e63b1",
  storageBucket: "galactica-unlimited-e63b1.appspot.com",
  messagingSenderId: "497728399092",
  appId: "1:497728399092:web:9e84fbda750cdde7b220a1",
  measurementId: "G-GCBXG2FXQK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

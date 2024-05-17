import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import Card from "./components/Card";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <App />
    {/* <Card /> */}
    {/* <Card 
    img =""
    name="chamudi"
    phone="123"
    email="blah@gmail.com"
    />
    <Card 
    img =""
    name="suparna"
    phone="0702191756"
    email="hoo@gmail.com"
    /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

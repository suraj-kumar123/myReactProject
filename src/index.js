import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { Footer } from './App';
import { Main } from './App';
import reportWebVitals from './reportWebVitals';


const menu = [
  "Borritos",
  "Tacos",
  "Quesadilla",
  "Empanadas"
];

const dishes = menu.map(
  (dish, i) => ({
  id: i,
  title: dish
})
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name = "Suraj"/>
    <Main food = "Food" menu = {dishes}/>
    <Footer year = {new Date().getFullYear()}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Envuelve la app aquí
import App from './components/App'; // Importa tu componente App
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App /> {/* No envuelvas Router nuevamente en App.js */}
  </Router>
);

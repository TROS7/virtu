import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Aquí está el Router principal
import './styles/index.css';
import App from "./components/login/App"; // Estilos globales

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Router>
        <App />
    </Router>
);

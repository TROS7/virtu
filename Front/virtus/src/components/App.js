import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Importa Route y Routes
import '../styles/App.css';  // Estilos generales de la aplicación
import logo from '../assets/logo.png';  // Ruta al logo
import RecuperarContra from './RecupeContra'; // Componente para recuperación de contraseña

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="dots"></div>
        <div className="stains"></div>
      </div>

      <Routes>
        <Route path="/" element={ // Login Component
          <div className="login-container">
            <img src={logo} className="logo" alt="logo" />  {/* Logo en la parte superior */}
            <div className="login-form">
              <input type="text" placeholder="Usuario" />
              <input type="password" placeholder="Contraseña" />
              <button>Ingresar</button>
              <div className="links">
                <a href="/recuperar-contraseña">Olvidó su contraseña?</a>
                <a href="#">No tienes usuario? Regístrate</a>
              </div>
            </div>
          </div>
        }/>
        
        <Route path="/recuperar-contraseña" element={<RecuperarContra />} /> {/* Ruta para la recuperación de contraseña */}
      </Routes>
    </div>
  );
}

export default App;

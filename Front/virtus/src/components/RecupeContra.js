import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Usamos Link en lugar de window.location.href
import '../styles/App.css'; // Estilos generales de la aplicación
import logo from '../assets/logo.png'; // Ruta al logo (cámbiala si es necesario)

function RecuperarContraseña() {
  const [email, setEmail] = useState('');
  const [alertaVisible, setAlertaVisible] = useState(false);

  // Función para manejar el envío del correo
  const handleSubmit = () => {
    if (email) {
      setAlertaVisible(true); // Muestra la alerta
    } else {
      alert("Por favor ingrese un correo electrónico.");
    }
  };

  return (
    <div className="App">
      <div className="background">
        <div className="dots"></div>
        <div className="stains"></div>
      </div>

      {/* Formulario de Recuperación de Contraseña */}
      <div className="login-container">
        <img src={logo} className="logo" alt="logo" />
        <div className="login-form">
          <h2>Recuperación de Contraseña</h2>
          {/* Modificación de los campos de entrada */}
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>Enviar solicitud</button>
          <div className="links">
            <Link to="/">Volver al inicio de sesión</Link>
          </div>
        </div>
      </div>

      {/* Alerta de éxito */}
      {alertaVisible && (
        <div className="alert">
          <p>La solicitud de recuperación ha sido enviada correctamente.</p>
          <Link to="/">Volver al inicio de sesión</Link>
        </div>
      )}
    </div>
  );
}

export default RecuperarContraseña;

import React, { useState } from 'react';
import $ from 'jquery'; // Usamos jQuery para manejar el AJAX
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css'; // FontAwesome
import '../styles/log.css'; // Estilos propios (log.css)

const LoginPage = () => {
  const [documento, setDocumento] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/Longin2.php', // La URL del formulario
      data: {
        documento: documento,
        contrasena: contrasena,
      },
      dataType: 'json',
      success: function (response) {
        if (response.success) {
          window.location.href = response.redirect;
        } else {
          setErrorMessage(response.message);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("AJAX Error: " + textStatus + ' : ' + errorThrown);
        console.log("Response Text: " + jqXHR.responseText);
        setErrorMessage('Error en la comunicación con el servidor. Por favor, intente de nuevo más tarde.');
      },
    });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="text-center mb-4">
          <img alt="FET Logo" height="100" src="/Img/fet.jpg" />
        </div>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
            <input
              className="form-control"
              name="documento"
              placeholder="Cédula"
              type="text"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="fas fa-key"></i>
            </span>
            <input
              className="form-control"
              name="contrasena"
              placeholder="Contraseña"
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 text-center">
            <a href="/ventanas/recuperar_clave.php"> ¿Olvidó su contraseña? </a>
          </div>
          <div className="mb-3 text-center">
            <a href="/ventanas/registro.php"> Quiero Registrarme </a>
          </div>
          <div className="d-grid">
            <button className="btn" type="submit">Iniciar Sesión</button>
          </div>
        </form>
        {errorMessage && (
          <div id="error-message" className="alert alert-danger mt-3">
            {errorMessage}
          </div>
        )}
      </div>
      <div className="login-image"></div>
    </div>
  );
};

export default LoginPage;

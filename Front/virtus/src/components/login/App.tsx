// App.tsx
import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import '../../styles/App.css';
import logo from '../../assets/logo.png';
import RecuperarContra from './RecupeContra';
import DashboardPage from '../dashboard/DashboardPage';  // Importa el DashboardPage

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const authenticated = localStorage.getItem('isAuthenticated');
        if (authenticated === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    };

    return (
        <div className="App">
            <div className="background">
                <div className="dots"></div>
                <div className="stains"></div>
            </div>

            <Routes>
                {/* Ruta para el login */}
                <Route path="/" element={
                    !isAuthenticated ? (
                        <div className="login-container">
                            <img src={logo} className="logo" alt="logo" />
                            <div className="login-form">
                                <input type="text" placeholder="Usuario" />
                                <input type="password" placeholder="Contraseña" />
                                <button onClick={handleLogin}>Ingresar</button>
                                <div className="links">
                                    <a href="/recuperar-contraseña">Olvidó su contraseña?</a>
                                    <a href="#">No tienes usuario? Regístrate</a>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Navigate to="/dashboard" /> // Redirige automáticamente al Dashboard si está autenticado
                    )
                }/>

                {/* Ruta para la recuperación de contraseña */}
                <Route path="/recuperar-contraseña" element={<RecuperarContra />} />

                {/* Ruta para el Dashboard */}
                <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;

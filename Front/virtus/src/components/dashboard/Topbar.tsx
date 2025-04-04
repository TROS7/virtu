import React, { useState } from 'react';
import './Topbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faUser,
    faSearch,
    faEllipsisV,
    faCog
} from '@fortawesome/free-solid-svg-icons';

const Topbar = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
        if (showNotifications) setShowNotifications(false);
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        if (showUserMenu) setShowUserMenu(false);
    };

    return (
        <div className="topbar">
            <div className="topbar-left">
                <h2>Dashboard</h2>
            </div>

            <div className="topbar-right">
                <div className="notification-container">
                    <button className="icon-btn" onClick={toggleNotifications}>
                        <FontAwesomeIcon icon={faBell} />
                        <span className="badge">3</span>
                    </button>

                    {showNotifications && (
                        <div className="dropdown-menu notification-menu">
                            <div className="dropdown-header">
                                <h4>Notificaciones</h4>
                                <span>Marcar todas como leídas</span>
                            </div>
                            <div className="notification-item unread">
                                <div className="notification-icon blue">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="notification-content">
                                    <p>Nuevo usuario registrado</p>
                                    <span className="notification-time">Hace 5 minutos</span>
                                </div>
                            </div>
                            <div className="notification-item unread">
                                <div className="notification-icon green">
                                    <FontAwesomeIcon icon={faCog} />
                                </div>
                                <div className="notification-content">
                                    <p>Actualización del sistema completada</p>
                                    <span className="notification-time">Hace 30 minutos</span>
                                </div>
                            </div>
                            <div className="notification-item">
                                <div className="notification-icon orange">
                                    <FontAwesomeIcon icon={faBell} />
                                </div>
                                <div className="notification-content">
                                    <p>Recordatorio: reunión programada</p>
                                    <span className="notification-time">Hace 2 horas</span>
                                </div>
                            </div>
                            <div className="dropdown-footer">
                                <a href="#">Ver todas las notificaciones</a>
                            </div>
                        </div>
                    )}
                </div>

                <div className="user-container">
                    <button className="user-btn" onClick={toggleUserMenu}>
                        <div className="user-avatar">
                            <span>JD</span>
                        </div>
                    </button>

                    {showUserMenu && (
                        <div className="dropdown-menu user-menu">
                            <div className="user-header">
                                <div className="user-avatar large">
                                    <span>JD</span>
                                </div>
                                <div className="user-info">
                                    <h4>Juan Doe</h4>
                                    <p>Administrador</p>
                                </div>
                            </div>
                            <div className="menu-items">
                                <a href="#"><FontAwesomeIcon icon={faUser} /> Mi Perfil</a>
                                <a href="#"><FontAwesomeIcon icon={faCog} /> Configuración</a>
                                <a href="#" className="logout">Cerrar Sesión</a>
                            </div>
                        </div>
                    )}
                </div>

                <button className="icon-btn mobile-menu">
                    <FontAwesomeIcon icon={faEllipsisV} />
                </button>
            </div>
        </div>
    );
};

export default Topbar;
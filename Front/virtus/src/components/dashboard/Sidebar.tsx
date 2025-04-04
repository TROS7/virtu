import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faTachometerAlt,
    faChartLine,
    faFileAlt,
    faCaretRight,
    faCaretLeft,
    faChevronDown,
    faChevronUp
} from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
    collapsed: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
    const location = useLocation();

    const toggleMenu = (menu: string) => {
        setOpenMenus(prev => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    // Determinar el menú activo basado en la ruta
    useEffect(() => {
        const path = location.pathname;

        // Activar el menú correspondiente a la ruta actual
        if (path.includes('inicio')) {
            setOpenMenus(prev => ({ ...prev, inicio: true }));
        } else if (path.includes('estadisticas')) {
            setOpenMenus(prev => ({ ...prev, estadisticas: true }));
        } else if (path.includes('formulario')) {
            setOpenMenus(prev => ({ ...prev, formulario: true }));
        }
    }, [location]);

    // Verificar si un elemento está activo
    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                {!collapsed && <span>Virtus</span>}
                <button onClick={toggleSidebar} className="toggle-btn">
                    <FontAwesomeIcon icon={collapsed ? faCaretRight : faCaretLeft} />
                </button>
            </div>

            <div className="separator"></div>

            <ul>
                <li data-tooltip="Dashboard" className={isActive('/dashboard') ? 'active' : ''}>
                    <Link to="/dashboard">
                        <FontAwesomeIcon icon={faTachometerAlt} className="sidebar-icon" />
                        <span className={collapsed ? 'hidden' : ''}>Dashboard</span>
                    </Link>
                </li>

                {/* Inicio */}
                <li
                    onClick={() => toggleMenu('inicio')}
                    data-tooltip="Inicio"
                    className={location.pathname.includes('/inicio') ? 'active' : ''}
                >
                    <div className="sidebar-item">
                        <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
                        <span className={collapsed ? 'hidden' : ''}>Inicio</span>
                        {!collapsed && (
                            <FontAwesomeIcon
                                icon={openMenus['inicio'] ? faChevronUp : faChevronDown}
                                className="arrow-icon"
                            />
                        )}
                    </div>
                </li>
                {!collapsed && (
                    <ul className={`submenu ${openMenus['inicio'] ? 'open' : ''}`}>
                        <li className={isActive('/inicio/home') ? 'active' : ''}>
                            <Link to="/inicio/home">Página Principal</Link>
                        </li>
                        <li className={isActive('/inicio/config') ? 'active' : ''}>
                            <Link to="/inicio/config">Configuraciones</Link>
                        </li>
                    </ul>
                )}

                {/* Estadísticas */}
                <li
                    onClick={() => toggleMenu('estadisticas')}
                    data-tooltip="Estadísticas"
                    className={location.pathname.includes('/estadisticas') ? 'active' : ''}
                >
                    <div className="sidebar-item">
                        <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" />
                        <span className={collapsed ? 'hidden' : ''}>Estadísticas</span>
                        {!collapsed && (
                            <FontAwesomeIcon
                                icon={openMenus['estadisticas'] ? faChevronUp : faChevronDown}
                                className="arrow-icon"
                            />
                        )}
                    </div>
                </li>
                {!collapsed && (
                    <ul className={`submenu ${openMenus['estadisticas'] ? 'open' : ''}`}>
                        <li className={isActive('/estadisticas/ventas') ? 'active' : ''}>
                            <Link to="/estadisticas/ventas">Ventas</Link>
                        </li>
                        <li className={isActive('/estadisticas/usuarios') ? 'active' : ''}>
                            <Link to="/estadisticas/usuarios">Usuarios Activos</Link>
                        </li>
                    </ul>
                )}

                {/* Formulario */}
                <li
                    onClick={() => toggleMenu('formulario')}
                    data-tooltip="Formulario"
                    className={location.pathname.includes('/formulario') ? 'active' : ''}
                >
                    <div className="sidebar-item">
                        <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon" />
                        <span className={collapsed ? 'hidden' : ''}>Formulario</span>
                        {!collapsed && (
                            <FontAwesomeIcon
                                icon={openMenus['formulario'] ? faChevronUp : faChevronDown}
                                className="arrow-icon"
                            />
                        )}
                    </div>
                </li>
                {!collapsed && (
                    <ul className={`submenu ${openMenus['formulario'] ? 'open' : ''}`}>
                        <li className={isActive('/formulario/registro') ? 'active' : ''}>
                            <Link to="/formulario/registro">Registro</Link>
                        </li>
                        <li className={isActive('/formulario/validacion') ? 'active' : ''}>
                            <Link to="/formulario/validacion">Validación</Link>
                        </li>
                    </ul>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
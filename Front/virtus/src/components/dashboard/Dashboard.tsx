import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import SpeedometerGauge from '../graficos/SpeedometerGauge';
import BarChartComponent from '../graficos/BarChartComponent';
import LineChartComponent from '../graficos/LineChartComponent';
import LocationMap from '../graficos/LocationMap';
import ProgressBar from '../graficos/ProgressBar';
import AlertsList from '../graficos/AlertsList';
import './Dashboard.css';

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="dashboard-container">
            <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
            <div className={`dashboard-content ${collapsed ? 'sidebar-collapsed' : ''}`}>
                <Topbar />
                <div className="main-content">
                    <h1>Panel de Control</h1>

                    {/* Primera fila: 3 gráficos */}
                    <div className="dashboard-row">
                        <div className="dashboard-card">
                            <SpeedometerGauge value={75} title="Velocidad del Servidor" />
                        </div>
                        <div className="dashboard-card">
                            <BarChartComponent title="Ventas Mensuales" />
                        </div>
                        <div className="dashboard-card">
                            <LineChartComponent title="Tráfico Web" />
                        </div>
                    </div>

                    {/* Segunda fila: 3 gráficos */}
                    <div className="dashboard-row">
                        <div className="dashboard-card">
                            <LocationMap title="Oficinas y Almacenes" />
                        </div>
                        <div className="dashboard-card">
                            <ProgressBar title="Estado de Proyectos" />
                        </div>
                        <div className="dashboard-card">
                            <AlertsList title="Alertas del Sistema" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
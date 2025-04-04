import React from 'react';

const AlertsList = ({ alerts = [], title = "Alertas" }) => {
    // Datos de ejemplo si no se proporcionan
    const sampleAlerts = alerts.length ? alerts : [
        { id: 1, message: 'Servidor principal caído', level: 'critical', time: '10:25' },
        { id: 2, message: 'Pico de tráfico detectado', level: 'warning', time: '09:15' },
        { id: 3, message: 'Actualización completada', level: 'success', time: '08:30' },
        { id: 4, message: 'Bajo espacio en disco', level: 'warning', time: '07:45' },
        { id: 5, message: 'Nueva versión disponible', level: 'info', time: '06:20' }
    ];

    const getAlertColor = (level) => {
        switch (level) {
            case 'critical': return {
                bg: '#FEE2E2',
                text: '#991B1B',
                border: '#FECACA'
            };
            case 'warning': return {
                bg: '#FEF3C7',
                text: '#92400E',
                border: '#FDE68A'
            };
            case 'success': return {
                bg: '#D1FAE5',
                text: '#065F46',
                border: '#A7F3D0'
            };
            case 'info': return {
                bg: '#DBEAFE',
                text: '#1E40AF',
                border: '#BFDBFE'
            };
            default: return {
                bg: '#F3F4F6',
                text: '#1F2937',
                border: '#E5E7EB'
            };
        }
    };

    const getAlertIcon = (level) => {
        const iconStyles = {
            width: '1.25rem',
            height: '1.25rem',
            color: level === 'critical' ? '#EF4444' :
                level === 'warning' ? '#F59E0B' :
                    level === 'success' ? '#10B981' : '#3B82F6'
        };

        switch (level) {
            case 'critical':
                return (
                    <svg style={iconStyles} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                );
            case 'warning':
                return (
                    <svg style={iconStyles} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                );
            case 'success':
                return (
                    <svg style={iconStyles} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                );
            default:
                return (
                    <svg style={iconStyles} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                );
        }
    };

    return (
        <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-lg font-medium text-center mb-2">{title}</h3>
            <div style={{
                flex: 1,
                minHeight: '200px',
                overflowY: 'auto',
                paddingRight: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
            }}>
                {sampleAlerts.map(alert => {
                    const colors = getAlertColor(alert.level);
                    return (
                        <div
                            key={alert.id}
                            style={{
                                padding: '0.5rem',
                                border: `1px solid ${colors.border}`,
                                borderRadius: '0.25rem',
                                backgroundColor: colors.bg,
                                color: colors.text,
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <div style={{ marginRight: '0.5rem' }}>
                                {getAlertIcon(alert.level)}
                            </div>
                            <div style={{ flex: 1 }}>
                                <p style={{ fontSize: '0.875rem', fontWeight: '500' }}>{alert.message}</p>
                            </div>
                            <div style={{ fontSize: '0.75rem' }}>
                                {alert.time}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AlertsList;
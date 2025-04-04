import React from 'react';

const ProgressBar = ({ items = [], title = "Progreso" }) => {
    // Datos de ejemplo si no se proporcionan
    const sampleItems = items.length ? items : [
        { id: 1, name: 'Proyecto A', progress: 75, color: '#3B82F6' },
        { id: 2, name: 'Proyecto B', progress: 45, color: '#10B981' },
        { id: 3, name: 'Proyecto C', progress: 90, color: '#F59E0B' },
        { id: 4, name: 'Proyecto D', progress: 30, color: '#EF4444' }
    ];

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
                gap: '1rem'
            }}>
                {sampleItems.map(item => (
                    <div key={item.id} style={{ marginBottom: '1rem' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '0.875rem',
                            marginBottom: '0.25rem'
                        }}>
                            <span>{item.name}</span>
                            <span style={{ fontWeight: '500' }}>{item.progress}%</span>
                        </div>
                        <div style={{
                            width: '100%',
                            backgroundColor: '#e5e7eb',
                            borderRadius: '9999px',
                            height: '0.625rem'
                        }}>
                            <div
                                style={{
                                    height: '0.625rem',
                                    borderRadius: '9999px',
                                    width: `${item.progress}%`,
                                    backgroundColor: item.color
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;
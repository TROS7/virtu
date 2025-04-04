import React from 'react';

const LocationMap = ({ locations = [], title = "Ubicaciones" }) => {
    // Datos de ejemplo si no se proporcionan
    const sampleLocations = locations.length ? locations : [
        { id: 1, name: 'Oficina Principal', lat: 40.416775, lng: -3.703790 },
        { id: 2, name: 'Almacén', lat: 40.453054, lng: -3.688344 },
        { id: 3, name: 'Tienda', lat: 40.420139, lng: -3.705471 }
    ];

    return (
        <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-lg font-medium text-center mb-2">{title}</h3>
            <div style={{
                flex: 1,
                minHeight: '200px',
                backgroundColor: '#e2e8f0',
                borderRadius: '0.5rem',
                position: 'relative'
            }}>
                {/* Aquí iría un mapa real utilizando una biblioteca como react-leaflet o google-maps-react */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className="text-gray-500 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <p>Mapa con {sampleLocations.length} ubicaciones</p>
                    </div>
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '0.5rem',
                    left: '0.5rem',
                    right: '0.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.75rem'
                }}>
                    {sampleLocations.map(loc => (
                        <div key={loc.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
                            <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', backgroundColor: '#3B82F6', marginRight: '0.5rem' }}></span>
                            <span>{loc.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocationMap;
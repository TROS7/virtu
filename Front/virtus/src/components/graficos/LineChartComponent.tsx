import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({ data = [], title = "Series Temporales" }) => {
    // Datos de ejemplo si no se proporcionan
    const sampleData = data.length ? data : [
        { name: '00:00', serie1: 4000, serie2: 2400 },
        { name: '03:00', serie1: 3000, serie2: 1398 },
        { name: '06:00', serie1: 2000, serie2: 9800 },
        { name: '09:00', serie1: 2780, serie2: 3908 },
        { name: '12:00', serie1: 1890, serie2: 4800 },
        { name: '15:00', serie1: 2390, serie2: 3800 },
        { name: '18:00', serie1: 3490, serie2: 4300 },
        { name: '21:00', serie1: 3190, serie2: 2300 },
    ];

    return (
        <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            padding: '1rem'
        }}>
            <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '500',
                marginBottom: '0.5rem',
                textAlign: 'center'
            }}>{title}</h3>
            <div style={{
                flex: 1,
                position: 'relative',
                minHeight: '200px'
            }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={sampleData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="serie1" stroke="#3B82F6" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="serie2" stroke="#10B981" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default LineChartComponent;
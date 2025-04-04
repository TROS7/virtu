import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const SpeedometerGauge = ({ value = 75, max = 100, title = "Velocidad" }) => {
    // Normalizar el valor entre 0 y 100
    const normalizedValue = Math.min(Math.max(0, value), max);
    const percentage = (normalizedValue / max) * 100;

    // Datos para el medidor
    const data = [
        { name: 'Valor', value: percentage },
        { name: 'Resto', value: 100 - percentage }
    ];

    // Colores basados en el valor (verde a rojo)
    const getColor = (percent) => {
        if (percent < 30) return '#4CAF50'; // verde
        if (percent < 70) return '#FF9800'; // naranja
        return '#F44336'; // rojo
    };

    const color = getColor(percentage);

    return (
        <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-lg font-medium text-center mb-2">{title}</h3>
            <div style={{ position: 'relative', flex: 1, minHeight: 0 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="80%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius="60%"
                            outerRadius="80%"
                            paddingAngle={0}
                            dataKey="value"
                            stroke="none"
                        >
                            <Cell key="cell-0" fill={color} />
                            <Cell key="cell-1" fill="#e0e0e0" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '8%'
                }}>
                    <div className="text-3xl font-bold">{value}</div>
                    <div className="text-sm text-gray-500">de {max}</div>
                </div>
            </div>
        </div>
    );
};

export default SpeedometerGauge;
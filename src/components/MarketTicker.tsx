"use client"
import React, { useState, useEffect } from 'react';

interface Rate {
  nombre: string;
  venta: number;
  compra: number;
}

export default function MarketTicker() {
  const [rates, setRates] = useState<Rate[]>([]);

  useEffect(() => {
    fetch('https://dolarapi.com/v1/cotizaciones')
      .then(res => res.json())
      .then(data => setRates(data))
      .catch(err => console.error('Error fetching rates:', err));
  }, []);

  return (
    <div className="bg-white border-b border-gray-100 py-2 overflow-hidden">
      {/* Contenedor con el scroll animado */}
      <div className="flex items-center gap-8 animate-scroll whitespace-nowrap">
        <div className="flex gap-8">
          {rates.map((rate, index) => (
            <span key={index} className="inline-flex items-center text-xs sm:text-sm">
              <span className="font-medium text-gray-600">{rate.nombre}</span>
              <span className="mx-2 text-gray-500">${rate.venta.toFixed(2)}</span>
              <span className="text-blue-500">
                ${rate.compra.toFixed(2)}
              </span>
            </span>
          ))}
        </div>

        {/* Aquí repetimos el contenedor para crear un bucle */}
        <div className="flex gap-8">
          {rates.map((rate, index) => (
            <span key={index + 1000} className="inline-flex items-center text-xs sm:text-sm">
              <span className="font-medium text-gray-600">{rate.nombre}</span>
              <span className="mx-2 text-gray-500">${rate.venta.toFixed(2)}</span>
              <span className="text-blue-500">
                ${rate.compra.toFixed(2)}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

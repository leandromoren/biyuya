"use client"
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/SideBar';
import MarketTicker from '../../components/MarketTicker';
import CurrencyCard from '../../components/CurrencyCard';
import PriceChart from '../../components/PriceChart';

interface DollarRate {
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

export default function App() {
  const [rates, setRates] = useState<DollarRate[]>([]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <MarketTicker />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-xl font-medium text-gray-900">Cotizaciones generales</h1>
            <p className="text-sm text-gray-500 mt-1">
              Tipos de cambio en tiempo real
            </p>
          </div>
          
          
              <CurrencyCard/>
          

          <PriceChart />
        </main>
      </div>
    </div>
  );
}
import React from 'react';
import { Home, LineChart, Settings, Wallet, Bell } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="h-full w-16 md:w-56 bg-black border-r border-gray-100 p-4 flex flex-col items-center md:items-start flex-shrink-0">
      <div className="flex items-center gap-2 mb-8 text-gray-800">
        <Wallet className="w-6 h-6 text-white" />
        <span className="hidden md:block text-sm font-medium text-white">BIYUHOY</span>
      </div>
      
      <nav className="flex-1 w-full">
        <ul className="space-y-4">
          {[
            { icon: Home, label: 'Mercado', active: true , href: '/inicio'},
            { icon: LineChart, label: 'Cripto', href: '/cripto' },
            { icon: Bell, label: 'Brecha cambiaria' , href: '/brecha-cambiaria'},
            { icon: Settings, label: 'Cotizaciones', href: '/cotizaciones' },
            { icon: Settings, label: 'Conversor Moneda' , href: '/conversor-moneda'},
            { icon: Settings, label: 'Cotizacion historica', href: '/cotizacion-historica' },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                  item.active
                    ? 'text-black bg-blue-50'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="hidden md:block text-sm">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
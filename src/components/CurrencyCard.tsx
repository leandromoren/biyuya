import { Clock } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Rate {
  moneda: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: Date;
}

export default function CurrencyCard() {
  const [rates, setRates] = useState<Rate[]>([]);

  // Función para obtener los datos de la API
  const fetchRates = () => {
    fetch("https://dolarapi.com/v1/dolares")
      .then((res) => res.json())
      .then((data) =>
        setRates(
          data.map((rate: any) => ({
            ...rate,
            fechaActualizacion: new Date(rate.fechaActualizacion),
          }))
        )
      )
      .catch((err) => console.error("Error fetching rates:", err));
  };

  useEffect(() => {
    fetchRates();

    const intervalId = setInterval(fetchRates, 180000); // 180000 ms = 3 minutos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {rates.map((rate, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-t-green-700 shadow-lg p-4"
          >
            <div className="font-bold text-xl mb-2 text-gray-600 pb-3">
              DÓLAR {rate.nombre.toUpperCase()}
            </div>

            <div className="mb-2 pb-3">
              <div className="text-gray-600">
                <span className="font-semibold">Compra: </span>
                <span className="text-green-700 font-bold">${rate.compra.toFixed(2)}</span>
              </div>
              <div className="text-gray-600">
                <span className="font-semibold">Venta: </span>
                <span className="text-green-700 font-bold">${rate.venta.toFixed(2)}</span>
              </div>
            </div>

            <div className="text-sm text-gray-700">
              <Clock className="inline-block mr-2" />
              Última actualización a las <strong className="text-green-700">{rate.fechaActualizacion.toTimeString()}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client"
import React from 'react';

const data = [
  { date: '2024-01', value: 0.98 },
  { date: '2024-02', value: 1.02 },
  { date: '2024-03', value: 1.00 },
  { date: '2024-04', value: 1.05 },
  { date: '2024-05', value: 1.03 },
  { date: '2024-06', value: 1.08 },
  { date: '2024-07', value: 1.06 },
  { date: '2024-08', value: 1.10 },
  { date: '2024-09', value: 1.12 },
  { date: '2024-10', value: 1.15 },
  { date: '2024-11', value: 1.18 },
  { date: '2024-12', value: 1.20 },
];

export default function PriceChart() {
  const [data, setData] = useState<{ date: string; value: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dolarapi.com/v1/dolares/blue");
        const result = await response.json();

        console.log("API response:", result); // Log the response to check its format

        if (result && result.nombre === "Blue") {
          const formattedData = {
            date: result.fechaActualizacion.split("T")[0], // Assuming the date is in ISO format
            value: result.venta, // Assuming 'venta' is the value you want to plot
          };
          setData([formattedData]);
        } else {
          console.error("Unexpected response format:", result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;
    if (ctx && data.length > 0) {
      new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((d) => d.date),
          datasets: [
            {
              label: "Cotización del Dólar Blue",
              data: data.map((d) => d.value),
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 md:p-6">
      <div className="mb-4">
        <h2 className="text-lg font-medium text-gray-900">USD Exchange Rate</h2>
        <p className="text-sm text-gray-500">Last 12 months trend</p>
      </div>
      
      <div className="relative h-48 md:h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
          <span>${maxValue.toFixed(2)}</span>
          <span>${((maxValue + minValue) / 2).toFixed(2)}</span>
          <span>${minValue.toFixed(2)}</span>
        </div>
        
        {/* Chart area */}
        <div className="ml-12 h-full flex items-end">
          <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="0" x2="1200" y2="0" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="0" y1="150" x2="1200" y2="150" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="0" y1="300" x2="1200" y2="300" stroke="#f3f4f6" strokeWidth="1" />
            
            {/* Line chart */}
            <path
              d={data
                .map((point, i) => {
                  const x = (i / (data.length - 1)) * 1200;
                  const y = 300 - (normalizeValue(point.value) * 300) / 100;
                  return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                })
                .join(' ')}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            
            {/* Area under the line */}
            <path
              d={`
                ${data
                  .map((point, i) => {
                    const x = (i / (data.length - 1)) * 1200;
                    const y = 300 - (normalizeValue(point.value) * 300) / 100;
                    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                  })
                  .join(' ')}
                L 1200 300
                L 0 300
                Z
              `}
              fill="url(#gradient)"
              fillOpacity="0.1"
            />
            
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* X-axis labels */}
        <div className="ml-12 mt-2 flex justify-between text-xs text-gray-500">
          {data.map((point, i) => (
            i % 3 === 0 && (
              <span key={point.date}>{point.date}</span>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
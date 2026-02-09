import "../styles/globals.css";

export const metadata = {
  title: "PAPELERA MOREN",
  description: "Mejores precios en papelera industrial. Venta de bolsas, film stretch, cintas adhesivas, guantes y más. ¡Contáctanos hoy!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
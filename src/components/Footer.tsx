import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              
              <span className="text-xl font-bold tracking-tighter text-white uppercase">
                Papelera <span className="text-emerald-500">Moren</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Líderes en distribución mayorista de productos descartables y de limpieza para comercios, industrias y consorcios en toda Argentina.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navegación</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="#catalogo" className="hover:text-white transition-colors">Catálogo de Productos</Link>
              </li>
              <li>
                <Link href="#nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-white transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Categorías</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer text-left">Bolsas de Consorcio</li>
              <li className="hover:text-white transition-colors cursor-pointer text-left">Bolsas Camiseta</li>
              <li className="hover:text-white transition-colors cursor-pointer text-left">Cajas de Pizza</li>
              <li className="hover:text-white transition-colors cursor-pointer text-left">Papel Higiénico Industrial</li>
              <li className="hover:text-white transition-colors cursor-pointer text-left">Productos de Limpieza</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contacto">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Quilmes, Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+54 9 11 7374-8210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>ventas@papeleramoren.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-center md:text-left">
          <p>© {new Date().getFullYear()} PAPELERA MOREN. TODOS LOS DERECHOS RESERVADOS.</p>
          <p>DESARROLLADO CON EXCELENCIA LOGÍSTICA</p>
        </div>
      </div>
    </footer>
  );
}

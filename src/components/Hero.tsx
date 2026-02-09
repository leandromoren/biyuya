import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Package, Clock } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-foreground overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest text-gray-400 text-muted-foreground uppercase mb-4">
            Distribuidora mayorista
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl text-balance">
            Distribución mayorista de descartables para tu negocio
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-v text-gray-400 muted-foreground max-w-2xl">
            Abastecemos comercios, pizzerías, consorcios y empresas de limpieza
            con productos de calidad a precios mayoristas. Stock permanente y
            entrega rápida.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-green-800 hover:text-white text-base px-8"
            >
              <a
                href="https://wa.me/5491173748210?text=Hola,%20quiero%20consultar%20por%20productos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-muted-foreground hover:bg-muted-foreground/10 hover:text-background text-gray-400 px-8 bg-transparent"
            >
              <a href="#catalogo">Ver catálogo</a>
            </Button>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12  bg-gray-600 flex items-center justify-center">
              <Package className="h-6 w-6 text-background" />
            </div>
            <div>
              <h3 className="font-semibold text-background">
                Precio mayorista
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Los mejores precios para tu negocio
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12  bg-gray-600 flex items-center justify-center">
              <Truck className="h-6 w-6 text-background" />
            </div>
            <div>
              <h3 className="font-semibold text-background">Entrega rápida</h3>
              <p className="text-sm text-gray-400 mt-1">
                Llegamos a todo AMBA y más
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12  bg-gray-600 flex items-center justify-center">
              <Clock className="h-6 w-6 text-background" />
            </div>
            <div>
              <h3 className="font-semibold text-background">
                Stock permanente
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Siempre tenemos lo que necesitás
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

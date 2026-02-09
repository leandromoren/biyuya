import { CheckCircle } from "lucide-react";

const features = [
  "Más de 10 años de experiencia en el rubro",
  "Atención personalizada para cada cliente",
  "Cumplimiento y puntualidad en cada entrega",
  "Productos de primera calidad",
  "Precios competitivos del mercado",
  "Asesoramiento sin compromiso",
];

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] bg-foreground  overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-background p-8">
                  <div className="text-6xl font-bold mb-2">+10</div>
                  <div className="text-lg text-muted-foreground">
                    Años de experiencia
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-900  flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-xs">Comprometidos</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
              Sobre nosotros
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Tu socio de confianza en distribución mayorista
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Somos una empresa familiar dedicada a la distribución mayorista de
              descartables y productos de limpieza. Trabajamos con comercios,
              pizzerías, consorcios y empresas de todo el país.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Nuestro compromiso es brindarte los mejores productos a precios
              competitivos, con la atención personalizada que tu negocio merece.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

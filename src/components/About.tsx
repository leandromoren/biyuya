import { CheckCircle, Package, Truck, ShieldCheck } from "lucide-react"

const features = [
  "Atención directa y personalizada",
  "Stock permanente en todos los rubros",
  "Entregas rápidas y puntuales",
  "Productos de primeras marcas",
  "Precios mayoristas reales",
  "Asesoramiento sin compromiso",
]

const stats = [
  {
    icon: Package,
    value: "+500",
    label: "Productos disponibles",
  },
  {
    icon: Truck,
    value: "24hs",
    label: "Entrega estimada",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Garantía de calidad",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Stats Visual */}
          <div className="flex flex-col gap-6">
            <div className="aspect-[4/3] bg-foreground rounded-lg overflow-hidden relative">
              <img
                src="/assets/bussiness.jpg"
                alt="Compromiso con clientes"
                className="w-full h-full"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-lg p-4 flex flex-col items-center text-center"
                >
                  <stat.icon className="h-6 w-6 text-accent mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
              Sobre nosotros
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Distribución mayorista con trato directo y sin vueltas
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Nacimos con una idea clara: ofrecer productos descartables y de limpieza a precio mayorista real, 
              con la agilidad y la atención que las grandes distribuidoras no dan. Trabajamos codo a codo con 
              comercios, pizzerías, consorcios y empresas que necesitan un proveedor serio y cumplidor.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Sabemos que tu negocio no puede parar. Por eso mantenemos stock permanente, precios estables y 
              entregas en tiempo y forma. Cada cliente para nosotros es una relación a largo plazo.
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
  )
}

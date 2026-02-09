"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Box, ChevronRight, Hash } from "lucide-react";
import { products, categories } from "@/lib/data";

export default function CatalogoSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="catalogo" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-emerald-600"></span>
              <h2 className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.3em]">Tablero de Existencias</h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase leading-[0.9] tracking-tighter">
              Catálogo <br />
              <span className="text-zinc-400 dark:text-zinc-600 italic">Mayorista</span>
            </h3>
          </div>
          
          <div className="w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0">
            <div className="flex gap-2 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                    selectedCategory === cat
                      ? "bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:border-white dark:text-zinc-900 shadow-[4px_4px_0px_0px_rgba(16,185,129,1)]"
                      : "bg-transparent border-zinc-200 text-zinc-500 hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-500 dark:hover:border-zinc-500 dark:hover:text-zinc-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 border-t border-l border-zinc-200 dark:border-zinc-800"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-white dark:bg-zinc-900 border-r border-b border-zinc-200 dark:border-zinc-800 hover:z-10 transition-all hover:shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.1)]"
              >
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <span className="flex items-center text-[10px] font-mono text-zinc-400 dark:text-zinc-500 mb-1 uppercase tracking-tighter">
                        <Hash className="w-3 h-3 mr-1" />
                        SKU: {String(product.id).padStart(4, '0')}
                      </span>
                      <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-widest px-2 py-0.5 border border-emerald-600/20 rounded inline-block w-fit">
                        {product.category}
                      </span>
                    </div>
                    <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center border border-zinc-100 dark:border-zinc-700">
                      <Box className="w-5 h-5 text-zinc-400" />
                    </div>
                  </div>

                  <div className="mb-6 relative aspect-square overflow-hidden border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  
                  <div className="flex-grow flex flex-col">
                    <h4 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-2 leading-none">
                      {product.name}
                    </h4>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-[1px] flex-grow bg-zinc-100 dark:bg-zinc-800"></div>
                      <span className="text-[11px] font-mono font-bold text-zinc-500 dark:text-zinc-400 whitespace-nowrap uppercase">
                        {product.presentation}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="mt-auto">
                      <a
                        href={`https://wa.me/5491173748210?text=Hola! Me gustaría consultar por el producto: ${product.name}`}
                        target="_blank"
                        className="group/btn flex items-center justify-between w-full border-2 border-zinc-900 dark:border-white px-6 py-4 transition-all hover:bg-zinc-900 dark:hover:bg-white text-zinc-900 dark:text-white hover:text-white dark:hover:text-zinc-900"
                      >
                        <span className="text-xs font-black uppercase tracking-widest flex items-center">
                          <MessageCircle className="w-4 h-4 mr-3 fill-emerald-500 group-hover/btn:fill-white dark:group-hover/btn:fill-emerald-600 transition-colors" />
                          Cotizar Ahora
                        </span>
                        <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-24 bg-zinc-900 dark:bg-white p-1 md:p-2">
          <div className="border border-zinc-700 dark:border-zinc-200 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-xl">
              <h4 className="text-3xl md:text-5xl font-black text-white dark:text-zinc-900 uppercase tracking-tighter leading-[0.9] mb-6">
                ¿Necesita una <br />
                <span className="text-emerald-500">medida especial?</span>
              </h4>
              <p className="text-zinc-400 dark:text-zinc-500 text-lg font-medium">
                Fabricamos bolsas y cajas a medida para su industria. Consulte por desarrollos personalizados y marcas propias.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a
                href="https://wa.me/5491173748210?text=Hola! Me gustaría consultar por un desarrollo a medida"
                target="_blank"
                className="bg-emerald-600 text-white px-10 py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-emerald-700 transition-all text-center"
              >
                Hablar con un asesor
              </a>
              <a
                href="#contacto"
                className="bg-transparent border-2 border-white/20 dark:border-zinc-900/20 text-white dark:text-zinc-900 px-10 py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-white transition-all text-center"
              >
                Ver Sucursales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

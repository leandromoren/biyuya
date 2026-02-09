"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Package, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Catálogo", href: "#catalogo" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const telNumber = "+5491173748210";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-zinc-200 py-3 dark:bg-zinc-950/80 dark:border-zinc-800" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-zinc-900 dark:bg-zinc-100 p-1.5 rounded-none transition-transform group-hover:scale-105">
                <Package className="w-6 h-6 text-white dark:text-zinc-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 uppercase">
                  Papelera <span className="text-emerald-600">Moren</span>
                </span>
                <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest -mt-1">
                  Distribución Mayorista Industrial
                </span>
              </div>
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                {link.name}
              </Link>
            ))}
              <Link
                href={`https://wa.me/${telNumber}`}
                target="_blank"
                className="inline-flex items-center justify-center rounded-none bg-zinc-900 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-emerald-600 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-emerald-500"
              >
                <Phone className="w-4 h-4 mr-2 fill-current" />
                COTIZAR AHORA
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-zinc-600 dark:text-zinc-400"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-bold text-zinc-900 dark:text-zinc-100 py-2 border-b border-zinc-100 dark:border-zinc-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="https://wa.me/5491100000000"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-none bg-emerald-600 px-6 py-4 text-white font-bold transition-all mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5 mr-3 fill-current" />
                  CONSULTAR POR WHATSAPP
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
}

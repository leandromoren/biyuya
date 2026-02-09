"use client";
import React from "react";
import Headers from "@/components/Header";
import { Hero } from "@/components/Hero";
import CatalogoSection from "@/components/Catalogo";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <section>
        <Headers />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <CatalogoSection />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

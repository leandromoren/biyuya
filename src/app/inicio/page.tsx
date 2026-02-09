"use client";
import React from "react";
import Headers from "@/components/Header";
import { Hero } from "@/components/Hero";
import CatalogoSection from "@/components/Catalogo";
import Footer from "@/components/Footer";
import { AboutSection } from "@/components/About";

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
        <AboutSection />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToProduct = (productId: string) => {
    const productElement = document.getElementById(`product-${productId}`)
    if (productElement) {
      productElement.scrollIntoView({ behavior: "smooth" })
    } else {
      // Fallback to products section
      const productsSection = document.getElementById("productos-disponibles")
      productsSection?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg,rgba(224, 144, 112, 1) 60%, rgba(224, 144, 112, 1) 1%, rgba(189, 99, 64, 1) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center space-y-8 relative z-30">
          <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Cerámica <span className="text-[var(--color-light)]">Artesanal</span>
          </h1>

          <p className="font-subtitle text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
            Piezas únicas hechas a mano con técnicas tradicionales. Cada creación cuenta una historia y lleva el alma
            del artesano.
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white text-[var(--color-red)] hover:bg-white/90 font-subtitle"
              onClick={() => {
                const productsSection = document.getElementById("productos-disponibles")
                productsSection?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Productos Disponibles
            </Button>
          </div>
        </div>

        {/* Primera imagen izquierda - Tazón Artesanal Azul */}
        <div
          className="absolute -left-16 top-24 w-20 h-24 md:-left-28 md:top-16 md:w-32 md:h-40 lg:-left-48 lg:top-8 lg:w-48 lg:h-56 xl:-left-60 xl:top-4 xl:w-56 xl:h-64 2xl:-left-72 2xl:top-0 2xl:w-64 2xl:h-72 z-10 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-8 animate-float"
          onClick={() => scrollToProduct("1")}
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/cer7.jpeg"
              alt="Tazón Artesanal Azul"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Segunda imagen izquierda - Plato Hondo Oliva */}
        <div
          className="absolute -left-20 bottom-24 w-24 h-20 md:-left-32 md:bottom-16 md:w-40 md:h-32 lg:-left-52 lg:bottom-8 lg:w-52 lg:h-44 xl:-left-64 xl:bottom-4 xl:w-60 xl:h-48 2xl:-left-76 2xl:bottom-0 2xl:w-68 2xl:h-52 z-15 cursor-pointer transition-all duration-300 hover:scale-110 hover:-rotate-2 active:scale-95 active:-rotate-6 animate-float-delayed"
          onClick={() => scrollToProduct("3")}
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/cer3.png"
              alt="Plato Hondo Oliva"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Primera imagen derecha - Jarrón Terracota */}
        <div
          className="absolute top-8 -right-8 w-28 h-36 md:top-0 md:-right-20 md:w-44 md:h-56 lg:-top-8 lg:-right-40 lg:w-60 lg:h-76 xl:-top-12 xl:-right-52 xl:w-68 xl:h-84 2xl:-top-16 2xl:-right-64 2xl:w-76 2xl:h-92 z-20 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-4 active:scale-95 active:rotate-8 animate-float-slow"
          onClick={() => scrollToProduct("2")}
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/cer2.jpeg"
              alt="Jarrón Terracota"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Segunda imagen derecha - Maceta Pequeña */}
        <div
          className="absolute top-32 -right-12 w-24 h-24 md:top-24 md:-right-24 md:w-36 md:h-36 lg:top-16 lg:-right-44 lg:w-48 lg:h-48 xl:top-12 xl:-right-56 xl:w-56 xl:h-56 2xl:top-8 2xl:-right-68 2xl:w-64 2xl:h-64 z-15 cursor-pointer transition-all duration-300 hover:scale-110 hover:-rotate-3 active:scale-95 active:-rotate-6 animate-float-fast"
          onClick={() => scrollToProduct("5")}
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/cer4.png"
              alt="Maceta Pequeña"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Tercera imagen derecha - Fuente Ovalada */}
        <div
          className="absolute bottom-16 -right-12 w-32 h-24 md:bottom-8 md:-right-24 md:w-52 md:h-40 lg:bottom-0 lg:-right-44 lg:w-72 lg:h-56 xl:-bottom-4 xl:-right-56 xl:w-80 xl:h-60 2xl:-bottom-8 2xl:-right-68 2xl:w-88 2xl:h-64 z-25 cursor-pointer transition-all duration-300 hover:scale-110 hover:-rotate-2 active:scale-95 active:-rotate-5 animate-float-reverse"
          onClick={() => scrollToProduct("6")}
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/cer5.png"
              alt="Fuente Ovalada"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

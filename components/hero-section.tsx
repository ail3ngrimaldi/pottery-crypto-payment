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

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Mobile: Layout vertical con imágenes arriba y abajo */}
        <div className="md:hidden flex flex-col items-center justify-center space-y-8">
          {/* Imágenes arriba del texto */}
          <div className="flex space-x-4 z-10">
            <div
              className="w-20 h-24 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-8 animate-float"
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
            <div
              className="w-24 h-32 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-4 active:scale-95 active:rotate-8 animate-float-slow"
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
          </div>

          {/* Contenido de texto */}
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="font-title text-3xl sm:text-4xl font-bold text-white leading-tight px-4">
              Cerámica <span className="text-[var(--color-light)]">Artesanal</span>
            </h1>

            <p className="font-subtitle text-base sm:text-lg text-white/90 leading-relaxed max-w-lg px-4">
              Piezas únicas hechas a mano con dedicación. Cada creación es personalizada, por vos y por mi.
            </p>

            <div className="flex justify-center pt-2">
              <Button
                size="lg"
                className="bg-white text-[var(--color-red)] hover:bg-white/90 font-subtitle text-sm sm:text-base px-6 py-3"
                onClick={() => {
                  const productsSection = document.getElementById("productos-disponibles")
                  productsSection?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Productos Disponibles
              </Button>
            </div>
          </div>

          {/* Imágenes abajo del texto */}
          <div className="flex space-x-4 z-10">
            <div
              className="w-18 h-16 cursor-pointer transition-all duration-300 hover:scale-110 hover:-rotate-2 active:scale-95 active:-rotate-6 animate-float-delayed"
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
            <div
              className="w-20 h-20 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-6 animate-float-fast"
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
          </div>
        </div>

        {/* Desktop: Layout original con texto centrado e imágenes posicionadas */}
        <div className="hidden md:flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 relative z-30">
          <h1 className="font-title text-5xl lg:text-6xl font-bold text-white leading-tight px-4">
            Cerámica <span className="text-[var(--color-light)]">Artesanal</span>
          </h1>

          <p className="font-subtitle text-xl text-white/90 leading-relaxed max-w-lg px-4">
            Piezas únicas hechas a mano con dedicación. Cada creación es personalizada, por vos y por mi.
          </p>

          <div className="flex justify-center pt-2">
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

        {/* Desktop: Imágenes a los costados */}
        <div
          className="hidden md:block absolute -left-32 top-12 w-32 h-40 lg:-left-56 lg:top-4 lg:w-48 lg:h-56 xl:-left-80 xl:-top-4 xl:w-56 xl:h-64 2xl:-left-96 2xl:-top-8 2xl:w-64 2xl:h-72 z-10 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-8 animate-float"
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

        <div
          className="hidden md:block absolute -right-24 -top-4 w-44 h-56 lg:-right-48 lg:-top-12 lg:w-60 lg:h-76 xl:-right-72 xl:-top-20 xl:w-68 xl:h-84 2xl:-right-88 2xl:-top-24 2xl:w-76 2xl:h-92 z-20 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-4 active:scale-95 active:rotate-8 animate-float-slow"
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

        <div
          className="hidden md:block absolute -left-36 bottom-12 w-40 h-32 lg:-left-60 lg:bottom-4 lg:w-52 lg:h-44 xl:-left-84 xl:-bottom-4 xl:w-60 xl:h-48 2xl:-left-104 2xl:-bottom-8 2xl:w-68 2xl:h-52 z-15 cursor-pointer transition-all duration-300 hover:scale-110 hover:-rotate-2 active:scale-95 active:-rotate-6 animate-float-delayed"
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

        <div
          className="hidden md:block absolute top-20 -right-28 w-36 h-36 lg:top-12 lg:-right-52 lg:w-48 lg:h-48 xl:top-4 xl:-right-76 xl:w-56 xl:h-56 2xl:-top-4 2xl:-right-92 2xl:w-64 2xl:h-64 z-15 cursor-pointer transition-all duration-300 hover:scale-110 hover:-rotate-3 active:scale-95 active:-rotate-6 animate-float-fast"
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

        <div
          className="hidden lg:block absolute bottom-4 -right-28 w-52 h-40 lg:-bottom-4 lg:-right-52 lg:w-72 lg:h-56 xl:-bottom-12 xl:-right-76 xl:w-80 xl:h-60 2xl:-bottom-16 2xl:-right-96 2xl:w-88 2xl:h-64 z-25 cursor-pointer transition-all duration-300 hover:scale-110 hover:-rotate-2 active:scale-95 active:-rotate-5 animate-float-reverse"
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

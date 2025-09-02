import { products } from "@/data/products"
import { ProductCard } from "./product-card"

export function ProductGallery() {
  const availableProducts = products.filter((product) => product.available)
  const unavailableProducts = products.filter((product) => !product.available)

  return (
    <section
      id="productos-disponibles"
      className="py-16 px-4"
      style={{
        background:
          "linear-gradient(180deg,rgba(224, 144, 112, 1) 60%, rgba(224, 144, 112, 1) 1%, rgba(189, 99, 64, 1) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-title text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-4">
            Mis Creaciones
          </h2>
          <p className="font-subtitle text-lg text-[var(--color-dark-light)] max-w-2xl mx-auto">
            Cada pieza es única, creada con amor y dedicación. Descubre nuestro historial en cerámica artesanal.
          </p>
        </div>

        {/* Productos disponibles */}
        <div className="mb-12">
          <h3 className="font-subtitle text-xl font-semibold text-[var(--color-dark)] mb-6">Disponibles Ahora</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Productos no disponibles */}
        {unavailableProducts.length > 0 && (
          <div>
            <h3 className="font-subtitle text-xl font-semibold text-[var(--color-dark-light)] mb-6">Pedidos personalizados, espera de un mes o más</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unavailableProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

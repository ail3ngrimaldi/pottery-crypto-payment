"use client"

import type { Product } from "@/types/product"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  return (
    <Card
      id={`product-${product.id}`}
      className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-title text-lg font-semibold text-[var(--color-dark)] leading-tight">{product.name}</h3>
          <Badge
            variant={product.available ? "default" : "secondary"}
            className={product.available ? "bg-[var(--color-olive)] hover:bg-[var(--color-olive-light)]" : ""}
          >
            {product.available ? "Disponible" : "Agotado"}
          </Badge>
        </div>

        <p className="text-sm text-[var(--color-dark-light)] leading-relaxed">{product.description}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="font-subtitle text-xl font-semibold text-[var(--color-blue)]">${product.price}</span>
          <Button
            disabled={!product.available}
            className="bg-[var(--color-red)] hover:bg-[var(--color-red-light)] text-white"
            onClick={() => {
              if (product.available) {
                addItem(product)
                console.log("Producto agregado al carrito:", product.name);
              }
            }}
          >
            {product.available ? "Agregar al carrito" : "No disponible"}
          </Button>
        </div>
      </div>
    </Card>
  )
}

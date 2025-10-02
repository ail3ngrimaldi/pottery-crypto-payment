"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { X, Plus, Minus, Trash2 } from "lucide-react"
import { CheckoutModal } from "@/components/checkout-modal"
import { useState } from "react"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { state, updateQuantity, removeItem, clearCart } = useCart()
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  if (!isOpen) return null

  return (
    <>
    {!isCheckoutOpen && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold font-title">Carrito de Compras</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Cerrar carrito"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto max-h-[60vh]">
          {state.items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                  <img
                    src={item.product.image || "/placeholder.svg"}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.product.name}</h3>
                    <p className="text-[var(--color-blue)] font-semibold">${item.product.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="p-1 hover:bg-red-100 text-red-600 rounded"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {state.items.length > 0 && (
          <div className="p-4 border-t space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold text-[var(--color-blue)]">${state.total.toFixed(2)}</span>
            </div>
            
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={clearCart}
                className="flex-1"
              >
                Vaciar carrito
              </Button>
              <Button
                className="flex-1 bg-[var(--color-red)] hover:bg-[var(--color-red-light)] text-white"
                onClick={() => {
                  setIsCheckoutOpen(true)
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
        </div>
      </div>
    )}
    
    <CheckoutModal 
      isOpen={isCheckoutOpen} 
      onClose={() => setIsCheckoutOpen(false)} 
    />
    </>
  )
}
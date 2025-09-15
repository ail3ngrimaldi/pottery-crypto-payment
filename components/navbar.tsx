"use client"

// import "@reown/appkit-wallet-button/react";
// import "@/config-wallet";
import { useCart } from "@/contexts/cart-context";
import { ShoppingCart } from "lucide-react";
import { CartModal } from "@/components/cart-modal";
import { useState } from "react";

export function Navbar() {
  const { state } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <nav className="sticky bg-transparent">
          <div className="flex top-0 justify-between items-start">
            {/* Logo/Brand Tab */}
            <div className="flex-shrink-0">
              <div className="bg-white px-8 py-4 rounded-br-lg border border-gray-200 shadow-md">
                <h1 className="text-xl font-bold text-gray-900 font-title">
                  Cerámicas by Cami
                </h1>
              </div>
            </div>

            {/* Cart Tab */}
            <div className="flex top-0 items-center space-x-4">
              {/* Cart Button */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="bg-white px-4 py-4 rounded-bl-lg border border-gray-200 shadow-md hover:bg-gray-50 transition-colors"
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-gray-700" />
                  {state.itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {state.itemCount}
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>
      </nav>
      
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  )
}
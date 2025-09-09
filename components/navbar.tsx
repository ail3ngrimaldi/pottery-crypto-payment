"use client"

import "@reown/appkit-wallet-button/react";
import "@/config-wallet";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start pt-4">
          {/* Logo/Brand Tab */}
          <div className="flex-shrink-0">
            <div className="bg-opacity-0 px-8 py-4 rounded-t-lg border border-gray-200 shadow-md">
              <h1 className="text-xl font-bold text-gray-900 font-title">
                Cerámicas by Ailu
              </h1>
            </div>
          </div>

          {/* Wallet Connection Button Tab */}
          <div className="flex items-center">
            <div className="bg-white px-6 py-4 rounded-t-lg border border-gray-200 shadow-md">
              <appkit-connect-button 
                size="md" 
                label="Conectar Wallet" 
                loadingLabel="Conectando..."
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { X, CreditCard, Wallet } from "lucide-react"
import React, { useState } from "react"
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { parseUnits } from "viem"
import "@reown/appkit-wallet-button/react"
import "@/config-wallet"

// USDC Contract Address en Sepolia (testnet)
const USDC_CONTRACT_SEPOLIA = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8"
// Tu address de destino (reemplazar con tu address real)
const RECIPIENT_ADDRESS = "0x445D72E4705976c4a4737e75d1503B842fD8E2eC" // Address testnet

// ABI mínimo para transferencia USDC
const USDC_ABI = [
  {
    name: 'transfer',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'bool' }]
  }
] as const

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { state, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState<"traditional" | "crypto" | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  
  // Hooks de Wagmi
  const { address, isConnected } = useAccount()
  const { writeContract, data: hash, isPending: isWritePending, error } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const handleCryptoPayment = async () => {
    if (!isConnected || !address) {
      alert("Por favor conecta tu wallet primero")
      return
    }

    if (RECIPIENT_ADDRESS === "0x...") {
      alert("Error: Address de destino no configurado")
      return
    }

    setIsProcessing(true)
    
    try {
      // Convertir el total a unidades USDC (6 decimales)
      const amountInWei = parseUnits(state.total.toString(), 6)
      
      console.log("Enviando transacción USDC:", {
        to: RECIPIENT_ADDRESS,
        amount: amountInWei.toString(),
        total: state.total
      })

      // Ejecutar la transacción USDC
      writeContract({
        address: USDC_CONTRACT_SEPOLIA,
        abi: USDC_ABI,
        functionName: 'transfer',
        args: [RECIPIENT_ADDRESS as `0x${string}`, amountInWei],
      })

    } catch (error) {
      console.error("Error procesando pago:", error)
      alert("Error procesando el pago. Inténtalo nuevamente.")
      setIsProcessing(false)
    }
  }

  // Effect para manejar el estado de la transacción
  React.useEffect(() => {
    if (isConfirmed) {
      clearCart()
      onClose()
      alert("¡Pago exitoso! Transacción confirmada.")
      setIsProcessing(false)
    }
    if (error) {
      console.error("Transaction error:", error)
      alert("Error en la transacción: " + error.message)
      setIsProcessing(false)
    }
  }, [isConfirmed, error, clearCart, onClose])

  const handleTraditionalPayment = () => {
    // TODO: Implement traditional payment (credit card, etc.)
    alert("Pronto disponible - Pago tradicional")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold font-title">Checkout</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded"
            disabled={isProcessing}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Resumen del Pedido</h3>
            <div className="space-y-1 text-sm">
              {state.items.map((item) => (
                <div key={item.product.id} className="flex justify-between">
                  <span>{item.product.name} x{item.quantity}</span>
                  <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-1 mt-2 font-semibold flex justify-between">
                <span>Total:</span>
                <span className="text-[var(--color-blue)]">${state.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-3">
            <h3 className="font-semibold">Método de Pago</h3>
            
            {/* Crypto Payment Option */}
            <button
              onClick={() => setPaymentMethod("crypto")}
              className={`w-full p-4 border-2 rounded-lg flex items-center space-x-3 transition-colors ${
                paymentMethod === "crypto" 
                  ? "border-[var(--color-blue)] bg-blue-50" 
                  : "border-gray-200 hover:border-gray-300"
              }`}
              disabled={isProcessing}
            >
              <Wallet className="h-6 w-6 text-[var(--color-blue)]" />
              <div className="flex-1 text-left">
                <div className="font-medium">Pago con USDC</div>
                <div className="text-sm text-gray-500">
                  Pago seguro con stablecoin en Ethereum/Polygon
                </div>
              </div>
            </button>

            {/* Traditional Payment Option */}
            <button
              onClick={() => setPaymentMethod("traditional")}
              className={`w-full p-4 border-2 rounded-lg flex items-center space-x-3 transition-colors ${
                paymentMethod === "traditional" 
                  ? "border-[var(--color-blue)] bg-blue-50" 
                  : "border-gray-200 hover:border-gray-300"
              }`}
              disabled={isProcessing}
            >
              <CreditCard className="h-6 w-6 text-gray-600" />
              <div className="flex-1 text-left">
                <div className="font-medium">Pago Tradicional</div>
                <div className="text-sm text-gray-500">
                  Tarjeta de crédito, débito, transferencia
                </div>
              </div>
            </button>
          </div>

          {/* Payment Actions */}
          <div className="pt-4 space-y-3">
            {paymentMethod === "crypto" && (
              <div className="space-y-3">
                <div className="text-center">
                  {!isConnected ? (
                    <>
                      <p className="text-sm text-gray-600 mb-3">
                        Conecta tu wallet para pagar con USDC
                      </p>
                      <div className="flex justify-center">
                        <appkit-connect-button 
                          size="md" 
                          label="Conectar Wallet" 
                          loadingLabel="Conectando..."
                        />
                      </div>
                    </>
                  ) : (
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm text-green-800">
                        ✓ Wallet conectada: {address?.slice(0, 6)}...{address?.slice(-4)}
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        Red: Sepolia Testnet
                      </p>
                    </div>
                  )}
                </div>
                
                <Button
                  onClick={handleCryptoPayment}
                  disabled={!isConnected || isProcessing || isWritePending || isConfirming}
                  className="w-full bg-[var(--color-blue)] hover:bg-blue-600 text-white disabled:opacity-50"
                >
                  {isWritePending ? "Confirmando en wallet..." : 
                   isConfirming ? "Esperando confirmación..." :
                   isProcessing ? "Procesando..." : 
                   `Pagar $${state.total.toFixed(2)} con USDC`}
                </Button>
                
                {hash && (
                  <div className="text-center">
                    <p className="text-xs text-gray-600">
                      Hash de transacción: 
                      <span className="font-mono"> {hash.slice(0, 10)}...{hash.slice(-8)}</span>
                    </p>
                  </div>
                )}
              </div>
            )}

            {paymentMethod === "traditional" && (
              <Button
                onClick={handleTraditionalPayment}
                disabled={isProcessing}
                className="w-full bg-[var(--color-red)] hover:bg-[var(--color-red-light)] text-white"
              >
                Pagar con Método Tradicional
              </Button>
            )}

            {!paymentMethod && (
              <div className="text-center text-gray-500 text-sm">
                Selecciona un método de pago para continuar
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
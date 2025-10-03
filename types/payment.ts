// Base types for crypto payment system

// Information of a token, needed to support being used for payments

export interface PaymentToken {
  symbol: string // "ETH", "USDC", "USDT"
  name: string // "Ethereum", "USD Coin"
  address?: `0x${string}` // undefined = native ETH
  decimals: number // 18 = ETH, 6 = USDC
  chainId: number // 1 = mainnet, 137 = Polygon
  icon?: string // URL of icont token
  isNative: boolean // true = ETH, false = ERC-20
}

// Possible states of a payment
export enum PaymentStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  CONFIRMING = 'confirming',
  CONFIRMED = 'confirmed',
  FAILED = 'failed',
  EXPIRED = 'expired'
}

// Payment request that is sent to the processor
export interface PaymentRequest {
  amount: string // "100.50" human-readable format
  token: PaymentToken // Selected token for payment
  recipient: `0x${string}` // Address of the receiver (commerce)
  orderId: string // unique ID
  metadata?: {
    customerEmail?: string
    items?: Array<{
      id: string
      name: string
      quantity: number
      price: number
    }>
  }
}

// Result of processed payment
export interface PaymentResult {
  success: boolean
  transactionHash?: `0x${string}`
  error?: string
  timestamp: number
  gasUsed?: bigint
  blockNumber?: number
}

// Complete state of a Payment in process
export interface PaymentState {
  status: PaymentStatus
  request?: PaymentRequest
  result?: PaymentResult
  error?: string
  retryCount: number
  estimatedGas?: bigint
  createdAt: number
  updatedAt: number
}

// Config for gas estimation
export interface GasEstimation {
  gasLimit: bigint
  gasPrice: bigint
  maxFeePerGas?: bigint
  maxPriorityFeePerGas?: bigint
  totalCostInWei: bigint
  totalCostFormatted: string
}

// Events that the payment system can emmit
export interface PaymentEvents {
  onPaymentInitiated: (request: PaymentRequest) => void
  onPaymentPending: (txHash: string) => void
  onPaymentConfirming: (txHash: string, blockNumber: number) => void
  onPaymentConfirmed: (result: PaymentResult) => void
  onPaymentFailed: (error: string) => void
  onPaymentExpired: (orderId: string) => void
}
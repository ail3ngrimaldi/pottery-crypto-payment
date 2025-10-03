// Configuration and consts for payment system
import type { PaymentToken } from './payment'

// Config for payment application
export interface PaymentConfig {
  // Address of the receiver (commerce)
  merchantAddress: `0x${string}`
  // Tokens supported by chain
  supportedTokens: Record<number, PaymentToken[]>
  // Timeouts
  timeouts: {
    transactionConfirmation: number
    paymentExpiration: number
    retryInterval: number
  }
  // Retrials
  retry: {
    maxAttempts: number
    backoffMultiplier: number
  }
  // Network explorators, urls
  explorers: Record<number, string>
  // Gas config
  gas: {
    bufferPercentage: number // extra gas for security
    maxGasPrice: bigint // gas max price in wei
    priorityFee: bigint // priority fee in wei
  }
}

// Dev/testing environment
export interface DevConfig {
  enableTestnet: boolean
  mockTransactions: boolean
  skipGasEstimation: boolean
  debugMode: boolean
}

// Standar system errors
export enum PaymentErrorCode {
  INSUFFICIENT_BALANCE = 'INSUFFICIENT_BALANCE',
  INVALID_TOKEN = 'INVALID_TOKEN',
  INVALID_AMOUNT = 'INVALID_AMOUNT',
  INVALID_RECIPIENT = 'INVALID_RECIPIENT',
  NETWORK_ERROR = 'NETWORK_ERROR',
  USER_REJECTED = 'USER_REJECTED',
  GAS_ESTIMATION_FAILED = 'GAS_ESTIMATION_FAILED',
  TRANSACTION_FAILED = 'TRANSACTION_FAILED',
  TIMEOUT = 'TIMEOUT',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

// Detailed error info
export interface PaymentError {
  code: PaymentErrorCode
  message: string
  details?: any
  timestamp: number
  orderId?: string
  txHash?: `0x${string}`
}

// Config custom hooks
export interface HookConfig {
  // Interval polling for transactions state (ms)
  pollingInterval: number
  // Failed auto-retry
  autoRetry: boolean
  // Cache balances (ms)
  balanceCacheTime: number
  // Cache of gas estimations (ms)
  gasEstimationCacheTime: number
}
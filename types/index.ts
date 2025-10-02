// SSOT Exports for payment system

// Base types for payments
export type {
  PaymentToken,
  PaymentRequest,
  PaymentResult,
  PaymentState,
  GasEstimation,
  PaymentEvents
} from './payment'

export { PaymentStatus } from './payment'

// Interfaces of services
export type {
  IPaymentStrategy,
  ITokenService,
  ITransactionService,
  IPaymentProcessorFactory,
  IPaymentService
} from './services'

// Configurations and consts - no tiene mucho sentido
export type {
  PaymentConfig,
  DevConfig,
  PaymentError,
  HookConfig
} from './config'

export { PaymentErrorCode } from './config'

// Re-exports of existing types that we need
export type { CartItem } from '@/contexts/cart-context'
export type { Product } from '@/types/product'
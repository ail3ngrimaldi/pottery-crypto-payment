// Service interfaces following Dependency Inversion Principle

import type { PaymentRequest, PaymentResult, PaymentToken, GasEstimation } from './payment'

// Strategy Pattern - Different payment strategies
export interface IPaymentStrategy {
  // Validates if payment can be processed
  validatePayment(request: PaymentRequest): Promise<{
    isValid: boolean
    error?: string
  }>

  // Executes payment using specific strategy
  executePayment(request: PaymentRequest): Promise<PaymentResult>

  // Estimates gas needed for transaction
  estimateGas(request: PaymentRequest): Promise<GasEstimation>

  // Checks user balance
  checkBalance(token: PaymentToken, userAddress: `0x${string}`): Promise<{
    balance: bigint
    formatted: string
    isInsufficient: boolean
  }>
}

// Service for token management
export interface ITokenService {
  // Gets list of supported tokens
  getSupportedTokens(chainId?: number): PaymentToken[]

  // Gets specific token information
  getTokenInfo(symbolOrAddress: string): PaymentToken | null

  // Gets token balance for an address
  getTokenBalance(token: PaymentToken, address: `0x${string}`): Promise<{
    raw: bigint
    formatted: string
  }>

  // Converts human-readable amount to blockchain format
  parseAmount(amount: string, token: PaymentToken): bigint

  // Converts blockchain amount to human-readable format
  formatAmount(amount: bigint, token: PaymentToken): string

  // Validates if address is a valid token contract
  validateTokenContract(address: `0x${string}`, chainId: number): Promise<boolean>
}

// Service for transaction tracking
export interface ITransactionService {
  // Monitors transaction status
  watchTransaction(txHash: `0x${string}`): Promise<{
    status: 'pending' | 'confirmed' | 'failed'
    blockNumber?: number
    gasUsed?: bigint
  }>

  // Gets transaction receipt
  getTransactionReceipt(txHash: `0x${string}`): Promise<{
    success: boolean
    blockNumber: number
    gasUsed: bigint
    logs: any[]
  } | null>

  // Checks if transaction was successful
  isTransactionSuccessful(txHash: `0x${string}`): Promise<boolean>
}

// Factory Pattern - Create different payment processors
export interface IPaymentProcessorFactory {
  // Creates appropriate processor based on token
  createProcessor(token: PaymentToken): IPaymentStrategy

  // Registers new payment strategy
  registerStrategy(tokenType: 'native' | 'erc20', strategy: IPaymentStrategy): void
}

// Main service that orchestrates payments
export interface IPaymentService {
  // Processes complete payment
  processPayment(request: PaymentRequest): Promise<PaymentResult>

  // Validates payment before processing
  validatePayment(request: PaymentRequest): Promise<{
    isValid: boolean
    errors: string[]
    warnings: string[]
  }>

  // Gets cost estimation
  estimatePaymentCost(request: PaymentRequest): Promise<GasEstimation>

  // Cancels payment in progress
  cancelPayment(orderId: string): Promise<boolean>
}
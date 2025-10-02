import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, polygon, sepolia } from '@reown/appkit/networks'

// Configurar el adapter Wagmi
const wagmiAdapter = new WagmiAdapter({
  projectId: '62ff31ebf28a41e9407071214cb6e4e3',
  networks: [mainnet, polygon, sepolia]
})

// Configuración de AppKit con Wagmi adapter
export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, polygon, sepolia],
  projectId: '62ff31ebf28a41e9407071214cb6e4e3',
  metadata: {
    name: 'Cerámicas by Cami',
    description: 'Cerámica Artesanal - Pagos con Crypto',
    url: 'https://pottery-crypto.com',
    icons: ['https://pottery-crypto.com/icon.png']
  },
  features: {
    analytics: false,
    onramp: false,
    swaps: false,
    email: false,
    socials: []
  }
})

export { wagmiAdapter }
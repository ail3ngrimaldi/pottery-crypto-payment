import { createAppKit } from '@reown/appkit'
import { mainnet, polygon } from '@reown/appkit/networks'

// Configuración de AppKit para web components
export const appKit = createAppKit({
  projectId: '62ff31ebf28a41e9407071214cb6e4e3',
  networks: [mainnet, polygon],
  metadata: {
    name: 'Cerámicas by Ailu',
    description: 'Cerámica Artesanal - Pagos con Crypto',
    url: 'https://pottery-crypto.com',
    icons: ['https://pottery-crypto.com/icon.png']
  },
  features: {
    analytics: true
  }
})
declare namespace JSX {
  interface IntrinsicElements {
    'appkit-button': {
      disabled?: boolean;
      balance?: 'show' | 'hide';
      size?: 'md' | 'sm';
      label?: string;
      loadingLabel?: string;
      namespace?: 'eip155' | 'solana' | 'bip122';
    };
    'appkit-connect-button': {
      size?: 'md' | 'sm';
      label?: string;
      loadingLabel?: string;
    };
    'appkit-account-button': {
      disabled?: boolean;
      balance?: 'show' | 'hide';
    };
    'appkit-network-button': {
      disabled?: boolean;
    };
    'appkit-wallet-button': {
      wallet?: string;
      namespace?: 'eip155' | 'solana' | 'bip122';
    };
  }
}
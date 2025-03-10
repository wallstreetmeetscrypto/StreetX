import React, { createContext, useState, ReactNode } from "react";

// Define the type for your wallet context
interface WalletContextType {
  walletConnected: boolean;
  walletConnect: () => void;
  walletDisconnect: () => void;
}

// Create the wallet context with a correct default value
export const WalletContext = createContext<WalletContextType>({
  walletConnected: false,
  walletConnect: () => {},
  walletDisconnect: () => {},
});

interface WalletProviderProps {
  children: ReactNode;
}

// Define the wallet provider component
export function WalletProvider({ children }: WalletProviderProps) {
  const [walletConnected, setWalletConnected] = useState(false);

  const walletConnect = () => {
    setWalletConnected(true);
  };

  const walletDisconnect = () => {
    setWalletConnected(false);
  };

  const walletContextValue: WalletContextType = {
    walletConnected,
    walletConnect,
    walletDisconnect,
  };

  return (
    <WalletContext.Provider value={walletContextValue}>
      {children}
    </WalletContext.Provider>
  );
}


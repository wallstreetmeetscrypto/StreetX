'use client'
import { ModalProvider } from "@/contexts/ModalContext";
import { WalletProvider } from "@/contexts/WalletContext";
import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ModalProvider>
        <WalletProvider>
          {children}
        </WalletProvider>
      </ModalProvider>
    </HeroUIProvider>
  )
}
"use client";

import { createContext, useContext } from "react";
import { WalletDialog } from "@/components/wallet-dialog";
import {
  ConnectionProvider,
  WalletProvider as WalletAdapterProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  CoinbaseWalletAdapter,
  LedgerWalletAdapter,
  TorusWalletAdapter,
  // SkyWalletAdapter,
  // MathWalletAdapter,
  // NekoWalletAdapter,
  // NufiWalletAdapter,
  // OntoWalletAdapter,
  // SpotWalletAdapter,
  // AlphaWalletAdapter,
  // AvanaWalletAdapter,
  // HuobiWalletAdapter,
  // SaifuWalletAdapter,
  // TrustWalletAdapter,
  // BitgetWalletAdapter,
  // BitpieWalletAdapter,
  // CloverWalletAdapter,
  // Coin98WalletAdapter,
  // SalmonWalletAdapter,
  // SolongWalletAdapter,
  // TrezorWalletAdapter,
  // CoinhubWalletAdapter,
  // FractalWalletAdapter,
  // KrystalWalletAdapter,
  // NightlyWalletAdapter,
  // TokenaryWalletAdapter,
  // KeystoneWalletAdapter,
  // TokenPocketWalletAdapter,
  // SafePalWalletAdapter,
  // HyperPayWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { useMemo, useState } from "react";
import { RPC_URL } from "@/constants";

interface WalletDialogContext {
  isVisible: boolean;
  setIsVisible: (open: boolean) => void;
}

export const WalletDialogContext = createContext<
  WalletDialogContext | undefined
>(undefined);

export function useWalletDialog(): WalletDialogContext {
  const context = useContext(WalletDialogContext);
  if (!context)
    throw new Error("useWalletDialog must be used within WalletDialogProvider");
  return context;
}

export const WalletProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const wallets = useMemo(() => {
    return [
      new SolflareWalletAdapter(),
      new PhantomWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new CoinbaseWalletAdapter(),
      // new SkyWalletAdapter(),
      // new MathWalletAdapter(),
      // new NekoWalletAdapter(),
      // new NufiWalletAdapter(),
      // new OntoWalletAdapter(),
      // new SpotWalletAdapter(),
      // new AlphaWalletAdapter(),
      // new AvanaWalletAdapter(),
      // new HuobiWalletAdapter(),
      // new SaifuWalletAdapter(),
      // new TrustWalletAdapter(),
      // new BitgetWalletAdapter(),
      // new BitpieWalletAdapter(),
      // new CloverWalletAdapter(),
      // new Coin98WalletAdapter(),
      // new SalmonWalletAdapter(),
      // new SolongWalletAdapter(),
      // new TrezorWalletAdapter(),
      // new CoinhubWalletAdapter(),
      // new FractalWalletAdapter(),
      // new KrystalWalletAdapter(),
      // new NightlyWalletAdapter(),
      // new TokenaryWalletAdapter(),
      // new KeystoneWalletAdapter(),
      // new TokenPocketWalletAdapter(),
      // new SafePalWalletAdapter(),
      // new HyperPayWalletAdapter(),
    ];
  }, []);

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => RPC_URL, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletAdapterProvider wallets={wallets} autoConnect>
        {children}
      </WalletAdapterProvider>
    </ConnectionProvider>
  );
};

const WalletDialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <WalletDialogContext.Provider
      value={{
        isVisible: isVisible,
        setIsVisible: setIsVisible,
      }}
    >
      {children}
      <WalletDialog />
    </WalletDialogContext.Provider>
  );
};

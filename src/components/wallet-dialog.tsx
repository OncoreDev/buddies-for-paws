"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMounted } from "@/hooks/use-mounted";
import { WalletName } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import { ChevronRight, Circle, Star } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useWalletDialog } from "@/providers/wallet-provider";

export function WalletDialog() {
  const { isVisible, setIsVisible } = useWalletDialog();
  const { wallets, select } = useWallet();
  const mounted = useMounted();

  const [popular, installed, available] = useMemo(() => {
    return wallets.reduce(
      (acc, wallet) => {
        if (wallet.adapter.name === "Solflare") {
          acc[0].push(wallet);
        } else if (wallet.readyState === "Installed") {
          acc[1].push(wallet);
        } else {
          acc[2].push(wallet);
        }
        return acc;
      },
      [[], [], []] as [typeof wallets, typeof wallets, typeof wallets],
    );
  }, [wallets]);

  function handleWalletClick(walletName: WalletName) {
    select(walletName);
    setIsVisible(false);
  }

  return (
    <Dialog open={isVisible} onOpenChange={setIsVisible}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Connect Wallet</DialogTitle>
        </DialogHeader>

        {mounted && (
          <div className="flex flex-col gap-2">
            {popular.map((wallet) => (
              <Button
                key={wallet.adapter.name}
                variant={"outline"}
                size={"lg"}
                className="group justify-start"
                onClick={() => handleWalletClick(wallet.adapter.name)}
              >
                <Image
                  src={wallet.adapter.icon}
                  alt={`${wallet.adapter.name} icon`}
                  height={28}
                  width={28}
                  className="-ml-2 rounded-xs"
                />

                <p>{wallet.adapter.name}</p>

                <div className="-mr-2 ml-auto flex items-center gap-2">
                  <Star className="fill-warning text-warning -mr-1 size-3" />
                  <p className="text-xs font-normal">Recommended</p>
                  <ChevronRight className="-ml-2 size-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
                </div>
              </Button>
            ))}

            {installed.map((wallet) => (
              <Button
                key={wallet.adapter.name}
                variant={"outline"}
                size={"lg"}
                className="group justify-start"
                onClick={() => handleWalletClick(wallet.adapter.name)}
              >
                <Image
                  src={wallet.adapter.icon}
                  alt={`${wallet.adapter.name} icon`}
                  height={28}
                  width={28}
                  className="-ml-2 rounded-xs"
                />

                <p>{wallet.adapter.name}</p>

                <div className="-mr-2 ml-auto flex items-center gap-2">
                  <Circle className="fill-info text-info -mr-1 size-2" />
                  <p className="text-xs font-normal">Installed</p>
                  <ChevronRight className="-ml-2 size-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
                </div>
              </Button>
            ))}

            {!!installed.length && (
              <div className="my-2 flex items-center gap-2">
                <Separator className="w-auto shrink grow" />
                <p className="text-muted-foreground shrink-0 text-xs">
                  More wallet options
                </p>
                <Separator className="w-auto shrink grow" />
              </div>
            )}

            {available.map((wallet) => (
              <Button
                key={wallet.adapter.name}
                variant={"outline"}
                size={"lg"}
                className="group justify-start"
                onClick={() => handleWalletClick(wallet.adapter.name)}
              >
                <Image
                  src={wallet.adapter.icon}
                  alt={`${wallet.adapter.name} icon`}
                  height={28}
                  width={28}
                  className="-ml-2 rounded-xs"
                />

                <p>{wallet.adapter.name}</p>

                <div className="-mr-2 ml-auto flex items-center gap-2">
                  <ChevronRight className="-ml-2 size-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
                </div>
              </Button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

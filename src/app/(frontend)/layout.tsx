import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WalletProvider } from "@/providers/wallet-provider";
import { SanityLive } from "@/sanity/lib/live";
import { Toaster } from "react-hot-toast";
import "../globals.css";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TooltipProvider delayDuration={200}>
        <WalletProvider>
          <Nav />
          {children}
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: "!rounded-lg",
            }}
          />
        </WalletProvider>
      </TooltipProvider>
      <SanityLive />
    </>
  );
}

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WalletProvider } from "@/providers/wallet-provider";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { Toaster } from "react-hot-toast";
import "../globals.css";
import { BeABuddyPopup } from "@/components/be-a-buddy-popup";
import { JOURNEYS_QUERY } from "@/sanity/lib/queries";

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await sanityFetch({ query: JOURNEYS_QUERY });

  return (
    <>
      <TooltipProvider delayDuration={200}>
        <WalletProvider>
          <Nav journeys={data} />
          {children}
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: "!rounded-lg",
            }}
          />
          <BeABuddyPopup />
        </WalletProvider>
      </TooltipProvider>
      <SanityLive />
    </>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";

const STORAGE_KEY = "cookie-consent";

export type CookieConsent = "accepted" | "rejected" | null;

interface CookieConsentContext {
  consent: CookieConsent;
  hasAnswered: boolean;
  accept: () => void;
  reject: () => void;
}

const CookieConsentContext = createContext<CookieConsentContext | undefined>(
  undefined,
);

export function useCookieConsent(): CookieConsentContext {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error(
      "useCookieConsent must be used within CookieConsentProvider",
    );
  }

  return context;
}

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [consent, setConsent] = useState<CookieConsent>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as CookieConsent;

    if (saved === "accepted" || saved === "rejected") {
      setConsent(saved);
    }
  }, []);

  const accept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  }, []);

  const reject = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setConsent("rejected");
  }, []);

  const value = useMemo(
    () => ({
      consent,
      hasAnswered: consent !== null,
      accept,
      reject,
    }),
    [consent, accept, reject],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}

      {consent === "accepted" && (
        <>
          <GoogleTagManager gtmId="GTM-W3W7TVPV" />
          <GoogleAnalytics gaId="G-0C67RBPTW7" />
        </>
      )}

      <CookieConsentBanner />
    </CookieConsentContext.Provider>
  );
}

"use client";

import { useCookieConsent } from "@/providers/cookie-consent-provider";
import { Button } from "./ui/button";

export function CookieConsentBanner() {
  const { hasAnswered, accept, reject } = useCookieConsent();

  if (hasAnswered) return null;

  return (
    <div className="bg-yellow text-orange fixed right-4 bottom-4 left-4 z-50 max-w-xl rounded-lg p-6">
      <h3 className="font-cooper text-xl">Cookie Preferences</h3>

      <p className="mt-2 text-sm">
        By clicking "Accept", you consent to the use of Google Analytics cookies
        to help us understand website usage and improve your experience.
      </p>

      <div className="mt-4 flex justify-end gap-2">
        <Button onClick={reject} size={"sm"} variant={"orange-outline"}>
          Reject
        </Button>

        <Button onClick={accept} size={"sm"}>
          Accept
        </Button>
      </div>
    </div>
  );
}

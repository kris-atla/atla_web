"use client";

import React, { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";

export default function CookieBanner() {
  const [isMounted, setIsMounted] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check initial value on mount
    const consent = getCookieConsentValue("cookie_consent_analytics");
    if (consent === "true") {
      setConsentGiven(true);
    }
  }, []);

  const handleAccept = () => {
    setConsentGiven(true);
  };

  const handleDecline = () => {
    setConsentGiven(false);
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Conditionally render Analytics based on consent state */}
      {consentGiven && <Analytics />}

      <CookieConsent
        location="bottom"
        buttonText="Acceptera"
        declineButtonText="Neka"
        cookieName="cookie_consent_analytics"
        style={{ background: "#000000", borderTop: "1px solid #333", alignItems: "center", zIndex: 99999 }}
        buttonStyle={{ 
          background: "#2563eb", 
          color: "white", 
          fontSize: "14px", 
          fontWeight: "bold", 
          borderRadius: "0px",
          padding: "10px 20px",
          border: "2px solid white"
        }}
        declineButtonStyle={{ 
          background: "transparent", 
          color: "#9ca3af", 
          fontSize: "14px", 
          marginRight: "10px",
          border: "none",
          textDecoration: "underline" 
        }}
        expires={180}
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleDecline}
      >
        <span className="text-sm text-gray-300">
          Vi använder cookies för att analysera trafik och förbättra din upplevelse.{" "}
          <Link href="/integritetspolicy" className="text-white underline hover:text-blue-400">
            Läs vår integritetspolicy
          </Link>.
        </span>
      </CookieConsent>
    </>
  );
}

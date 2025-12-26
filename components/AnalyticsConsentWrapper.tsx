"use client";

import React, { useState, useEffect } from "react";
// We import CookieBanner dynamically or statically - since it's a client component, standard import is fine.
// However, to avoid circular dependencies if CookieBanner ends up needing something else, we keep it simple.
import CookieBanner from "@/components/CookieBanner";

interface AnalyticsConsentWrapperProps {
  analytics: React.ReactNode;
}

export default function AnalyticsConsentWrapper({ analytics }: AnalyticsConsentWrapperProps) {
  const [consentGiven, setConsentGiven] = useState(false);

  return (
    <>
      <CookieBanner onConsentChange={setConsentGiven} />
      {consentGiven && analytics}
    </>
  );
}

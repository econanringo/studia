'use client';

import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import getConfig from '@/components/CookieConsentConfig';
import { analytics, setAnalyticsCollectionEnabled } from "@/lib/firebaseConfig";

const CookieConsentComponent = () => {
  const handleAnalyticsConsentChange = (hasConsent: boolean) => {
    console.log("Analytics consent changed:", hasConsent);
    if (analytics) {
      setAnalyticsCollectionEnabled(analytics, hasConsent);
    }
  };

  useEffect(() => {
    const config = getConfig();

    // onConsent のハンドラを追加
    config.onConsent = ({ cookie }) => {
      const hasAnalyticsConsent = cookie.categories.includes('analytics');
      handleAnalyticsConsentChange(hasAnalyticsConsent);
    };

    CookieConsent.run(config);
  }, []);

  return (
    <div>
      <button type="button" onClick={CookieConsent.showPreferences}>
        Manage cookie preferences
      </button>
    </div>
  );
};

export default CookieConsentComponent;

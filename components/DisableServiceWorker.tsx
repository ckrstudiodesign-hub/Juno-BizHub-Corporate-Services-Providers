"use client";

import { useEffect } from "react";

export default function DisableServiceWorker() {
  useEffect(() => {
    const clearOldCaches = async () => {
      try {
        if ("serviceWorker" in navigator) {
          const registrations = await navigator.serviceWorker.getRegistrations();
          await Promise.all(registrations.map((registration) => registration.unregister()));
        }

        if ("caches" in window) {
          const cacheKeys = await caches.keys();
          await Promise.all(cacheKeys.map((key) => caches.delete(key)));
        }
      } catch {
        // Intentionally silent: cache cleanup should never block page rendering.
      }
    };

    clearOldCaches();
  }, []);

  return null;
}

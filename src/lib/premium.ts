import { useEffect, useState } from "react";

const KEY = "ilpt-premium";

export function isPremium() {
  if (typeof window === "undefined") return false;
  try { return localStorage.getItem(KEY) === "1"; } catch { return false; }
}

export function setPremium(v: boolean) {
  try { localStorage.setItem(KEY, v ? "1" : "0"); } catch {}
  window.dispatchEvent(new Event("premium-change"));
}

export function usePremium() {
  const [premium, setState] = useState(false);
  useEffect(() => {
    setState(isPremium());
    const handler = () => setState(isPremium());
    window.addEventListener("premium-change", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("premium-change", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);
  return premium;
}

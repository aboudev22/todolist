import { useEffect, useState } from "react";

/**
 * Hook qui retourne l'heure locale exacte de l'utilisateur,
 * mise à jour automatiquement chaque seconde.
 */

export default function useHeaderDate(): Date {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return now;
}

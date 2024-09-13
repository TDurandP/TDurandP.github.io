import { useState, useEffect } from 'react';

const useCooldown = (initialCooldown = 0) => {
  const [cooldown, setCooldown] = useState(initialCooldown);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const startCooldown = (duration : number) => {
    setCooldown(duration);
  };

  return [cooldown, startCooldown];
};

export default useCooldown;
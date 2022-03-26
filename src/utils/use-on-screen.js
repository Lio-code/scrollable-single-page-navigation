import { useState, useEffect } from 'react';

//IntersectionObserver web api
//https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API#concepts_et_utilisation_de_lobservateur_dintersections

export const useOnScreen = (ref) => {
  const [isOnScreen, setOnScreen] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => setOnScreen(entry.isIntersecting),
    {
      threshold: [0.25, 0.5, 0.75],
    }
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  });

  return isOnScreen;
};

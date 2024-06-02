// hooks/useScrollProgress.tsx
import { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (docHeight) {
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(parseFloat(progress.toFixed(2)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollProgress;
};

export default useScrollProgress;

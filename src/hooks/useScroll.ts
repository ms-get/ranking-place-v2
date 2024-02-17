import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight } = document.documentElement;
      if (1 - scrollTop / clientHeight < 0) setScrollOpacity(0);
      else setScrollOpacity(1 - scrollTop / clientHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scaleImageSize = 1.3 - (scrollOpacity / 10) * 3;

  return { scaleImageSize, scrollOpacity };
};

import "./style.css";
import { useState, useEffect } from "react";

export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameTicking = false;
    let resizeTimeoutId = null;

    updateScrollProgres();

    function updateScrollProgres() {
      const scrolled = document.documentElement.clientHeight + window.scrollY;
      const status = scrolled / document.documentElement.scrollHeight;
      setScrollProgress(Math.round(status * 100));
    }

    function onScroll() {
      if (!animationFrameTicking) {
        window.requestAnimationFrame(() => {
          updateScrollProgres();
          animationFrameTicking = false;
        });
        animationFrameTicking = true;
      }
    }

    function onResize() {
      clearTimeout(resizeTimeoutId);
      resizeTimeoutId = setTimeout(() => {
        updateScrollProgres();
      }, 300);
    }

    document.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="progressbar">
      <div className="inner" style={{ width: scrollProgress + "%" }} />
    </div>
  );
};

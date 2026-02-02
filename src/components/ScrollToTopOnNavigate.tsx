import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnNavigate = () => {
  const { pathname, hash } = useLocation();
  const isInitialLoad = useRef(true);

  // Use useLayoutEffect to scroll to top BEFORE paint on initial page load
  useLayoutEffect(() => {
    // Always scroll to top on initial page load, regardless of hash
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    // Skip hash-based scrolling on initial load
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    // If there's a hash (from user click), scroll to that element
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // No hash, scroll to top instantly on navigation
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTopOnNavigate;

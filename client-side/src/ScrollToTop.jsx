// Method 1: Using useEffect in your main router component
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"; // Disable browser scroll restoration
    }
    window.scrollTo(0, 0); // Instantly reset scroll to top
  }, [pathname]);
  return null;
}
export default ScrollToTop;

import { useEffect, useState, useCallback } from "react";
import { useWindowScroll } from "react-use";

export function useScroll() {
  //Window scroll custom hooks
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);
  const scrollToTop = useCallback(
    () => window.scrollTo({ top: 0, behavior: "smooth" }),
    []
  );

  useEffect(() => {
    scrollToTop();
    return () => scrollToTop();
  }, [scrollToTop]);
  useEffect(() => {
    if (pageYOffset > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    return () => {
      if (pageYOffset > 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  }, [pageYOffset]);

  return [visible, scrollToTop];
}

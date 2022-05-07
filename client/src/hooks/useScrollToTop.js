import { useEffect } from 'react';
import { animateScroll } from 'react-scroll';

export default function useScroll() {
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);
}

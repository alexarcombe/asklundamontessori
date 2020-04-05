import { useState, useEffect } from 'react';

function useWindowSize() {
  const isClient = typeof window === 'object';

  const [windowSize, setWindowSize] = useState(getSize);

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    let width;

    let height;

    function handleResize() {
      width = isClient ? window.innerWidth : undefined;
      height = isClient ? window.innerHeight : undefined;
      setWindowSize({ width, height });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export default useWindowSize;

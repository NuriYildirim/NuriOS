import { useState, useEffect } from 'react';

type Dimensions = {
    width: number
    height: number
}

export default function useWindowDimensions() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize(); // set initial size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
}
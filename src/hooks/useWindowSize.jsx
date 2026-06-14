import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const windowResized = () => {
      const screenWindow = {
        width: window.innerWidth,
        height: window.innerHeight
      }

      setWindowSize(screenWindow);
    }

    windowResized();
    
    window.addEventListener("resize", windowResized);

    const cleanUp = () => {
      window.removeEventListener("resize", windowResized);
    }

    return cleanUp;
  }, []);


  return windowSize;
}

export default useWindowSize;
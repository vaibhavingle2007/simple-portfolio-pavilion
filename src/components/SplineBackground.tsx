
import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

interface SplineBackgroundProps {
  scale?: number;
}

const SplineBackground: React.FC<SplineBackgroundProps> = ({ scale = 1 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) {
        console.log("Spline is taking a while to load...");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
    console.log("Spline scene loaded successfully");
  };

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <div 
        className={`w-full h-full transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: `scale(${scale})` }}
      >
        <Spline 
          scene="https://prod.spline.design/r7kQFZsqQ4HiXi1Y/scene.splinecode" 
          onLoad={handleLoad}
        />
      </div>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default SplineBackground;

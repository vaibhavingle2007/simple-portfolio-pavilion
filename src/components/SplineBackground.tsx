
import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { Skeleton } from "@/components/ui/skeleton";

const SplineBackground = () => {
  const [loading, setLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);
  
  // Add a timeout to handle cases where Spline might never load
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (loading) {
        console.log("Spline loading timeout reached");
        setLoadFailed(true);
      }
    }, 15000); // 15 seconds timeout
    
    return () => clearTimeout(timeoutId);
  }, [loading]);

  const handleLoad = () => {
    console.log("Spline scene loaded successfully");
    setLoading(false);
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {loading && !loadFailed && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      )}
      
      {loadFailed && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/40">
          <Skeleton className="h-full w-full" />
        </div>
      )}
      
      <Spline
        scene="https://my.spline.design/cutecomputerfollowcursor-3d83ec058b8e59965a3a805f40a1bb58/"
        onLoad={handleLoad}
        className="h-full w-full"
      />
    </div>
  );
};

export default SplineBackground;

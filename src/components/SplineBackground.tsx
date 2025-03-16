
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

const SplineBackground = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      )}
      <Spline
        scene="https://my.spline.design/100followers-69c1d52e1cf67bac2352ffd258cc1ef9/scene.splinecode"
        onLoad={() => setLoading(false)}
        className="h-full w-full"
      />
    </div>
  );
};

export default SplineBackground;

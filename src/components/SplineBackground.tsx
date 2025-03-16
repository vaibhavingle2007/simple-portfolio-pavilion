
import React, { useEffect, useState } from "react";
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
        scene="https://prod.spline.design/3d83ec058b8e59965a3a805f40a1bb58/scene.splinecode"
        onLoad={() => setLoading(false)}
        className="h-full w-full"
      />
    </div>
  );
};

export default SplineBackground;

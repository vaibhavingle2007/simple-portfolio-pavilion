
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { Skeleton } from "@/components/ui/skeleton";

const SplineBackground = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      )}
      <Spline
        scene="https://my.spline.design/cutecomputerfollowcursor-7776ea0cca274a8cfcfa567ae6a2d670/"
        onLoad={() => setLoading(false)}
        className="h-full w-full"
      />
    </div>
  );
};

export default SplineBackground;

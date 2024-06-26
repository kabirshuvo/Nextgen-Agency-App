"use client";
import React from "react";
import CountUp from "react-countup";

interface BadgeCountUpProps {
  endCountNum?: number;
  endCountText?: string;
  badgeText?: string;
}

const BadgeCountUp: React.FC<BadgeCountUpProps> = ({
  endCountNum = 0,
  endCountText,
  badgeText,
}) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="flex text-4xl leading-none font-bold text-primary -ml-2">
        {endCountNum !== undefined && (
          <>
            <CountUp end={endCountNum} delay={1} duration={4} />
            {endCountText && <span className="">{endCountText}</span>}
          </>
        )}
      </div>
      <div className="max-w-[80px] leading-none font-sm text-primary text-center text-black font-semibold">
        {badgeText && <span>{badgeText}</span>}
      </div>
    </div>
  );
};

export default BadgeCountUp;

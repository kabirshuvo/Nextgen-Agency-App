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
    // flex flex-row  text-4xl leading-none font-bold text-primary gap-8
    <div className=" ">
      <div>
        {endCountNum !== undefined && (
          <CountUp end={endCountNum} delay={1} duration={4} />
        )}
      </div>
      {/* flex flex-col gap-4 items-center */}
      <div className="">
        {endCountText && (
          <div className="p-8">
            <span className="text-xl text-primary">{endCountText}</span>
          </div>
        )}
        {badgeText && <span className="text-xl text-primary">{badgeText}</span>}
      </div>
    </div>
  );
};

export default BadgeCountUp;

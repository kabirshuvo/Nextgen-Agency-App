"use client";
import React from "react";
import CountUp from "react-countup";

interface BadgeCountUpProps {
  endCountNum?: number;

  badgeText?: string;
}

const BadgeCountUp: React.FC<BadgeCountUpProps> = ({
  endCountNum = 0,

  badgeText,
}) => {
  return (
    <div className=" flex justify-center items-center gap-2">
      <div className=" flex text-4xl leading-none font-bold text-primary -ml-2">
        {endCountNum !== undefined && (
          <CountUp end={endCountNum} delay={1} duration={4} />
        )}
      </div>
      <div className="max-w-[70px] leading-none font-sm text-primary text-center text-black font-semibold ">
        {badgeText && <span className="">{badgeText}</span>}
      </div>
    </div>
  );
};

export default BadgeCountUp;

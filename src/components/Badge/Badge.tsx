import React from "react";
import CountUp from "react-countup";
import Icons from "./Icons"; // Make sure to import the Icons component correctly
import { BriefcaseIcon } from "./AllIcons";
import { YearsCountUp } from "./AllCountUps";

interface BadgeProps {
  containerStyles?: string;
  // icon?: React.ComponentType; // Adjusted to accept an icon component
  // endCountNum?: number;
  // endCountText?: string;
  // badgeText?: string;
}

const Badge: React.FC<BadgeProps> = ({
  containerStyles,
  // icon,
  // endCountNum = 0, // Provide a default value if undefined
  // endCountText,
  // badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <BriefcaseIcon />
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <YearsCountUp />
        </div>
      </div>
    </div>
  );
};

export default Badge;

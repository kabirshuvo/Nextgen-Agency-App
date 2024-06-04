import React from "react";

import { BriefcaseIcon } from "./AllIcons";
import { YearsCountUp } from "./AllCountUps";

interface BadgeProps {
  containerStyles?: string;
}

const ExperienceBadge: React.FC<BadgeProps> = ({ containerStyles }) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <BriefcaseIcon />
      <YearsCountUp />
    </div>
  );
};

export default ExperienceBadge;

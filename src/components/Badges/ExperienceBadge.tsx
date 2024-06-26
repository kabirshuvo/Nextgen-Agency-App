import React from "react";

import { BriefcaseIcon } from "./BadgeIcons";
import { YearsCountUp } from "./BadgeCountUps";

interface BadgeProps {
  containerStyles?: string;
}

const ExperienceBadge: React.FC<BadgeProps> = ({ containerStyles }) => {
  return (
    <div className={`badge badge:hover ${containerStyles}`}>
      <div className="-ml-2">
        <BriefcaseIcon />
      </div>
      <YearsCountUp />
    </div>
  );
};

export default ExperienceBadge;

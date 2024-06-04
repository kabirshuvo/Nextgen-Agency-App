import React from "react";

import { HappyClientsCountUp } from "./BadgeCountUps";
import { TeamFillIcon } from "./BadgeIcons";

interface BadgeProps {
  containerStyles?: string;
}

const HappyClientsBadge: React.FC<BadgeProps> = ({ containerStyles }) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <TeamFillIcon />
      <HappyClientsCountUp />
    </div>
  );
};

export default HappyClientsBadge;

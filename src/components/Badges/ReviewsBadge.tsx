import React from "react";

import { ReviewsCountUp } from "./BadgeCountUps";
import { TodoFillIcon } from "./BadgeIcons";

interface BadgeProps {
  containerStyles?: string;
}

const ReviewsBadge: React.FC<BadgeProps> = ({ containerStyles }) => {
  return (
    <div className={`badge badge:hover ${containerStyles}`}>
      <TodoFillIcon />
      <ReviewsCountUp />
    </div>
  );
};

export default ReviewsBadge;

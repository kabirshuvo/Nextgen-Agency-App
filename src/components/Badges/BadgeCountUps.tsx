import React from "react";
import BadgeCountUp from "./CountUp";

export const YearsCountUp = () => {
  return (
    <BadgeCountUp
      endCountNum={16}
      endCountText=""
      badgeText="Years of Experience"
    />
  );
};

export const HappyClientsCountUp = () => {
  return (
    <BadgeCountUp endCountNum={5} endCountText="K" badgeText=" Happy Clients" />
  );
};

export const ReviewsCountUp = () => {
  return (
    <BadgeCountUp endCountNum={2} endCountText="K+" badgeText=" Reviews" />
  );
};

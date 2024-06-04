import React from "react";
import BadgeCountUp from "./CountUp";

export const YearsCountUp = () => {
  return <BadgeCountUp endCountNum={16} badgeText="Years of Experience" />;
};

export const HappyClientsCountUp = () => {
  return <BadgeCountUp endCountNum={5} badgeText=" Happy Clients" />;
};

export const ReviewsCountUp = () => {
  return <BadgeCountUp endCountNum={1} badgeText=" Reviews" />;
};

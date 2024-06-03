"use server";

import { IconType } from "react-icons";
import CountUp from "react-countup";

interface BadgeProps {
  containerStyles?: string;
  icon?: IconType; // Change the type to IconType
  endCountNum?: string;
  endCountText?: string;
  badgeText?: string;
}

const Badge: React.FC<BadgeProps> = ({
  containerStyles,
  icon: Icon, // Rename to Icon to use as a component
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      {Icon && <Icon className="text-2xl text-primary" />}
    </div>
  );
};

export default Badge;

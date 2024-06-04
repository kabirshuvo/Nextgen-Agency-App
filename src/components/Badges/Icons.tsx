"use server";
import React from "react";

interface IconProps {
  icon?: React.ComponentType; // Optional prop to avoid undefined error
}

const Icons: React.FC<IconProps> = ({ icon: Icon }) => {
  return <div>{Icon && <Icon />}</div>;
};

export default Icons;

// className="text-2xl text-primary"

import React from "react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Icons from "./Icons";

export const BriefcaseIcon = () => {
  return (
    <div>
      <Icons icon={RiBriefcase4Fill} />
    </div>
  );
};

export const TeamFillIcon = () => {
  return (
    <div>
      <Icons icon={RiTeamFill} />
    </div>
  );
};

export const TodoFillIcon = () => {
  return (
    <div>
      <Icons icon={RiTodoFill} />
    </div>
  );
};

export const ArrowDownSLineIcon = () => {
  return (
    <div>
      <Icons icon={RiArrowDownSLine} />
    </div>
  );
};

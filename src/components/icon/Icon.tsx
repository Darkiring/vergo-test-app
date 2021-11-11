import React, { FC } from "react";
import { IconImage } from "./Icon.styled";
import { IconProps } from "./Icon.types";

const Icon: FC<IconProps> = ({ source }) => {
  return (
    <IconImage
      source={source}
      resizeMode={"contain"}
    />
  );
};

export default Icon;

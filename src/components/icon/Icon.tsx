import React, { FC } from "react";
import { IconImage } from "./Icon.styled";
import { IconProps } from "./Icon.types";

const Icon: FC<IconProps> = ({ source, hasFocus }) => {
  return (
    <IconImage
      source={source}
      resizeMode={"contain"}
      hasFocus={hasFocus}
    />
  );
};

export default Icon;

import styled from "styled-components/native";
import { rs } from "../../utils/dimensions";
import { colors } from "../../utils/theme";

export const IconImage = styled.Image<{ hasFocus: boolean }>`
  width: ${rs(25)}px;
  height: ${rs(25)}px;
  tint-color: ${({ hasFocus }) => hasFocus ? colors.primaryColor : colors.darkGray};
`;

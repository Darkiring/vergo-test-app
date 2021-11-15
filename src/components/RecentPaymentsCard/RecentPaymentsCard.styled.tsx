import styled from "styled-components/native";
import { GAP_SPACE } from "../../utils/constants";
import { rs } from "../../utils/dimensions";
import { colors } from "../../utils/theme";

export const Container = styled.View`
  height: ${rs(65)}px;
  flex-direction: row;
  align-items: center;
  margin-left: ${rs(GAP_SPACE / 2)}px;
  justify-content: space-between;
`;

export const BrandContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BrandNameContainer = styled.View`
  padding-left: ${rs(10)}px;
`;

export const IconImage = styled.Image`
  width: ${rs(40)}px;
  height: ${rs(40)}px;
  tint-color: ${colors.black};
`;

export const BrandName = styled.Text`
  font-size: ${rs(14)}px;
  font-weight: bold;
`;

export const BrandType = styled.Text`
  font-size: ${rs(12)}px;
`;

export const AmountLabel = styled.Text`
  font-size: ${rs(15)}px;
  font-weight: 500;
`;

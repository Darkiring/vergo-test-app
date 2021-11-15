import styled from "styled-components/native";
import { GAP_SPACE } from "../../../utils/constants";
import { rs } from "../../../utils/dimensions";
import { colors } from "../../../utils/theme";

export const Container = styled.View`
  width: 100%;
  padding-vertical: ${rs(GAP_SPACE)}px;
  align-items: center;
`;

export const PayButton = styled.TouchableOpacity`
  background-color: ${colors.primaryColor};
  width: 100%;
  height: ${rs(40)}px;
  justify-content: center;
  border-radius: ${rs(10)}px;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: ${rs(14)}px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const TotalLabel = styled.Text`
  font-size: ${rs(12)}px;
  text-transform: uppercase;
`;

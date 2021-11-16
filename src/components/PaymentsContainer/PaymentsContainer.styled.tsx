import styled from "styled-components/native";
import { GAP_SPACE } from "../../utils/constants";
import { rs } from "../../utils/dimensions";
import { colors } from "../../utils/theme";
import Card from "../card";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryColor};
`;

export const Content = styled.View`
  border-top-right-radius: ${rs(25)}px;
  border-top-left-radius: ${rs(25)}px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  background-color: ${colors.white};
  flex: 1;
  padding-horizontal: ${rs(GAP_SPACE)}px;
`;

export const Spacing = styled.View<{ small?: boolean }>`
  margin-vertical: ${({ small }) => (small ? rs(5) : rs(GAP_SPACE / 2))}px;
`;

export const BalanceHeaderText = styled.Text`
  color: ${colors.white};
  font-size: ${rs(12)}px;
  font-weight: bold;
`;

export const BalanceAmountText = styled.Text`
  color: ${colors.white};
  font-size: ${rs(26)}px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  padding-horizontal: ${rs(GAP_SPACE)}px;
`;

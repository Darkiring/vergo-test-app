import styled from "styled-components/native";
import { GAP_SPACE } from "../../utils/constants";
import { rs } from "../../utils/dimensions";
import { colors } from "../../utils/theme";

export const Container = styled.View`
  background-color: ${colors.white};
  padding-horizontal: ${rs(GAP_SPACE)}px;
  flex: 1;
`;

export const StyledScroll = styled.ScrollView`
  background-color: ${colors.white};
`;

export const Paragraph = styled.Text`
  font-size: ${rs(14)}px;
`;

export const PaymentsListText = styled.Text`
  font-size: ${rs(12)}px;
  text-transform: uppercase;
  margin-top: ${rs(5)}px;
  font-weight: bold;
  color: ${colors.gray};
`;

export const Divider = styled.View`
  width: 100%;
  height: ${rs(1)}px;
  margin-top: ${rs(8)}px;
  background-color: ${colors.lightGray};
`;

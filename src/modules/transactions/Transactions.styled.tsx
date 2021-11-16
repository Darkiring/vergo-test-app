import styled from "styled-components/native";
import { GAP_SPACE } from "../../utils/constants";
import { rs } from "../../utils/dimensions";
import { colors } from "../../utils/theme";

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: ${rs(GAP_SPACE)}px;
`;

export const StyledScroll = styled.ScrollView`
  background-color: white;
`;

export const TransactionsListText = styled.Text`
  font-size: ${rs(12)}px;
  text-transform: uppercase;
  margin-top: ${rs(5)}px;
  font-weight: bold;
  color: ${colors.gray};
`;

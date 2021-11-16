import styled from "styled-components/native";
import { GAP_SPACE } from "../../utils/constants";
import { rs } from "../../utils/dimensions";
import { colors } from "../../utils/theme";
import Card from "../card";

export const Container = styled(Card)`
  width: ${rs(330)}px;
  height: ${rs(70)}px;
  background-color: ${colors.white};
  align-self: center;
  padding: ${rs(GAP_SPACE)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PaymentsHeaderText = styled.Text`
  font-size: ${rs(13)}px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TotalLabel = styled.Text`
  font-size: ${rs(12)}px;
  text-transform: uppercase;
  margin-top: ${rs(5)}px;
  color: ${colors.gray};
  font-weight: bold;
`;

export const ButtonLabel = styled.Text`
  font-size: ${rs(12)}px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.white};
  margin: ${rs(12)}px;
`;

export const PayNowButton = styled.TouchableOpacity`
  background-color: ${colors.primaryColor};
  width: auto;
  height: ${rs(40)}px;
  justify-content: center;
  border-radius: ${rs(10)}px;
`;

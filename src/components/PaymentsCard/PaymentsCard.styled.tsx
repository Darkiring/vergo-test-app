import styled from "styled-components/native";
import { GAP_SPACE } from "../../utils/constants";
import { rs } from "../../utils/dimensions";
import { colors } from "../../utils/theme";
import Card from "../card";

export const ImageStyle = { borderRadius: rs(15) };

export const Container = styled.View`
  width: 100%;
  height: auto;
  align-items: center;
`;

export const StyledImageBackground = styled.ImageBackground`
  width: ${rs(330)}px;
  height: ${rs(190)}px;
`;

export const Content = styled.View`
  background-color: ${colors.opacityColor};
  padding-horizontal: ${rs(GAP_SPACE)}px;
  flex: 1;
  border-radius: ${rs(15)}px;
  justify-content: space-between;
`;

export const FooterContent = styled.View``;
export const DateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardNumberText = styled.Text`
  font-size: ${rs(22)}px;
  color: ${colors.white};
  align-self: center;
  margin-bottom: ${rs(8)}px;
  letter-spacing: ${rs(3)}px;
`;

export const DateText = styled.Text`
  font-size: ${rs(17)}px;
  color: ${colors.white};
`;

export const IconImage = styled.Image`
  width: ${rs(60)}px;
  height: ${rs(60)}px;
`;

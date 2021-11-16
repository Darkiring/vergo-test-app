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

export const StyledText = styled.Text`
  font-size: ${rs(13)}px;
  font-weight: 500;
`;

export const AvailableText = styled.Text`
  font-size: ${rs(12)}px;
  font-weight: 500;
  color: ${colors.gray};
`;

export const HeaderText = styled.Text`
  color: ${colors.white};
  font-size: ${rs(26)}px;
  font-weight: bold;
`;

export const HeaderContainer = styled.View`
  padding-horizontal: ${rs(GAP_SPACE)}px;
`;

export const CardContent = styled(Card)`
  padding-vertical: ${rs(GAP_SPACE / 1.5)}px;
  padding-horizontal: ${rs(GAP_SPACE)}px;
  background-color: ${colors.white};
`;

export const ProgressBarContainer = styled.View`
  height: ${rs(12)}px;
  background-color: ${colors.darkGray};
  border-radius: ${rs(10)}px;
  justify-content: center;
  margin-top: ${rs(5)}px;
`;

export const ProgressBar = styled.View<{ percentage: any }>`
  height: ${({ percentage }) =>
    percentage < 1 ? 9 * Math.sin((percentage * Math.PI) / 2) : rs(12)}px;
  width: ${({ percentage }) => percentage}%;
  background-color: ${colors.primaryColor};
  border-bottom-left-radius: ${rs(10)}px;
  border-top-left-radius: ${rs(10)}px;
  border-bottom-right-radius: ${({ percentage }) =>
    percentage > 99 ? rs(10) : 0}px;
  border-top-right-radius: ${({ percentage }) =>
    percentage > 99 ? rs(10) : 0}px;
`;

import { View } from "react-native";
import styled from "styled-components/native";
import { rs } from "../../utils/dimensions";
import { colors } from "../../utils/theme";

export const Card = styled(View)(() => ({
  minHeight: rs(50),
  minWidth: rs(50),
  borderRadius: rs(10),
  shadowColor: colors.shallowColor,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.24,
  shadowRadius: 7,
  elevation: 7,
}));

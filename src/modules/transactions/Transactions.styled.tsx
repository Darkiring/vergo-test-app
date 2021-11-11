import styled from "styled-components/native";
import { GAP_SPACE } from "../../utils/constants";
import { rs } from "../../utils/dimensions";

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: ${rs(GAP_SPACE)}px;
`;

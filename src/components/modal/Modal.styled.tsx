import { View, Animated } from 'react-native';
import styled from 'styled-components/native';
import { GAP_SPACE } from '../../utils/constants';
import { rs, H } from '../../utils/dimensions';
import { colors } from '../../utils/theme';

export const AnimatedContainer = styled(Animated.View)`
  height: ${H}px;
  width: 100%;
  top: ${H}px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  justify-content: flex-end;
`;

export const AnimatedModal = styled(Animated.View)`
  background-color: ${colors.white};
  height: auto;
  border-top-left-radius: ${rs(15)}px;
  border-top-right-radius: ${rs(15)}px;
  padding-horizontal: ${rs(GAP_SPACE)}px;
  padding-top: ${rs(8)}px;
`;

export const StyledBar = styled(View)`
  height: ${rs(4.5)}px;
  width: 15%;
  align-self: center;
  background-color: ${colors.darkGray};
  border-radius: ${rs(5)}px;
`;

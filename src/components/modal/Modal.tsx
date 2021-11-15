/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useRef, useEffect } from "react";
import {
  Animated,
  PanResponder,
  GestureResponderEvent,
  PanResponderGestureState,
} from "react-native";
import { AnimatedContainer, AnimatedModal, StyledBar } from "./Modal.styled";
import { H } from "../../utils/dimensions";
import { ModalProps } from "./Modal.types";

const Modal: React.FC<ModalProps> = ({ show, onChange, children }) => {
  const translation = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    if (show) {
      bringUpModal();
    } else {
      hideModal();
      resetModalPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const onChangeModal = () => {
    onChange(!show);
  };

  const modalContainerStyle = {
    transform: [{ translateY: translation }],
  };

  const bringUpModal = () => {
    Animated.timing(translation, {
      toValue: -H,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(translation, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  const resetModalPosition = () => {
    Animated.spring(
      pan,
      { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
    ).start();
  };

  const onPanResponderMove = (
    e: GestureResponderEvent,
    gesture: PanResponderGestureState
  ) => {
    if (gesture.dy > 0) {
      pan.y.setValue(gesture.dy);
    }
  };

  const onPanResponderRelease = (
    e: GestureResponderEvent,
    gesture: PanResponderGestureState
  ) => {
    if (gesture.dy > 50) {
      hideModal();
      onChangeModal();
    }
    resetModalPosition();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: onPanResponderMove,
    onPanResponderRelease: onPanResponderRelease,
  });

  return (
    <AnimatedContainer style={modalContainerStyle}>
      <AnimatedModal {...panResponder.panHandlers} style={pan.getLayout()}>
        <StyledBar />
        {children}
      </AnimatedModal>
    </AnimatedContainer>
  );
};

export default Modal;

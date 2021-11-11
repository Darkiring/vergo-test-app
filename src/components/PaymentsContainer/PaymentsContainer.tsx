import React, { FC } from "react";
import { View, Text } from "react-native";
import { PaymentsContainerProps } from "./PaymentsContainer.Types";

const PaymentsContainer: FC<PaymentsContainerProps> = ({ children }) => {
  return <View>{children}</View>;
};

export default PaymentsContainer;

import React, { FC } from "react";
import { View } from "react-native";
import { ACTIVITY_OPACITY } from "../../utils/constants";
import {
  ButtonLabel,
  Container,
  PaymentsHeaderText,
  PayNowButton,
  TotalLabel,
} from "./PendingPaymentsCard.styled";
import { PendingCardProps } from "./PendingPaymentsCard.Types";

const PendingPaymentsCard: FC<PendingCardProps> = ({
    pendingLabel,
    totalLabel,
    totalAmount,
    buttonLabel,
    onPressPay,
}) => {
  return (
    <Container>
      <View>
        <PaymentsHeaderText>{pendingLabel}</PaymentsHeaderText>
        <TotalLabel>{totalLabel}: {totalAmount}</TotalLabel>
      </View>
      <PayNowButton onPress={onPressPay} activeOpacity={ACTIVITY_OPACITY}>
        <ButtonLabel>{buttonLabel}</ButtonLabel>
      </PayNowButton>
    </Container>
  );
};

export default PendingPaymentsCard;

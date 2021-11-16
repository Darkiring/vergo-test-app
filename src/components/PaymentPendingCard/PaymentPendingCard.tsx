import React, { FC } from "react";
import { ButtonLabel } from "../PendingPaymentsCard/PendingPaymentsCard.styled";
import {
  Container,
  IconImage,
  BrandContainer,
  BrandNameContainer,
  BrandName,
  BrandType,
  AmountLabel,
  PayNowButton,
} from "./PaymentPendingCard.styled";
import { PaymentPendingProps } from "./PaymentPendingCard.Type";

const PaymentPendingCard: FC<PaymentPendingProps> = ({
  brandName,
  brandType,
  amount,
  source,
  onPress,
  buttonLabel,
}) => {
  return (
    <Container>
      <BrandContainer>
        <IconImage source={source} resizeMode="contain" />
        <BrandNameContainer>
          <BrandName>{brandName}</BrandName>
          <BrandType>{brandType}</BrandType>
          <AmountLabel>$ {amount}</AmountLabel>
        </BrandNameContainer>
      </BrandContainer>
      <PayNowButton onPress={onPress}>
        <ButtonLabel>{buttonLabel}</ButtonLabel>
      </PayNowButton>
    </Container>
  );
};

export default PaymentPendingCard;

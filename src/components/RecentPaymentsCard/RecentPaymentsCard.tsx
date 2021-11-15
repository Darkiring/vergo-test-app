import React, { FC } from "react";
import {
  Container,
  IconImage,
  BrandContainer,
  BrandNameContainer,
  BrandName,
  BrandType,
  AmountLabel,
} from "./RecentPaymentsCard.styled";
import { RecentPaymentProps, TYPEOFPAYMENT } from "./RecentPaymentsCard.Type";

const RecentPaymentsCard: FC<RecentPaymentProps> = ({
  brandName,
  brandType,
  amount,
  source,
  status,
}) => {
  return (
    <Container>
      <BrandContainer>
        <IconImage source={source} resizeMode="contain" />
        <BrandNameContainer>
          <BrandName>{brandName}</BrandName>
          <BrandType>{brandType}</BrandType>
        </BrandNameContainer>
      </BrandContainer>
      <AmountLabel>
        {status === TYPEOFPAYMENT.SENT
          ? "-"
          : status === TYPEOFPAYMENT.RECEIVED
          ? "+"
          : ""}
        $ {amount}
      </AmountLabel>
    </Container>
  );
};

export default RecentPaymentsCard;

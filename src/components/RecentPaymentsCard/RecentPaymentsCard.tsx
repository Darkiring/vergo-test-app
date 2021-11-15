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
import { RecentPaymentProps } from "./RecentPaymentsCard.Type";

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
        {status === "SENT" ? "-" : status === "RECEIVED" ? "+" : ""}$ {amount}
      </AmountLabel>
    </Container>
  );
};

export default RecentPaymentsCard;

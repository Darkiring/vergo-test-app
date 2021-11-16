import React, { FC } from "react";
import { formatCardNumber } from "../../utils/helper";
import Card from "../card";
import {
  StyledImageBackground,
  ImageStyle,
  Content,
  IconImage,
  FooterContent,
  DateContainer,
  CardNumberText,
  DateText,
  Container,
} from "./PaymentsCard.styled";
import { PaymentsCardProps } from "./PaymentsCard.Types";

const CardImage = require("../../assets/cards/card-two.jpg");
const VergoLogo = require("../../assets/icons/vergo-logo.png");
const VisaLogo = require("../../assets/icons/visa-logo.png");

const PaymentsCard: FC<PaymentsCardProps> = ({ cardNumber, month, year }) => {
  return (
    <Container>
      <Card>
        <StyledImageBackground
          imageStyle={ImageStyle}
          resizeMode="cover"
          source={CardImage}
        >
          <Content>
            <IconImage resizeMode="contain" source={VergoLogo} />
            <FooterContent>
              <CardNumberText>{formatCardNumber(cardNumber)}</CardNumberText>
              <DateContainer>
                <DateText>
                  {month}/{year}
                </DateText>
                <IconImage resizeMode="contain" source={VisaLogo} />
              </DateContainer>
            </FooterContent>
          </Content>
        </StyledImageBackground>
      </Card>
    </Container>
  );
};

export default PaymentsCard;

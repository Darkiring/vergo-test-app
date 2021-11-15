import React, { FC } from "react";
import { Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaymentsCard } from "..";
import { colors } from "../../utils/theme";
import {
  BalanceHeaderText,
  Container,
  Content,
  Spacing,
  BalanceContainer,
  BalanceAmountText,
} from "./PaymentsContainer.styled";
import { PaymentsContainerProps } from "./PaymentsContainer.Types";

const PaymentsContainer: FC<PaymentsContainerProps> = ({
  children,
  balanceLabel,
  balanceAmount,
}) => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColor}
      />
      <SafeAreaView>
        <Spacing small />
        <BalanceContainer>
          <BalanceHeaderText>{balanceLabel}</BalanceHeaderText>
          <BalanceAmountText>$ {balanceAmount}</BalanceAmountText>
        </BalanceContainer>
        <Spacing />
        <PaymentsCard cardNumber="1234567891234567" month="05" year="24" />
        {Platform.OS === "ios" ? <Spacing small /> : <Spacing />}
      </SafeAreaView>
      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default PaymentsContainer;

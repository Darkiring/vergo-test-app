import React, { FC } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { formatter } from "../../utils/helper";
import { colors } from "../../utils/theme";
import {
  AvailableText,
  CardContent,
  Container,
  Content,
  HeaderContainer,
  HeaderText,
  ProgressBar,
  ProgressBarContainer,
  Spacing,
  StyledText,
} from "./TransactionsContainer.styled";
import { TransactionsContainerProps } from "./TransactionsContainer.Types";

const TransactionsContainer: FC<TransactionsContainerProps> = ({
  children,
  accountBalance,
  approvedBalance,
  percentageInBar,
  usedBalance,
  headerLabel,
  availableLabel,
  balanceText,
  usedText,
}) => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColor}
      />
      <SafeAreaView>
        <HeaderContainer>
          <HeaderText>{headerLabel}</HeaderText>
          <Spacing small />
          <CardContent>
            <StyledText>
              {availableLabel}: ${formatter.format(accountBalance)}
            </StyledText>
            <Spacing small />
            <StyledText>
              {balanceText}: ${formatter.format(approvedBalance)}
            </StyledText>
            <Spacing small />
            <ProgressBarContainer>
              <ProgressBar percentage={percentageInBar}></ProgressBar>
            </ProgressBarContainer>
            <Spacing small />
            <AvailableText>
              {usedText}: ${formatter.format(usedBalance)}
            </AvailableText>
          </CardContent>
        </HeaderContainer>
        <Spacing />
      </SafeAreaView>
      <Content>{children}</Content>
    </Container>
  );
};

export default TransactionsContainer;

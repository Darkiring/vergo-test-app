import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RecentPaymentsCard, TransactionsContainer } from "../../components";
import { Spacing } from "../../components/PaymentsContainer/PaymentsContainer.styled";
import { usePayments } from "../../hooks/paymentsHook";
import { useTransactions } from "../../hooks/transactionsHook";
import { TYPEOFPAYMENT } from "../../hooks/type";
import { colors } from "../../utils/theme";
import { Divider } from "../payments/Payments.styled";
import { StyledScroll, TransactionsListText } from "./Transactions.styled";

const Transactions = () => {
  const { accountBalance, approvedBalance } = usePayments();
  const { transactions } = useTransactions();
  const [useBalance, setuseBalance] = useState<number>(0);
  const [approvedUserBalance, setapprovedUserBalance] = useState<number>(0);
  const usedBalance = approvedBalance - accountBalance;
  const percentageInBar = (usedBalance / approvedBalance) * 100;
  useEffect(() => {
    setuseBalance(accountBalance);
    setapprovedUserBalance(approvedBalance);
  }, [accountBalance, approvedBalance]);
  return (
    <StyledScroll bounces={false} showsVerticalScrollIndicator={false}>
      <TransactionsContainer
        accountBalance={useBalance}
        approvedBalance={approvedUserBalance}
        percentageInBar={percentageInBar}
        usedBalance={usedBalance}
        headerLabel="Transactions"
        availableLabel="Available"
        balanceText="Balance approved"
        usedText="Used"
      >
        <StatusBar barStyle="light-content" backgroundColor={colors.white} />
        <Spacing />
        <TransactionsListText>All Transactions</TransactionsListText>
        <Divider />
        {transactions.map(
          ({ source, brandName, brandType, amount, status }) =>
            status !== TYPEOFPAYMENT.PENDING && (
              <RecentPaymentsCard
                key={brandName}
                source={source}
                brandName={brandName}
                brandType={brandType}
                status={status}
                amount={amount}
              />
            )
        )}
      </TransactionsContainer>
    </StyledScroll>
  );
};

export default Transactions;

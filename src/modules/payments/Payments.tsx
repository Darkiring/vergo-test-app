import React, { useState, useEffect } from "react";
import {
  PaymentPendingCard,
  PaymentsContainer,
  PaymentsModal,
  PendingPaymentsCard,
  RecentPaymentsCard,
  SpecificPaymentModal,
} from "../../components";
import { Spacing } from "../../components/PaymentsContainer/PaymentsContainer.styled";
import { Divider, PaymentsListText, StyledScroll } from "./Payments.styled";
import { usePayments } from "../../hooks/paymentsHook";
import { navigationHook } from "../../hooks/navigationHook";
import { TYPEOFPAYMENT } from "./types";
import { Alert } from "react-native";
import { formatter } from "../../utils/helper";

const Payments = () => {
  const [itemId, setItemId] = useState<number>();
  const [showModal, setShowModal] = useState(false);
  const [showSpecificModal, setShowSpecificModal] = useState(false);
  const {
    payments,
    pendingPayments,
    payAllPending,
    accountBalance,
    totalPending,
    paySpecificPayment,
  } = usePayments();
  const { hideTabNavigator } = navigationHook();

  const onPressPayment = () => {
    if (pendingPayments.length > 0 && accountBalance > totalPending) {
      setShowModal(true);
    } else {
      Alert.alert(
        "Payments",
        "You do not have pending payments or you do not have enough balance to make the payment"
      );
    }
  };

  const onPresPayItem = (id: number) => {
    setItemId(id);
    setTimeout(() => {
      setShowSpecificModal(true);
    });
  };

  const onChangeModal = (value: boolean) => {
    setShowModal(value);
  };

  const onChangeSpecificModal = (value: boolean) => {
    setShowSpecificModal(value);
  };

  const onPressAllPay = () => {
    payAllPending();
    setTimeout(() => {
      setShowModal(false);
    }, 200);
  };

  const payPending = (id: number) => {
    paySpecificPayment(id);
    setTimeout(() => {
      setShowSpecificModal(false);
    }, 200);
  };

  useEffect(() => {
    hideTabNavigator(!showModal);
  }, [showModal]);

  useEffect(() => {
    hideTabNavigator(!showSpecificModal);
  }, [showSpecificModal]);

  return (
    <>
      <StyledScroll bounces={false} showsVerticalScrollIndicator={false}>
        <PaymentsContainer
          balanceAmount={formatter.format(accountBalance)}
          balanceLabel={"BALANCE"}
          cardNumber="1234567891234567"
          month="05"
          year="24"
        >
          <Spacing />
          <PendingPaymentsCard
            onPressPay={onPressPayment}
            totalAmount={pendingPayments.length}
            totalLabel={"total"}
            pendingLabel={"Pending Payments"}
            buttonLabel={"Pay All"}
          />
          {pendingPayments.length > 0 && (
            <>
              <Spacing />
              <PaymentsListText>Pending payments</PaymentsListText>
              <Divider />
              {payments.map(
                ({ source, brandName, brandType, amount, status, id }) =>
                  status === TYPEOFPAYMENT.PENDING && (
                    <PaymentPendingCard
                      key={brandName}
                      source={source}
                      brandName={brandName}
                      brandType={brandType}
                      status={status}
                      amount={amount}
                      onPress={() => onPresPayItem(id)}
                      buttonLabel={"PAY"}
                    />
                  )
              )}
            </>
          )}
          <Spacing />
          <PaymentsListText>Recent payments</PaymentsListText>
          <Divider />
          {payments.map(
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
        </PaymentsContainer>
      </StyledScroll>
      <PaymentsModal
        payAll={onPressAllPay}
        show={showModal}
        onChange={onChangeModal}
        headerText="Pay total of pending payment"
        amountLabel="Amount of payment pending"
        totalLabel="Total"
        payAllLabel="PAY ALL"
      />
      <SpecificPaymentModal
        show={showSpecificModal}
        onChange={onChangeSpecificModal}
        itemId={itemId}
        payPending={payPending}
        totalLabel="Total"
        payLabel="Pay"
      />
    </>
  );
};

export default Payments;

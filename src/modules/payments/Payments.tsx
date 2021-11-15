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

const Payments = () => {
  const [amount, setAmount] = useState("12,123.42");
  const [balanceLabel, setBalanceLabel] = useState("BALANCE");
  const [itemName, setItemName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSpecificModal, setShowSpecificModal] = useState(false);
  const { payments, pendingPayments, payAllPending } = usePayments();
  const { hideTabNavigator } = navigationHook();
  const onPressPayment = () => {
    if (pendingPayments.length > 0) {
      setShowModal(true);
    } else {
      Alert.alert("Payments", "You have no pending payments");
    }
  };
  const onPresPayItem = (brandName: string) => {
    setItemName(brandName);
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
    }, 300);
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
        <PaymentsContainer balanceAmount={amount} balanceLabel={balanceLabel}>
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
                ({ source, brandName, brandType, amount, status }) =>
                  status === TYPEOFPAYMENT.PENDING && (
                    <PaymentPendingCard
                      key={brandName}
                      source={source}
                      brandName={brandName}
                      brandType={brandType}
                      status={status}
                      amount={amount}
                      onPress={() => onPresPayItem(brandName)}
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
      />
      <SpecificPaymentModal
        payAll={onPressAllPay}
        show={showSpecificModal}
        onChange={onChangeSpecificModal}
        itemName={itemName}
      />
    </>
  );
};

export default Payments;

import React, { FC, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { usePayments } from "../../../hooks/paymentsHook";
import { Spacing } from "../../PaymentsContainer/PaymentsContainer.styled";
import { ButtonLabel } from "../../PendingPaymentsCard/PendingPaymentsCard.styled";
import Modal from "../Modal";
import {
  Container,
  HeaderText,
  PayButton,
  TotalLabel,
} from "./PaymentsModal.styled";
import { PaymentsModalProps } from "./PaymentsModal.types";

const PaymentsModal: FC<PaymentsModalProps> = ({ show, onChange, payAll }) => {
  const { pendingPayments, totalPending } = usePayments();
  return (
    <Modal show={show} onChange={onChange}>
      <Container>
        <HeaderText>Pay total of pending payment</HeaderText>
        <Spacing />
        <TotalLabel>
          Amount of payment pending: {pendingPayments.length}
        </TotalLabel>
        <Spacing />
        <TotalLabel>Total: {totalPending}</TotalLabel>
        <Spacing />
        <PayButton onPress={payAll}>
          <ButtonLabel>PAY ALL</ButtonLabel>
        </PayButton>
      </Container>
    </Modal>
  );
};

export default PaymentsModal;

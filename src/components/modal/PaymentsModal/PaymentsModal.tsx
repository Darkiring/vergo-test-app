import React, { FC } from "react";
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

const PaymentsModal: FC<PaymentsModalProps> = ({
  show,
  onChange,
  payAll,
  headerText,
  amountLabel,
  totalLabel,
  payAllLabel,
}) => {
  const { pendingPayments, totalPending } = usePayments();
  return (
    <Modal show={show} onChange={onChange}>
      <Container>
        <HeaderText>{headerText}</HeaderText>
        <Spacing />
        <TotalLabel>
          {amountLabel}: {pendingPayments.length}
        </TotalLabel>
        <Spacing />
        <TotalLabel>
          {totalLabel}: {totalPending}
        </TotalLabel>
        <Spacing />
        <PayButton onPress={payAll}>
          <ButtonLabel>{payAllLabel}</ButtonLabel>
        </PayButton>
      </Container>
    </Modal>
  );
};

export default PaymentsModal;

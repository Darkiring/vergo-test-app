import React, { FC, useEffect, useState } from "react";
import { usePayments } from "../../../hooks/paymentsHook";
import { BrandProps } from "../../../hooks/type";
import { Spacing } from "../../PaymentsContainer/PaymentsContainer.styled";
import { ButtonLabel } from "../../PendingPaymentsCard/PendingPaymentsCard.styled";
import Modal from "../Modal";
import {
  Container,
  HeaderText,
  PayButton,
  TotalLabel,
} from "./SpecificPaymentModal.styled";
import { SpecificPaymentModalProps } from "./SpecificPaymentModal.types";

const SpecificPaymentModal: FC<SpecificPaymentModalProps> = ({
  show,
  onChange,
  payAll,
  itemName,
}) => {
  const { pendingPayments } = usePayments();
  useEffect(() => {
    const item = pendingPayments.find((item) => item.brandName === itemName);
    // setItemData();
    console.log("Data: ", );
  }, [itemName]);

  return (
    <Modal show={show} onChange={onChange}>
      <Container>
        <HeaderText>Data: </HeaderText>
        <Spacing />
        <TotalLabel>Amount of payment pending:</TotalLabel>
        <Spacing />
        <TotalLabel></TotalLabel>
        <Spacing />
        <PayButton onPress={payAll}>
          <ButtonLabel>PAY ALL</ButtonLabel>
        </PayButton>
      </Container>
    </Modal>
  );
};

export default SpecificPaymentModal;

import React, { FC, useEffect, useState } from "react";
import { TextInput } from "react-native";
import { usePayments } from "../../../hooks/paymentsHook";
import { BrandProps } from "../../../hooks/type";
import { Spacing } from "../../PaymentsContainer/PaymentsContainer.styled";
import { ButtonLabel } from "../../PendingPaymentsCard/PendingPaymentsCard.styled";
import Modal from "../Modal";
import {
  Container,
  HeaderText,
  PayButton,
  Paragraph,
} from "./SpecificPaymentModal.styled";
import { SpecificPaymentModalProps } from "./SpecificPaymentModal.types";

const SpecificPaymentModal: FC<SpecificPaymentModalProps> = ({
  show,
  onChange,
  itemId,
  payPending,
  totalLabel,
  payLabel,
}) => {
  const [itemData, setItemData] = useState<BrandProps>();
  const { pendingPayments } = usePayments();

  const getItemData = () => {
    const item = pendingPayments.find((item) => item.id === itemId);
    return item;
  };

  useEffect(() => {
    const item = getItemData();
    setItemData(item);
  }, [itemId]);

  const payItem = () => {
    payPending(itemData.id);
  };

  return (
    <Modal show={show} onChange={onChange}>
      <Container>
        <HeaderText>{itemData?.brandName}</HeaderText>
        <Paragraph>{itemData?.brandType}</Paragraph>
        <Paragraph>{totalLabel}: {itemData?.amount}</Paragraph>
        <Spacing />
        <PayButton onPress={payItem}>
          <ButtonLabel>{payLabel}</ButtonLabel>
        </PayButton>
      </Container>
    </Modal>
  );
};

export default SpecificPaymentModal;

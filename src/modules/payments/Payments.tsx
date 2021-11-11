import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Paragraph } from "./Payments.styled";

const Payments = () => {
  const imageUri = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
  };
  return (
    <Container>
      <SafeAreaView />
      <Paragraph>Payments</Paragraph>
    </Container>
  );
};

export default Payments;

import React from "react";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utils/theme";
import { Container } from "./Transactions.styled";

const Transactions = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView>
        <Text>Transactions</Text>
      </SafeAreaView>
    </Container>
  );
};

export default Transactions;

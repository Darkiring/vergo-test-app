import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Payments } from "../../modules/payments";
import { Transactions } from "../../modules/transactions";
import { IconImage } from "../../components/icon/Icon.styled";

const Tab = createBottomTabNavigator();

const PaymentsIcon = require("../../assets/icons/payments-icon.png");
const TransactionsIcon = require("../../assets/icons/transactions-icons.png");

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarLabel: "Payments",
          tabBarIcon: () => <IconImage source={PaymentsIcon} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarLabel: "Transactions",
          tabBarIcon: () => <IconImage source={TransactionsIcon} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Payments } from "../../modules/payments";
import { Transactions } from "../../modules/transactions";
import { IconImage } from "../../components/icon/Icon.styled";
import { colors } from "../../utils/theme";

const Tab = createBottomTabNavigator();

const PaymentsIcon = require("../../assets/icons/payments-icon.png");
const TransactionsIcon = require("../../assets/icons/transactions-icons.png");

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primaryColor,
        inactiveTintColor: colors.black,
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconImage hasFocus={focused} source={PaymentsIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconImage hasFocus={focused} source={TransactionsIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

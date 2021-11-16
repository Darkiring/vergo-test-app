import React from "react";

export interface PaymentsContainerProps {
    children: React.ReactNode;
    balanceLabel: string;
    balanceAmount: string | number;
    cardNumber: string;
    month: string;
    year: string;
}

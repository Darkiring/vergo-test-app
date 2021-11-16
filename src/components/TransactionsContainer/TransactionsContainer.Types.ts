import React from "react";

export interface TransactionsContainerProps {
    children: React.ReactNode;
    approvedBalance: number;
    accountBalance: number;
    percentageInBar: number;
    usedBalance: number;
    headerLabel: string;
    availableLabel: string;
    balanceText: string;
    usedText: string;
}

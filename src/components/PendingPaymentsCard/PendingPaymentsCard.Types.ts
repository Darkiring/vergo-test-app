export interface PendingCardProps {
    pendingLabel: string;
    totalLabel: string;
    totalAmount: string | number;
    buttonLabel: string;
    onPressPay: () => void;
}
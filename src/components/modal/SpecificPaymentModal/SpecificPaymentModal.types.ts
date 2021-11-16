export interface SpecificPaymentModalProps {
  show: boolean;
  onChange: (value: boolean) => void;
  payPending: (value: number) => void;
  itemId: number;
  totalLabel: string;
  payLabel: string;
}

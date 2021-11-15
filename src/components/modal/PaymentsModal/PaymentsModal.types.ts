export interface PaymentsModalProps {
  show: boolean;
  onChange: (value: boolean) => void;
  payAll: (value: boolean) => void;
  headerText: string;
  amountLabel: string;
  totalLabel: string;
  payAllLabel: string;
}

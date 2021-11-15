export interface SpecificPaymentModalProps {
  show: boolean;
  onChange: (value: boolean) => void;
  payAll: (value: boolean) => void;
  itemName: string;
}

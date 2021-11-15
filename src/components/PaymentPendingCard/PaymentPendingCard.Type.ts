import { ImageSourcePropType } from "react-native";

export interface PaymentPendingProps {
  brandName: string;
  brandType: string;
  amount: string | number;
  source: ImageSourcePropType;
  status: keyof typeof TYPEOFPAYMENT;
  onPress: () => void;
  buttonLabel: string;
}

export enum TYPEOFPAYMENT {
  SENT = "SENT",
  RECEIVED = "RECEIVED",
  PENDING = "PENDING",
}

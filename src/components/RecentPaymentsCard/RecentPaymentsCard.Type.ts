import { ImageSourcePropType } from "react-native";

export interface RecentPaymentProps {
  brandName: string;
  brandType: string;
  amount: string | number;
  source: ImageSourcePropType;
  status: keyof typeof TYPEOFPAYMENT;
}

export enum TYPEOFPAYMENT {
  SENT = "SENT",
  RECEIVED = "RECEIVED",
  PENDING = "PENDING",
}

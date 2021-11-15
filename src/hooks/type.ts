import { ImageSourcePropType } from "react-native";

export interface BrandsDataProps {
  brandName: string;
  brandType: string;
  status: keyof typeof TYPEOFPAYMENT;
  amount: number;
  source: ImageSourcePropType;
}

export interface BrandProps {
  brandName: string;
  brandType: string;
  amount: number;
  sourcePosition: number;
}

export enum TYPEOFPAYMENT {
  SENT = "SENT",
  RECEIVED = "RECEIVED",
  PENDING = "PENDING",
}

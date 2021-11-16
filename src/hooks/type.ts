import { ImageSourcePropType } from "react-native";

export interface BrandsDataProps {
  brandName: string;
  brandType: string;
  status: keyof typeof TYPEOFPAYMENT;
  amount: number;
  source: ImageSourcePropType;
  id: number;
}

export interface BrandProps {
  brandName: string;
  brandType: string;
  amount: number;
  sourcePosition: number;
  id: number;
}

export enum TYPEOFPAYMENT {
  SENT = "SENT",
  RECEIVED = "RECEIVED",
  PENDING = "PENDING",
}

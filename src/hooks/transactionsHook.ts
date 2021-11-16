import { useEffect, useState } from "react";
import dummyData from "../data/dummyData.json";
import { imageData } from "../data/imagesData";
import { BrandsDataProps, TYPEOFPAYMENT } from "./type";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Array<BrandsDataProps>>([]);
  const setPaymentsData = () => {
    const arr = dummyData.transactions.map((item) => ({
      ...item,
      source: imageData[item.sourcePosition],
      status: TYPEOFPAYMENT[item.status],
    }));
    setTransactions([...arr]);
  };
  useEffect(() => {
    setPaymentsData();
  }, []);

  return {
    transactions,
  };
};

import { useEffect, useState } from "react";
import dummyData from "../data/dummyData.json";
import { imageData } from "../data/imagesData";
import { BrandProps, BrandsDataProps, TYPEOFPAYMENT } from "./type";

export const usePayments = () => {
  const [payments, setPayments] = useState<Array<BrandsDataProps>>([]);
  const [pendingPayments, setPendingPayment] = useState([]);
  const [totalPending, setTotalPending] = useState(0);
  const setPaymentsData = () => {
    const arr = dummyData.paymentsData.map((item) => ({
      ...item,
      source: imageData[item.sourcePosition],
      status: TYPEOFPAYMENT[item.status],
    }));
    setPayments([...arr]);
  };
  const setPendingPayments = () => {
    const arr = dummyData.paymentsData.filter(
      (item) => item.status === "PENDING"
    );
    setPendingPayment([...arr]);
  };
  const payAllPending = () => {
    const arr = dummyData.paymentsData.map((item) =>
      item.status === "PENDING"
        ? {
            ...item,
            status: TYPEOFPAYMENT.SENT,
            source: imageData[item.sourcePosition],
          }
        : {
            ...item,
            source: imageData[item.sourcePosition],
            status: TYPEOFPAYMENT[item.status],
          }
    );
    setPayments([...arr]);
    setPendingPayment([]);
  };
  const setTotalPendingPayments = () => {
    let total = 0;
    dummyData.paymentsData.map((item) => (total = total + item.amount));
    setTotalPending(total);
  };
  useEffect(() => {
    setPaymentsData();
    setPendingPayments();
    setTotalPendingPayments();
  }, []);
  return {
    payments,
    pendingPayments,
    payAllPending,
    totalPending,
  };
};

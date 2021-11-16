import { useEffect, useState } from "react";
import dummyData from "../data/dummyData.json";
import { imageData } from "../data/imagesData";
import { BrandsDataProps, TYPEOFPAYMENT } from "./type";

export const usePayments = () => {
  const [payments, setPayments] = useState<Array<BrandsDataProps>>([]);
  const [pendingPayments, setPendingPayment] = useState([]);
  const [totalPending, setTotalPending] = useState(0);
  const [accountBalance, setAccountBalance] = useState(0);
  const [approvedBalance, setApprovedBalance] = useState(0);

  const setPaymentsData = () => {
    const arr = dummyData.paymentsData.map((item) => ({
      ...item,
      source: imageData[item.sourcePosition],
      status: TYPEOFPAYMENT[item.status],
    }));
    setPayments([...arr]);
  };

  const setPendingPayments = () => {
    const arr = payments.filter((item) => item.status === "PENDING");
    setPendingPayment([...arr]);
  };

  const payAllPending = () => {
    let totalBalance = 0;
    payments.map((item) =>
      item.status === "PENDING"
        ? (totalBalance = totalBalance + item.amount)
        : null
    );
    const arr = payments.map((item) =>
      item.status === "PENDING"
        ? {
            ...item,
            status: TYPEOFPAYMENT.SENT,
          }
        : {
            ...item,
            status: TYPEOFPAYMENT[item.status],
          }
    );
    setPayments([...arr]);
    setPendingPayment([]);
    setAccountBalance(accountBalance - totalBalance);
  };

  const setTotalPendingPayments = () => {
    let total = 0;
    payments.map((item) =>
      item.status === "PENDING" ? (total = total + item.amount) : null
    );
    setTotalPending(total);
  };

  const setUserbalance = () => {
    setAccountBalance(JSON.parse(dummyData.userBalance));
  };

  const setUserApprovedBalance = () => {
    setApprovedBalance(JSON.parse(dummyData.approvedBalance));
  };

  const paySpecificPayment = (id: number) => {
    const itemValue = payments.find((item) => item.id === id);
    const arr = payments.map((item) =>
      item.id === id
        ? {
            ...item,
            status: TYPEOFPAYMENT.SENT,
          }
        : {
            ...item,
            status: TYPEOFPAYMENT[item.status],
          }
    );
    setPayments([...arr]);
    setAccountBalance(accountBalance - itemValue.amount);
  };

  useEffect(() => {
    setPaymentsData();
    setUserbalance();
    setUserApprovedBalance();
  }, []);

  useEffect(() => {
    setPendingPayments();
    setTotalPendingPayments();
  }, [payments]);

  return {
    payments,
    pendingPayments,
    payAllPending,
    totalPending,
    accountBalance,
    paySpecificPayment,
    approvedBalance,
  };
};

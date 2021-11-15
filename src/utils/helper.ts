export const formatCardNumber = (cardNumber: string) => {
  return cardNumber.toString().replace(/\d{4}(?=.)/g, "$& ");
};

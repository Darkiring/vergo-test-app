export const formatCardNumber = (cardNumber: string) => {
  return cardNumber.toString().replace(/\d{4}(?=.)/g, "$& ");
};

export const formatter = new Intl.NumberFormat("en-US");

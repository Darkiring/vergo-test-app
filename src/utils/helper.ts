import "intl";
import "intl/locale-data/jsonp/en";

export const formatCardNumber = (cardNumber: string) => {
  return cardNumber.toString().replace(/\d{4}(?=.)/g, "$& ");
};

export const formatter = new Intl.NumberFormat("en-US");

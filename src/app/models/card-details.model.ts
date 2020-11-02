export interface ICardDetails {
  creditCardNumber: string;
  cardholder: string;
  expirationDate: string;
  securityCode?: string;
  amount: number;
}

export interface IHttpResponse {
  success: boolean;
  statusCode: number;
}

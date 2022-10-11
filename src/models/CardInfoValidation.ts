import * as z from "zod";
import { v4 } from "uuid";

const CardInfoValidation = z.object({
  email: z.string().email(),
  card_number: z.string(),
  cvv: z.string().min(3).max(4),
  expiration_year: z.string().length(4),
  expiration_month: z.string().length(2),
});

export class CardInformation {
  token: string;
  email: string;
  card_number: string;
  cvv: number;
  expiration_year: string;
  expiration_month: string;
  created_at: string;

  constructor(
    email: string,
    card_number: string,
    cvv: number,
    expiration_year: string,
    expiration_month: string
  ) {
    this.token = v4();
    this.email = email;
    this.cvv = cvv;
    this.card_number = card_number;
    this.expiration_year = expiration_year;
    this.expiration_month = expiration_month;
    this.created_at = new Date().toLocaleString();
  }

  get(): any {
    return {
      token: this.token,
      email: this.email,
      cvv: this.cvv,
      card_number: this.card_number,
      expiration_month: this.expiration_month,
      expiration_year: this.expiration_year,
      created_at: this.created_at,
    };
  }
}

export interface CardInterface {
  token: string;
  email: string;
  card_number: string;
  cvv?: number;
  expiration_year: string;
  expiration_month: string;
  created_at: string;
}

export default CardInfoValidation;

const middy = require("@middy/core");
const httpJSONBodyParser = require("@middy/http-json-body-parser");
import CardInfoValidation, {
  CardInformation,
} from "../models/CardInfoValidation";
import BearerValidation from "../models/BearerValidation";
import Repository from "../repository/repository";
import messages from "../logs/messages";
import CreditCard from "../models/CreditCard";

const token = async (event) => {
  if (!BearerValidation(event.headers?.authorization)) {
    return messages["BEARER_MISSING"]();
  }

  const RepCard = new Repository();
  const { email, card_number, cvv, expiration_year, expiration_month } =
    event.body;
  const data = {
    email,
    card_number,
    cvv,
    expiration_year,
    expiration_month,
  };

  const resultCredit = CreditCard.validate(card_number);
  if (!resultCredit) {
    return messages["ERROR_MESSAGE"]("Credit card number is invalid");
  }
  const result = CardInfoValidation.safeParse(data);
  if (!result.success) {
    return messages["ERROR_MESSAGE"](result);
  }

  const card: CardInformation = await RepCard.create(data);
  return messages["SUCCESS_MESSAGE"](card.get());
};

module.exports = {
  token: middy(token).use(httpJSONBodyParser()),
};

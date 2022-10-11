import TokenValidation from "../models/TokenValidation";
import { CardInterface } from "../models/CardInfoValidation";
import Repository from "../repository/repository";
import BearerValidation from "../models/BearerValidation";
import messages from "../logs/messages";

const getToken = async (event) => {
  if (!BearerValidation(event.headers?.authorization)) {
    return messages["BEARER_MISSING"]();
  }
  const RepCard = new Repository();
  const { token } = event.pathParameters;
  const res = TokenValidation.safeParse({ token: token });
  if (!res.success) {
    return messages["ERROR_MESSAGE"]("Token is invalid");
  }

  const card: CardInterface | null = await RepCard.getCard({
    token,
  });
  delete card?.cvv;
  if (card) {
    return messages["SUCCESS_MESSAGE"](card);
  }
  return messages["ERROR_MESSAGE"]("Item is not available");
};

module.exports = {
  getToken,
};

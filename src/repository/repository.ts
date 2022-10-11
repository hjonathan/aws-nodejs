import * as AWS from "aws-sdk";
import { CardInformation, CardInterface } from "../models/CardInfoValidation";

export default class Repository {
  async create(item: any): Promise<CardInformation> {
    const { email, card_number, cvv, expiration_year, expiration_month } = item;
    const card = new CardInformation(
      email,
      card_number,
      cvv,
      expiration_year,
      expiration_month
    );
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    await dynamodb
      .put({
        TableName: "Tokens",
        Item: card,
      })
      .promise();

    return Promise.resolve(card);
  }

  async getCard(item: any): Promise<CardInterface | null> {
    const { token } = item;
    let card: CardInterface | null;
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const result = await dynamodb
      .get({
        TableName: "Tokens",
        Key: { token },
      })
      .promise();

    if (result.Item) {
      card = result.Item as CardInterface;
    } else {
      card = null;
    }
    return Promise.resolve(card);
  }
}

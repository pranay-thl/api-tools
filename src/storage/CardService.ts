import { Model } from "mongoose";
import { CardInterface, CoreInterface } from "../types";
import card from "./models/card";
export class CardService {
  private card: Model<CardInterface>;
  constructor(_Core: CoreInterface) {
    this.card = card;
  }
  public async createCard(cardData: CardInterface): Promise<string> {
    const cardRes: any = await this.card.create(cardData);
    return cardRes.id;
  }
  public async findAll(): Promise<CardInterface[]> {
    const cardRes = this.card.find();
    return cardRes;
  }
}

import { model, Schema } from "mongoose";
import { CardInterface } from "../../types";

const cardSchema: Schema = new Schema({
  cardType: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  cardLevel: {
    type: Number,
    required: true,
  },
  tier: {
    type: String,
    required: true,
  },
  currencyType: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  robotType: {
    type: String,
    required: true,
  },
  abilities: {
    type: Object,
    required: true,
  },
  avatarB64: {
    type: String,
    required: true,
  },
  faction: {
    type: Object,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  durability: {
    type: Number,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  weaponSlot: {
    type: Object,
    required: true,
  },
});

const cardModel = model<CardInterface>("Card", cardSchema);

export default cardModel;

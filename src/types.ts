import { CardService } from "./storage/CardService";

export interface CoreInterface {
  settings?: ConfigInterface;
  store?: StorageInterface;
}
export interface ConfigInterface {
  init(): void;
  get(key: string): any;
  set(key: string, value: any): void;
}
//test
export interface AbilityInterface {
  name: string;
  description: string;
  icon: string;
}
export interface FactionInterface {
  name: string;
  icon: string;
}
export interface robotWeaponSlotInterface {
  light: string[];
  medium: string[];
  heavy: string[];
}
export interface titanWeaponSlotInterface {
  alpha: string[];
  beta: string[];
}
export interface WeaponSlotInterface {
  slotCount: number;
  slots: robotWeaponSlotInterface | titanWeaponSlotInterface;
}
export interface CardInterface {
  cardType: string;
  name: string;
  cardLevel: number;
  tier: string;
  currencyType: "silver" | "gold";
  cost: number;
  robotType: "titan" | "robot";
  abilities: AbilityInterface[];
  avatarB64: string;
  faction: FactionInterface;
  speed: number;
  durability: number;
  level: number;
  weaponSlot: WeaponSlotInterface;
}
export interface StorageInterface {
  init(_Core: CoreInterface): Promise<void>;
  close(): Promise<void>;
  card: CardService;
}

//controller interface starts
export interface CardControllerInterface {}
//controller interface ends

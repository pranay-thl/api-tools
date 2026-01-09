import { ConfigInterface, CoreInterface, StorageInterface } from "../types";
import { connect, set, disconnect } from "mongoose";
import { CardService } from "./CardService";
let card: CardService;
async function init(_Core: CoreInterface) {
  const settings: ConfigInterface = _Core.settings;
  if (settings.get("app:env") === "dev") {
    set("debug", true);
  }
  await connect(settings.get("db:uri"));
  console.log("Connected to Database");
  card = new CardService(_Core);
}

async function close() {
  try {
    await disconnect();
    console.log("Disconnected from Database");
  } catch (error) {
    console.error("Error closing database connection:", error);
  }
}

const store: StorageInterface = {
  init,
  close,
  get card() {
    return card;
  },
};

export { init, store };

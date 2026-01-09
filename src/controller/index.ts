import { ConfigInterface, CoreInterface } from "../types";
import * as storage from "../storage";

const Core: CoreInterface = {};

async function init(settings: ConfigInterface) {
  try {
    Core.settings = settings;
    //await storage.init(Core);
    //Core.store = storage.store;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

async function close() {
  try {
  } catch (err) {
    console.log(err);
    console.log("error while closing controller");
  }
}

export { init, Core, close };

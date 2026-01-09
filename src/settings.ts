import * as nconf from "nconf";
import * as path from "path";
import { ConfigInterface } from "./types";

export const settings: ConfigInterface = {
  init(): void {
    nconf.file({ file: path.join(globalThis.ROOT, "config/settings.json") });
  },
  get(key: string) {
    return nconf.get(key);
  },
  set(key: string, value: any) {
    nconf.set(key, value);
  },
};

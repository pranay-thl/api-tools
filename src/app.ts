import * as http from "http";
import * as controller from "./controller";
import { settings } from "./settings";
import { API } from "./api";

declare global {
  var ROOT: string;
}

globalThis.ROOT = __dirname;

class App {
  constructor() {
    settings.init();
  }
  public async startModules() {
    await controller.init(settings);
    let apiApp = new API(controller.Core);
    let _server: http.Server = http.createServer(apiApp.app);
    _server.on("error", (err) => {
      console.log(err);
      process.exit(1);
    });
    _server.listen(settings.get("app:port"), settings.get("app:host"), () => {
      process.title = "WR Card Game Server";
      console.log(
        `Server started on http://${settings.get("app:host")}:${settings.get(
          "app:port"
        )}`
      );
    });
  }
}
const app: App = new App();
app.startModules();

import * as express from "express";
import * as v1_0 from "./v1_0";
import { CoreInterface } from "../types";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
import helmet from "helmet";

export class API {
  private _app: express.Application;
  constructor(_Core: CoreInterface) {
    v1_0.init(_Core);
    this._app = express();
    this._app.use("/health", (req: any, res: any) => {
      return res.status(200).json({ alive: true });
    });
    this._app.use(
      morgan(
        ':remote-addr - reg:[host] - ":method :referrer :url HTTP/:http-version" :status :res[content-length] - :user-agent',
        {
          stream: {
            write: (message: any) => {
              console.log(message);
            },
          },
        }
      )
    );
    this._app.use(bodyParser.json({ limit: "25mb" }));
    this._app.use(bodyParser.urlencoded({ limit: "25mb", extended: true }));
    this._app.use(express.json());
    this._app.use(compression());
    const corsOption: cors.CorsOptions = {
      allowedHeaders: [
        "Origin",
        "Content-Type",
        "Aceept",
        "Authorization",
        "X-Requested-With",
      ],
      origin: _Core.settings.get("app:cors"),
      credentials: true,
      methods: ["GET", "PUT", "POST", "DELETE"],
      preflightContinue: true,
      optionsSuccessStatus: 200,
    };
    this._app.use(cors(corsOption));
    this._app.use(helmet());
    this._app.use(helmet.referrerPolicy({ policy: "same-origin" }));
    this._app.disable("x-powered-by");
    this._app.use("/", v1_0.router);
    this._app.use((req: any, res: any, next: any) => {
      return res
        .status(404)
        .json({ error: { message: "Requested URL not found!" } });
    });
    this._app.use((error: any, req: any, res: any, next: any) => {
      console.log(error);
      return res
        .status(error.status || 500)
        .json({ error: { message: error.message } });
    });
  }
  public get app() {
    return this._app;
  }
}

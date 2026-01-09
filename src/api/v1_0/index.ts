import * as express from "express";
import { CoreInterface } from "../../types";
import * as test from "./test";

const router = express.Router();

function init(_Core: CoreInterface) {
  test.init(_Core);
  router.use("/test", test.router);
}

export { init, router };

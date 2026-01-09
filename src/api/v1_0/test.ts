import * as express from "express";
import * as test from "../middleware/test";
import { CoreInterface } from "../../types";

const router = express.Router();

function init(_Core: CoreInterface) {}

router.get("/echo/:num", test.echo, async (req, res, next) => {
  try {
    return res.status(200).json({ echo: req.params.num });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: err.message ? err.message : "Internal server error" });
  }
});

export { init, router };

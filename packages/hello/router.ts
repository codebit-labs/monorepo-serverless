import express, { Request, Response } from "express";
import slsw from "serverless-webpack";
import { EventBridge } from "aws-sdk";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  const eventBridge = new EventBridge({
    endpoint: process.env.EVENT_BRIDGE_ENDPOINT,
  });
  eventBridge.putEvents({
    Entries: [
      {
        Source: process.env.EVENT_BRIDGE_SOURCE,
        DetailType: "EXAMPLE",
        Detail: JSON.stringify({
          action: "DISPATCH",
        }),
        Time: new Date(),
      },
    ],
  });
  return res.json({ Hello: "World" });
});

router.get(
  "*",
  (_req, res): Response => {
    res.status(404);
    return res.json({ error: 404 });
  }
);

export { router };

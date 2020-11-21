import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  return res.json({ Hello: "World Team" });
});
router.get(
  "*",
  (_req, res): Response => {
    res.status(404);
    return res.json({ error: 404 });
  }
);

export { router };

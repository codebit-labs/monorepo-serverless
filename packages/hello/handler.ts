import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import serverless from "serverless-http";

import { router } from "./router";

export const hello = async (
  event: AWSLambda.APIGatewayProxyEvent,
  context: AWSLambda.Context
) => {
  const app: any = express();
  app.use(bodyParser.text());
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.raw());
  app.use(bodyParser.json());
  app.use("/v1/api", cors(), router);

  const serverlessApp = serverless(app);
  return serverlessApp(event, context);
};

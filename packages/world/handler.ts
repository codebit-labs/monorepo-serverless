import "reflect-metadata";

import { Base } from "./app/base";
import { container } from "./app/container";
import { Symbols } from "./app/symbols";

export const world = async (event: any) => {
  const base = container.get<Base>(Symbols.Base);
  console.log(base.dispatch());
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

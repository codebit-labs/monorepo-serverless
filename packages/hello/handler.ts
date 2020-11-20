import { Helper } from "./app/helper";

export const hello = async (event: any) => {
  const helper = new Helper();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Go Serverless v1.0! ${helper.hello("Yaydoo")}`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

import {v1} from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const params = {
    TableName: 'orders',
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      orderId: v1(),
      total: event.body.total,
      products: event.body.products
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}
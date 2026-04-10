import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

export const dynamoClient = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-2',
});

export const docClient = DynamoDBDocumentClient.from(dynamoClient);
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from '../../config/dynamo.config';
import { v4 as uuid } from 'uuid';
import { Injectable , Logger} from '@nestjs/common';

@Injectable()
export class MovementsRepository {
  private tableName = process.env.TABLE_NAME || 'MovementsTable';
  private readonly logger = new Logger(MovementsRepository.name);
async create(data: any) {
  try {
    const item = {
      id: uuid(),
      ...data,
      createdAt: new Date().toISOString(),
    };

    this.logger.log("Saving to DynamoDB:", item);

    await docClient.send(new PutCommand({
      TableName: this.tableName,
      Item: item,
    }));

    this.logger.log("Saved successfully in DynamoDB");

    return item;
  } catch (error) {
    console.error("DynamoDB error:", error);
    throw error;
  }
}
}
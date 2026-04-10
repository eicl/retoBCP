import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from '../../config/dynamo.config';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MovementsRepository {
  private tableName = process.env.TABLE_NAME || 'MovementsTable';

  async create(data: any) {
    const item = {
      id: uuid(),
      ...data,
      createdAt: new Date().toISOString(),
    };

    await docClient.send(new PutCommand({
      TableName: this.tableName,
      Item: item,
    }));

    return item;
  }
}
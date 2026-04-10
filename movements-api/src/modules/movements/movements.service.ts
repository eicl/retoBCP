import { Injectable, Logger } from '@nestjs/common';
import { MovementsRepository } from './movements.repository';

@Injectable()
export class MovementsService {
  private readonly logger = new Logger(MovementsService.name);

  constructor(private readonly repo: MovementsRepository) {}

  async createMovement(dto: any) {
    try {
      this.logger.log(`Creating movement for user: ${dto.userId}`);

      const result = await this.repo.create(dto);

      this.logger.log(`Movement created successfully: ${result.id}`);

      return result;
    } catch (error) {
      this.logger.error(
        `Error creating movement`,
        (error as Error).stack,
      );
      throw error;
    }
  }
}
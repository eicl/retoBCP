import { Injectable } from '@nestjs/common';
import { MovementsRepository } from './movements.repository';

@Injectable()
export class MovementsService {
  constructor(
  private readonly repo: MovementsRepository,
) {}

  async createMovement(dto: any) {
    return this.repo.create(dto);
  }
}
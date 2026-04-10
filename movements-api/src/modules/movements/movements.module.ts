import { Module } from '@nestjs/common';
import { MovementsController } from './movements.controller';
import { MovementsService } from './movements.service';
import { MovementsRepository } from './movements.repository';

@Module({
  controllers: [MovementsController],
  providers: [
    MovementsService,
    MovementsRepository, 
  ],
})
export class MovementsModule {}
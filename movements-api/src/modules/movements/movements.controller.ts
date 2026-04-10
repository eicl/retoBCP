import { Body, Controller, Post } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { MovementsService } from './movements.service';

@Controller('movements')
export class MovementsController {
  constructor(private readonly service: MovementsService) {}

  @Post()
  async create(@Body() dto: CreateMovementDto) {
    return this.service.createMovement(dto);
  }
}

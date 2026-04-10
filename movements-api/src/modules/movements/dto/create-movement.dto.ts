import { IsNotEmpty, IsNumber, IsPositive, IsString, IsEnum } from 'class-validator';
import { MovementType } from '../enums/movement-type.enum';

export class CreateMovementDto {
  @IsNotEmpty()
  @IsString()
  userId!: string;

  @IsNumber()
  @IsPositive()
  monto!: number;

  @IsNotEmpty()
  @IsEnum(MovementType, {
    message: 'el valor de tipo debe ser INGRESO o EGRESO',
  })
  tipo!: MovementType;

  @IsNotEmpty()
  @IsString()
  descripcion!: string;
}

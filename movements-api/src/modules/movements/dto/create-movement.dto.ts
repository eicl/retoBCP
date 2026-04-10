import { IsNotEmpty, IsNumber, IsPositive, IsString, IsIn } from 'class-validator';

export class CreateMovementDto {
  @IsNotEmpty()
  @IsString()
  userId!: string;

  @IsNumber()
  @IsPositive()
  monto!: number;

  @IsIn(['INGRESO', 'EGRESO'])
  tipo!: 'INGRESO' | 'EGRESO';

  @IsNotEmpty()
  @IsString()
  descripcion!: string;
}

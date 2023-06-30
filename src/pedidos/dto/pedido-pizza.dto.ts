import { IsNotEmpty, IsString } from 'class-validator';

export class PedidoPizzaDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  dia: string;
}

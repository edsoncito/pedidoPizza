import { IsNotEmpty, IsString } from 'class-validator';

export class PedidoPizzaPerzonalizadaDto {
  @IsNotEmpty()
  @IsString()
  masa: string;

  @IsNotEmpty()
  @IsString()
  queso: string;

  @IsNotEmpty()
  @IsString()
  salsa: string;

  @IsNotEmpty()
  @IsString()
  relleno: string;

  @IsNotEmpty()
  @IsString()
  dia: string;
}

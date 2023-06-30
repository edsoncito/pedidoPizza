import { Controller, Get, Body } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidoPizzaPerzonalizadaDto } from './dto/pedido-pizza-personalizada.dto';
import { PedidoPizzaDto } from './dto/pedido-pizza.dto';

@Controller('pizza')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Get('pedido')
  create(@Body() createPedidoDto: PedidoPizzaDto) {
    return this.pedidosService.pedido(createPedidoDto);
  }

  @Get('pedido-perzonalizado')
  realizarPedidoPersonalizado(
    @Body() createPedidoDto: PedidoPizzaPerzonalizadaDto,
  ) {
    return this.pedidosService.pedidoPersonalizado(createPedidoDto);
  }

  @Get()
  findAll() {
    return this.pedidosService.findAll();
  }
}

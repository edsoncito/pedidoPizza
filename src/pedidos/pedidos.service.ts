import { BadRequestException, Injectable } from '@nestjs/common';
import { PedidoPizzaPerzonalizadaDto } from './dto/pedido-pizza-personalizada.dto';
import { PizzaPerzonalizadaBuilder } from './builder/pizza-perzonalizada-builder';
import { PizzaDirector } from './director/pizza-director';
import { Pizza } from './models/pizza.model';
import { pizzas } from './data';
import { PedidoPizzaDto } from './dto/pedido-pizza.dto';

@Injectable()
export class PedidosService {
  pedidoPersonalizado(pedidoPizzaDto: PedidoPizzaPerzonalizadaDto) {
    try {
      const pizzaPerzonalizada = new PizzaPerzonalizadaBuilder();
      const director: PizzaDirector = new PizzaDirector(pizzaPerzonalizada);
      director.construirPizzaPerzonalizada(
        pedidoPizzaDto.masa,
        pedidoPizzaDto.salsa,
        pedidoPizzaDto.relleno,
        pedidoPizzaDto.queso,
        pedidoPizzaDto.dia,
      );
      const pizza: Pizza = director.getPizza();
      return pizza.toString();
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }

  pedido(pedidoPizzaDto: PedidoPizzaDto) {
    try {
      const pizzaEncontrada = pizzas.find((elemento) => {
        return elemento.hasOwnProperty(pedidoPizzaDto.nombre);
      });
      if (pizzaEncontrada) {
        const pizzaBuilder = pizzaEncontrada[pedidoPizzaDto.nombre];
        const director: PizzaDirector = new PizzaDirector(pizzaBuilder);
        director.construirPizza(pedidoPizzaDto.dia);
        const pizza: Pizza = director.getPizza();
        return pizza.toString();
      } else {
        throw new BadRequestException('La pizza no fue encontrada');
      }
    } catch (error) {
      throw new BadRequestException(error.response);
    }
  }
}

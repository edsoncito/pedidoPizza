import { PizzaBuilder } from './builder/pizza-builder';
import { PizzaHawaianaBuilder } from './builder/pizza-hawaiana-builder';
import { PizzaStrogonoffBuilder } from './builder/pizza-strogonoff-builder';

export const pizzas = [];

const hawai_pizzabuilder: PizzaBuilder = new PizzaHawaianaBuilder();
const strogonoffBuilder: PizzaBuilder = new PizzaStrogonoffBuilder();
const data = {
  hawaiana: hawai_pizzabuilder,
  strogonoff: strogonoffBuilder,
};

pizzas.push(data);

import { PizzaBuilder } from '../builder/pizza-builder';
import { Pizza } from '../models/pizza.model';

export class PizzaDirector {
  private pizzaBuilder: PizzaBuilder;

  constructor(builder: PizzaBuilder) {
    this.pizzaBuilder = builder;
  }

  public getPizza(): Pizza {
    return this.pizzaBuilder.getPizza();
  }

  public construirPizzaPerzonalizada(
    masa: string,
    salsa: string,
    relleno: string,
    queso: string,
    dia: string,
  ): void {
    this.pizzaBuilder.buildNombre();
    this.pizzaBuilder.buildMasa(masa);
    this.pizzaBuilder.buildSalsa(salsa);
    this.pizzaBuilder.buildRelleno(relleno);
    this.pizzaBuilder.buildQueso(queso);
    this.pizzaBuilder.buildPromo(dia);
  }

  public construirPizza(dia: string): void {
    this.pizzaBuilder.buildNombre();
    this.pizzaBuilder.buildMasa();
    this.pizzaBuilder.buildSalsa();
    this.pizzaBuilder.buildRelleno();
    this.pizzaBuilder.buildQueso();
    this.pizzaBuilder.buildPromo(dia);
  }
}

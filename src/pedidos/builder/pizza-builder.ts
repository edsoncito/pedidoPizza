import { Pizza } from '../models/pizza.model';

export abstract class PizzaBuilder {
  public pizza: Pizza;

  public getPizza(): Pizza {
    return this.pizza;
  }

  public abstract buildNombre(): void;

  public abstract buildMasa(masa?: string): void;

  public abstract buildSalsa(salsa?: string): void;

  public abstract buildRelleno(relleno?: string): void;

  public abstract buildQueso(queso?: string): void;

  public abstract buildPromo(dia: string): void;
}

import { Pizza } from '../models/pizza.model';
import { PizzaBuilder } from './pizza-builder';
import { PromoDeliveryBuilder } from './promo-delivery-builder';

export class PizzaPerzonalizadaBuilder extends PizzaBuilder {
  constructor() {
    super();
    this.pizza = new Pizza();
  }

  public buildNombre(): void {
    this.pizza.setNombre('personalizada');
  }
  public buildMasa(masa: string): void {
    this.pizza.setMasa(masa);
  }
  public buildSalsa(salsa: string): void {
    this.pizza.setSalsa(salsa);
  }
  public buildRelleno(relleno: string): void {
    this.pizza.setRelleno(relleno);
  }
  public buildQueso(queso: string): void {
    this.pizza.setQueso(queso);
  }
  public buildPromo(dia: string): void {
    const promo: PromoDeliveryBuilder = new PromoDeliveryBuilder();
    const delivery = promo.buildDelivery(dia);
    this.pizza.setPromo(delivery);
  }
}

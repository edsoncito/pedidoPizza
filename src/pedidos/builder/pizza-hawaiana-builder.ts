import { Pizza } from '../models/pizza.model';
import { PizzaBuilder } from './pizza-builder';
import { PromoDeliveryBuilder } from './promo-delivery-builder';

export class PizzaHawaianaBuilder extends PizzaBuilder {
  constructor() {
    super();
    this.pizza = new Pizza();
  }

  public buildNombre(): void {
    this.pizza.setNombre('Hawaiana');
  }
  public buildMasa(): void {
    this.pizza.setMasa('suave');
  }
  public buildSalsa(): void {
    this.pizza.setSalsa('ajo');
  }
  public buildRelleno(): void {
    this.pizza.setRelleno('piña + aceituna + brocoli');
  }
  public buildQueso(): void {
    this.pizza.setQueso('americano');
  }
  public buildPromo(dia: string): void {
    const promo: PromoDeliveryBuilder = new PromoDeliveryBuilder();
    const delivery = promo.buildDelivery(dia);
    this.pizza.setPromo(delivery);
  }
}

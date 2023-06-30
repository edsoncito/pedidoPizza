import { Promo } from './promo.models';

export class Pizza {
  private nombre: string;
  private masa: string;
  private queso: string;
  private salsa: string;
  private relleno: string;
  private promo: Promo;

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getPromo(): Promo {
    return this.promo;
  }

  public setPromo(promo: Promo): void {
    this.promo = promo;
  }

  public getMasa(): string {
    return this.masa;
  }

  public setMasa(masa: string): void {
    this.masa = masa;
  }

  public getSalsa(): string {
    return this.salsa;
  }

  public setSalsa(salsa: string): void {
    this.salsa = salsa;
  }

  public getRelleno(): string {
    return this.relleno;
  }

  public setRelleno(relleno: string): void {
    this.relleno = relleno;
  }

  public getQueso(): string {
    return this.queso;
  }

  public setQueso(queso: string): void {
    this.queso = queso;
  }

  toString(): {} {
    const obj = {
      pizza: this.nombre,
      masa: this.masa,
      queso: this.queso,
      salsa: this.salsa,
      relleno: this.relleno,
      promo: this.promo.getPromo(),
    };
    return obj;
  }
}

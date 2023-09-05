import { Negotiation } from "./negotiation.js";

export class Negotiations {
  private negotiations: Array<Negotiation> = [];

  public addNegotiation(negotiation: Negotiation): void {
    this.negotiations = [...this.negotiations, negotiation];
  }

  public listNegotiations(): ReadonlyArray<Negotiation> {
    return this.negotiations;
  }
}

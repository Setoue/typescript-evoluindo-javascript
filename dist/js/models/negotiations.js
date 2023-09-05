export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    addNegotiation(negotiation) {
        this.negotiations = [...this.negotiations, negotiation];
    }
    listNegotiations() {
        return this.negotiations;
    }
}

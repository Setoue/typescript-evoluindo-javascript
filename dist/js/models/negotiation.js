export class Negotiation {
    constructor(_date, amount, value) {
        this._date = _date;
        this.amount = amount;
        this.value = value;
    }
    static createOf(dateString, amountString, valueString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ","));
        const amount = parseInt(amountString);
        const value = parseFloat(valueString);
        return new Negotiation(date, amount, value);
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    get volume() {
        return this.amount * this.value;
    }
}

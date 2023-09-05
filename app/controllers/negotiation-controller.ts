import { WeekDay } from "../enums/weekday.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiation-view.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations: Negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView("#templateView", true);
  private messageView = new MessageView("#messageView");

  constructor() {
    this.inputDate = <HTMLInputElement>document.querySelector("#date");
    this.inputAmount = document.querySelector("#amount") as HTMLInputElement;
    this.inputValue = document.querySelector("#value") as HTMLInputElement;
    this.negotiationsView.update(this.negotiations);
  }

  public add(): void {
    const negotiation = Negotiation.createOf(
      this.inputDate.value,
      this.inputAmount.value,
      this.inputValue.value
    );

    if (!this.isWorkingDay(negotiation.date)) {
      this.messageView.update("Only working days");
      return;
    }

    this.negotiations.addNegotiation(negotiation);
    this.clearForms();
    this.updateView();
  }

  private isWorkingDay(date: Date): boolean {
    return date.getDay() > WeekDay.sunday && date.getDay() < WeekDay.saturday;
  }

  private clearForms(): void {
    this.inputAmount.value = "";
    this.inputDate.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }

  private updateView(): void {
    this.negotiationsView.update(this.negotiations);
    this.messageView.update("Negotiation added success");
  }
}

import { Negotiations } from "../models/negotiations.js";
import { View } from "./view.js";

export class NegotiationsView extends View<Negotiations> {
  protected template(model: Negotiations): string {
    return `
    
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                ${model
                  .listNegotiations()
                  .map((negotiation) => {
                    return `
                    <tr>
                        <td>${this.format(negotiation.date)}</td>
                        <td>${negotiation.amount}</td>
                        <td>${negotiation.value}</td>
                    </tr>`;
                  })
                  .join("")}
            </tbody>
        </table>
    `;
  }

  private format(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }
}

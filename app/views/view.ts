export abstract class View<T> {
  protected _element: HTMLElement;
  private toEscape = false;
  constructor(selector: string, toEscape?: boolean) {
    const element = document.querySelector(selector);
    if (!element) {
      throw Error("attribute element return null");
    }
    if (toEscape) {
      this.toEscape = toEscape;
    }
    this._element = element as HTMLInputElement;
  }

  public update(model: T): void {
    let template = this.template(model);
    if (this.toEscape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this._element.innerHTML = template;
  }

  protected abstract template(model: T): string;
}

export class View {
    constructor(selector, toEscape) {
        this.toEscape = false;
        const element = document.querySelector(selector);
        if (!element) {
            throw Error("attribute element return null");
        }
        if (toEscape) {
            this.toEscape = toEscape;
        }
        this._element = element;
    }
    update(model) {
        let template = this.template(model);
        if (this.toEscape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this._element.innerHTML = template;
    }
}

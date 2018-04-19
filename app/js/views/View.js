class View {
    constructor(selector) {
        this._elemento = document.querySelector(selector);
    }
    update(modal) {
        this._elemento.innerHTML = this.template(modal);
    }
}

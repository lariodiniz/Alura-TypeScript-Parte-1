abstract class View<T> {
    protected _elemento: Element;

    constructor(selector: string){
        this._elemento = document.querySelector(selector);
    }

    update(modal:T): void{
        this._elemento.innerHTML = this.template(modal);
    }

    abstract template(modal:T): string;
}
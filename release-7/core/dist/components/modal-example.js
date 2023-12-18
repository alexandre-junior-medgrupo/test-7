import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const modalExampleCss = ".sc-modal-example-h{display:block}";

const ModalExample$1 = /*@__PURE__*/ proxyCustomElement(class ModalExample extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, null, h("h1", null, "Exemplo de modal")));
    }
    static get style() { return modalExampleCss; }
}, [2, "modal-example"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["modal-example"];
    components.forEach(tagName => { switch (tagName) {
        case "modal-example":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ModalExample$1);
            }
            break;
    } });
}

const ModalExample = ModalExample$1;
const defineCustomElement = defineCustomElement$1;

export { ModalExample, defineCustomElement };

//# sourceMappingURL=modal-example.js.map
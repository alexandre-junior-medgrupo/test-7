import { proxyCustomElement, HTMLElement, getAssetPath, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const inputContainerCss = ":host{display:block}.tp-input-container__wrapper{display:flex}";

const TpInputContainer$1 = /*@__PURE__*/ proxyCustomElement(class TpInputContainer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.alertTriangleIcon = getAssetPath('./assets/tp-alert-triangle.svg');
        this.CheckIcon = getAssetPath('./assets/tp-check.svg');
        this.state = undefined;
    }
    render() {
        const { state, alertTriangleIcon, CheckIcon } = this;
        let content;
        const icon = state === 'error' ? alertTriangleIcon : CheckIcon;
        if (state) {
            content = (h("div", { class: "tp-input-container__state-container" }, h("ion-icon", { class: "tp-input-container__icon", src: icon, "aria-hidden": "true" })));
        }
        return (h(Host, { class: createColorClasses(null, {
                'tp-input-container': true,
                'tp-comparison-chart-bar--error': state === 'error',
                'tp-comparison-chart-bar--success': state === 'success',
            }) }, h("slot", { name: "label" }), h("div", { class: "tp-input-container__wrapper" }, h("slot", null), content), h("slot", { name: "feedback-success" }), h("slot", { name: "feedback-error" })));
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return inputContainerCss; }
}, [1, "tp-input-container", {
        "state": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-input-container"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-input-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpInputContainer$1);
            }
            break;
    } });
}

const TpInputContainer = TpInputContainer$1;
const defineCustomElement = defineCustomElement$1;

export { TpInputContainer, defineCustomElement };

//# sourceMappingURL=tp-input-container.js.map
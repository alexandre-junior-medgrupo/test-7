import { proxyCustomElement, HTMLElement, getAssetPath, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const inputContainerCss = ":host{--border-color:transparent;--background:var(--tp-color-neutral-2)}:host{display:block}.tp-input-container__wrapper{display:flex;align-items:center;margin:8px 0;background:var(--background);border:1px solid var(--border-color);border-radius:8px}.tp-input-container__wrapper:hover{--background:var(--tp-color-neutral-3)}.tp-input-container__wrapper:focus-within{--border-color:var(--tp-color-neutral-3)}.tp-input-container__state-container{margin-right:16px}::slotted(*[slot=feedback-error]){display:none;color:var(--tp-color-warning) !important}::slotted(*[slot=feedback-success]){display:none;color:var(--tp-color-success) !important}::slotted(ion-icon){margin-right:16px;--stroke:var(--tp-color-neutral-6) !important}:host(.tp-comparison-chart-bar--error) .tp-input-container__wrapper{--border-color:var(--tp-color-warning)}:host(.tp-comparison-chart-bar--error) ::slotted(*[slot=feedback-error]){display:block}:host(.tp-comparison-chart-bar--error) .tp-input-container__icon{--stroke:var(--tp-color-warning)}:host(.tp-comparison-chart-bar--success) .tp-input-container__wrapper{--border-color:var(--tp-color-success)}:host(.tp-comparison-chart-bar--success) ::slotted(*[slot=feedback-success]){display:block}:host(.tp-comparison-chart-bar--success) .tp-input-container__icon{--stroke:var(--tp-color-success)}:host(.tp-color) .tp-input-container__wrapper{--background:var(--tp-color-base)}:host(.tp-color) .tp-input-container__wrapper:hover{--background:var(--tp-color-shade)}:host(.tp-color) .tp-input-container__wrapper:focus-within{--border-color:var(--tp-color-tint)}:host(.tp-color) ::slotted(ion-input.sc-ion-input-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-input[clear-input]){--tp-fill-clear-icon:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-searchbar.sc-ion-searchbar-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important;--tp-stroke-icon:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-textarea.sc-ion-textarea-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-datetime-button){--tp-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-icon){--stroke:var(--tp-color-contrast) !important}";

const TpInputContainer$1 = /*@__PURE__*/ proxyCustomElement(class TpInputContainer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.alertTriangleIcon = getAssetPath('./assets/tp-alert-triangle.svg');
        this.CheckIcon = getAssetPath('./assets/tp-check.svg');
        this.color = undefined;
        this.state = undefined;
    }
    render() {
        const { color, state, alertTriangleIcon, CheckIcon } = this;
        let content;
        const icon = state === 'error' ? alertTriangleIcon : CheckIcon;
        if (state) {
            content = (h("div", { class: "tp-input-container__state-container" }, h("ion-icon", { class: "tp-input-container__icon", src: icon, "aria-hidden": "true" })));
        }
        return (h(Host, { class: createColorClasses(color, {
                'tp-input-container': true,
                'tp-comparison-chart-bar--error': state === 'error',
                'tp-comparison-chart-bar--success': state === 'success',
            }) }, h("slot", { name: "label" }), h("div", { class: "tp-input-container__wrapper" }, h("slot", null), content), h("slot", { name: "feedback-success" }), h("slot", { name: "feedback-error" })));
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return inputContainerCss; }
}, [1, "tp-input-container", {
        "color": [513],
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
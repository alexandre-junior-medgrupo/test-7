import { r as registerInstance, g as getAssetPath, h, H as Host } from './index-2c7b414a.js';
import { c as createColorClasses } from './color.function-a9b13d36.js';

const inputContainerCss = ":host{display:block}.tp-input-container__wrapper{display:flex}";

const TpInputContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
TpInputContainer.style = inputContainerCss;

export { TpInputContainer as tp_input_container };

//# sourceMappingURL=tp-input-container.entry.js.map
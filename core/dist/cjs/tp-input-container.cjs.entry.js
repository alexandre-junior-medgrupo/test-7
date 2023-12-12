'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8bfaa311.js');
const color_function = require('./color.function-2f28fd83.js');

const inputContainerCss = ":host{display:block}.tp-input-container__wrapper{display:flex}";

const TpInputContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.alertTriangleIcon = index.getAssetPath('./assets/tp-alert-triangle.svg');
        this.CheckIcon = index.getAssetPath('./assets/tp-check.svg');
        this.state = undefined;
    }
    render() {
        const { state, alertTriangleIcon, CheckIcon } = this;
        let content;
        const icon = state === 'error' ? alertTriangleIcon : CheckIcon;
        if (state) {
            content = (index.h("div", { class: "tp-input-container__state-container" }, index.h("ion-icon", { class: "tp-input-container__icon", src: icon, "aria-hidden": "true" })));
        }
        return (index.h(index.Host, { class: color_function.createColorClasses(null, {
                'tp-input-container': true,
                'tp-comparison-chart-bar--error': state === 'error',
                'tp-comparison-chart-bar--success': state === 'success',
            }) }, index.h("slot", { name: "label" }), index.h("div", { class: "tp-input-container__wrapper" }, index.h("slot", null), content), index.h("slot", { name: "feedback-success" }), index.h("slot", { name: "feedback-error" })));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpInputContainer.style = inputContainerCss;

exports.tp_input_container = TpInputContainer;

//# sourceMappingURL=tp-input-container.cjs.entry.js.map
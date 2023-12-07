import { createColorClasses } from "../../../utils/functions/color.function";
import { Host, getAssetPath, h } from "@stencil/core";
export class TpInputContainer {
    constructor() {
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
    static get is() { return "tp-input-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["input-container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["input-container.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'error' | 'success'",
                    "resolved": "\"error\" | \"success\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de estado do componente."
                },
                "attribute": "state",
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=input-container.js.map

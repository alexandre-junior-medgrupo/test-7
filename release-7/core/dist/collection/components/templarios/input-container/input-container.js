import { createColorClasses } from "../../../utils/functions/color.function";
import { Host, getAssetPath, h } from "@stencil/core";
export class TpInputContainer {
    constructor() {
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
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpColor",
                    "resolved": "\"orange\" | \"orange-1\" | \"orange-2\" | \"orange-3\" | \"orange-4\" | \"orange-5\" | TpColors | TpColorsMedgrupo | (string & Record<never, never>)",
                    "references": {
                        "TpColor": {
                            "location": "import",
                            "path": "../../../utils/types/color.type",
                            "id": "src/utils/types/color.type.ts::TpColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de cor do componente."
                },
                "attribute": "color",
                "reflect": true
            },
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

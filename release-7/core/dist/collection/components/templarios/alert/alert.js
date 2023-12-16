import { Host, h, getAssetPath, } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
import { TpAlertState } from "./alert.enum";
export class TpAlert {
    constructor() {
        this.color = undefined;
        this.state = undefined;
        this.message = undefined;
        this.icon = undefined;
        this.loading = undefined;
    }
    render() {
        const { color, icon, loading, message, state } = this;
        let renderIcon;
        let renderMessage;
        let content;
        renderIcon = getAssetPath(`../../../../icons/${icon}.svg`);
        renderMessage = message;
        if (state === TpAlertState.OFFLINE) {
            renderIcon = getAssetPath(`../../../../icons/tp-wi-fi-off.svg`);
            renderMessage = 'Você está offline. Conecte-se para acessar o conteúdo.';
        }
        else if (state === TpAlertState.ATUALIZAR) {
            renderIcon = getAssetPath(`../../../../icons/tp-alert-triangle.svg`);
            renderMessage = 'Versão desatualizada';
        }
        if (loading) {
            content = h("ion-skeleton-text", { class: "tp-alert__skeleton", animated: true });
        }
        else {
            content = h("div", { class: "tp-alert__container" }, h("ion-icon", { class: "tp-alert__icon", "tp-size": "sm", src: renderIcon }), h("ion-text", { class: "tp-alert__text", "tp-type": "p12x" }, renderMessage));
        }
        return h(Host, { class: createColorClasses(color, {
                'tp-alert': true,
                'tp-alert--offline': state === TpAlertState.OFFLINE,
                'tp-alert--atualizar': state === TpAlertState.ATUALIZAR,
                'tp-alert--loading': loading,
            }) }, content);
    }
    static get is() { return "tp-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["alert.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["alert.css"]
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
                    "original": "TpAlertType['state']",
                    "resolved": "\"atualizar\" | \"offline\"",
                    "references": {
                        "TpAlertType": {
                            "location": "import",
                            "path": "./alert.type",
                            "id": "src/components/templarios/alert/alert.type.ts::TpAlertType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de estado do componente."
                },
                "attribute": "state",
                "reflect": true
            },
            "message": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a string a ser exibida no componente."
                },
                "attribute": "message",
                "reflect": true
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define o icon a ser exibido no componente."
                },
                "attribute": "icon",
                "reflect": true
            },
            "loading": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define o estado de carregamento do componente."
                },
                "attribute": "loading",
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=alert.js.map

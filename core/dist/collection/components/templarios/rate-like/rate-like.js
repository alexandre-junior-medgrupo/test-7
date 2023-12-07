import { Host, h, getAssetPath, } from "@stencil/core";
import { TpRateLikeStatus } from "./rate-like.enum";
export class TpRateLike {
    constructor() {
        this.thumbsUpIcon = getAssetPath('./assets/tp-thumbs-up.svg');
        this.thumbsDownIcon = getAssetPath('./assets/tp-thumbs-down.svg');
        this.onClick = (status) => {
            if (this.status === undefined) {
                return;
            }
            this.status = status;
            this.tpChange.emit(this.status);
        };
        this.status = undefined;
        this.loading = undefined;
    }
    render() {
        const { loading, status, thumbsUpIcon, thumbsDownIcon } = this;
        let content;
        if (loading) {
            content = (h("div", { class: "tp-rate-like__container" }, h("ion-skeleton-text", { class: "tp-rate-like__skeleton", animated: true }), h("ion-skeleton-text", { class: "tp-rate-like__skeleton", animated: true })));
        }
        else {
            content = (h("div", { class: "tp-rate-like__container" }, h("button", { class: `tp-rate-like__button
          ${status === TpRateLikeStatus.LIKE ? 'tp-rate-like__button--like' : ''}
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `, onClick: () => this.onClick(TpRateLikeStatus.LIKE) }, h("ion-icon", { class: "tp-rate-like__icon", src: thumbsUpIcon, "aria-hidden": "true" })), h("button", { class: `tp-rate-like__button
          ${status === TpRateLikeStatus.DISLIKE
                    ? 'tp-rate-like__button--dislike'
                    : ''}
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `, onClick: () => this.onClick(TpRateLikeStatus.DISLIKE) }, h("ion-icon", { class: "tp-rate-like__icon", src: thumbsDownIcon, "aria-hidden": "true" }))));
        }
        return h(Host, { class: "tp-rate-like" }, content);
    }
    static get is() { return "tp-rate-like"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["rate-like.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["rate-like.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "status": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TpRateLikeType['status']",
                    "resolved": "\"dislike\" | \"like\"",
                    "references": {
                        "TpRateLikeType": {
                            "location": "import",
                            "path": "./rate-like.type",
                            "id": "src/components/templarios/rate-like/rate-like.type.ts::TpRateLikeType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define o status do componente."
                },
                "attribute": "status",
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
    static get events() {
        return [{
                "method": "tpChange",
                "name": "tpChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitido quando a propriedade status \u00E9 alterada."
                },
                "complexType": {
                    "original": "TpRateLikeType['status']",
                    "resolved": "\"dislike\" | \"like\"",
                    "references": {
                        "TpRateLikeType": {
                            "location": "import",
                            "path": "./rate-like.type",
                            "id": "src/components/templarios/rate-like/rate-like.type.ts::TpRateLikeType"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=rate-like.js.map

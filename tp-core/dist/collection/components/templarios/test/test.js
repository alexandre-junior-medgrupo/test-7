import { Host, getAssetPath, h } from "@stencil/core";
import { createColorClasses } from "../../../../../src/utils/functions/color.function";
export class TpTest {
  constructor() {
    this.color = undefined;
    this.icon = undefined;
    this.defaultIcon = getAssetPath('./assets/tp-activity.svg');
  }
  render() {
    const { color, icon, defaultIcon } = this;
    return (h(Host, { tabindex: "0", class: createColorClasses(color, {
        'tp-test': true,
      }) }, h("div", { class: "tp-test__container" }, h("span", null, "Lorem ipsum, dolor sit amet consectetur."), h("ion-button", null, "ion button"), h("ion-icon", { class: "tp-test__icon", src: icon !== null && icon !== void 0 ? icon : defaultIcon, "aria-hidden": "true" }))));
  }
  static get is() { return "tp-test"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["test.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["test.css"]
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
              "path": "@utils/types/color.type",
              "id": "src/utils/types/color.type.ts::TpColor"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color",
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "icon",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "defaultIcon": {}
    };
  }
}
//# sourceMappingURL=test.js.map

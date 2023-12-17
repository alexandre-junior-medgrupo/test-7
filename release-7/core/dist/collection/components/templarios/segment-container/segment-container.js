import { Host, h } from "@stencil/core";
export class TpSegmentContainer {
    render() {
        return (h(Host, { class: "tp-segment-container" }, h("slot", null)));
    }
    static get is() { return "tp-segment-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["segment-container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["segment-container.css"]
        };
    }
}
//# sourceMappingURL=segment-container.js.map

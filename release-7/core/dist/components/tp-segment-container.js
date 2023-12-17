import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const segmentContainerCss = ":host{display:block}.tp-segment-container{position:relative}.tp-segment-container::before{position:fixed;right:0;width:32px;height:48px;background:linear-gradient(to right, transparent, var(--tp-color-neutral-8));content:\"\"}";

const TpSegmentContainer$1 = /*@__PURE__*/ proxyCustomElement(class TpSegmentContainer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { class: "tp-segment-container" }, h("slot", null)));
    }
    static get style() { return segmentContainerCss; }
}, [1, "tp-segment-container"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-segment-container"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-segment-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpSegmentContainer$1);
            }
            break;
    } });
}

const TpSegmentContainer = TpSegmentContainer$1;
const defineCustomElement = defineCustomElement$1;

export { TpSegmentContainer, defineCustomElement };

//# sourceMappingURL=tp-segment-container.js.map
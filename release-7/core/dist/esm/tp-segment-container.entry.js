import { r as registerInstance, h, H as Host } from './index-36f08f0f.js';

const segmentContainerCss = ":host{display:block}.tp-segment-container{position:relative}.tp-segment-container::before{position:fixed;right:0;width:32px;height:48px;background:linear-gradient(to right, transparent, var(--tp-color-neutral-8));content:\"\"}";

const TpSegmentContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: "tp-segment-container" }, h("slot", null)));
    }
};
TpSegmentContainer.style = segmentContainerCss;

export { TpSegmentContainer as tp_segment_container };

//# sourceMappingURL=tp-segment-container.entry.js.map
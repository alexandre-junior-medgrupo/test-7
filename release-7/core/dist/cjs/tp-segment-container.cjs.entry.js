'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eea4cb84.js');

const segmentContainerCss = ":host{display:block}.tp-segment-container{position:relative}.tp-segment-container::before{position:fixed;right:0;width:32px;height:48px;background:linear-gradient(to right, transparent, var(--tp-color-neutral-8));content:\"\"}";

const TpSegmentContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { class: "tp-segment-container" }, index.h("slot", null)));
    }
};
TpSegmentContainer.style = segmentContainerCss;

exports.tp_segment_container = TpSegmentContainer;

//# sourceMappingURL=tp-segment-container.cjs.entry.js.map
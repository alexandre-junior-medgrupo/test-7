'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bda9544c.js');

/*
 Stencil Client Patch Browser v4.8.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('templarios.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["dialog-example.cjs",[[2,"dialog-example"]]],["modal-example.cjs",[[2,"modal-example"]]],["sheet-example.cjs",[[2,"sheet-example"]]],["tp-alert.cjs",[[1,"tp-alert",{"color":[513],"loading":[1540]}]]],["tp-button-cluster.cjs",[[1,"tp-button-cluster",{"color":[513],"collapsed":[1540],"loading":[1540],"toggle":[64]}]]],["tp-chart-bar.cjs",[[1,"tp-chart-bar",{"color":[513],"value":[514],"height":[514],"width":[514],"noLabel":[516,"no-label"],"loading":[1540]}]]],["tp-chart-radial.cjs",[[1,"tp-chart-radial",{"color":[513],"size":[513],"items":[16]}]]],["tp-comparison-chart-bar.cjs",[[1,"tp-comparison-chart-bar",{"color":[513],"containerHeight":[514,"container-height"],"barValue":[514,"bar-value"],"hasMarker":[516,"has-marker"],"markerValue":[514,"marker-value"],"disabled":[516],"noLabel":[516,"no-label"],"loading":[1540]}]]],["tp-example.cjs",[[2,"tp-example",{"color":[513],"icon":[513],"defaultIcon":[32]}]]],["tp-horizontal-chart-bar.cjs",[[1,"tp-horizontal-chart-bar",{"color":[513],"size":[513],"value":[514],"maxCount":[514,"max-count"],"noLabel":[516,"no-label"],"loading":[1540]}]]],["tp-input-container.cjs",[[1,"tp-input-container",{"color":[513],"state":[513]}]]],["tp-loader.cjs",[[1,"tp-loader",{"color":[513],"fixed":[516],"tpName":[513,"tp-name"]}]]],["tp-rate-like.cjs",[[1,"tp-rate-like",{"status":[1537],"loading":[1540]}]]],["tp-segment-container.cjs",[[1,"tp-segment-container"]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=templarios.cjs.js.map
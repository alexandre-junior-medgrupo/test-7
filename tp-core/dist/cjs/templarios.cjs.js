'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1fc57a5f.js');

/*
 Stencil Client Patch Browser v4.8.1 | MIT Licensed | https://stenciljs.com
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
  return index.bootstrapLazy([["tp-chart-bar.cjs",[[1,"tp-chart-bar",{"color":[513],"value":[514],"height":[514],"width":[514],"noLabel":[516,"no-label"]}]]],["tp-comparison-chart-bar.cjs",[[1,"tp-comparison-chart-bar",{"color":[513],"containerHeight":[514,"container-height"],"barValue":[514,"bar-value"],"hasMarker":[516,"has-marker"],"markerValue":[514,"marker-value"],"disabled":[516],"noLabel":[516,"no-label"]}]]],["tp-rate-like.cjs",[[2,"tp-rate-like",{"status":[1537]}]]],["tp-test.cjs",[[2,"tp-test",{"color":[513],"icon":[513],"defaultIcon":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=templarios.cjs.js.map
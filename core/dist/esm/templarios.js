import { p as promiseResolve, b as bootstrapLazy } from './index-2c7b414a.js';
export { s as setNonce } from './index-2c7b414a.js';

/*
 Stencil Client Patch Browser v4.8.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["tp-alert",[[1,"tp-alert",{"color":[513],"state":[513],"message":[513],"icon":[513],"loading":[1540]}]]],["tp-chart-bar",[[1,"tp-chart-bar",{"color":[513],"value":[514],"height":[514],"width":[514],"noLabel":[516,"no-label"],"loading":[1540]}]]],["tp-comparison-chart-bar",[[1,"tp-comparison-chart-bar",{"color":[513],"containerHeight":[514,"container-height"],"barValue":[514,"bar-value"],"hasMarker":[516,"has-marker"],"markerValue":[514,"marker-value"],"disabled":[516],"noLabel":[516,"no-label"],"loading":[1540]}]]],["tp-horizontal-chart-bar",[[1,"tp-horizontal-chart-bar",{"color":[513],"size":[513],"value":[514],"maxCount":[514,"max-count"],"noLabel":[516,"no-label"],"loading":[1540]}]]],["tp-input-container",[[1,"tp-input-container",{"state":[513]}]]],["tp-rate-like",[[1,"tp-rate-like",{"status":[1537],"loading":[1540]}]]]], options);
});

//# sourceMappingURL=templarios.js.map
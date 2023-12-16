import { p as promiseResolve, b as bootstrapLazy } from './index-36f08f0f.js';
export { s as setNonce } from './index-36f08f0f.js';

/*
 Stencil Client Patch Browser v4.8.2 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["tp-alert",[[1,"tp-alert",{"color":[513],"state":[513],"message":[513],"icon":[513],"loading":[1540]}]]],["tp-button-cluster",[[1,"tp-button-cluster",{"color":[513],"collapsed":[1540],"loading":[1540],"toggle":[64]}]]],["tp-chart-bar",[[1,"tp-chart-bar",{"color":[513],"value":[514],"height":[514],"width":[514],"noLabel":[516,"no-label"],"loading":[1540]}]]],["tp-chart-radial",[[1,"tp-chart-radial",{"color":[513],"size":[513],"items":[16]}]]],["tp-comparison-chart-bar",[[1,"tp-comparison-chart-bar",{"color":[513],"containerHeight":[514,"container-height"],"barValue":[514,"bar-value"],"hasMarker":[516,"has-marker"],"markerValue":[514,"marker-value"],"disabled":[516],"noLabel":[516,"no-label"],"loading":[1540]}]]],["tp-horizontal-chart-bar",[[1,"tp-horizontal-chart-bar",{"color":[513],"size":[513],"value":[514],"maxCount":[514,"max-count"],"noLabel":[516,"no-label"],"loading":[1540]}]]],["tp-input-container",[[1,"tp-input-container",{"color":[513],"state":[513]}]]],["tp-loader",[[1,"tp-loader",{"color":[513],"fixed":[516],"tpName":[513,"tp-name"]}]]],["tp-rate-like",[[1,"tp-rate-like",{"status":[1537],"loading":[1540]}]]],["tp-test",[[2,"tp-test",{"color":[513],"icon":[513],"defaultIcon":[32]}]]]], options);
});

//# sourceMappingURL=templarios.js.map
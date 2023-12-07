import { p as promiseResolve, b as bootstrapLazy } from './index-2ce58d2e.js';
export { s as setNonce } from './index-2ce58d2e.js';

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
  return bootstrapLazy([["tp-chart-bar",[[1,"tp-chart-bar",{"color":[513],"value":[514],"height":[514],"width":[514],"noLabel":[516,"no-label"]}]]],["tp-comparison-chart-bar",[[1,"tp-comparison-chart-bar",{"color":[513],"containerHeight":[514,"container-height"],"barValue":[514,"bar-value"],"hasMarker":[516,"has-marker"],"markerValue":[514,"marker-value"],"disabled":[516],"noLabel":[516,"no-label"]}]]],["tp-rate-like",[[2,"tp-rate-like",{"status":[1537]}]]],["tp-test",[[2,"tp-test",{"color":[513],"icon":[513],"defaultIcon":[32]}]]]], options);
});

//# sourceMappingURL=templarios.js.map
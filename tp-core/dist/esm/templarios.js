import { p as promiseResolve, b as bootstrapLazy } from './index-5c8b9bd4.js';
export { s as setNonce } from './index-5c8b9bd4.js';

/*
 Stencil Client Patch Browser v4.4.1 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["tp-test",[[2,"tp-test",{"color":[513],"icon":[513],"defaultIcon":[32]}]]]], options);
});

//# sourceMappingURL=templarios.js.map
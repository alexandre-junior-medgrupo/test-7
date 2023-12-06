'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-10599630.js');

/*
 Stencil Client Patch Browser v4.7.1 | MIT Licensed | https://stenciljs.com
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
  return index.bootstrapLazy([["tp-test.cjs",[[2,"tp-test",{"color":[513],"icon":[513],"defaultIcon":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=templarios.cjs.js.map
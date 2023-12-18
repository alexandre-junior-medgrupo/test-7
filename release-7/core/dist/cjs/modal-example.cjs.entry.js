'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bda9544c.js');

const modalExampleCss = ".sc-modal-example-h{display:block}";

const ModalExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("h1", null, "Exemplo de modal")));
    }
};
ModalExample.style = modalExampleCss;

exports.modal_example = ModalExample;

//# sourceMappingURL=modal-example.cjs.entry.js.map
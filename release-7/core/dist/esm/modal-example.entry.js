import { r as registerInstance, h, H as Host } from './index-36f08f0f.js';

const modalExampleCss = ".sc-modal-example-h{display:block}";

const ModalExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("h1", null, "Exemplo de modal")));
    }
};
ModalExample.style = modalExampleCss;

export { ModalExample as modal_example };

//# sourceMappingURL=modal-example.entry.js.map
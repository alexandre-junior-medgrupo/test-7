'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bda9544c.js');

const sheetExampleCss = ".sc-sheet-example-h{display:block}";

const SheetExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("ion-header", { class: "tp-sheet__header" }, index.h("ion-button", { fill: "clear" }, index.h("ion-icon", { slot: "icon-only", src: "./icons/tp-x.svg" }))), index.h("ion-content", { class: "tp-sheet__content" }, index.h("ion-text", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?"), index.h("ion-text", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?"), index.h("ion-text", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?")), index.h("ion-footer", { class: "tp-sheet__footer" }, index.h("ion-button", { class: "tp-dialog__button", expand: "block" }, "Salvar"))));
    }
};
SheetExample.style = sheetExampleCss;

exports.sheet_example = SheetExample;

//# sourceMappingURL=sheet-example.cjs.entry.js.map
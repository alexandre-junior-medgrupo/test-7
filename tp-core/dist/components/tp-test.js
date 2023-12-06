import { proxyCustomElement, HTMLElement, getAssetPath, h, Host } from '@stencil/core/internal/client';

const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0
    ? Object.assign({ 'tp-color': true, [`tp-color-${color}`]: true }, cssClassMap) : cssClassMap;
};

const testCss = ".sc-tp-test-h{--background:var(--tp-color-neutral-2);--color:var(--tp-color-neutral-10);--icon-stroke:var(--tp-color-neutral-10);--background-hover:var(--tp-color-neutral-2-shade);--background-focus:var(--tp-color-neutral-2-tint)}.sc-tp-test-h{display:block;padding:1rem 2rem;color:var(--color);background:var(--background);transition:background-color 250ms}.tp-test__container.sc-tp-test{display:flex;align-items:center;justify-content:space-between}.tp-test__icon.sc-tp-test{--stroke:var(--icon-stroke)}.sc-tp-test-h:hover{background:var(--background-hover)}.sc-tp-test-h:focus{background:var(--background-focus)}.tp-color.sc-tp-test-h{--background:var(--tp-color-base);--color:var(--tp-color-contrast);--icon-stroke:var(--tp-color-contrast);--background-hover:var(--tp-color-shade);--background-focus:var(--tp-color-tint)}";

const TpTest$1 = /*@__PURE__*/ proxyCustomElement(class TpTest extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.color = undefined;
    this.icon = undefined;
    this.defaultIcon = getAssetPath('./assets/tp-activity.svg');
  }
  render() {
    const { color, icon, defaultIcon } = this;
    return (h(Host, { tabindex: "0", class: createColorClasses(color, {
        'tp-test': true,
      }) }, h("div", { class: "tp-test__container" }, h("span", null, "Lorem ipsum, dolor sit amet consectetur."), h("ion-button", null, "ion button"), h("ion-icon", { class: "tp-test__icon", src: icon !== null && icon !== void 0 ? icon : defaultIcon, "aria-hidden": "true" }))));
  }
  static get assetsDirs() { return ["assets"]; }
  static get style() { return testCss; }
}, [2, "tp-test", {
    "color": [513],
    "icon": [513],
    "defaultIcon": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["tp-test"];
  components.forEach(tagName => { switch (tagName) {
    case "tp-test":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TpTest$1);
      }
      break;
  } });
}

const TpTest = TpTest$1;
const defineCustomElement = defineCustomElement$1;

export { TpTest, defineCustomElement };

//# sourceMappingURL=tp-test.js.map
import { r as registerInstance, g as getAssetPath, h, H as Host } from './index-36f08f0f.js';
import { c as createColorClasses } from './color.function-a9b13d36.js';

const testCss = ".sc-tp-test-h{--background:var(--tp-color-neutral-2);--color:var(--tp-color-neutral-10);--icon-stroke:var(--tp-color-neutral-10);--background-hover:var(--tp-color-neutral-2-shade);--background-focus:var(--tp-color-neutral-2-tint)}.sc-tp-test-h{display:block;padding:1rem 2rem;color:var(--color);background:var(--background);transition:background-color 250ms}.tp-test__container.sc-tp-test{display:flex;align-items:center;justify-content:space-between}.tp-test__icon.sc-tp-test{--stroke:var(--icon-stroke)}.sc-tp-test-h:hover{background:var(--background-hover)}.sc-tp-test-h:focus{background:var(--background-focus)}.tp-color.sc-tp-test-h{--background:var(--tp-color-base);--color:var(--tp-color-contrast);--icon-stroke:var(--tp-color-contrast);--background-hover:var(--tp-color-shade);--background-focus:var(--tp-color-tint)}";

const TpTest = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.color = undefined;
        this.icon = undefined;
        this.defaultIcon = getAssetPath('./assets/tp-activity.svg');
    }
    render() {
        const { color, icon, defaultIcon } = this;
        return (h(Host, { tabindex: "0", class: createColorClasses(color, {
                'tp-test': true,
            }) }, h("div", { class: "tp-test__container" }, h("span", null, "Lorem ipsum, dolor sit amet consectetur."), h("ion-button", null, "ion button"), h("ion-icon", { class: "tp-test__icon", src: icon !== null && icon !== void 0 ? icon : defaultIcon, "aria-hidden": "true" })), h("ion-radio-group", { class: "story__ion-radio-group" }, h("ion-radio", { value: "1" }, h("ion-text", null, "Lorem ipsum, dolor sit amet consectetur.")), h("ion-radio", { value: "2" }, h("ion-text", null, "Lorem ipsum, dolor sit amet consectetur.")), h("ion-radio", { value: "3" }, h("ion-text", null, "Lorem ipsum, dolor sit amet consectetur.")))));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpTest.style = testCss;

export { TpTest as tp_test };

//# sourceMappingURL=tp-test.entry.js.map
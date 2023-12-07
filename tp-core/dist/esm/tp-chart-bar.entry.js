import { r as registerInstance, h, H as Host } from './index-2ce58d2e.js';
import { c as createColorClasses } from './color.function-a9b13d36.js';

const chartBarCss = ":host{display:block;width:calc(var(--width) * 1px);height:max-content;color:var(--tp-color-neutral-10);border-radius:2px}.tp-chart-bar__container{display:flex;flex-direction:column;align-items:center;width:100%;height:100%;height:calc(var(--height) + var(--height-label) * 1px);overflow:hidden;border-radius:2px}.tp-chart-bar__label{display:flex;margin-bottom:6px;transform:translateY(calc(var(--height) * 1px - var(--value) * 1px))}.tp-chart-bar__progress{width:100%;height:calc(var(--height) * 1px);background:var(--tp-color-brand-4);border-radius:2px;animation:load-chart-bar forwards 400ms ease-in-out}:host(.tp-chart-bar--no-label){background:var(--tp-color-neutral-2)}:host(.tp-color) .tp-chart-bar__progress{background:var(--tp-color-base)}@keyframes load-chart-bar{0%{transform:translateY(calc(var(--height) * 1px))}100%{transform:translateY(calc(var(--height) * 1px - var(--value) * 1px))}}";

const TpChartBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.color = undefined;
        this.value = 0;
        this.height = 50;
        this.width = 32;
        this.noLabel = false;
    }
    render() {
        const { color, value, height, width, noLabel } = this;
        const percentage = (height * Math.min(Math.max(0, value), 100)) / 100;
        return (h(Host, { class: createColorClasses(color, {
                'tp-chart-bar': true,
                'tp-chart-bar--no-label': noLabel,
            }), style: {
                '--value': `${percentage}`,
                '--height': `${height}`,
                '--width': `${width}`,
            } }, h("div", { class: "tp-chart-bar__container" }, !noLabel && (h("div", { class: "tp-chart-bar__label" }, h("slot", null))), h("div", { class: "tp-chart-bar__progress" }))));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpChartBar.style = chartBarCss;

export { TpChartBar as tp_chart_bar };

//# sourceMappingURL=tp-chart-bar.entry.js.map
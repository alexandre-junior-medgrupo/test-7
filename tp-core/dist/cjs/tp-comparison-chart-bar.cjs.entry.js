'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1fc57a5f.js');
const color_function = require('./color.function-2f28fd83.js');

const comparisonChartBarCss = "@charset \"UTF-8\";:host{display:inline-block}.tp-comparison-chart-bar__container{position:relative;width:8px;height:var(--tp-container-height);margin:0 auto;background:var(--tp-color-neutral-2);border-radius:4px}.tp-comparison-chart-bar__bar{position:absolute;bottom:0;left:0;width:100%;height:0%;background:var(--tp-color-brand-4);border-radius:4px;animation:load-comparison-chart-bar 1s forwards ease-in-out}.tp-comparison-chart-bar__marker{position:absolute;bottom:var(--tp-marker-value);left:0;display:none;width:24px;height:6px;background:var(--tp-color-caution);border-radius:3px;transform:translate(-8px, 50%)}.tp-comparison-chart-bar__label{display:flex;margin-top:10px}:host(.tp-color) .tp-comparison-chart-bar__container{background:rgba(var(--tp-color-base-rgb), 0.4)}:host(.tp-color) .tp-comparison-chart-bar__bar{background:var(--tp-color-base)}:host(.tp-color) .tp-comparison-chart-bar__marker{background:var(--tp-marker-color, var(--tp-color-caution))}:host(.tp-comparison-chart-bar--disabled) .tp-comparison-chart-bar__container{background:var(--tp-color-neutral-15)}:host(.tp-comparison-chart-bar--disabled) .tp-comparison-chart-bar__bar{background:var(--tp-color-neutral-3)}:host(.tp-comparison-chart-bar--disabled) .tp-comparison-chart-bar__marker{background:var(--tp-color-neutral-35)}:host(.tp-comparison-chart-bar--has-marker) .tp-comparison-chart-bar__marker{display:initial}@keyframes load-comparison-chart-bar{from{height:0%}to{height:var(--tp-bar-value)}}";

const TpComparisonChartBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
        this.containerHeight = 200;
        this.barValue = 0;
        this.hasMarker = false;
        this.markerValue = 0;
        this.disabled = false;
        this.noLabel = false;
    }
    render() {
        const { color, containerHeight, barValue, hasMarker, markerValue, noLabel, disabled, } = this;
        return (index.h(index.Host, { class: color_function.createColorClasses(color, {
                'tp-comparison-chart-bar': true,
                'tp-comparison-chart-bar--disabled': disabled,
                'tp-comparison-chart-bar--has-marker': hasMarker,
            }), style: {
                '--tp-container-height': `${containerHeight}px`,
                '--tp-bar-value': `${barValue}%`,
                '--tp-marker-value': `${markerValue}%`,
            } }, index.h("div", { class: "tp-comparison-chart-bar__container" }, index.h("div", { class: "tp-comparison-chart-bar__bar" }), hasMarker && index.h("div", { class: "tp-comparison-chart-bar__marker" })), !noLabel && (index.h("div", { class: "tp-comparison-chart-bar__label" }, index.h("slot", null)))));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpComparisonChartBar.style = comparisonChartBarCss;

exports.tp_comparison_chart_bar = TpComparisonChartBar;

//# sourceMappingURL=tp-comparison-chart-bar.cjs.entry.js.map
import{r,h as a,H as t}from"./p-2bc4104f.js";import{c as o}from"./p-9655f2f1.js";const s='@charset "UTF-8";:host{--tp-skeleton-height:var(--tp-container-height);--tp-skeleton-background-rgb:var(--tp-color-neutral-10-rgb);display:inline-block}.tp-comparison-chart-bar__container{position:relative;width:8px;height:var(--tp-container-height);margin:0 auto;background:var(--tp-color-neutral-2);border-radius:4px}.tp-comparison-chart-bar__bar{position:absolute;bottom:0;left:0;width:100%;height:0%;background:var(--tp-color-brand-4);border-radius:4px;animation:load-comparison-chart-bar 1s forwards ease-in-out}.tp-comparison-chart-bar__marker{position:absolute;bottom:var(--tp-marker-value);left:0;display:none;width:24px;height:6px;background:var(--tp-color-caution);border-radius:3px;transform:translate(-8px, 50%)}.tp-comparison-chart-bar__label{display:flex;margin-top:10px}.tp-comparison-chart-bar__skeleton{--background-rgb:var(--tp-skeleton-background-rgb);--border-radius:4px;width:8px;height:var(--tp-skeleton-height);margin:0 auto}.tp-comparison-chart-bar__marker-skeleton{--background-rgb:var(--tp-skeleton-background-rgb);--border-radius:3px;position:absolute;bottom:50%;left:0;width:24px;height:6px;margin:0;transform:translate(-8px, 50%)}.tp-comparison-chart-bar__label-skeleton{--background-rgb:var(--tp-skeleton-background-rgb);--border-radius:2px;width:26px;height:12px;margin:10px 0 0}:host(.tp-color) .tp-comparison-chart-bar__container{background:rgba(var(--tp-color-base-rgb), 0.4)}:host(.tp-color) .tp-comparison-chart-bar__bar{background:var(--tp-color-base)}:host(.tp-color) .tp-comparison-chart-bar__marker{background:var(--tp-marker-color, var(--tp-color-caution))}:host(.tp-comparison-chart-bar--disabled) .tp-comparison-chart-bar__container{background:var(--tp-color-neutral-15)}:host(.tp-comparison-chart-bar--disabled) .tp-comparison-chart-bar__bar{background:var(--tp-color-neutral-3)}:host(.tp-comparison-chart-bar--disabled) .tp-comparison-chart-bar__marker{background:var(--tp-color-neutral-35)}:host(.tp-comparison-chart-bar--has-marker) .tp-comparison-chart-bar__marker{display:initial}:host(.tp-comparison-chart-bar--loading) .tp-comparison-chart-bar__container{background:transparent}@keyframes load-comparison-chart-bar{from{height:0%}to{height:var(--tp-bar-value)}}';const e=class{constructor(a){r(this,a);this.color=undefined;this.containerHeight=200;this.barValue=0;this.hasMarker=false;this.markerValue=0;this.disabled=false;this.noLabel=false;this.loading=undefined}render(){const{color:r,containerHeight:s,barValue:e,hasMarker:n,markerValue:i,noLabel:c,disabled:p,loading:l}=this;let b;if(l){b=a("div",null,a("div",{class:"tp-comparison-chart-bar__container"},a("ion-skeleton-text",{class:"tp-comparison-chart-bar__skeleton",animated:true}),n&&a("ion-skeleton-text",{class:"tp-comparison-chart-bar__marker-skeleton",animated:true})),!c&&a("ion-skeleton-text",{class:"tp-comparison-chart-bar__label-skeleton",animated:true}))}else{b=a("div",null,a("div",{class:"tp-comparison-chart-bar__container"},a("div",{class:"tp-comparison-chart-bar__bar"}),n&&a("div",{class:"tp-comparison-chart-bar__marker"})),!c&&a("div",{class:"tp-comparison-chart-bar__label"},a("slot",null)))}return a(t,{class:o(r,{"tp-comparison-chart-bar":true,"tp-comparison-chart-bar--disabled":p,"tp-comparison-chart-bar--has-marker":n,"tp-comparison-chart-bar--loading":l}),style:{"--tp-container-height":`${s}px`,"--tp-bar-value":`${e}%`,"--tp-marker-value":`${i}%`}},b)}static get assetsDirs(){return["assets"]}};e.style=s;export{e as tp_comparison_chart_bar};
//# sourceMappingURL=p-afaf276a.entry.js.map
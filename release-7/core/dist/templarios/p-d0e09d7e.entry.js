import{r as t,g as r,h as o,H as a}from"./p-09e25b63.js";import{c as s}from"./p-9655f2f1.js";const c=":host{--border-color:transparent;--background:var(--tp-color-neutral-2);--border-radius:8px}:host{position:relative;display:block}.tp-input-container__wrapper{display:flex;align-items:center;margin:8px 0;background:var(--background);border:1px solid var(--border-color);border-radius:var(--border-radius)}.tp-input-container__wrapper:hover{--background:var(--tp-color-neutral-3)}.tp-input-container__wrapper:focus-within{--border-color:var(--tp-color-neutral-3)}.tp-input-container__state-container{margin-right:16px}::slotted(*[slot=feedback-error]){display:none;color:var(--tp-color-warning) !important}::slotted(*[slot=feedback-success]){display:none;color:var(--tp-color-success) !important}::slotted(ion-icon){margin-right:16px;--stroke:var(--tp-color-neutral-6) !important}:host(.tp-datetime-visible) .tp-input-container__wrapper{--border-radius:8px 8px 0 8px !important}@media (max-width: 575.98px){:host(.tp-datetime-visible) .tp-input-container__wrapper{--border-radius:8px 8px 0 0 !important}}:host(.tp-datetime-visible) ::slotted(ion-datetime){visibility:visible !important;opacity:1 !important}:host(.tp-comparison-chart-bar--error) .tp-input-container__wrapper{--border-color:var(--tp-color-warning)}:host(.tp-comparison-chart-bar--error) ::slotted(*[slot=feedback-error]){display:block}:host(.tp-comparison-chart-bar--error) .tp-input-container__icon{--stroke:var(--tp-color-warning)}:host(.tp-comparison-chart-bar--success) .tp-input-container__wrapper{--border-color:var(--tp-color-success)}:host(.tp-comparison-chart-bar--success) ::slotted(*[slot=feedback-success]){display:block}:host(.tp-comparison-chart-bar--success) .tp-input-container__icon{--stroke:var(--tp-color-success)}:host(.tp-color) .tp-input-container__wrapper{--background:var(--tp-color-base)}:host(.tp-color) .tp-input-container__wrapper:hover{--background:var(--tp-color-shade)}:host(.tp-color) .tp-input-container__wrapper:focus-within{--border-color:var(--tp-color-tint)}:host(.tp-color) ::slotted(ion-input.sc-ion-input-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-input[clear-input]){--tp-fill-clear-icon:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-searchbar.sc-ion-searchbar-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important;--tp-stroke-icon:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-textarea.sc-ion-textarea-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-datetime-button){--tp-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-icon){--stroke:var(--tp-color-contrast) !important}";const e=class{constructor(o){t(this,o);this.alertTriangleIcon=r("./assets/tp-alert-triangle.svg");this.CheckIcon=r("./assets/tp-check.svg");this.color=undefined;this.state=undefined}render(){const{color:t,state:r,alertTriangleIcon:c,CheckIcon:e}=this;let n;const p=r==="error"?c:e;if(r){n=o("div",{class:"tp-input-container__state-container"},o("ion-icon",{class:"tp-input-container__icon",src:p,"aria-hidden":"true"}))}return o(a,{class:s(t,{"tp-input-container":true,"tp-comparison-chart-bar--error":r==="error","tp-comparison-chart-bar--success":r==="success"})},o("slot",{name:"label"}),o("div",{class:"tp-input-container__wrapper"},o("slot",null),n),o("slot",{name:"feedback-success"}),o("slot",{name:"feedback-error"}))}static get assetsDirs(){return["assets"]}};e.style=c;export{e as tp_input_container};
//# sourceMappingURL=p-d0e09d7e.entry.js.map
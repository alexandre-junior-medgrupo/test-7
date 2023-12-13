import{r,g as o,h as t,H as a}from"./p-7fd6763d.js";import{c}from"./p-9655f2f1.js";const s=":host{--border-color:transparent;--background:var(--tp-color-neutral-2)}:host{display:block}.tp-input-container__wrapper{display:flex;align-items:center;margin:8px 0;background:var(--background);border:1px solid var(--border-color);border-radius:8px}.tp-input-container__wrapper:hover{--background:var(--tp-color-neutral-3)}.tp-input-container__wrapper:focus-within{--border-color:var(--tp-color-neutral-3)}.tp-input-container__state-container{margin-right:16px}::slotted(*[slot=feedback-error]){display:none;color:var(--tp-color-warning) !important}::slotted(*[slot=feedback-success]){display:none;color:var(--tp-color-success) !important}:host(.tp-comparison-chart-bar--error) .tp-input-container__wrapper{--border-color:var(--tp-color-warning)}:host(.tp-comparison-chart-bar--error) ::slotted(*[slot=feedback-error]){display:block}:host(.tp-comparison-chart-bar--error) .tp-input-container__icon{--stroke:var(--tp-color-warning)}:host(.tp-comparison-chart-bar--success) .tp-input-container__wrapper{--border-color:var(--tp-color-success)}:host(.tp-comparison-chart-bar--success) ::slotted(*[slot=feedback-success]){display:block}:host(.tp-comparison-chart-bar--success) .tp-input-container__icon{--stroke:var(--tp-color-success)}:host(.tp-color) .tp-input-container__wrapper{--background:var(--tp-color-base)}:host(.tp-color) .tp-input-container__wrapper:hover{--background:var(--tp-color-shade)}:host(.tp-color) .tp-input-container__wrapper:focus-within{--border-color:var(--tp-color-tint)}:host(.tp-color) ::slotted(ion-input.sc-ion-input-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-input[clear-input]){--tp-fill-clear-icon:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-searchbar.sc-ion-searchbar-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important;--tp-stroke-icon:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-textarea.sc-ion-textarea-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important}";const n=class{constructor(t){r(this,t);this.alertTriangleIcon=o("./assets/tp-alert-triangle.svg");this.CheckIcon=o("./assets/tp-check.svg");this.color=undefined;this.state=undefined}render(){const{color:r,state:o,alertTriangleIcon:s,CheckIcon:n}=this;let e;const p=o==="error"?s:n;if(o){e=t("div",{class:"tp-input-container__state-container"},t("ion-icon",{class:"tp-input-container__icon",src:p,"aria-hidden":"true"}))}return t(a,{class:c(r,{"tp-input-container":true,"tp-comparison-chart-bar--error":o==="error","tp-comparison-chart-bar--success":o==="success"})},t("slot",{name:"label"}),t("div",{class:"tp-input-container__wrapper"},t("slot",null),e),t("slot",{name:"feedback-success"}),t("slot",{name:"feedback-error"}))}static get assetsDirs(){return["assets"]}};n.style=s;export{n as tp_input_container};
//# sourceMappingURL=p-11bccd91.entry.js.map
import{r as t,c as e,g as i,h as s,H as n}from"./p-2bc4104f.js";var r;(function(t){t["LIKE"]="like";t["DISLIKE"]="dislike"})(r||(r={}));const a=".tp-rate-like__container{display:flex;align-items:center}.tp-rate-like__button{width:24px;height:24px;background:transparent;border:0;cursor:pointer}.tp-rate-like__button:first-child{margin-right:16px}.tp-rate-like__button--disabled{pointer-events:none}.tp-rate-like__button--disabled .tp-rate-like__icon{--stroke:var(--tp-color-neutral-4)}.tp-rate-like__button--like .tp-rate-like__icon{--stroke:var(--tp-color-success)}.tp-rate-like__button--dislike .tp-rate-like__icon{--stroke:var(--tp-color-warning)}.tp-rate-like__icon{width:24px;height:24px}.tp-rate-like__skeleton{--background-rgb:var(--tp-color-neutral-10-rgb);--border-radius:0;width:24px;height:24px;margin:0}.tp-rate-like__skeleton:not(:last-child){margin-right:16px}";const o=class{constructor(s){t(this,s);this.tpChange=e(this,"tpChange",7);this.thumbsUpIcon=i("./assets/tp-thumbs-up.svg");this.thumbsDownIcon=i("./assets/tp-thumbs-down.svg");this.onClick=t=>{if(this.status===undefined){return}this.status=t;this.tpChange.emit(this.status)};this.status=undefined;this.loading=undefined}render(){const{loading:t,status:e,thumbsUpIcon:i,thumbsDownIcon:a}=this;let o;if(t){o=s("div",{class:"tp-rate-like__container"},s("ion-skeleton-text",{class:"tp-rate-like__skeleton",animated:true}),s("ion-skeleton-text",{class:"tp-rate-like__skeleton",animated:true}))}else{o=s("div",{class:"tp-rate-like__container"},s("button",{class:`tp-rate-like__button\n          ${e===r.LIKE?"tp-rate-like__button--like":""}\n          ${e?"tp-rate-like__button--disabled":""}\n        `,onClick:()=>this.onClick(r.LIKE)},s("ion-icon",{class:"tp-rate-like__icon",src:i,"aria-hidden":"true"})),s("button",{class:`tp-rate-like__button\n          ${e===r.DISLIKE?"tp-rate-like__button--dislike":""}\n          ${e?"tp-rate-like__button--disabled":""}\n        `,onClick:()=>this.onClick(r.DISLIKE)},s("ion-icon",{class:"tp-rate-like__icon",src:a,"aria-hidden":"true"})))}return s(n,{class:"tp-rate-like"},o)}static get assetsDirs(){return["assets"]}};o.style=a;export{o as tp_rate_like};
//# sourceMappingURL=p-2fd5fd14.entry.js.map
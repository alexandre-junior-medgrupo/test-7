import{r as t,c as e,g as i,h as s,H as r}from"./p-543e7e31.js";var a;(function(t){t["LIKE"]="like";t["DISLIKE"]="dislike"})(a||(a={}));const n=".sc-tp-rate-like-h{display:flex;align-items:center}.tp-rate-like__button.sc-tp-rate-like{width:24px;height:24px;background:transparent;border:0}.tp-rate-like__button.sc-tp-rate-like:first-child{margin-right:16px}.tp-rate-like__button--disabled.sc-tp-rate-like{pointer-events:none}.tp-rate-like__button--disabled.sc-tp-rate-like .tp-rate-like__icon.sc-tp-rate-like{--stroke:var(--tp-color-neutral-4)}.tp-rate-like__button--like.sc-tp-rate-like .tp-rate-like__icon.sc-tp-rate-like{--stroke:var(--tp-color-success)}.tp-rate-like__button--dislike.sc-tp-rate-like .tp-rate-like__icon.sc-tp-rate-like{--stroke:var(--tp-color-warning)}.tp-rate-like__icon.sc-tp-rate-like{width:24px;height:24px}";const l=class{constructor(s){t(this,s);this.tpChange=e(this,"tpChange",7);this.thumbsUpIcon=i("./assets/tp-thumbs-up.svg");this.thumbsDownIcon=i("./assets/tp-thumbs-down.svg");this.onClick=t=>{if(this.status===undefined){return}this.status=t;this.tpChange.emit(this.status)};this.status=undefined}render(){const{status:t,thumbsUpIcon:e,thumbsDownIcon:i}=this;return s(r,{class:"tp-rate-like"},s("button",{class:`tp-rate-like__button\n            ${t===a.LIKE?"tp-rate-like__button--like":""}\n            ${t?"tp-rate-like__button--disabled":""}\n          `,onClick:()=>this.onClick(a.LIKE)},s("ion-icon",{class:"tp-rate-like__icon",src:e,"aria-hidden":"true"})),s("button",{class:`tp-rate-like__button\n            ${t===a.DISLIKE?"tp-rate-like__button--dislike":""}\n            ${t?"tp-rate-like__button--disabled":""}\n          `,onClick:()=>this.onClick(a.DISLIKE)},s("ion-icon",{class:"tp-rate-like__icon",src:i,"aria-hidden":"true"})))}static get assetsDirs(){return["assets"]}};l.style=n;export{l as tp_rate_like};
//# sourceMappingURL=p-9bd2bc77.entry.js.map
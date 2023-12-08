'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1580f908.js');

var TpRateLikeStatus;
(function (TpRateLikeStatus) {
    TpRateLikeStatus["LIKE"] = "like";
    TpRateLikeStatus["DISLIKE"] = "dislike";
})(TpRateLikeStatus || (TpRateLikeStatus = {}));

const rateLikeCss = ":host{--tp-skeleton-height:24px;--tp-skeleton-width:24px;--tp-skeleton-background-rgb:var(--tp-color-neutral-10-rgb)}.tp-rate-like__container{display:flex;align-items:center}.tp-rate-like__button{width:24px;height:24px;background:transparent;border:0}.tp-rate-like__button:first-child{margin-right:16px}.tp-rate-like__button--disabled{pointer-events:none}.tp-rate-like__button--disabled .tp-rate-like__icon{--stroke:var(--tp-color-neutral-4)}.tp-rate-like__button--like .tp-rate-like__icon{--stroke:var(--tp-color-success)}.tp-rate-like__button--dislike .tp-rate-like__icon{--stroke:var(--tp-color-warning)}.tp-rate-like__icon{width:24px;height:24px}.tp-rate-like__skeleton{--background-rgb:var(--tp-skeleton-background-rgb);--border-radius:0;width:var(--tp-skeleton-width);height:var(--tp-skeleton-height);margin:0}.tp-rate-like__skeleton:not(:last-child){margin-right:16px}";

const TpRateLike = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tpChange = index.createEvent(this, "tpChange", 7);
        this.thumbsUpIcon = index.getAssetPath('./assets/tp-thumbs-up.svg');
        this.thumbsDownIcon = index.getAssetPath('./assets/tp-thumbs-down.svg');
        this.onClick = (status) => {
            if (this.status === undefined) {
                return;
            }
            this.status = status;
            this.tpChange.emit(this.status);
        };
        this.status = undefined;
        this.loading = undefined;
    }
    render() {
        const { loading, status, thumbsUpIcon, thumbsDownIcon } = this;
        let content;
        if (loading) {
            content = (index.h("div", { class: "tp-rate-like__container" }, index.h("ion-skeleton-text", { class: "tp-rate-like__skeleton", animated: true }), index.h("ion-skeleton-text", { class: "tp-rate-like__skeleton", animated: true })));
        }
        else {
            content = (index.h("div", { class: "tp-rate-like__container" }, index.h("button", { class: `tp-rate-like__button
          ${status === TpRateLikeStatus.LIKE ? 'tp-rate-like__button--like' : ''}
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `, onClick: () => this.onClick(TpRateLikeStatus.LIKE) }, index.h("ion-icon", { class: "tp-rate-like__icon", src: thumbsUpIcon, "aria-hidden": "true" })), index.h("button", { class: `tp-rate-like__button
          ${status === TpRateLikeStatus.DISLIKE
                    ? 'tp-rate-like__button--dislike'
                    : ''}
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `, onClick: () => this.onClick(TpRateLikeStatus.DISLIKE) }, index.h("ion-icon", { class: "tp-rate-like__icon", src: thumbsDownIcon, "aria-hidden": "true" }))));
        }
        return index.h(index.Host, { class: "tp-rate-like" }, content);
    }
    static get assetsDirs() { return ["assets"]; }
};
TpRateLike.style = rateLikeCss;

exports.tp_rate_like = TpRateLike;

//# sourceMappingURL=tp-rate-like.cjs.entry.js.map
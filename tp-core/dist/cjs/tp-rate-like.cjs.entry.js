'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1fc57a5f.js');

var TpRateLikeStatus;
(function (TpRateLikeStatus) {
    TpRateLikeStatus["LIKE"] = "like";
    TpRateLikeStatus["DISLIKE"] = "dislike";
})(TpRateLikeStatus || (TpRateLikeStatus = {}));

const rateLikeCss = ".sc-tp-rate-like-h{display:flex;align-items:center}.tp-rate-like__button.sc-tp-rate-like{width:24px;height:24px;background:transparent;border:0}.tp-rate-like__button.sc-tp-rate-like:first-child{margin-right:16px}.tp-rate-like__button--disabled.sc-tp-rate-like{pointer-events:none}.tp-rate-like__button--disabled.sc-tp-rate-like .tp-rate-like__icon.sc-tp-rate-like{--stroke:var(--tp-color-neutral-4)}.tp-rate-like__button--like.sc-tp-rate-like .tp-rate-like__icon.sc-tp-rate-like{--stroke:var(--tp-color-success)}.tp-rate-like__button--dislike.sc-tp-rate-like .tp-rate-like__icon.sc-tp-rate-like{--stroke:var(--tp-color-warning)}.tp-rate-like__icon.sc-tp-rate-like{width:24px;height:24px}";

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
    }
    render() {
        const { status, thumbsUpIcon, thumbsDownIcon } = this;
        return (index.h(index.Host, { class: "tp-rate-like" }, index.h("button", { class: `tp-rate-like__button
            ${status === TpRateLikeStatus.LIKE
                ? 'tp-rate-like__button--like'
                : ''}
            ${status ? 'tp-rate-like__button--disabled' : ''}
          `, onClick: () => this.onClick(TpRateLikeStatus.LIKE) }, index.h("ion-icon", { class: "tp-rate-like__icon", src: thumbsUpIcon, "aria-hidden": "true" })), index.h("button", { class: `tp-rate-like__button
            ${status === TpRateLikeStatus.DISLIKE
                ? 'tp-rate-like__button--dislike'
                : ''}
            ${status ? 'tp-rate-like__button--disabled' : ''}
          `, onClick: () => this.onClick(TpRateLikeStatus.DISLIKE) }, index.h("ion-icon", { class: "tp-rate-like__icon", src: thumbsDownIcon, "aria-hidden": "true" }))));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpRateLike.style = rateLikeCss;

exports.tp_rate_like = TpRateLike;

//# sourceMappingURL=tp-rate-like.cjs.entry.js.map
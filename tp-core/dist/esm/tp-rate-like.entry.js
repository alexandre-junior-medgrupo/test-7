import { r as registerInstance, c as createEvent, g as getAssetPath, h, H as Host } from './index-2ce58d2e.js';

var TpRateLikeStatus;
(function (TpRateLikeStatus) {
    TpRateLikeStatus["LIKE"] = "like";
    TpRateLikeStatus["DISLIKE"] = "dislike";
})(TpRateLikeStatus || (TpRateLikeStatus = {}));

const rateLikeCss = ".sc-tp-rate-like-h{display:flex;align-items:center}.tp-rate-like__button.sc-tp-rate-like{width:24px;height:24px;background:transparent;border:0}.tp-rate-like__button.sc-tp-rate-like:first-child{margin-right:16px}.tp-rate-like__button--disabled.sc-tp-rate-like{pointer-events:none}.tp-rate-like__button--disabled.sc-tp-rate-like .tp-rate-like__icon.sc-tp-rate-like{--stroke:var(--tp-color-neutral-4)}.tp-rate-like__button--like.sc-tp-rate-like .tp-rate-like__icon.sc-tp-rate-like{--stroke:var(--tp-color-success)}.tp-rate-like__button--dislike.sc-tp-rate-like .tp-rate-like__icon.sc-tp-rate-like{--stroke:var(--tp-color-warning)}.tp-rate-like__icon.sc-tp-rate-like{width:24px;height:24px}";

const TpRateLike = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tpChange = createEvent(this, "tpChange", 7);
        this.thumbsUpIcon = getAssetPath('./assets/tp-thumbs-up.svg');
        this.thumbsDownIcon = getAssetPath('./assets/tp-thumbs-down.svg');
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
        return (h(Host, { class: "tp-rate-like" }, h("button", { class: `tp-rate-like__button
            ${status === TpRateLikeStatus.LIKE
                ? 'tp-rate-like__button--like'
                : ''}
            ${status ? 'tp-rate-like__button--disabled' : ''}
          `, onClick: () => this.onClick(TpRateLikeStatus.LIKE) }, h("ion-icon", { class: "tp-rate-like__icon", src: thumbsUpIcon, "aria-hidden": "true" })), h("button", { class: `tp-rate-like__button
            ${status === TpRateLikeStatus.DISLIKE
                ? 'tp-rate-like__button--dislike'
                : ''}
            ${status ? 'tp-rate-like__button--disabled' : ''}
          `, onClick: () => this.onClick(TpRateLikeStatus.DISLIKE) }, h("ion-icon", { class: "tp-rate-like__icon", src: thumbsDownIcon, "aria-hidden": "true" }))));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpRateLike.style = rateLikeCss;

export { TpRateLike as tp_rate_like };

//# sourceMappingURL=tp-rate-like.entry.js.map
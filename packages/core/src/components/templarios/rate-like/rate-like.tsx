/* eslint-disable */

import {
  Component,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
  getAssetPath,
} from '@stencil/core';
import { TpRateLikeStatus } from './rate-like.enum';
import { TpRateLikeType } from './rate-like.type';

@Component({
  tag: 'tp-rate-like',
  styleUrl: 'rate-like.scss',
  assetsDirs: ['assets'],
  scoped: true,
})
export class TpRateLike {
  thumbsUpIcon = getAssetPath('./assets/tp-thumbs-up.svg');
  thumbsDownIcon = getAssetPath('./assets/tp-thumbs-down.svg');

  @Prop({ reflect: true, mutable: true }) status?: TpRateLikeType['status'];

  @Event() tpChange!: EventEmitter<TpRateLikeType['status']>;

  private onClick = (status: TpRateLikeType['status']) => {
    if (this.status) {
      return;
    }

    this.status = status;
    this.tpChange.emit(this.status);
  };

  render() {
    const { status, thumbsUpIcon, thumbsDownIcon } = this;

    return (
      <Host class="tp-rate-like">
        <button
          class={`tp-rate-like__button
            ${
              status === TpRateLikeStatus.LIKE
                ? 'tp-rate-like__button--like'
                : ''
            }
            ${status ? 'tp-rate-like__button--disabled' : ''}
          `}
          onClick={() => this.onClick(TpRateLikeStatus.LIKE)}
          id="button-like"
        >
          <ion-icon
            class="tp-rate-like__icon"
            src={thumbsUpIcon}
            aria-hidden="true"
          ></ion-icon>
        </button>
        <button
          class={`tp-rate-like__button
            ${
              status === TpRateLikeStatus.DISLIKE
                ? 'tp-rate-like__button--dislike'
                : ''
            }
            ${status ? 'tp-rate-like__button--disabled' : ''}
          `}
          onClick={() => this.onClick(TpRateLikeStatus.DISLIKE)}
        >
          <ion-icon
            class="tp-rate-like__icon"
            src={thumbsDownIcon}
            aria-hidden="true"
          ></ion-icon>
        </button>
      </Host>
    );
  }
}
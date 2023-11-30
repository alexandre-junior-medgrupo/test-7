import { Component, Host, Prop, State, getAssetPath, h } from '@stencil/core';
import { createColorClasses } from '@utils/functions/color.function';
import type { TpColor } from '@utils/types/color.type';

@Component({
  tag: 'tp-test',
  styleUrl: 'test.scss',
  assetsDirs: ['assets'],
  scoped: true,
})
export class TpTest {
  @Prop({ reflect: true }) color?: TpColor;
  @Prop({ reflect: true }) icon?: string;

  @State() defaultIcon = getAssetPath('./assets/tp-activity.svg');

  render() {
    const { color, icon, defaultIcon } = this;

    return (
      <Host
        tabindex="0"
        class={createColorClasses(color, {
          'tp-test': true,
        })}
      >
        <div class="tp-test__container">
          <span>Lorem ipsum, dolor sit amet consectetur.</span>
          <ion-button>ion button</ion-button>
          <ion-icon
            class="tp-test__icon"
            src={icon ?? defaultIcon}
            aria-hidden="true"
          ></ion-icon>
        </div>
      </Host>
    );
  }
}

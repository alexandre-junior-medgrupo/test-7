import { Component, Host, Prop, State, h } from '@stencil/core';
// TODO: criar alias tsconfig
import { createColorClasses } from '@utils/functions/color.function';
import { TpColor } from '@utils/types/color.type';

@Component({
  tag: 'tp-test',
  styleUrl: 'test.scss',
  scoped: true,
})
export class TpTest {
  @Prop({ reflect: true }) color?: TpColor;
  @Prop({ reflect: true }) icon?: string;

  @State() defaultIcon = './icons/tp-calendar.svg';

  render() {
    const { color, icon, defaultIcon } = this;

    return (
      <Host
        class={createColorClasses(color, {
          'tp-test': true,
        })}
      >
        <div class="tp-test__container">
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            voluptate.
          </span>
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

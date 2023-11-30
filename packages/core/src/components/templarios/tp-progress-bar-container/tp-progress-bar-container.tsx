import { Component, Host, Prop, Element, h, Watch } from '@stencil/core';
import type { TpColor } from '@utils/types/color.type';

@Component({
  tag: 'tp-progress-bar-container',
  styleUrl: 'tp-progress-bar-container.scss',
  scoped: true,
})
export class TpProgressBarContainer {
  @Element() host!: HTMLTpProgressBarContainerElement;
  @Prop({ reflect: true }) color?: TpColor;
  @Prop({ reflect: true }) value?: string;
  progressBar: HTMLIonProgressBarElement;

  componentDidLoad() {
    this.progressBar = this.host.querySelector(
      'ion-progress-bar',
    ) as HTMLIonProgressBarElement;

    if (!this.host.hasAttribute('value')) return;

    this.value = this.host.getAttribute('value');

    if (this.value === '0') {
      this.progressBar.classList.add('tp-progress-bar-blank');
    }

    if (this.host.hasAttribute('color')) {
      const color = this.host.getAttribute('color');
      if (color === null || color === 'null') {
        this.removeColorClasses(this.progressBar);
        return;
      }
      this.progressBar.setAttribute('color', color);
    } else {
      this.removeColorClasses(this.progressBar);
      return;
    }
  }

  @Watch('value')
  handleChangeValue(newValue: string) {
    this.value = newValue;
    this.progressBar.setAttribute('value', this.value);

    if (this.value === '0') {
      this.progressBar.classList.add('tp-progress-bar-blank');
    } else if (this.progressBar.classList.contains('tp-progress-bar-blank')) {
      this.progressBar.classList.remove('tp-progress-bar-blank');
    }
  }

  @Watch('color')
  handleChangeColor(newValue: string) {
    if (newValue === 'null' || newValue === null) {
      this.removeColorClasses(this.progressBar);
      return;
    }
    this.color = newValue;
    this.progressBar.setAttribute('color', this.color);
  }

  private removeColorClasses(element: HTMLElement) {
    const currentClasses = [...element.classList];

    currentClasses.forEach((currentClass) => {
      if (currentClass.includes('ion-color')) {
        element.classList.remove(currentClass);
      }
    });
  }

  render() {
    const { value } = this;

    return (
      <Host>
        {/* <slot></slot> */}
        <ion-progress-bar value={+value}></ion-progress-bar>
      </Host>
    );
  }
}

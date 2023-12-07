import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'tp-input-container',
  styleUrl: 'input-container.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpInputContainer {
  render() {
    return (
      <Host>
        <h1>header</h1>
      </Host>
    );
  }
}

import {
  Component,
  Host,
  h
} from '@stencil/core';

@Component({
  tag: 'tp-segment-container',
  styleUrl: 'segment-container.scss',
  shadow: true,
})
export class TpSegmentContainer {
  render() {
    return (
      <Host class="tp-segment-container">
        <slot />
      </Host>
    )
  }
}

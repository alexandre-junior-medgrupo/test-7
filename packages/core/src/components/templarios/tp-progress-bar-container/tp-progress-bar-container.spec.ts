import { newSpecPage } from '@stencil/core/testing';
import { TpProgressBarContainer } from './tp-progress-bar-container';

describe('tp-progress-bar-container', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpProgressBarContainer],
      html: '<tp-progress-bar-container></tp-progress-bar-container>',
    });
    expect(root).toEqualHtml(`
      <tp-progress-bar-container>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-progress-bar-container>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpProgressBarContainer],
      html: `<tp-progress-bar-container></tp-progress-bar-container>`,
    });
    expect(root).toEqualHtml(`
      <tp-progress-bar-container>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-progress-bar-container>
    `);
  });
});

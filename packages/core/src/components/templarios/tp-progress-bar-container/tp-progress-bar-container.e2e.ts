import { newE2EPage } from '@stencil/core/testing';

describe('tp-progress-bar-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<tp-progress-bar-container></tp-progress-bar-container>',
    );
    const element = await page.find('tp-progress-bar-container');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<tp-progress-bar-container></tp-progress-bar-container>',
    );
  });
});

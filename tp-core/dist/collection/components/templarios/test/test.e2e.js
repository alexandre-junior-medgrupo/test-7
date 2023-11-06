import { newE2EPage } from "@stencil/core/testing";
describe('tp-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tp-test></tp-test>');
    const element = await page.find('tp-test');
    expect(element).toHaveClass('hydrated');
  });
  it('renders changes to the name data', async () => {
    const page = await newE2EPage();
    await page.setContent('<tp-test></tp-test>');
  });
});
//# sourceMappingURL=test.e2e.js.map

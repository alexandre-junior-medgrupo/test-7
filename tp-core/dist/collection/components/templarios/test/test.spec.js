import { newSpecPage } from "@stencil/core/testing";
import { TpTest } from "./test";
describe('tp-test', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpTest],
      html: '<tp-test></tp-test>',
    });
    expect(root).toEqualHtml(`
      <tp-test>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-test>
    `);
  });
  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpTest],
      html: `<tp-test></tp-test>`,
    });
    expect(root).toEqualHtml(`
      <tp-test>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-test>
    `);
  });
});
//# sourceMappingURL=test.spec.js.map

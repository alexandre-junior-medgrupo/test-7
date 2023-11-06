var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import { html } from "lit";
import { TP_ICONS_STORYBOOK } from "../../../utils/constants/icon.constant";
const meta = {
  component: 'tp-test',
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [...TP_ICONS_STORYBOOK],
    },
  },
};
export default meta;
export const Primary = {
  render: (_a) => {
    var args = __rest(_a, []);
    const iconUrl = args.icon ? `./icons/${args.icon}` : null;
    return html `<tp-test .color="${args.color}" .icon="${iconUrl}"></tp-test>`;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
//# sourceMappingURL=test.stories.js.map

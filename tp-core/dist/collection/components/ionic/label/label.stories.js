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
import { defineCustomElement } from "@ionic/core/components/ion-label";
import { html } from "lit";
import { TP_TYPES } from "../../../utils/constants/type.constant";
defineCustomElement();
const meta = {
  component: 'ion-label',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [...TP_TYPES],
    },
  },
};
export default meta;
export const Default = {
  render: (_a) => {
    var args = __rest(_a, []);
    return html `<ion-label .color="${args.color}" tp-type="${args.type}">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
      voluptate.
    </ion-label>`;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-label/gi)).toBeTruthy();
  }, */
};
//# sourceMappingURL=label.stories.js.map

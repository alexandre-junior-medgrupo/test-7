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
import { defineCustomElement } from "@ionic/core/components/ion-button";
import { html } from "lit";
defineCustomElement();
const meta = {
  component: 'ion-button',
};
export default meta;
export const Primary = {
  render: (_a) => {
    var args = __rest(_a, []);
    return html `<ion-button .color="${args.color}">ion-button</ion-button>`;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-text/gi)).toBeTruthy();
  }, */
};
//# sourceMappingURL=button.stories.js.map

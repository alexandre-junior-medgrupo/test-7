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
import { defineCustomElement as defineCustomElementItem } from "@ionic/core/components/ion-item";
import { defineCustomElement as defineCustomElementRadio } from "@ionic/core/components/ion-radio";
import { defineCustomElement as defineCustomElementRadioGroup } from "@ionic/core/components/ion-radio-group";
import { html } from "lit";
import { TP_ION_ITEM } from "../item.constant";
defineCustomElementItem();
defineCustomElementRadio();
defineCustomElementRadioGroup();
const meta = {
  title: 'components/Ionic/Item/Compositions',
  argTypes: {
    lines: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.lines],
    },
    gap: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.gap],
    },
    spacingX: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.spacingX],
    },
    spacingY: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.spacingY],
    },
    button: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};
export default meta;
export const Radio = {
  render: (_a) => {
    var args = __rest(_a, []);
    return html `
    <ion-radio-group>
      <ion-item
        .color="${args.color}"
        lines="${args.lines}"
        gap="${args.gap}"
        spacingX="${args.spacingX}"
        spacingY="${args.spacingY}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <ion-radio slot="start" aria-label></ion-radio>
        <ion-label>Basic Item</ion-label>
      </ion-item>

      <ion-item
        .color="${args.color}"
        lines="${args.lines}"
        gap="${args.gap}"
        spacingX="${args.spacingX}"
        spacingY="${args.spacingY}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <ion-label>Basic Item</ion-label>
        <ion-radio slot="end" aria-label></ion-radio>
      </ion-item>
    </ion-radio-group>
  `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
  }, */
};
//# sourceMappingURL=radio.stories.js.map

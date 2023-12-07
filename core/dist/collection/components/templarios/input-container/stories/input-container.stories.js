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
import { defineCustomElement as defineCustomElementInput } from "@ionic/core/components/ion-input";
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { html } from "lit";
defineCustomElementInput();
defineCustomElementLabel();
const meta = {
    title: 'components/Templarios/Input Container',
    argTypes: {
        state: {
            control: { type: 'select' },
            options: ['error', 'success'],
            description: 'Define o espaçamento entre os slots do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: ['error', '|', 'success'],
                },
            },
        },
    },
};
export default meta;
export const Input = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <tp-input-container state="${args.state}">
      <ion-label slot="label" tp-type="p14">Lorem ipsum dolor sit.</ion-label>
      <ion-input
        type="email"
        mode="md"
        clear-input="true"
        placeholder="Digite um e-mail valido"
      ></ion-input>
      <ion-label slot="feedback-error" tp-type="p14"
        >Lorem ipsum dolor sit.</ion-label
      >
      <ion-label slot="feedback-success" tp-type="p14"
        >Lorem ipsum dolor sit.</ion-label
      >
    </tp-input-container>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
    }, */
};
Input.argTypes = {
    color: { table: { disable: true } },
};
export const Select = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <tp-input-container state="${args.state}">
      <ion-label slot="label" tp-type="p14">Lorem ipsum dolor sit.</ion-label>
      <ion-input
        type="email"
        mode="md"
        clear-input="true"
        placeholder="Digite um e-mail valido"
      ></ion-input>
      <ion-label slot="feedback-error" tp-type="p14"
        >Lorem ipsum dolor sit.</ion-label
      >
      <ion-label slot="feedback-success" tp-type="p14"
        >Lorem ipsum dolor sit.</ion-label
      >
    </tp-input-container>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
    }, */
};
Select.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=input-container.stories.js.map

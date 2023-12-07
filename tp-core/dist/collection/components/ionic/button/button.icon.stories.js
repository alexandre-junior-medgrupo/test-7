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
import { TP_ION_BUTTON } from "./button.constant";
defineCustomElement();
const meta = {
    component: 'ion-button',
    argTypes: {
        size: {
            control: { type: 'select' },
            options: [...TP_ION_BUTTON.icon.size],
            description: 'Define o tamanho do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_ION_BUTTON.icon.size.join('|'),
                },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Define a estilização do estado disabled do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
    },
};
export default meta;
export const IconOnly = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-button fill="clear" size="${args.size}" ?disabled="${args.disabled}">
      <ion-icon
        slot="icon-only"
        color="${args.color}"
        src="./icons/tp-alert-triangle.svg"
      ></ion-icon>
    </ion-button>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=button.icon.stories.js.map

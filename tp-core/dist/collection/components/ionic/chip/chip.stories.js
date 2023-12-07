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
import { defineCustomElement } from "@ionic/core/components/ion-chip";
import { html } from "lit";
import { TP_ION_CHIP } from "./chip.constants";
defineCustomElement();
const meta = {
    title: 'components/Ionic/Chip',
    argTypes: {
        size: {
            control: { type: 'select' },
            options: [...TP_ION_CHIP.size],
            description: 'Define o tamanho do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_ION_CHIP.size.join('|'),
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
        active: {
            control: 'boolean',
            description: 'Define a estilização do estado ativo do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        slot: {
            control: { type: 'text' },
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string',
                },
            },
        },
    },
    args: {
        active: true,
        slot: 'Chip',
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-chip
      ?outline="${args.active}"
      size="${args.size}"
      color="${args.color}"
      ?disabled="${args.disabled}"
    >
      <ion-label>${args.slot}</ion-label>
    </ion-chip>

    <ion-chip
      ?outline="${args.active}"
      size="${args.size}"
      color="${args.color}"
      ?disabled="${args.disabled}"
    >
      <ion-icon tp-size="md" src="./icons/tp-star.svg"></ion-icon>
      <ion-label>${args.slot}</ion-label>
    </ion-chip>

    <ion-chip
      ?outline="${args.active}"
      size="${args.size}"
      color="${args.color}"
      ?disabled="${args.disabled}"
    >
      <ion-label>${args.slot}</ion-label>
      <ion-icon tp-size="md" src="./icons/tp-star.svg"></ion-icon>
    </ion-chip>

    <ion-chip
      ?outline="${args.active}"
      size="${args.size}"
      color="${args.color}"
      ?disabled="${args.disabled}"
    >
      <ion-icon tp-size="md" src="./icons/tp-star.svg"></ion-icon>
      <ion-label>${args.slot}</ion-label>
      <ion-icon tp-size="md" src="./icons/tp-star.svg"></ion-icon>
    </ion-chip>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-text/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=chip.stories.js.map

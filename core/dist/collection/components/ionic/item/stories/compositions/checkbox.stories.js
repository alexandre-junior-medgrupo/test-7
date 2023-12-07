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
import { defineCustomElement as defineCustomElementCheckbox } from "@ionic/core/components/ion-checkbox";
import { defineCustomElement as defineCustomElementItem } from "@ionic/core/components/ion-item";
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { html } from "lit";
import { TP_ION_ITEM } from "../../utils/item.constant";
defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementCheckbox();
const meta = {
    title: 'components/Ionic/Item/Compositions',
    argTypes: {
        lines: {
            control: { type: 'select' },
            options: [...TP_ION_ITEM.lines],
            description: 'Define se o componente terá um border bottom.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_ION_ITEM.lines.join('|'),
                },
            },
        },
        gap: {
            control: { type: 'select' },
            options: [...TP_ION_ITEM.gap],
            description: 'Define qual o espaçamento entre o icone e o texto do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_ION_ITEM.gap.join('|'),
                },
            },
        },
        spacingX: {
            control: { type: 'select' },
            options: [...TP_ION_ITEM.spacingX],
            description: 'Define qual o espaçamento das bordas horizontais para o conteudo do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_ION_ITEM.spacingX.join('|'),
                },
            },
        },
        spacingY: {
            control: { type: 'select' },
            options: [...TP_ION_ITEM.spacingY],
            description: 'Define qual o espaçamento das bordas verticais para o conteudo do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_ION_ITEM.spacingY.join('|'),
                },
            },
        },
        button: {
            control: 'boolean',
            description: 'Define a estilização do estado button do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean',
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
export const Checkbox = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-item
      .color="${args.color}"
      lines="${args.lines}"
      gap="${args.gap}"
      spacingX="${args.spacingX}"
      spacingY="${args.spacingY}"
      ?button="${args.button}"
      ?disabled="${args.disabled}"
    >
      <ion-checkbox slot="start" aria-label></ion-checkbox>
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
      <ion-checkbox slot="end" aria-label></ion-checkbox>
    </ion-item>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=checkbox.stories.js.map

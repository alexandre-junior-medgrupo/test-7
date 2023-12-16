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
import { defineCustomElement as defineCustomElementSearchbar } from "@ionic/core/components/ion-searchbar";
import { defineCustomElement as defineCustomElementTextarea } from "@ionic/core/components/ion-textarea";
import { defineCustomElement as defineCustomElementItem } from "@ionic/core/components/ion-item";
import { html } from "lit";
import { TP_ION_ITEM } from "../../utils/item.constant";
defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementInput();
defineCustomElementSearchbar();
defineCustomElementTextarea();
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
        ['tp-gap']: {
            control: { type: 'select' },
            options: [...TP_ION_ITEM['tp-gap']],
            description: 'Define qual o espaçamento entre o icone e o texto do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_ION_ITEM['tp-gap'].join('|'),
                },
            },
        },
        ['tp-spacingx']: {
            control: { type: 'select' },
            options: [...TP_ION_ITEM['tp-spacingx']],
            description: 'Define qual o espaçamento das bordas horizontais para o conteudo do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_ION_ITEM['tp-spacingx'].join('|'),
                },
            },
        },
        ['tp-spacingy']: {
            control: { type: 'select' },
            options: [...TP_ION_ITEM['tp-spacingy']],
            description: 'Define qual o espaçamento das bordas verticais para o conteudo do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_ION_ITEM['tp-spacingy'].join('|'),
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
export const Input = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-list>
      <ion-item
        lines="${args.lines}"
        tp-gap="${args['tp-gap']}"
        tp-spacingX="${args['tp-spacingx']}"
        tp-spacingY="${args['tp-spacingy']}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <ion-input
          mode="md"
          placeholder="Digite aqui"
          clear-input="true"
        ></ion-input>
      </ion-item>

      <ion-item
        lines="${args.lines}"
        tp-gap="${args['tp-gap']}"
        tp-spacingX="${args['tp-spacingx']}"
        tp-spacingY="${args['tp-spacingy']}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <tp-input-container>
          <ion-label slot="label" tp-type="p14">Input</ion-label>
          <ion-input
            mode="md"
            placeholder="Digite aqui"
            clear-input="true"
          ></ion-input>
        </tp-input-container>
      </ion-item>

      <ion-item
        lines="${args.lines}"
        tp-gap="${args['tp-gap']}"
        tp-spacingX="${args['tp-spacingx']}"
        tp-spacingY="${args['tp-spacingy']}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <tp-input-container>
          <ion-label slot="label" tp-type="p14">Searchbar</ion-label>
          <ion-searchbar
            mode="md"
            search-icon="./../../../../icons/tp-search.svg"
            clear-icon="./../../../../icons/tp-x.svg"
            placeholder="Lorem ipsum dolor"
          ></ion-searchbar>
        </tp-input-container>
      </ion-item>

      <ion-item
        lines="${args.lines}"
        tp-gap="${args['tp-gap']}"
        tp-spacingX="${args['tp-spacingx']}"
        tp-spacingY="${args['tp-spacingy']}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <tp-input-container>
          <ion-label slot="label" tp-type="p14">Textarea</ion-label>
          <ion-textarea
            placeholder="Lorem ipsum, dolor sit amet consectetur."
            mode="md"
          ></ion-textarea>
        </tp-input-container>
      </ion-item>
    </ion-list>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
    }, */
};
Input.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=input.stories.js.map

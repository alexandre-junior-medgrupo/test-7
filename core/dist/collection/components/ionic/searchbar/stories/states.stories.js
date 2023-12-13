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
import { defineCustomElement } from "@ionic/core/components/ion-searchbar";
import { html } from "lit";
import { TP_INPUT_CONTAINER } from "../../../templarios/input-container/utils/input-container.constants";
defineCustomElement();
const meta = {
    title: 'components/Ionic/Searchbar',
    component: 'ion-searchbar',
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Define a estilização do estado disabled do componente.',
            table: {
                defaultValue: {
                    summary: false,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        state: {
            control: { type: 'select' },
            options: [...TP_INPUT_CONTAINER.state],
            description: `Define o estado do componente **'tp-input-container'**.

**OBS**: Atributo referente ao componente **'tp-input-container'**.
`,
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_INPUT_CONTAINER.state.join('|'),
                },
            },
        },
    },
};
export default meta;
export const States = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
  <tp-input-container color="${args.color}" state="${args.state}">
    <ion-label slot="label" tp-type="p14">Descrição Searchbar</ion-label>
    <ion-searchbar
      ?disabled="${args.disabled}"
      mode="md"
      search-icon="./../../../../icons/tp-search.svg"
      clear-icon="./../../../../icons/tp-x.svg"
      placeholder="Lorem ipsum dolor"
    ></ion-searchbar>
    <ion-label slot="feedback-error" tp-type="p14">*Caracteres invalidos.</ion-label>
    <ion-label slot="feedback-success" tp-type="p14">*Caracteres validos</ion-label>
  </tp-input-container>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-searchbar/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=states.stories.js.map

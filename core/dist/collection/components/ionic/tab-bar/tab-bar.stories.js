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
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { defineCustomElement as defineCustomElementTabBar, } from "@ionic/core/components/ion-tab-bar";
import { defineCustomElement as defineCustomElementTabButton, } from "@ionic/core/components/ion-tab-button";
import { defineCustomElement as defineCustomElementTabs } from "@ionic/core/components/ion-tabs";
import { html } from "lit";
defineCustomElementTabs();
defineCustomElementTabBar();
defineCustomElementTabButton();
defineCustomElementLabel();
const meta = {
    title: 'components/Ionic/Tab-bar',
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
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-tabs>
      <ion-tab-bar color="${args.color}" slot="bottom">
        <ion-tab-button
          tab="tab1"
          ?disabled="${args.disabled}"
          layout="icon-start"
          selected
        >
          <ion-icon src="./icons/tp-check-square.svg"></ion-icon>
          <ion-label>Questão</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="tab2"
          ?disabled="${args.disabled}"
          layout="icon-start"
        >
          <ion-icon src="./icons/tp-chat-2.svg"></ion-icon>
          <ion-label>Gabarito Comentado</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="tab3"
          ?disabled="${args.disabled}"
          layout="icon-start"
        >
          <ion-icon src="./icons/tp-grid.svg"></ion-icon>
          <ion-label>Cartão Resposta</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="tab4"
          ?disabled="${args.disabled}"
          layout="icon-start"
        >
          <ion-icon src="./icons/tp-help-circle.svg"></ion-icon>
          <ion-label>Dúvidas</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="tab5"
          ?disabled="${args.disabled}"
          layout="icon-start"
        >
          <ion-icon src="./icons/tp-hourglass.svg"></ion-icon>
          <ion-label>Recursos</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-tab-bar/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=tab-bar.stories.js.map
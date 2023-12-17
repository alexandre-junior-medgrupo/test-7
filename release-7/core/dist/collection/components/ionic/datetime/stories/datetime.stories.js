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
import { defineCustomElement as defineCustomElementDatetime } from "@ionic/core/components/ion-datetime";
import { defineCustomElement as defineCustomElementDatetimeButton } from "@ionic/core/components/ion-datetime-button";
import { html } from "lit";
defineCustomElementDatetime();
defineCustomElementDatetimeButton();
const meta = {
    title: 'components/Ionic/Datetime',
    argTypes: {
        presentation: {
            control: 'select',
            options: ['time'],
            description: 'Define o mode de apresentação do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'Time',
                },
            },
        }
    },
    args: {
        presentation: 'date',
    }
};
export default meta;
const openDatetime = () => {
    const datetime = document.getElementById('datetime');
    datetime.style.opacity = '1';
    datetime.style.visibility = 'visible';
};
const closeDatetime = () => {
    const datetime = document.getElementById('datetime');
    datetime.style.opacity = '0';
    datetime.style.visibility = 'hidden';
};
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
      <tp-input-container color="${args.color}" @click=${openDatetime}>
        <ion-label slot="label" tp-type="p14">Descrição Datetime</ion-label>
        <ion-datetime-button mode="ios" datetime="datetime"></ion-datetime-button>
        <ion-icon src="./icons/tp-calendar.svg"></ion-icon>
      </tp-input-container>

      <ion-datetime mode="md" id="datetime" presentation=${args.presentation} prefer-wheel="true">
        <div slot="title">
          <ion-button fill="clear" size="xxs">
            <ion-label tp-type="p12b" @click=${closeDatetime}>CANCELAR</ion-label>
          </ion-button>
          <ion-button fill="clear" size="xxs">
            <ion-label tp-type="p12b" @click=${closeDatetime}>SELECIONAR</ion-label>
          </ion-button>
        </div>
      </ion-datetime>
    `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-datetime/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=datetime.stories.js.map

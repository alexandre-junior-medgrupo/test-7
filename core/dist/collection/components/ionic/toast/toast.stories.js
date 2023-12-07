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
import { defineCustomElement as defineCustomElementToast } from "@ionic/core/components/ion-toast";
import { defineCustomElement as defineCustomElementButton } from "@ionic/core/components/ion-button";
import { html } from "lit";
defineCustomElementToast();
defineCustomElementButton();
const meta = {
    title: 'components/Ionic/Toast',
    argTypes: {
        warning: {
            control: 'boolean',
            description: `Define o estado warning do componente.

      **OBS**: Atributo criado para atender a necessidade do DS**.
      `,
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        icon: {
            control: 'text',
            description: 'Define o icon a ser exibido no componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'text',
                },
            },
        },
        message: {
            control: 'text',
            description: 'Define o texto a ser exibido no componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'text',
                },
            },
        },
        duration: {
            control: 'number',
            description: 'Define o tempo (milisegundos) de exibição do componente.',
            table: {
                defaultValue: {
                    summary: '3000',
                },
                type: {
                    summary: 'number',
                },
            },
        },
    },
    args: {
        duration: 3000,
        message: 'Este toast desaparecerá em 3 segundos',
        icon: './icons/tp-star.svg',
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-button id="open-toast">Toast</ion-button>
    <ion-toast
      trigger="open-toast"
      icon="${args.icon}"
      message="${args.message}"
      color="${args.color}"
      duration="${args.duration}"
      ?warning="${args.warning}"
    ></ion-toast>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=toast.stories.js.map

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
import { defineCustomElement as defineCustomElementSkeletonText } from "@ionic/core/components/ion-skeleton-text";
import { html } from "lit";
import { TP_ICONS_STORYBOOK } from "../../../../utils/constants/icon.constant";
//
// !IMPORTANT! Antigo med-alert-fixed
//
defineCustomElementSkeletonText();
const meta = {
    title: 'components/Templarios/Alert',
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: [...TP_ICONS_STORYBOOK],
            description: 'Define o path e nome do icone.',
        },
        text: {
            control: 'text',
            description: 'Define a string a ser exibida no componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'text',
                },
            },
        },
        loading: {
            control: 'boolean',
            description: 'Define a estilização do estado loading do componente.',
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
    args: {
        color: 'provas-4',
        icon: `${TP_ICONS_STORYBOOK[1]}`,
        text: 'Versão desatualizada',
    },
};
export default meta;
export const Desatualizado = {
    render: (_a) => {
        var args = __rest(_a, []);
        const iconUrl = `./icons/${args.icon}`;
        return html `<tp-alert
      color="${args.color}"
      ?loading="${args.loading}"
    >
      <ion-icon class="tp-alert__icon" slot="icon" tp-size="sm" src="${iconUrl}"></ion-icon>
      <ion-text class="tp-alert__text" slot="text" tp-type="p12x">${args.text}</ion-text>
    </tp-alert>`;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/tp-alert/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=alert-desatualizado.stories.js.map

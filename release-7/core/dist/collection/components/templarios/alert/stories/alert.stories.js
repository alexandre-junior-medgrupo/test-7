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
import { TP_ALERT } from "../alert.constants";
import { TpAlertState } from "../alert.enum";
// antigo med-alert-fixed
defineCustomElementSkeletonText();
const meta = {
    title: 'components/Templarios/Alert',
    argTypes: {
        state: {
            control: { type: 'radio' },
            options: [...TP_ALERT.state],
            description: `Define a variação de estado do componente.

**OBS**: O **state="${TpAlertState.ATUALIZAR}"** está disponível apenas no theme **MedSoft**.`,
            // TODO  OU USAR HASH PARA COR???
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: [...TP_ALERT.state].join('|'),
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
        state: TpAlertState.OFFLINE,
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `<tp-alert
      state="${args.state}"
      ?loading="${args.loading}"
    ></tp-alert>`;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/tp-alert/gi)).toBeTruthy();
    }, */
};
Default.argTypes = {
    color: { table: { disable: true } },
};
//# sourceMappingURL=alert.stories.js.map

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
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { html } from "lit";
import { TP_TYPE } from "../../../../../utils/constants/type.constant";
defineCustomElementCheckbox();
defineCustomElementLabel();
const meta = {
    title: 'components/Ionic/Checkbox/Compositions',
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Define a estilização do estado checked do componente.',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        indeterminate: {
            control: 'boolean',
            description: 'Define a estilização do estado indeterminate do componente.',
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
        ['tp-type']: {
            control: { type: 'select' },
            options: [...TP_TYPE],
            description: `Define a estilização do texto do componente **'ion-label'**.

**OBS**: Atributo referente ao componente **'ion-label'**.
`,
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: TP_TYPE.join('|'),
                },
            },
        },
    },
};
export default meta;
export const Label = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-checkbox
      color="${args.color}"
      ?checked="${args.checked}"
      ?indeterminate="${args.indeterminate}"
      ?disabled="${args.disabled}"
    >
      <ion-label tp-type="${args['tp-type']}">
        Lorem ipsum, dolor sit amet consectetur.
      </ion-label>
    </ion-checkbox>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-checkbox/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=label.stories.js.map

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
import { defineCustomElement } from "@ionic/core/components/ion-textarea";
import { html } from "lit";
defineCustomElement();
const meta = {
    title: 'components/Ionic/Textarea',
    argTypes: {
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
const validateTextarea = () => {
    const textarea = document.querySelector('ion-textarea');
    textarea.addEventListener('ionInput', (ev) => validate(ev));
    textarea.addEventListener('ionBlur', () => markTouched());
    const validateEmail = (email) => {
        return email.match(/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    };
    const validate = (ev) => {
        const value = ev.target.value;
        textarea.classList.remove('ion-valid');
        textarea.classList.remove('ion-invalid');
        if (value === '')
            return;
        validateEmail(value)
            ? textarea.classList.add('ion-valid')
            : textarea.classList.add('ion-invalid');
    };
    const markTouched = () => {
        textarea.classList.add('ion-touched');
    };
};
export const State = {
    render: (_a) => {
        var args = __rest(_a, []);
        setTimeout(() => {
            validateTextarea();
        }, 1000);
        return html `
      <ion-textarea
        error-text="*Caracteres invalidos"
        color="${args.color}"
        ?disabled="${args.disabled}"
        placeholder="Digite um e-mail valido"
        mode="md"
      ></ion-textarea>
    `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=state.stories.js.map

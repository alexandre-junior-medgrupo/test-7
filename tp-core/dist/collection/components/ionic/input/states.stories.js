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
import { defineCustomElement } from "@ionic/core/components/ion-input";
import { html } from "lit";
defineCustomElement();
const meta = {
    title: 'components/Ionic/Input',
    argTypes: {
        clearInput: {
            control: 'boolean',
            description: 'Define se o componente conatará com um button para limpar o input.',
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
const validateInput = () => {
    const input = document.querySelector('ion-input');
    input.addEventListener('ionInput', (ev) => validate(ev));
    input.addEventListener('ionBlur', () => markTouched());
    const validateEmail = (email) => {
        return email.match(/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    };
    const validate = (ev) => {
        const value = ev.target.value;
        input.classList.remove('ion-valid');
        input.classList.remove('ion-invalid');
        if (value === '')
            return;
        validateEmail(value)
            ? input.classList.add('ion-valid')
            : input.classList.add('ion-invalid');
    };
    const markTouched = () => {
        input.classList.add('ion-touched');
    };
};
export const States = {
    render: (_a) => {
        var args = __rest(_a, []);
        setTimeout(() => {
            validateInput();
        }, 1000);
        return html `
      <ion-input
        type="email"
        error-text="*Caracteres invalidos"
        mode="md"
        clear-input="true"
        placeholder="Digite um e-mail valido"
        color="${args.color}"
        ?disabled="${args.disabled}"
        ?clear-input="${args.clearInput}"
      ></ion-input>
    `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-input/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=states.stories.js.map

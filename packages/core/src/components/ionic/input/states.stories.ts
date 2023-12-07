import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-input';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonInput } from './input.type';

defineCustomElement();

const meta: Meta<Components.IonInput & TpIonInput> = {
  title: 'components/Ionic/Input',
  argTypes: {
    errorText: {
      control: { type: 'text' },
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'string',
        },
      },
    },
    clearInput: {
      control: 'boolean',
      description:
        'Define se o componente conatará com um button para limpar o input.',
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
  args: {
    errorText: '*Caracteres invalidos',
  },
};

export default meta;

type Story = StoryObj<Components.IonInput & TpIonInput>;

const validateInput = () => {
  const input = document.querySelector('ion-input');

  input.addEventListener('ionInput', (ev) => validate(ev));
  input.addEventListener('ionBlur', () => markTouched());

  const validateEmail = (email) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    );
  };

  const validate = (ev) => {
    const value = ev.target.value;

    input.classList.remove('ion-valid');
    input.classList.remove('ion-invalid');

    if (value === '') return;

    validateEmail(value)
      ? input.classList.add('ion-valid')
      : input.classList.add('ion-invalid');
  };

  const markTouched = () => {
    input.classList.add('ion-touched');
  };
};

export const States: Story = {
  render: ({ ...args }) => {
    setTimeout(() => {
      validateInput();
    }, 1000);

    return html`
      <ion-input
        type="email"
        error-text="${args.errorText}"
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

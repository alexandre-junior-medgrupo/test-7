import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-textarea';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonTextarea } from './textarea.type';

defineCustomElement();

const meta: Meta<Components.IonTextarea & TpIonTextarea> = {
  title: 'components/Ionic/Textarea',
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

type Story = StoryObj<Components.IonTextarea & TpIonTextarea>;

const validateTextarea = () => {
  const textarea = document.querySelector('ion-textarea');

  textarea.addEventListener('ionInput', (ev) => validate(ev));
  textarea.addEventListener('ionBlur', () => markTouched());

  const validateEmail = (email) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    );
  };

  const validate = (ev) => {
    const value = ev.target.value;

    textarea.classList.remove('ion-valid');
    textarea.classList.remove('ion-invalid');

    if (value === '') return;

    validateEmail(value)
      ? textarea.classList.add('ion-valid')
      : textarea.classList.add('ion-invalid');
  };

  const markTouched = () => {
    textarea.classList.add('ion-touched');
  };
};

export const State: Story = {
  render: ({ ...args }) => {
    setTimeout(() => {
      validateTextarea();
    }, 1000);

    return html`
      <ion-textarea
        error-text="${args.errorText}"
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

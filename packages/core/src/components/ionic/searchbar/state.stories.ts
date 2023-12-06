import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-searchbar';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonSearchbar } from './searchbar.type';

defineCustomElement();

const meta: Meta<Components.IonSearchbar & TpIonSearchbar> = {
  title: 'components/Ionic/Searchbar',
  component: 'ion-searchbar',
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

type Story = StoryObj<Components.IonSearchbar & TpIonSearchbar>;

const validateInput = () => {
  const input = document.querySelector('ion-searchbar');

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

export const State: Story = {
  render: ({ ...args }) => {
    setTimeout(() => {
      validateInput();
    }, 1000);

    return html`
      <ion-searchbar
        color="${args.color}"
        ?disabled="${args.disabled}"
        mode="md"
        search-icon="./../../../../icons/tp-search.svg"
        clear-icon="./../../../../icons/tp-x.svg"
        placeholder="Digite um e-mail valido"
      ></ion-searchbar>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-searchbar/gi)).toBeTruthy();
  }, */
};

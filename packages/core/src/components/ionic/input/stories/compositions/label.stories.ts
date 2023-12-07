import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementInput } from '@ionic/core/components/ion-input';
import { defineCustomElement as defineCustomElementText } from '@ionic/core/components/ion-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonText } from '../../../text/text.type';
import { TpIonInput } from '../../utils/input.type';

defineCustomElementInput();
defineCustomElementText();

const meta: Meta<Components.IonInput & TpIonInput & TpIonText> = {
  title: 'components/Ionic/Input/Compositions',
  argTypes: {
    clearInput: {
      control: 'boolean',
      description: 'Renderiza um botão para limpar o input.',
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

type Story = StoryObj<Components.IonInput & TpIonInput & TpIonText>;

export const Label: Story = {
  render: ({ ...args }) => {
    return html`
      <ion-label tp-type="p14">Description</ion-label>
      <ion-input
        mode="md"
        placeholder="Digite aqui"
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

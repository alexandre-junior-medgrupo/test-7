import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-input';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonInput } from './input.type';

defineCustomElement();

const meta: Meta<Components.IonInput & TpIonInput> = {
  title: 'components/Ionic/Input',
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

type Story = StoryObj<Components.IonInput & TpIonInput>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-input
      mode="md"
      placeholder="Digite aqui"
      color="${args.color}"
      ?disabled="${args.disabled}"
    ></ion-input>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-input/gi)).toBeTruthy();
  }, */
};

import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-textarea';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonTextarea } from '../utils/textarea.type';

defineCustomElement();

const meta: Meta<Components.IonTextarea & TpIonTextarea> = {
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

type Story = StoryObj<Components.IonTextarea & TpIonTextarea>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <tp-input-container color="${args.color}">
      <ion-label slot="label" tp-type="p14">Descrição Textarea</ion-label>
      <ion-textarea
        ?disabled="${args.disabled}"
        placeholder="Lorem ipsum, dolor sit amet consectetur."
        mode="md"
      ></ion-textarea>
    </tp-input-container>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-textarea/gi)).toBeTruthy();
  }, */
};

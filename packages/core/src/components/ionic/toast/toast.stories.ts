import { Components } from '@ionic/core';
import { IonButton } from '@ionic/core/components/ion-button';
import { defineCustomElement as defineCustomElementToast } from '@ionic/core/components/ion-toast';
import { defineCustomElement as defineCustomElementButton } from '@ionic/core/components/ion-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonToast } from './toast.type';

defineCustomElementToast();
defineCustomElementButton();

const meta: Meta<Components.IonToast & TpIonToast & IonButton> = {
  title: 'components/Ionic/Toast',
  argTypes: {
    warning: {
      control: 'boolean',
      description: 'Define o estado warning do componente.',
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

type Story = StoryObj<Components.IonToast & TpIonToast & IonButton>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-button id="open-toast">Toast</ion-button>
    <ion-toast
      ?warning="${args.warning}"
      color="${args.color}"
      trigger="open-toast"
      icon="./icons/tp-star.svg"
      message="Este Toast desaparecerá em 5 segundos"
      duration="100000"
    ></ion-toast>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
  }, */
};

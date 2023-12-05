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
    message: {
      control: 'text',
      description: 'Define o texto a ser exibição no componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'text',
        },
      },
    },
    duration: {
      control: 'number',
      description: 'Define o tempo (milisegundos) de exibição do componente.',
      table: {
        defaultValue: {
          summary: '3000',
        },
        type: {
          summary: 'number',
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
      trigger="open-toast"
      icon="./icons/tp-star.svg"
      message="Lorem ipsum, dolor sit amet"
      color="${args.color}"
      duration="${args.duration}"
      ?warning="${args.warning}"
    ></ion-toast>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
  }, */
};

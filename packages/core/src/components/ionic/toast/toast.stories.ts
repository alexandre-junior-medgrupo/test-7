import { Components } from '@ionic/core';
import {
  IonButton,
  defineCustomElement as defineCustomElementButton,
} from '@ionic/core/components/ion-button';
import { defineCustomElement as defineCustomElementToast } from '@ionic/core/components/ion-toast';
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
      description: `Define o estado warning do componente.

      **OBS**: Atributo criado para atender a necessidade do DS**.
      `,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    icon: {
      control: 'text',
      description: 'Define o icon a ser exibido no componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'text',
        },
      },
    },
    message: {
      control: 'text',
      description: 'Define o texto a ser exibido no componente.',
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
  args: {
    duration: 3000,
    message: 'Este toast desaparecerá em 3 segundos',
    icon: './icons/tp-star.svg',
  },
};

export default meta;

type Story = StoryObj<Components.IonToast & TpIonToast & IonButton>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-button id="open-toast">Toast</ion-button>
    <ion-toast
      trigger="open-toast"
      icon="${args.icon}"
      message="${args.message}"
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

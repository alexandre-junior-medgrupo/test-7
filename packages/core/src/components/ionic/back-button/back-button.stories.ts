import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-back-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_BACK_BUTTON } from './back-button.constant';
import { TpIonBackButton } from './back-button.type';

defineCustomElement();

const meta: Meta<Components.IonBackButton & TpIonBackButton> = {
  title: 'components/Ionic/Back Button',
  component: 'ion-back-button',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [...TP_ION_BACK_BUTTON.size],
      description: 'Define o tamanho do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_BACK_BUTTON.size.join('|'),
        },
      },
    },
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

type Story = StoryObj<Components.IonBackButton & TpIonBackButton>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-back-button
      size="${args.size}"
      color="${args.color}"
      ?disabled="${args.disabled}"
      icon="./../../../../icons/tp-chevron-left.svg"
      mode="ios"
      text=""
    ></ion-back-button>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
  }, */
};

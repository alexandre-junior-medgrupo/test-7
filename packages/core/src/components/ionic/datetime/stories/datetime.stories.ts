import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementDatetime } from '@ionic/core/components/ion-datetime';
import { defineCustomElement as defineCustomElementDatetimeButton, IonDatetimeButton } from '@ionic/core/components/ion-datetime-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpInputContainer } from 'src/components/templarios/input-container/input-container';
import { TpIonDatetime } from '../utils/datetime.type';

defineCustomElementDatetime();
defineCustomElementDatetimeButton();

const meta: Meta<Components.IonDatetime & IonDatetimeButton & TpIonDatetime & TpInputContainer> = {
  title: 'components/Ionic/Datetime',
  argTypes: {
    presentation: {
      control: 'select',
      options: ['time'],
      description: 'Define o mode de apresentação do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'Time',
        },
      },
    }
  },
  args: {
    presentation: 'date',
  }
};

export default meta;

type Story = StoryObj<Components.IonDatetime & IonDatetimeButton & TpIonDatetime & TpInputContainer>;

const openDatetime = () => {
  const datetime = document.getElementById('datetime')
  datetime.style.opacity = '1';
  datetime.style.visibility = 'visible';
}

const closeDatetime = () => {
  const datetime = document.getElementById('datetime')
  datetime.style.opacity = '0';
  datetime.style.visibility = 'hidden';
}

export const Default: Story = {
  render: ({ ...args }) => {
    return html`
      <tp-input-container color="${args.color}" @click=${openDatetime}>
        <ion-label slot="label" tp-type="p14">Descrição Datetime</ion-label>
        <ion-datetime-button mode="ios" datetime="datetime"></ion-datetime-button>
        <ion-icon src="./icons/tp-calendar.svg"></ion-icon>
      </tp-input-container>

      <ion-datetime mode="md" id="datetime" presentation=${args.presentation} prefer-wheel="true">
        <div slot="title">
          <ion-button fill="clear" size="xxs">
            <ion-label tp-type="p12b" @click=${closeDatetime}>CANCELAR</ion-label>
          </ion-button>
          <ion-button fill="clear" size="xxs">
            <ion-label tp-type="p12b" @click=${closeDatetime}>SELECIONAR</ion-label>
          </ion-button>
        </div>
      </ion-datetime>
    `
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-datetime/gi)).toBeTruthy();
  }, */
};

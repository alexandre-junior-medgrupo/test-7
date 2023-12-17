import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementDatetime } from '@ionic/core/components/ion-datetime';
import { defineCustomElement as defineCustomElementDatetimeButton, IonDatetimeButton } from '@ionic/core/components/ion-datetime-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpInputContainer } from 'src/components/templarios/input-container/input-container';
import { TP_INPUT_CONTAINER } from '../../../templarios/input-container/utils/input-container.constants';
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
    },
    state: {
      control: { type: 'select' },
      options: [...TP_INPUT_CONTAINER.state],
      description:`Define o estado do componente **'tp-input-container'**.

**OBS**: Atributo referente ao componente **'tp-input-container'**.
`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_INPUT_CONTAINER.state.join('|'),
        },
      },
    },
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

export const States: Story = {
  render: ({ ...args }) => {
    return html`
      <tp-input-container color="${args.color}" state="${args.state}" @click=${openDatetime}>
        <ion-label slot="label" tp-type="p14">Descrição Datetime</ion-label>
        <ion-datetime-button mode="ios" datetime="datetime"></ion-datetime-button>
        <ion-icon src="./icons/tp-calendar.svg"></ion-icon>

        <ion-label slot="feedback-error" tp-type="p14">*Caracteres invalidos</ion-label>
        <ion-label slot="feedback-success" tp-type="p14">*Caracteres validos</ion-label>
      </tp-input-container>

      <ion-datetime id="datetime" presentation=${args.presentation} prefer-wheel="true">
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

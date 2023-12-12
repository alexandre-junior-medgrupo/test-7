import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementDatetime } from '@ionic/core/components/ion-datetime';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_DATETIME } from '../utils/datetime.constants';
import { TpIonDatetime } from '../utils/datetime.type';

defineCustomElementDatetime();

const meta: Meta<Components.IonDatetime & TpIonDatetime> = {
  title: 'components/Ionic/Datetime',
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<Components.IonDatetime & TpIonDatetime>;

export const Default: Story = {
  render: ({ ...args }) =>
    html`
    <ion-datetime color="${args.color}" id="datetime" presentation="date" prefer-wheel="true">
      <ion-buttons slot="title">
        <ion-button fill="clear" size="xxs">
          <ion-label tp-type="p12b">CANCELAR</ion-label>
        </ion-button>
        <ion-button fill="clear" size="xxs">
          <ion-label tp-type="p12b">SELECIONAR</ion-label>
        </ion-button>
      </ion-buttons>
    </ion-datetime>
    >`,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-datetime/gi)).toBeTruthy();
  }, */
};

export const Time: Story = {
  render: ({ ...args }) =>
    html`
    <ion-datetime color="${args.color}" id="datetime" presentation="time" prefer-wheel="true">
      <ion-buttons slot="title">
        <ion-button fill="clear" size="xxs">
          <ion-label tp-type="p12b">CANCELAR</ion-label>
        </ion-button>
        <ion-button fill="clear" size="xxs">
          <ion-label tp-type="p12b">SELECIONAR</ion-label>
        </ion-button>
      </ion-buttons>
    </ion-datetime>
    >`,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-datetime/gi)).toBeTruthy();
  }, */
};

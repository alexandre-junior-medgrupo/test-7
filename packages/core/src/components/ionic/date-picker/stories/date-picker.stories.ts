import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementDatetime } from '@ionic/core/components/ion-datetime';
import { defineCustomElement as defineCustomElementDatetimeButton, IonDatetimeButton } from '@ionic/core/components/ion-datetime-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

defineCustomElementDatetime();
defineCustomElementDatetimeButton();

const meta: Meta<Components.IonDatetime & IonDatetimeButton> = {
  title: 'components/Ionic/date-picker',
  argTypes: {},
};

export default meta;

type Story = StoryObj<Components.IonDatetime & IonDatetimeButton>;

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
  render: () => {
    return html`
      <tp-input-container @click=${openDatetime}>
        <ion-label slot="label" tp-type="p14">Descrição Datetime</ion-label>
        <ion-datetime-button mode="ios" datetime="datetime"></ion-datetime-button>
        <ion-icon src="./icons/tp-calendar.svg"></ion-icon>

        <ion-datetime id="datetime" presentation="date">
          <div slot="buttons">
            <ion-button fill="clear" size="xxs">
              <ion-label tp-type="p12b" @click=${closeDatetime}>Cancelar</ion-label>
            </ion-button>
            <ion-button fill="clear" size="xxs">
              <ion-label tp-type="p12b" @click=${closeDatetime}>Ok</ion-label>
            </ion-button>
            </div>
        </ion-datetime>
      </tp-input-container>`
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
  }, */
};

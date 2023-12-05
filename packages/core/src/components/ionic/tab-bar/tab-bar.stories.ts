import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementTabs } from '@ionic/core/components/ion-tabs';
import {
  defineCustomElement as defineCustomElementTabBar,
  IonTabBar,
} from '@ionic/core/components/ion-tab-bar';
import {
  defineCustomElement as defineCustomElementTabButton,
  IonTabButton,
} from '@ionic/core/components/ion-tab-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonTabBar } from './tab-bar.type';

defineCustomElementTabs();
defineCustomElementTabBar();
defineCustomElementTabButton();

const meta: Meta<Components.IonTabs & IonTabBar & IonTabButton & TpIonTabBar> =
  {
    title: 'components/Ionic/Tab-bar',
    argTypes: {},
  };

export default meta;

type Story = StoryObj<
  Components.IonTabs & IonTabBar & IonTabButton & TpIonTabBar
>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="account">
          <ion-icon src="./icons/tp-star.svg"></ion-icon>
          <ion-label>About</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="contact">
          <ion-icon src="./icons/tp-star.svg"></ion-icon>
          <ion-label>About</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings">
          <ion-icon src="./icons/tp-star.svg"></ion-icon>
          <ion-label>About</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-tab-bar/gi)).toBeTruthy();
  }, */
};

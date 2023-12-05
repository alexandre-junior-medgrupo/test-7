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
    argTypes: {
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

type Story = StoryObj<
  Components.IonTabs & IonTabBar & IonTabButton & TpIonTabBar
>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-tabs>
      <ion-tab-bar color="${args.color}" slot="bottom">
        <ion-tab-button
          tab="account"
          ?disabled="${args.disabled}"
          layout="icon-start"
          selected
        >
          <ion-icon src="./icons/tp-star.svg"></ion-icon>
          <ion-label>About</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="contact"
          ?disabled="${args.disabled}"
          layout="icon-start"
        >
          <ion-icon src="./icons/tp-star.svg"></ion-icon>
          <ion-label>About</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="settings"
          ?disabled="${args.disabled}"
          layout="icon-start"
        >
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

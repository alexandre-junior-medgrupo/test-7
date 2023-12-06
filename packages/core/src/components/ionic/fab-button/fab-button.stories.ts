import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementFab } from '@ionic/core/components/ion-fab';
import {
  defineCustomElement as defineCustomElementFabList,
  IonFabList,
} from '@ionic/core/components/ion-fab-list';
import {
  defineCustomElement as defineCustomElementFabButton,
  IonFabButton,
} from '@ionic/core/components/ion-fab-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonFab } from './fab-button.type';

defineCustomElementFab();
defineCustomElementFabList();
defineCustomElementFabButton();

const meta: Meta<Components.IonFab & IonFabButton & IonFabList & TpIonFab> = {
  title: 'components/Ionic/Fab-button',
  argTypes: {},
};

export default meta;

type Story = StoryObj<Components.IonFab & IonFabButton & IonFabList & TpIonFab>;

export const Default: Story = {
  render: () => html`
    <ion-fab slot="fixed" horizontal="center" vertical="center">
      <ion-fab-button>
        <ion-icon src="./icons/tp-plus.svg"></ion-icon>
      </ion-fab-button>

      <ion-fab-list side="top">
        <ion-fab-button>
          <ion-icon src="./icons/tp-star.svg"></ion-icon>
        </ion-fab-button>

        <ion-fab-button>
          <ion-icon src="./icons/tp-star.svg"></ion-icon>
        </ion-fab-button>

        <ion-fab-button>
          <ion-icon src="./icons/tp-star.svg"></ion-icon>
        </ion-fab-button>

        <ion-fab-button>
          <ion-icon src="./icons/tp-star.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-text/gi)).toBeTruthy();
  }, */
};

import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import { defineCustomElement as defineCustomElementSegment } from '@ionic/core/components/ion-segment';
import { defineCustomElement as defineCustomElementSegmentButton } from '@ionic/core/components/ion-segment-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonSegment } from './segment.type';

defineCustomElementSegment();
defineCustomElementSegmentButton();
defineCustomElementLabel();

const meta: Meta<Components.IonSegment & TpIonSegment> = {
  title: 'components/Ionic/Segment',
  argTypes: {
    scrollable: {
      control: 'boolean',
      description: 'Define se o componente terá barra de scroll.',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
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

type Story = StoryObj<Components.IonSegment & TpIonSegment>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <div class="teste">
      <ion-segment
        mode="md"
        color="${args.color}"
        ?disabled="${args.disabled}"
        ?scrollable="${args.scrollable}"
        value="Tabs1"
      >
        <ion-segment-button value="Tabs1">
          <ion-label>Tabs 1</ion-label>
        </ion-segment-button>

        <ion-segment-button value="Tabs2">
          <ion-label>Tabs 2</ion-label>
        </ion-segment-button>

        <ion-segment-button value="Tabs3">
          <ion-label>Tabs 3</ion-label>
        </ion-segment-button>

        <ion-segment-button value="Tabs4">
          <ion-label>Tabs 4</ion-label>
        </ion-segment-button>

        <ion-segment-button value="Tabs5">
          <ion-label>Tabs 5</ion-label>
        </ion-segment-button>

        <ion-segment-button value="Tabs6">
          <ion-label>Tabs 6</ion-label>
        </ion-segment-button>

        <ion-segment-button value="Tabs7">
          <ion-label>Tabs 7</ion-label>
        </ion-segment-button>

        <ion-segment-button value="Tabs8">
          <ion-label>Tabs 8</ion-label>
        </ion-segment-button>

        <ion-segment-button value="Tabs9">
          <ion-label>Tabs 9</ion-label>
        </ion-segment-button>
      </ion-segment>
    </div>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-segment/gi)).toBeTruthy();
  }, */
};

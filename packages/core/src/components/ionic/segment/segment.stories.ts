import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementSegment } from '@ionic/core/components/ion-segment';
import { defineCustomElement as defineCustomElementSegmentButton } from '@ionic/core/components/ion-segment-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonSegment } from './segment.type';

defineCustomElementSegment();
defineCustomElementSegmentButton();

const meta: Meta<Components.IonSegment & TpIonSegment> = {
  title: 'components/Ionic/Segment',
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

type Story = StoryObj<Components.IonSegment & TpIonSegment>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-segment
      color="${args.color}"
      ?disabled="${args.disabled}"
      value="default"
    >
      <ion-segment-button value="default">
        <ion-label>Default</ion-label>
      </ion-segment-button>

      <ion-segment-button value="segment">
        <ion-label>Segment</ion-label>
      </ion-segment-button>

      <ion-segment-button value="segment2">
        <ion-label>Segment</ion-label>
      </ion-segment-button>
    </ion-segment>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-segment/gi)).toBeTruthy();
  }, */
};

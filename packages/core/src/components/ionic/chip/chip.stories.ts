import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-chip';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonChip } from './chip.type';

defineCustomElement();

const meta: Meta<Components.IonChip & TpIonChip> = {
  title: 'components/Ionic/Chip',
  argTypes: {
    slot: {
      control: { type: 'text' },
      table: {
        defaultValue: {
          summary: 'Chip',
        },
        type: {
          summary: 'string',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Define a estilização do estado disabled do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonChip & TpIonChip>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-chip outline color="${args.color}" ?disabled="${args.disabled}">
      ${args.slot ? args.slot : 'Chip'}
    </ion-chip>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-text/gi)).toBeTruthy();
  }, */
};

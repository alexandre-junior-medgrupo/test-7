import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-searchbar';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonSearchbar } from '../utils/searchbar.type';

defineCustomElement();

const meta: Meta<Components.IonSearchbar & TpIonSearchbar> = {
  title: 'components/Ionic/Searchbar',
  component: 'ion-searchbar',
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

type Story = StoryObj<Components.IonSearchbar & TpIonSearchbar>;

export const Default: Story = {
  render: ({ ...args }) => html`
  <tp-input-container color="${args.color}">
    <ion-label slot="label" tp-type="p14">Descrição Searchbar</ion-label>
    <ion-searchbar
      ?disabled="${args.disabled}"
      mode="md"
      search-icon="./../../../../icons/tp-search.svg"
      clear-icon="./../../../../icons/tp-x.svg"
      placeholder="Lorem ipsum dolor"
    ></ion-searchbar>
  </tp-input-container>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-searchbar/gi)).toBeTruthy();
  }, */
};

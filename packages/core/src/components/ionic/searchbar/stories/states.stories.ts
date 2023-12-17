import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-searchbar';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_INPUT_CONTAINER } from '../../../templarios/input-container/utils/input-container.constants';
import { TpInputContainer } from '../../../templarios/input-container/utils/input-container.type';
import { TpIonSearchbar } from '../utils/searchbar.type';

defineCustomElement();

const meta: Meta<Components.IonSearchbar & TpIonSearchbar & TpInputContainer> = {
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
};

export default meta;

type Story = StoryObj<Components.IonSearchbar & TpIonSearchbar & TpInputContainer>;

export const States: Story = {
  render: ({ ...args }) => html`
  <tp-input-container color="${args.color}" state="${args.state}">
    <ion-label slot="label" tp-type="p14">Descrição Searchbar</ion-label>
    <ion-searchbar
      ?disabled="${args.disabled}"
      mode="md"
      search-icon="./../../../../icons/tp-search.svg"
      clear-icon="./../../../../icons/tp-x.svg"
      placeholder="Lorem ipsum dolor"
    ></ion-searchbar>
    <ion-label slot="feedback-error" tp-type="p14">*Caracteres invalidos.</ion-label>
    <ion-label slot="feedback-success" tp-type="p14">*Caracteres validos</ion-label>
  </tp-input-container>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-searchbar/gi)).toBeTruthy();
  }, */
};

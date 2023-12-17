import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementInput } from '@ionic/core/components/ion-input';
import { defineCustomElement as defineCustomElementItem } from '@ionic/core/components/ion-item';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import { defineCustomElement as defineCustomElementSearchbar } from '@ionic/core/components/ion-searchbar';
import { defineCustomElement as defineCustomElementTextarea } from '@ionic/core/components/ion-textarea';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_ITEM } from '../../utils/item.constant';
import { TpIonItem } from '../../utils/item.type';

defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementInput();
defineCustomElementSearchbar();
defineCustomElementTextarea();

const meta: Meta<Components.IonItem & TpIonItem> = {
  title: 'components/Ionic/Item/Compositions',
  argTypes: {
    lines: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.lines],
      description: 'Define se o componente terá um border bottom.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM.lines.join('|'),
        },
      },
    },
    ['tp-gap']: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM['tp-gap']],
      description:
        'Define qual o espaçamento entre o icone e o texto do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM['tp-gap'].join('|'),
        },
      },
    },
    ['tp-spacingx']: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM['tp-spacingx']],
      description:
        'Define qual o espaçamento das bordas horizontais para o conteudo do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM['tp-spacingx'].join('|'),
        },
      },
    },
    ['tp-spacingy']: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM['tp-spacingy']],
      description:
        'Define qual o espaçamento das bordas verticais para o conteudo do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM['tp-spacingy'].join('|'),
        },
      },
    },
    button: {
      control: 'boolean',
      description: 'Define a estilização do estado button do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
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

type Story = StoryObj<Components.IonItem & TpIonItem>;

export const Searchbar: Story = {
  render: ({ ...args }) => html`
    <ion-list>
      <ion-item
        lines="${args.lines}"
        tp-gap="${args['tp-gap']}"
        tp-spacingX="${args['tp-spacingx']}"
        tp-spacingY="${args['tp-spacingy']}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <tp-input-container>
          <ion-label slot="label" tp-type="p14">Searchbar</ion-label>
          <ion-searchbar
            mode="md"
            search-icon="./../../../../icons/tp-search.svg"
            clear-icon="./../../../../icons/tp-x.svg"
            placeholder="Lorem ipsum dolor"
          ></ion-searchbar>
        </tp-input-container>
      </ion-item>
    </ion-list>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
  }, */
};
Searchbar.argTypes = {
  color: { table: { disable: true } },
};

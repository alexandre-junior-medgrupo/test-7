import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementAccordion } from '@ionic/core/components/ion-accordion';
import { defineCustomElement as defineCustomElementAccordionGroup } from '@ionic/core/components/ion-accordion-group';
import { defineCustomElement as defineCustomElementItem } from '@ionic/core/components/ion-item';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonAccordion } from './utils/accordion.type';
import { TP_ION_ITEM } from '../item/item.constant';
import { TpIonItem } from '../item/item.type';
import { TP_TYPE } from '../../../utils/constants/type.constant';
import { TpIonLabel } from '../label/label.type';

defineCustomElementAccordionGroup();
defineCustomElementAccordion();
defineCustomElementItem();
defineCustomElementLabel();

const meta: Meta<
  Components.IonAccordion & TpIonAccordion & TpIonItem & TpIonLabel
> = {
  title: 'components/Ionic/Accordion',
  argTypes: {
    spacingX: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.spacingX],
      description: `Define o padding horizontal do componente **'ion-item'**.

      **OBS**: Atributo referente ao componente **'ion-item'**.
      `,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM.spacingX.join('|'),
        },
      },
    },
    spacingY: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.spacingY],
      description: `Define o padding vertical do componente **'ion-item'**.

      **OBS**: Atributo referente ao componente **'ion-item'**.
      `,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM.spacingY.join('|'),
        },
      },
    },
    ['tp-type']: {
      control: { type: 'select' },
      options: [...TP_TYPE],
      description: `Define a estilização de fonte do componente **'ion-label'**.

      **OBS**: Atributo referente ao componente **'ion-label'**.
      `,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_TYPE.join('|'),
        },
      },
    },
  },
  args: {
    ['tp-type']: 'p16xb',
    spacingX: 's16',
    spacingY: 's16',
  },
};

export default meta;

type Story = StoryObj<
  Components.IonAccordion & TpIonAccordion & TpIonItem & TpIonLabel
>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-accordion-group>
      <ion-accordion
        mode="md"
        value="first"
        toggle-icon="./icons/tp-chevron-down.svg"
      >
        <ion-item
          slot="header"
          spacingx="${args.spacingX}"
          spacingy="${args.spacingY}"
          .color="${args.color}"
          lines="none"
        >
          <ion-label tp-type="${args['tp-type']}">First Accordion</ion-label>
        </ion-item>
        <div class="ion-padding" slot="content">First Content</div>
      </ion-accordion>
    </ion-accordion-group>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-accordion/gi)).toBeTruthy();
  }, */
};

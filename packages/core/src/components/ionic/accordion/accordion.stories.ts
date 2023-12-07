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
import {
  TP_COLORS,
  TP_COLORS_MEDSOFT,
  TP_COLORS_RECURSOS,
} from '../../../utils/constants/color.constant';
import {
  TpColorAula,
  TpColorMaterial,
  TpColorOrange,
  TpColorProvas,
  TpColorQuestoes,
  TpColorRevalida,
} from '../../../utils/enums/color.enum';

defineCustomElementAccordionGroup();
defineCustomElementAccordion();
defineCustomElementItem();
defineCustomElementLabel();

const meta: Meta<
  Components.IonAccordion & TpIonAccordion & TpIonItem & TpIonLabel & any
> = {
  title: 'components/Ionic/Accordion',
  argTypes: {
    'tp-color': {
      control: { type: 'select' },
      options: [...TP_COLORS, ...TP_COLORS_MEDSOFT, ...TP_COLORS_RECURSOS],
      description: `Define a cor do componente.

**OBS**: As cores **'${TpColorAula.Aula}'**, **'${TpColorMaterial.Material}'**, **'${TpColorQuestoes.Questoes}'**, **'${TpColorRevalida.Revalida}'** e **'${TpColorProvas.Provas}'** estão disponiveis apenas no theme **MedSoft**.

**OBS**: A cor **'${TpColorOrange.Orange}'** está disponivel apenas no theme **Recursos**.`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: [
            ...TP_COLORS,
            ...TP_COLORS_MEDSOFT,
            ...TP_COLORS_RECURSOS,
          ].join('|'),
        },
      },
    },
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
  Components.IonAccordion & TpIonAccordion & TpIonItem & TpIonLabel & any
>;

export const Default: Story = {
  render: ({ ...args }) => {
    let content;

    if (args['tp-color']) {
      content = html`
        <ion-accordion
          mode="md"
          value="first"
          toggle-icon="./icons/tp-chevron-down.svg"
          tp-color=${args['tp-color']}
        >
          <ion-item
            slot="header"
            spacingx="${args.spacingX}"
            spacingy="${args.spacingY}"
            lines="none"
          >
            <ion-label tp-type="${args['tp-type']}">First Accordion</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia
            </ion-text>
            <ion-text>
              veniam repudiandae sed quas optio quos placeat? Eaque saepe id
              modi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet reiciendis nemo, cupiditate labore, dicta corporis quaerat
              earum voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis
            </ion-text>
            <ion-text>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi?
            </ion-text>
          </div>
        </ion-accordion>

        <ion-accordion
          mode="md"
          value="second"
          toggle-icon="./icons/tp-chevron-down.svg"
          tp-color=${args['tp-color']}
        >
          <ion-item
            slot="header"
            spacingx="${args.spacingX}"
            spacingy="${args.spacingY}"
            lines="none"
          >
            <ion-label tp-type="${args['tp-type']}">Second Accordion</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia
            </ion-text>
            <ion-text>
              veniam repudiandae sed quas optio quos placeat? Eaque saepe id
              modi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet reiciendis nemo, cupiditate labore, dicta corporis quaerat
              earum voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis
            </ion-text>
            <ion-text>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi?
            </ion-text>
          </div>
        </ion-accordion>

        <ion-accordion
          mode="md"
          value="third"
          toggle-icon="./icons/tp-chevron-down.svg"
          tp-color=${args['tp-color']}
        >
          <ion-item
            slot="header"
            spacingx="${args.spacingX}"
            spacingy="${args.spacingY}"
            lines="none"
          >
            <ion-label tp-type="${args['tp-type']}">Third Accordion</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia
            </ion-text>
            <ion-text>
              veniam repudiandae sed quas optio quos placeat? Eaque saepe id
              modi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet reiciendis nemo, cupiditate labore, dicta corporis quaerat
              earum voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis
            </ion-text>
            <ion-text>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi?
            </ion-text>
          </div>
        </ion-accordion>
      `;
    } else {
      content = html`
        <ion-accordion
          mode="md"
          value="first"
          toggle-icon="./icons/tp-chevron-down.svg"
        >
          <ion-item
            slot="header"
            spacingx="${args.spacingX}"
            spacingy="${args.spacingY}"
            lines="none"
          >
            <ion-label tp-type="${args['tp-type']}">First Accordion</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia
            </ion-text>
            <ion-text>
              veniam repudiandae sed quas optio quos placeat? Eaque saepe id
              modi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet reiciendis nemo, cupiditate labore, dicta corporis quaerat
              earum voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis
            </ion-text>
            <ion-text>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi?
            </ion-text>
          </div>
        </ion-accordion>

        <ion-accordion
          mode="md"
          value="second"
          toggle-icon="./icons/tp-chevron-down.svg"
        >
          <ion-item
            slot="header"
            spacingx="${args.spacingX}"
            spacingy="${args.spacingY}"
            lines="none"
          >
            <ion-label tp-type="${args['tp-type']}">Second Accordion</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia
            </ion-text>
            <ion-text>
              veniam repudiandae sed quas optio quos placeat? Eaque saepe id
              modi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet reiciendis nemo, cupiditate labore, dicta corporis quaerat
              earum voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis
            </ion-text>
            <ion-text>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi?
            </ion-text>
          </div>
        </ion-accordion>

        <ion-accordion
          mode="md"
          value="third"
          toggle-icon="./icons/tp-chevron-down.svg"
        >
          <ion-item
            slot="header"
            spacingx="${args.spacingX}"
            spacingy="${args.spacingY}"
            lines="none"
          >
            <ion-label tp-type="${args['tp-type']}">Third Accordion</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia
            </ion-text>
            <ion-text>
              veniam repudiandae sed quas optio quos placeat? Eaque saepe id
              modi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet reiciendis nemo, cupiditate labore, dicta corporis quaerat
              earum voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo, cupiditate
              labore, dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis
            </ion-text>
            <ion-text>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi?
            </ion-text>
          </div>
        </ion-accordion>
      `;
    }

    return html` <ion-accordion-group> ${content} </ion-accordion-group> `;
  },

  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-accordion/gi)).toBeTruthy();
  }, */
};
Default.argTypes = {
  color: { table: { disable: true } },
};

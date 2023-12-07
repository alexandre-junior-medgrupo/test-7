import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementCheckbox } from '@ionic/core/components/ion-checkbox';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_TYPE } from '../../../../../utils/constants/type.constant';
import { TpIonText } from '../../../text/text.type';
import { TpIonCheckbox } from '../../utils/checkbox.type';

defineCustomElementCheckbox();
defineCustomElementLabel();

const meta: Meta<Components.IonCheckbox & TpIonCheckbox & TpIonText> = {
  title: 'components/Ionic/Checkbox/Compositions',
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Define a estilização do estado checked do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    indeterminate: {
      control: 'boolean',
      description:
        'Define a estilização do estado indeterminate do componente.',
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
    ['tp-type']: {
      control: { type: 'select' },
      options: [...TP_TYPE],
      description: `Define a estilização do texto do componente **'ion-label'**.

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
};

export default meta;

type Story = StoryObj<Components.IonCheckbox & TpIonCheckbox & TpIonText>;

export const Label: Story = {
  render: ({ ...args }) => html`
    <ion-checkbox
      color="${args.color}"
      ?checked="${args.checked}"
      ?indeterminate="${args.indeterminate}"
      ?disabled="${args.disabled}"
    >
      <ion-label tp-type="${args['tp-type']}">
        Lorem ipsum, dolor sit amet consectetur.
      </ion-label>
    </ion-checkbox>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-checkbox/gi)).toBeTruthy();
  }, */
};

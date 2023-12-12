import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-textarea';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpInputContainer } from '../../templarios/input-container/utils/input-container.type';
import { TP_INPUT_CONTAINER } from '../../templarios/input-container/utils/input-container.constants';
import { TpIonTextarea } from './utils/textarea.type';

defineCustomElement();

const meta: Meta<Components.IonTextarea & TpIonTextarea & TpInputContainer> = {
  title: 'components/Ionic/Textarea',
  argTypes: {
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

type Story = StoryObj<Components.IonTextarea & TpIonTextarea & TpInputContainer>;

export const States: Story = {
  render: ({ ...args }) => html`
    <tp-input-container color="${args.color}" state="${args.state}">
      <ion-label slot="label" tp-type="p14">Descrição Textarea</ion-label>
      <ion-textarea
        ?disabled="${args.disabled}"
        placeholder="Lorem ipsum, dolor sit amet consectetur."
        mode="md"
      ></ion-textarea>
      <ion-label slot="feedback-error" tp-type="p14">*Caracteres invalidos.</ion-label>
      <ion-label slot="feedback-success" tp-type="p14">*Caracteres validos</ion-label>
    </tp-input-container>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-textarea/gi)).toBeTruthy();
  }, */
};

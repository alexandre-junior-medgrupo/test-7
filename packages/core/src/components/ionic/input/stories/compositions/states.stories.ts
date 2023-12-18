import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementInput } from '@ionic/core/components/ion-input';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_INPUT_CONTAINER } from '../../../../templarios/input-container/utils/input-container.constants';
import { TpInputContainer } from '../../../../templarios/input-container/utils/input-container.type';
import { TpIonInput } from '../../utils/input.type';

defineCustomElementInput();

const meta: Meta<Components.IonInput & TpIonInput & TpInputContainer> = {
  title: 'components/Ionic/Input/Compositions',
  argTypes: {
    clearInput: {
      control: 'boolean',
      description:
        'Se **true**, uma tag **button** será renderizada e o input terá a ação de **limpeza** do texto.',
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

type Story = StoryObj<Components.IonInput & TpIonInput & TpInputContainer>;

export const States: Story = {
  render: ({ ...args }) => {
    return html`
    <tp-input-container color="${args.color}" state="${args.state}">
      <ion-label slot="label" tp-type="p14">Descrição Input</ion-label>
      <ion-input
        mode="md"
        placeholder="Digite aqui"
        ?disabled="${args.disabled}"
        ?clear-input="${args.clearInput}"
      ></ion-input>
      <ion-label slot="feedback-error" tp-type="p14">*Caracteres invalidos</ion-label>
      <ion-label slot="feedback-success" tp-type="p14">*Caracteres validos</ion-label>
    </tp-input-container>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-input/gi)).toBeTruthy();
  }, */
};

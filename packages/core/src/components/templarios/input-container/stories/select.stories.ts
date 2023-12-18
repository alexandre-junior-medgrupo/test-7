
import { defineCustomElement as defineCustomElementInput } from '@ionic/core/components/ion-input';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_INPUT_CONTAINER } from '../utils/input-container.constants';

defineCustomElementInput();
defineCustomElementLabel();

const meta: Meta = {
  title: 'components/Templarios/Input Container',
  argTypes: {
    state: {
      control: { type: 'select' },
      options: [...TP_INPUT_CONTAINER.state],
      description: 'Define o estado do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_INPUT_CONTAINER.state.join('|'),
        },
      },
    },
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
    inverted: {
      control: { type: "boolean" },
      description: "Define a direção de abertura do popover (acima ou abaixo do select).",
      table: {
        defaultValue: {
          summary: false
        },
        type: {
          summary: "boolean"
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Select: Story = {
  render: ({ ...args }) => {
    const interfaceOpts = { cssClass: "tp-select" };

    return html`
      <tp-input-container color="${args.color}" state="${args.state}" ?disabled="${args.disabled}" ?inverted="${args.inverted}" style="width: 75%;">
        <ion-label slot="label" tp-type="p14">Descrição Select</ion-label>
        <ion-select interface="popover" .interfaceOptions=${interfaceOpts} id="tp-select-01" aria-label="option-1" placeholder="Lorem ipsum dolor">
          <ion-select-option value="option-1"> Option 1 </ion-select-option>
          <ion-select-option value="option-2"> Option 2 </ion-select-option>
          <ion-select-option value="option-3"> Option 3 </ion-select-option>
          <ion-select-option value="option-4"> Option 4 </ion-select-option>
          <ion-select-option value="option-5"> Option 5 </ion-select-option>
          <ion-select-option value="option-6"> Option 6 </ion-select-option>
        </ion-select>
        <ion-label slot="feedback-error" tp-type="p14">
          *Caracteres invalidos
        </ion-label>
        <ion-label slot="feedback-success" tp-type="p14">
          *Caracteres validos
        </ion-label>
      </tp-input-container>

      <tp-input-container color="${args.color}" state="${args.state}" ?disabled="${args.disabled}" ?inverted="${args.inverted}" style="width: 50%;">
        <ion-select interface="popover" .interfaceOptions=${interfaceOpts} id="tp-select-02" aria-label="option-1" placeholder="Lorem ipsum dolor">
          <ion-select-option value="option-1"> Option 1 </ion-select-option>
          <ion-select-option value="option-2"> Option 2 </ion-select-option>
          <ion-select-option value="option-3"> Option 3 </ion-select-option>
        </ion-select>
        <ion-label slot="feedback-error" tp-type="p14">
          *Caracteres invalidos
        </ion-label>
        <ion-label slot="feedback-success" tp-type="p14">
          *Caracteres validos
        </ion-label>
      </tp-input-container>

      <tp-input-container color="${args.color}" state="${args.state}" ?disabled="${args.disabled}" ?inverted="${args.inverted}" style="width: 25%;">
        <ion-select interface="popover" .interfaceOptions=${interfaceOpts} id="tp-select-03" aria-label="option-1" placeholder="Lorem ipsum dolor">
          <ion-select-option value="option-1"> Option 1 </ion-select-option>
          <ion-select-option value="option-2"> Option 2 </ion-select-option>
          <ion-select-option value="option-3"> Option 3 </ion-select-option>
        </ion-select>
        <ion-label slot="feedback-error" tp-type="p14">
          *Caracteres invalidos
        </ion-label>
        <ion-label slot="feedback-success" tp-type="p14">
          *Caracteres validos
        </ion-label>
      </tp-input-container>
    `
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
Select.argTypes = {
  color: { table: { disable: true } },
};

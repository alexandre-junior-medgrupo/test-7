import { Components } from '@ionic/core';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ICONS_STORYBOOK } from '../../../utils/constants/icon.constant';
import { TP_ION_ICON } from './icon.constant';
import { TpIonIcon } from './icon.type';

const meta: Meta<Components.IonIcon & TpIonIcon> = {
  component: 'ion-icon',
  argTypes: {
    src: {
      control: { type: 'select' },
      options: [...TP_ICONS_STORYBOOK],
    },
    size: {
      control: { type: 'select' },
      options: [...TP_ION_ICON.size],
    },
  },
  args: {
    src: `${TP_ICONS_STORYBOOK[0]}`,
  },
};

export default meta;

type Story = StoryObj<Components.IonIcon & TpIonIcon>;

export const Default: Story = {
  render: ({ ...args }) => {
    console.log(args.src);

    const iconUrl = `./icons/${args.src}`;
    return html`<ion-icon
      .src="${iconUrl}"
      .color="${args.color}"
      tp-size="${args.size}"
    ></ion-icon>`;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-icon/gi)).toBeTruthy();
  }, */
};

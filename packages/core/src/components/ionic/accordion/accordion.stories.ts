import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementAccordion } from '@ionic/core/components/ion-accordion';
import { defineCustomElement as defineCustomElementAccordionGroup } from '@ionic/core/components/ion-accordion-group';
import { defineCustomElement as defineCustomElementItem } from '@ionic/core/components/ion-item';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonAccordion } from './accordion.type';

defineCustomElementAccordionGroup();
defineCustomElementAccordion();
defineCustomElementItem();
defineCustomElementLabel();

const meta: Meta<Components.IonAccordion & TpIonAccordion> = {
  title: 'components/Ionic/Accordion',
};

export default meta;

type Story = StoryObj<Components.IonAccordion & TpIonAccordion>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-accordion-group>
      <ion-accordion value="first">
        <ion-item slot="header" .color="${args.color}">
          <ion-label>First Accordion</ion-label>
        </ion-item>
        <div class="ion-padding" slot="content">First Content</div>
      </ion-accordion>
      <ion-accordion value="second">
        <ion-item slot="header" .color="${args.color}">
          <ion-label>Second Accordion</ion-label>
        </ion-item>
        <div class="ion-padding" slot="content">Second Content</div>
      </ion-accordion>
      <ion-accordion value="third">
        <ion-item slot="header" .color="${args.color}">
          <ion-label>Third Accordion</ion-label>
        </ion-item>
        <div class="ion-padding" slot="content">Third Content</div>
      </ion-accordion>
    </ion-accordion-group>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
  }, */
};

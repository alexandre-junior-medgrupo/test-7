import { Components } from '@ionic/core';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonItem } from '../../item/utils/item.type';
import { TpIonLabel } from '../../label/utils/label.type';
import { TpIonAccordion } from '../utils/accordion.type';
declare const meta: Meta<Components.IonAccordion & TpIonAccordion & TpIonItem & TpIonLabel & any>;
export default meta;
type Story = StoryObj<Components.IonAccordion & TpIonAccordion & TpIonItem & TpIonLabel & any>;
export declare const Default: Story;

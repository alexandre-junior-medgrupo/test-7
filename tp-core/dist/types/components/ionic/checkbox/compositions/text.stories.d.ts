import { Components } from '@ionic/core';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonText } from '../../text/text.type';
import { TpIonCheckbox } from '../checkbox.type';
declare const meta: Meta<Components.IonCheckbox & TpIonCheckbox & TpIonText>;
export default meta;
type Story = StoryObj<Components.IonCheckbox & TpIonCheckbox & TpIonText>;
export declare const Text: Story;

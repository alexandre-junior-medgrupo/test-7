import { Components } from '@ionic/core';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonText } from '../../text/text.type';
import { TpIonInput } from '../input.type';
declare const meta: Meta<Components.IonInput & TpIonInput & TpIonText>;
export default meta;
type Story = StoryObj<Components.IonInput & TpIonInput & TpIonText>;
export declare const Label: Story;

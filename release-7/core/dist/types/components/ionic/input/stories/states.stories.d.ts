import { Components } from '@ionic/core';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpInputContainer } from '../../../templarios/input-container/utils/input-container.type';
import { TpIonInput } from '../utils/input.type';
declare const meta: Meta<Components.IonInput & TpIonInput & TpInputContainer>;
export default meta;
type Story = StoryObj<Components.IonInput & TpIonInput & TpInputContainer>;
export declare const States: Story;

import { Components } from '@ionic/core';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpInputContainer } from '../../../templarios/input-container/utils/input-container.type';
import { TpIonTextarea } from '../utils/textarea.type';
declare const meta: Meta<Components.IonTextarea & TpIonTextarea & TpInputContainer>;
export default meta;
type Story = StoryObj<Components.IonTextarea & TpIonTextarea & TpInputContainer>;
export declare const States: Story;

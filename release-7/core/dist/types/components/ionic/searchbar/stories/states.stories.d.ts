import { Components } from '@ionic/core';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpInputContainer } from '../../../templarios/input-container/utils/input-container.type';
import { TpIonSearchbar } from '../utils/searchbar.type';
declare const meta: Meta<Components.IonSearchbar & TpIonSearchbar & TpInputContainer>;
export default meta;
type Story = StoryObj<Components.IonSearchbar & TpIonSearchbar & TpInputContainer>;
export declare const States: Story;

import type { TpColor } from '@utils/types/color.type';
import type {
  TpIonButtonFill,
  TpIonButtonIconOnly,
  TpIonButtonSize,
} from './button.enum';

export type TpIonButton = {
  color: `${TpColor}`;
  size: `${TpIonButtonSize}`;
  fill: `${TpIonButtonFill}`;
  iconOnly: `${TpIonButtonIconOnly}`;
};

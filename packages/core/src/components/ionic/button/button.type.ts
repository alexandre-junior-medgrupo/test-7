import type { TpColor } from '@utils/types/color.type';
import type {
  TpIonButtonClearSize,
  // TpIonButtonFill,
  // TpIonButtonIconOnly,
  TpIonButtonIconSize,
  TpIonButtonSolidSize,
} from './button.enum';

export type TpIonButton = {
  color: `${TpColor}`;
  sizeSolid: `${TpIonButtonSolidSize}`;
  sizeClear: `${TpIonButtonClearSize}`;
  sizeIcon: `${TpIonButtonIconSize}`;
  // fill: `${TpIonButtonFill}`;
  // iconOnly: `${TpIonButtonIconOnly}`;
};

import type { TpColor } from '../../../../utils/types/color.type';
import type { TpIonItemLines, TpIonItemSpacing } from './item.enum';

export type TpIonItem = {
  color: `${TpColor}`;
  lines: `${TpIonItemLines}`;
  tpSpacingX: `${TpIonItemSpacing}`;
  tpSpacingY: `${TpIonItemSpacing}`;
  tpGap: `${TpIonItemSpacing}`;
};

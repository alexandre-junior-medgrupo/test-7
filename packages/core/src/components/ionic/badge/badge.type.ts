import type { TpColor } from '@utils/types/color.type';

import type { TpIonBadgeFill, TpIonBadgeSize } from './badge.enum';

export type TpIonBadge = {
  color: `${TpColor}`;
  size: `${TpIonBadgeSize}`;
  fill: `${TpIonBadgeFill}`;
};

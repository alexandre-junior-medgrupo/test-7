import type { TpColor } from '../../../../utils/types/color.type';
import { TpIonChipSize } from './chip.enum';
export type TpIonChip = {
    color: `${TpColor}`;
    size: `${TpIonChipSize}`;
    active: boolean;
    slot: string;
};

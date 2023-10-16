import { TpIconA } from '../enums/icon.enum';

export const TP_ICONS_A = Object.values(TpIconA);

export const TP_ICONS = [...TP_ICONS_A];

export const TP_ICONS_STORYBOOK = TP_ICONS.map((icon) => `${icon}.svg`);

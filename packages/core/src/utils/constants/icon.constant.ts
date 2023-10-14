import { TpIcon } from '../enums/icon.enum';

export const TP_ICONS = Object.values(TpIcon);

export const TP_ICONS_STORYBOOK = TP_ICONS.map((icon) => `${icon}.svg`);

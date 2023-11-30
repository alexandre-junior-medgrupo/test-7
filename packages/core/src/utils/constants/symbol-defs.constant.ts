import {
  TpSymbolDefsLogos,
  TpSymbolDefsIcons,
} from '../enums/symbol-defs.enum';

export const TP_SYMBOL_DEFS_LOGOS = Object.values(TpSymbolDefsLogos);
export const TP_SYMBOL_DEFS_ICONS = Object.values(TpSymbolDefsIcons);

export const TP_SYMBOL_DEFS = [
  ...TP_SYMBOL_DEFS_LOGOS,
  ...TP_SYMBOL_DEFS_ICONS,
];

export const TP_ICONS_STORYBOOK = TP_SYMBOL_DEFS.map((defs) => `${defs}.svg`);

import type { TpColor } from '../../../utils/types/color.type';
export declare class TpComparisonChartBar {
    /**
     * Define a variação de cor do componente.
     */
    color?: TpColor;
    /**
     * Define a altura máxima da coluna.
     */
    containerHeight: number;
    /**
     * Define o preenchimento da coluna em porcentagem.
     */
    barValue: number;
    /**
     * Define se o componente terá um marcador.
     */
    hasMarker: boolean;
    /**
     * Define a posição, em porcentagem, do marcador na coluna.
     */
    markerValue: number;
    /**
     * Define a estilização do estado disabled do componente.
     */
    disabled: boolean;
    /**
     * Define se o componente não terá rótulo.
     */
    noLabel: boolean;
    /**
     * Define o estado de carregamento do componente.
     */
    loading?: boolean;
    render(): any;
}

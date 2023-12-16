import type { TpColor } from '../../../utils/types/color.type';
export declare class TpButtonCluster {
    private arrowIcon;
    /**
     * Define a variação de cor do componente.
     */
    color?: TpColor;
    /**
     * Define a variação de estado do componente.
     */
    collapsed: boolean;
    /**
     * Define o estado de carregamento do componente.
     */
    loading?: boolean;
    toggle(event?: Event): Promise<void>;
    render(): any;
}

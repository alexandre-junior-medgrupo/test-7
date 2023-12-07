import { EventEmitter } from '../../../stencil-public-runtime';
import { TpRateLikeType } from './rate-like.type';
export declare class TpRateLike {
    private thumbsUpIcon;
    private thumbsDownIcon;
    /**
     * Define o status do componente.
     */
    status?: TpRateLikeType['status'];
    /**
     * Define o estado de carregamento do componente.
     */
    loading?: boolean;
    /**
     * Emitido quando a propriedade status é alterada.
     */
    tpChange: EventEmitter<TpRateLikeType['status']>;
    private onClick;
    render(): any;
}

import {
  ChangeDetectorRef,
  ElementRef,
  EventEmitter,
  NgZone,
} from '@angular/core';
import { Components } from 'tp-core';
import type { TpRateLikeType as ITpRateLikeTpRateLikeType } from 'tp-core';
import * as i0 from '@angular/core';
export declare class TpChartBar {
  protected z: NgZone;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
  static ɵfac: i0.ɵɵFactoryDeclaration<TpChartBar, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<
    TpChartBar,
    'tp-chart-bar',
    never,
    {
      color: { alias: 'color'; required: false };
      height: { alias: 'height'; required: false };
      noLabel: { alias: 'noLabel'; required: false };
      value: { alias: 'value'; required: false };
      width: { alias: 'width'; required: false };
    },
    {},
    never,
    ['*'],
    false,
    never
  >;
}
export declare interface TpChartBar extends Components.TpChartBar {}
export declare class TpComparisonChartBar {
  protected z: NgZone;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
  static ɵfac: i0.ɵɵFactoryDeclaration<TpComparisonChartBar, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<
    TpComparisonChartBar,
    'tp-comparison-chart-bar',
    never,
    {
      barValue: { alias: 'barValue'; required: false };
      color: { alias: 'color'; required: false };
      containerHeight: { alias: 'containerHeight'; required: false };
      disabled: { alias: 'disabled'; required: false };
      hasMarker: { alias: 'hasMarker'; required: false };
      markerValue: { alias: 'markerValue'; required: false };
      noLabel: { alias: 'noLabel'; required: false };
    },
    {},
    never,
    ['*'],
    false,
    never
  >;
}
export declare interface TpComparisonChartBar
  extends Components.TpComparisonChartBar {}
export declare class TpRateLike {
  protected z: NgZone;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
  static ɵfac: i0.ɵɵFactoryDeclaration<TpRateLike, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<
    TpRateLike,
    'tp-rate-like',
    never,
    { status: { alias: 'status'; required: false } },
    {},
    never,
    ['*'],
    false,
    never
  >;
}
export declare interface TpRateLike extends Components.TpRateLike {
  /**
   * Emitido quando a propriedade status é alterada.
   */
  tpChange: EventEmitter<CustomEvent<ITpRateLikeTpRateLikeType['status']>>;
}
export declare class TpTest {
  protected z: NgZone;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
  static ɵfac: i0.ɵɵFactoryDeclaration<TpTest, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<
    TpTest,
    'tp-test',
    never,
    {
      color: { alias: 'color'; required: false };
      icon: { alias: 'icon'; required: false };
    },
    {},
    never,
    ['*'],
    false,
    never
  >;
}
export declare interface TpTest extends Components.TpTest {}

import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { Components } from 'tp-core';
import * as i0 from '@angular/core';
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

/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'tp-core';


@ProxyCmp({
  inputs: ['color', 'height', 'noLabel', 'value', 'width']
})
@Component({
  selector: 'tp-chart-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'height', 'noLabel', 'value', 'width'],
})
export class TpChartBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpChartBar extends Components.TpChartBar {}


@ProxyCmp({
  inputs: ['status']
})
@Component({
  selector: 'tp-rate-like',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['status'],
})
export class TpRateLike {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tpChange']);
  }
}


import type { TpRateLikeType as ITpRateLikeTpRateLikeType } from 'tp-core';

export declare interface TpRateLike extends Components.TpRateLike {
  /**
   * Emitido quando a propriedade status é alterada.
   */
  tpChange: EventEmitter<CustomEvent<ITpRateLikeTpRateLikeType['status']>>;
}


@ProxyCmp({
  inputs: ['color', 'icon']
})
@Component({
  selector: 'tp-test',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'icon'],
})
export class TpTest {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpTest extends Components.TpTest {}



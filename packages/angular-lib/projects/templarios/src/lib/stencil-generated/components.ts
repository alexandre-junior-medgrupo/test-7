/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'tp-core';


@ProxyCmp({
  inputs: ['color', 'icon', 'loading', 'message', 'state']
})
@Component({
  selector: 'tp-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'icon', 'loading', 'message', 'state'],
})
export class TpAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpAlert extends Components.TpAlert {}


@ProxyCmp({
  inputs: ['color', 'height', 'loading', 'noLabel', 'value', 'width']
})
@Component({
  selector: 'tp-chart-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'height', 'loading', 'noLabel', 'value', 'width'],
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
  inputs: ['barValue', 'color', 'containerHeight', 'disabled', 'hasMarker', 'loading', 'markerValue', 'noLabel']
})
@Component({
  selector: 'tp-comparison-chart-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['barValue', 'color', 'containerHeight', 'disabled', 'hasMarker', 'loading', 'markerValue', 'noLabel'],
})
export class TpComparisonChartBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpComparisonChartBar extends Components.TpComparisonChartBar {}


@ProxyCmp({
  inputs: ['color', 'loading', 'maxCount', 'noLabel', 'size', 'value']
})
@Component({
  selector: 'tp-horizontal-chart-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'loading', 'maxCount', 'noLabel', 'size', 'value'],
})
export class TpHorizontalChartBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpHorizontalChartBar extends Components.TpHorizontalChartBar {}


@ProxyCmp({
  inputs: ['state']
})
@Component({
  selector: 'tp-input-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['state'],
})
export class TpInputContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpInputContainer extends Components.TpInputContainer {}


@ProxyCmp({
  inputs: ['loading', 'status']
})
@Component({
  selector: 'tp-rate-like',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['loading', 'status'],
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



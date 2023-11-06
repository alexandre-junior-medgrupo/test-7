/* tslint:disable */
/* auto-generated angular directive proxies */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
} from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from 'tp-core';

@ProxyCmp({
  inputs: ['color', 'icon'],
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
  constructor(
    c: ChangeDetectorRef,
    r: ElementRef,
    protected z: NgZone,
  ) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface TpTest extends Components.TpTest {}

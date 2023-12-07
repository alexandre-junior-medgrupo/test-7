import { __decorate } from 'tslib';
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
import * as i0 from '@angular/core';
export let TpChartBar = class TpChartBar {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: TpChartBar,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: '14.0.0',
      version: '16.2.12',
      type: TpChartBar,
      selector: 'tp-chart-bar',
      inputs: {
        color: 'color',
        height: 'height',
        loading: 'loading',
        noLabel: 'noLabel',
        value: 'value',
        width: 'width',
      },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpChartBar = __decorate(
  [
    ProxyCmp({
      inputs: ['color', 'height', 'loading', 'noLabel', 'value', 'width'],
    }),
  ],
  TpChartBar,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpChartBar,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-chart-bar',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ['color', 'height', 'loading', 'noLabel', 'value', 'width'],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
export let TpComparisonChartBar = class TpComparisonChartBar {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: TpComparisonChartBar,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: '14.0.0',
      version: '16.2.12',
      type: TpComparisonChartBar,
      selector: 'tp-comparison-chart-bar',
      inputs: {
        barValue: 'barValue',
        color: 'color',
        containerHeight: 'containerHeight',
        disabled: 'disabled',
        hasMarker: 'hasMarker',
        loading: 'loading',
        markerValue: 'markerValue',
        noLabel: 'noLabel',
      },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpComparisonChartBar = __decorate(
  [
    ProxyCmp({
      inputs: [
        'barValue',
        'color',
        'containerHeight',
        'disabled',
        'hasMarker',
        'loading',
        'markerValue',
        'noLabel',
      ],
    }),
  ],
  TpComparisonChartBar,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpComparisonChartBar,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-comparison-chart-bar',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            'barValue',
            'color',
            'containerHeight',
            'disabled',
            'hasMarker',
            'loading',
            'markerValue',
            'noLabel',
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
export let TpInputContainer = class TpInputContainer {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: TpInputContainer,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: '14.0.0',
      version: '16.2.12',
      type: TpInputContainer,
      selector: 'tp-input-container',
      inputs: { state: 'state' },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpInputContainer = __decorate(
  [
    ProxyCmp({
      inputs: ['state'],
    }),
  ],
  TpInputContainer,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpInputContainer,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-input-container',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ['state'],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
export let TpRateLike = class TpRateLike {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tpChange']);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: TpRateLike,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: '14.0.0',
      version: '16.2.12',
      type: TpRateLike,
      selector: 'tp-rate-like',
      inputs: { loading: 'loading', status: 'status' },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpRateLike = __decorate(
  [
    ProxyCmp({
      inputs: ['loading', 'status'],
    }),
  ],
  TpRateLike,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpRateLike,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-rate-like',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ['loading', 'status'],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXJpb3Mvc3JjL2xpYi9zdGVuY2lsLWdlbmVyYXRlZC9jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7QUFDcEIsOENBQThDO0FBQzlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUV4SCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQWVoRSxXQUFNLFVBQVUsR0FBaEIsTUFBTSxVQUFVO0lBRXJCLFlBQVksQ0FBb0IsRUFBRSxDQUFhLEVBQVksQ0FBUztRQUFULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDbEUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7K0dBTFUsVUFBVTttR0FBVixVQUFVLDBLQUpYLDJCQUEyQjs7QUFJMUIsVUFBVTtJQVZ0QixRQUFRLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztLQUNwRSxDQUFDO0dBUVcsVUFBVSxDQU10Qjs0RkFOWSxVQUFVO2tCQVB0QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsdUVBQXVFO29CQUN2RSxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztpQkFDcEU7O0FBdUJNLFdBQU0sb0JBQW9CLEdBQTFCLE1BQU0sb0JBQW9CO0lBRS9CLFlBQVksQ0FBb0IsRUFBRSxDQUFhLEVBQVksQ0FBUztRQUFULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDbEUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7K0dBTFUsb0JBQW9CO21HQUFwQixvQkFBb0IsdVFBSnJCLDJCQUEyQjs7QUFJMUIsb0JBQW9CO0lBVmhDLFFBQVEsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQztLQUMvRyxDQUFDO0dBUVcsb0JBQW9CLENBTWhDOzRGQU5ZLG9CQUFvQjtrQkFQaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsdUVBQXVFO29CQUN2RSxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUM7aUJBQy9HOztBQXVCTSxXQUFNLGdCQUFnQixHQUF0QixNQUFNLGdCQUFnQjtJQUUzQixZQUFZLENBQW9CLEVBQUUsQ0FBYSxFQUFZLENBQVM7UUFBVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ2xFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOytHQUxVLGdCQUFnQjttR0FBaEIsZ0JBQWdCLHNGQUpqQiwyQkFBMkI7O0FBSTFCLGdCQUFnQjtJQVY1QixRQUFRLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7S0FDbEIsQ0FBQztHQVFXLGdCQUFnQixDQU01Qjs0RkFOWSxnQkFBZ0I7a0JBUDVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHVFQUF1RTtvQkFDdkUsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO2lCQUNsQjs7QUF1Qk0sV0FBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtJQUVyQixZQUFZLENBQW9CLEVBQUUsQ0FBYSxFQUFZLENBQVM7UUFBVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ2xFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUMxQixZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7K0dBTlUsVUFBVTttR0FBVixVQUFVLHNHQUpYLDJCQUEyQjs7QUFJMUIsVUFBVTtJQVZ0QixRQUFRLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO0tBQzlCLENBQUM7R0FRVyxVQUFVLENBT3RCOzRGQVBZLFVBQVU7a0JBUHRCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyx1RUFBdUU7b0JBQ3ZFLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7aUJBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGF1dG8tZ2VuZXJhdGVkIGFuZ3VsYXIgZGlyZWN0aXZlIHByb3hpZXMgKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcm94eUNtcCwgcHJveHlPdXRwdXRzIH0gZnJvbSAnLi9hbmd1bGFyLWNvbXBvbmVudC1saWIvdXRpbHMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAndHAtY29yZSc7XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2hlaWdodCcsICdsb2FkaW5nJywgJ25vTGFiZWwnLCAndmFsdWUnLCAnd2lkdGgnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RwLWNoYXJ0LWJhcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnY29sb3InLCAnaGVpZ2h0JywgJ2xvYWRpbmcnLCAnbm9MYWJlbCcsICd2YWx1ZScsICd3aWR0aCddLFxufSlcbmV4cG9ydCBjbGFzcyBUcENoYXJ0QmFyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgVHBDaGFydEJhciBleHRlbmRzIENvbXBvbmVudHMuVHBDaGFydEJhciB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydiYXJWYWx1ZScsICdjb2xvcicsICdjb250YWluZXJIZWlnaHQnLCAnZGlzYWJsZWQnLCAnaGFzTWFya2VyJywgJ2xvYWRpbmcnLCAnbWFya2VyVmFsdWUnLCAnbm9MYWJlbCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHAtY29tcGFyaXNvbi1jaGFydC1iYXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2JhclZhbHVlJywgJ2NvbG9yJywgJ2NvbnRhaW5lckhlaWdodCcsICdkaXNhYmxlZCcsICdoYXNNYXJrZXInLCAnbG9hZGluZycsICdtYXJrZXJWYWx1ZScsICdub0xhYmVsJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRwQ29tcGFyaXNvbkNoYXJ0QmFyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgVHBDb21wYXJpc29uQ2hhcnRCYXIgZXh0ZW5kcyBDb21wb25lbnRzLlRwQ29tcGFyaXNvbkNoYXJ0QmFyIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ3N0YXRlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cC1pbnB1dC1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ3N0YXRlJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRwSW5wdXRDb250YWluZXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBUcElucHV0Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50cy5UcElucHV0Q29udGFpbmVyIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2xvYWRpbmcnLCAnc3RhdHVzJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cC1yYXRlLWxpa2UnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2xvYWRpbmcnLCAnc3RhdHVzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRwUmF0ZUxpa2Uge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWyd0cENoYW5nZSddKTtcbiAgfVxufVxuXG5cbmltcG9ydCB0eXBlIHsgVHBSYXRlTGlrZVR5cGUgYXMgSVRwUmF0ZUxpa2VUcFJhdGVMaWtlVHlwZSB9IGZyb20gJ3RwLWNvcmUnO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgVHBSYXRlTGlrZSBleHRlbmRzIENvbXBvbmVudHMuVHBSYXRlTGlrZSB7XG4gIC8qKlxuICAgKiBFbWl0aWRvIHF1YW5kbyBhIHByb3ByaWVkYWRlIHN0YXR1cyDDqSBhbHRlcmFkYS5cbiAgICovXG4gIHRwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SVRwUmF0ZUxpa2VUcFJhdGVMaWtlVHlwZVsnc3RhdHVzJ10+Pjtcbn1cblxuXG4iXX0=

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '../../../core/loader';
import { DIRECTIVES } from './stencil-generated';
import * as i0 from '@angular/core';
import * as i1 from './stencil-generated/components';
export class TemplariosModule {
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: TemplariosModule,
      deps: [],
      target: i0.ɵɵFactoryTarget.NgModule,
    });
  }
  static {
    this.ɵmod = i0.ɵɵngDeclareNgModule({
      minVersion: '14.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: TemplariosModule,
      declarations: [
        i1.DialogExample,
        i1.ModalExample,
        i1.SheetExample,
        i1.TpAlert,
        i1.TpButtonCluster,
        i1.TpChartBar,
        i1.TpChartRadial,
        i1.TpComparisonChartBar,
        i1.TpExample,
        i1.TpHorizontalChartBar,
        i1.TpInputContainer,
        i1.TpLoader,
        i1.TpRateLike,
        i1.TpSegmentContainer,
      ],
      exports: [
        i1.DialogExample,
        i1.ModalExample,
        i1.SheetExample,
        i1.TpAlert,
        i1.TpButtonCluster,
        i1.TpChartBar,
        i1.TpChartRadial,
        i1.TpComparisonChartBar,
        i1.TpExample,
        i1.TpHorizontalChartBar,
        i1.TpInputContainer,
        i1.TpLoader,
        i1.TpRateLike,
        i1.TpSegmentContainer,
      ],
    });
  }
  static {
    this.ɵinj = i0.ɵɵngDeclareInjector({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: TemplariosModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: () => defineCustomElements,
          multi: true,
        },
      ],
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TemplariosModule,
  decorators: [
    {
      type: NgModule,
      args: [
        {
          declarations: [...DIRECTIVES],
          imports: [],
          exports: [...DIRECTIVES],
          providers: [
            {
              provide: APP_INITIALIZER,
              useFactory: () => defineCustomElements,
              multi: true,
            },
          ],
        },
      ],
    },
  ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhcmlvcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGFyaW9zL3NyYy9saWIvdGVtcGxhcmlvcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFjakQsTUFBTSxPQUFPLGdCQUFnQjsrR0FBaEIsZ0JBQWdCO2dIQUFoQixnQkFBZ0I7Z0hBQWhCLGdCQUFnQixhQVJoQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsb0JBQW9CO2dCQUN0QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7OzRGQUVVLGdCQUFnQjtrQkFaNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7b0JBQ3hCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLG9CQUFvQjs0QkFDdEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50cyB9IGZyb20gJ3RwLWNvcmUvbG9hZGVyJztcbmltcG9ydCB7IERJUkVDVElWRVMgfSBmcm9tICcuL3N0ZW5jaWwtZ2VuZXJhdGVkJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbLi4uRElSRUNUSVZFU10sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbLi4uRElSRUNUSVZFU10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6ICgpID0+IGRlZmluZUN1c3RvbUVsZW1lbnRzLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGVtcGxhcmlvc01vZHVsZSB7fVxuIl19

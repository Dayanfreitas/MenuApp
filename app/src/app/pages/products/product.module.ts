import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './product.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzGridModule,
    NzBreadCrumbModule
  ],
  exports: [],
  providers: []
})
export class ProductsModule { }

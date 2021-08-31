import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


@NgModule({
  declarations: [
    HomeComponent
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
export class HomeModule { }

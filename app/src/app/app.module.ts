import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module'; // CLI imports AppRoutingModule'@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './pages/products/product.module';
import { HomeModule } from './pages/home/home.module';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzGridModule,
    NzBreadCrumbModule,
    ProductsModule,
    HomeModule
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR, }],
  bootstrap: [AppComponent]
})
export class AppModule { }

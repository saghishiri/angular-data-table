import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableComponent} from './view/data-table/data-table.component';
import {MatTableModule} from "@angular/material/table";
import {MainService} from "./core/services/main.service";
import {HttpClientModule} from "@angular/common/http";
import {MatRippleModule} from "@angular/material/core";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatRippleModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

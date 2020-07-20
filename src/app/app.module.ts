import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableComponent} from './data-table/data-table.component';
import {MatTableModule} from "@angular/material/table";
import {MainService} from "./services/main.service";

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

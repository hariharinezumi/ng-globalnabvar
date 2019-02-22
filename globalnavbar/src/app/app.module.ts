import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalNavBarComponent } from './parts/global-nav-bar/global-nav-bar.component';
import { MatToolbarModule, MatListModule, MatIconModule } from '@angular/material';
import { MockListComponent } from './mocks/mock-list/mock-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavBarComponent,
    MockListComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

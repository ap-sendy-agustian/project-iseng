import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './app/3-column-preview/card.component';
import { ResultSummaryComponent } from './app/result-summary/result-summary/result-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ResultSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

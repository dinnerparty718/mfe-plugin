import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrichComponent } from './enrich.component';
import { AnalyzeComponent } from './analyze.component';

@NgModule({
  declarations: [
    AppComponent,
    EnrichComponent,
    AnalyzeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

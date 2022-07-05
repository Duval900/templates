import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PrefessionalCvComponent } from './templates/prefessional-cv/prefessional-cv.component';
import { SoftCvComponent } from './templates/soft-cv/soft-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    PrefessionalCvComponent,
    SoftCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

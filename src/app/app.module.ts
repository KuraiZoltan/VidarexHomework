import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageContainerComponent } from './image-container/image-container.component'

import { AppComponent } from './app.component';

import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [
    AppComponent,
    ImageContainerComponent
  ],
  imports: [
    BrowserModule,
    NgxImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

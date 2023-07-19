import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageContainerComponent } from './image-container/image-container.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplatedrivenformcomponentComponent } from './templatedrivenformcomponent/templatedrivenformcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
   
    TemplatedrivenformcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

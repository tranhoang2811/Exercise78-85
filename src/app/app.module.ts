import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise78Component } from './exercise78/exercise78.component';
import { Exercise79Component } from './exercise79/exercise79.component';
import { Exercise80Component } from './exercise80/exercise80.component';
import { Exercise81Component } from './exercise81/exercise81.component';
import { Exercise82Component } from './exercise82/exercise82.component';
import { Exercise83Component } from './exercise83/exercise83.component';
import { Exercise84Component } from './exercise84/exercise84.component';
import { Exercise85Component } from './exercise85/exercise85.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise78Component,
    Exercise79Component,
    Exercise80Component,
    Exercise81Component,
    Exercise82Component,
    Exercise83Component,
    Exercise84Component,
    Exercise85Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

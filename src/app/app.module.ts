import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesService } from './pages.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatButtonModule, MatButtonToggleModule, MatGridListModule, MatToolbarModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [PagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

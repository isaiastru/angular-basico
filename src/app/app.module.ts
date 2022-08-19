import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './Heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent    
      
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

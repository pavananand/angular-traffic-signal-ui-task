import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TraficSignalComponent } from './trafic-signal/trafic-signal.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TraficSignalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

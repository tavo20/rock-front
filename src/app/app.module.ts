import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NebularModule } from './nebular/nebular.module';

import { HttpClientModule  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertsService } from './core/services/alerts/alerts.service';
import { LayoutComponent } from './layout/layout.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CurrencyPipe} from '@angular/common';
// import { SharedService } from './shared/services/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NebularModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SmartTableModule

  ],
  providers: [
    AlertsService,
    // SharedService,
    CurrencyPipe
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

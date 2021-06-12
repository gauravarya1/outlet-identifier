import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OutletFormComponent} from './components/outlet-identifier/outlet-form.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    OutletFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

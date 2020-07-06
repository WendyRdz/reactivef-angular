import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormComponentComponent } from './form-component/form-component.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductFormComponent, FormComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

// NgModule é uma função que serve para aplicar metadados em uma classe, em um atributo, metodo ou em um argumento 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// Modulo angular vai ser responsavel por agrupar uma serie de componentes da sua aplicação
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentcomponentComponent } from './studentcomponent/studentcomponent.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { ButtongroupcomponentComponent } from './buttongroupcomponent/buttongroupcomponent.component';
import { ListaProfesoraiStudenataComponent } from './lista-profesorai-studenata/lista-profesorai-studenata.component';
import { FormaComponent } from './forma/forma.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiComponent } from './di/di.component';
import { Studije } from './model/studije';
import { MetService } from './services/metService';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentcomponentComponent,
    NavbarcomponentComponent,
    ButtongroupcomponentComponent,
    ListaProfesoraiStudenataComponent,
    FormaComponent,
    DiComponent,
    SimpleHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Studije, MetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

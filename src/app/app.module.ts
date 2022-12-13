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
import { RouterModule, Routes } from '@angular/router';
import { IspitiComponent } from './ispiti/ispiti.component';

const routes: Routes = [
  // osnovne rute
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'student', component: StudentcomponentComponent },
  { path: 'buttongroup', component: ButtongroupcomponentComponent },
  { path: 'forma', component: FormaComponent },
  { path: 'di', component: DiComponent },
  { path: 'http', component: SimpleHttpComponent },
  { path: 'ispiti', component: IspitiComponent },]
  

@NgModule({
  declarations: [
    AppComponent,
    StudentcomponentComponent,
    NavbarcomponentComponent,
    ButtongroupcomponentComponent,
    ListaProfesoraiStudenataComponent,
    FormaComponent,
    DiComponent,
    SimpleHttpComponent,
    IspitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Studije, MetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

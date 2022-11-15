import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentcomponentComponent } from './studentcomponent/studentcomponent.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { ButtongroupcomponentComponent } from './buttongroupcomponent/buttongroupcomponent.component';
import { ListaProfesoraiStudenataComponent } from './lista-profesorai-studenata/lista-profesorai-studenata.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentcomponentComponent,
    NavbarcomponentComponent,
    ButtongroupcomponentComponent,
    ListaProfesoraiStudenataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaDirectorComponent } from './components/directores/alta-director/alta-director.component';
import { ListaDirectorComponent } from './components/directores/lista-director/lista-director.component';
import { ModificarDirectorComponent } from './components/directores/modificar-director/modificar-director.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AltaProgramaComponent } from './components/programas/alta-programa/alta-programa.component';
import { ListaProgramaComponent } from './components/programas/lista-programa/lista-programa.component';
import { ModificarProgramaComponent } from './components/programas/modificar-programa/modificar-programa.component';
import { AltaLocutorComponent } from './components/locutores/alta-locutor/alta-locutor.component';
import { ListaLocutorComponent } from './components/locutores/lista-locutor/lista-locutor.component';
import { ModificarLocutorComponent } from './components/locutores/modificar-locutor/modificar-locutor.component';
import { AltaPeriodoComponent } from './components/periodos/alta-periodo/alta-periodo.component';
import { ListaPeriodoComponent } from './components/periodos/lista-periodo/lista-periodo.component';
import { ModificarPeriodoComponent } from './components/periodos/modificar-periodo/modificar-periodo.component';
import { AltaPropagandaComponent } from './components/propagandas/alta-propaganda/alta-propaganda.component';
import { ListaPropagandaComponent } from './components/propagandas/lista-propaganda/lista-propaganda.component';
import { ModificarPropagandaComponent } from './components/propagandas/modificar-propaganda/modificar-propaganda.component';
import { AltaTemaComponent } from './components/temas/alta-tema/alta-tema.component';
import { ListaTemaComponent } from './components/temas/lista-tema/lista-tema.component';
import { ModificarTemaComponent } from './components/temas/modificar-tema/modificar-tema.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaDirectorComponent,
    ListaDirectorComponent,
    ModificarDirectorComponent,
    MenuComponent,
    AltaProgramaComponent,
    ListaProgramaComponent,
    ModificarProgramaComponent,
    AltaLocutorComponent,
    ListaLocutorComponent,
    ModificarLocutorComponent,
    AltaPeriodoComponent,
    ListaPeriodoComponent,
    ModificarPeriodoComponent,
    AltaPropagandaComponent,
    ListaPropagandaComponent,
    ModificarPropagandaComponent,
    AltaTemaComponent,
    ListaTemaComponent,
    ModificarTemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

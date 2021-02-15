import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AltaProgramaComponent } from './components/programas/alta-programa/alta-programa.component';
import { ListaProgramaComponent } from './components/programas/lista-programa/lista-programa.component';
import { ModificarProgramaComponent } from './components/programas/modificar-programa/modificar-programa.component';

import { AltaLocutorComponent } from './components/locutores/alta-locutor/alta-locutor.component';
import { ListaLocutorComponent } from './components/locutores/lista-locutor/lista-locutor.component';
import { ModificarLocutorComponent } from './components/locutores/modificar-locutor/modificar-locutor.component';

import { AltaDirectorComponent } from './components/directores/alta-director/alta-director.component';
import { ListaDirectorComponent } from './components/directores/lista-director/lista-director.component';
import { ModificarDirectorComponent } from './components/directores/modificar-director/modificar-director.component';

import { AltaPeriodoComponent } from './components/periodos/alta-periodo/alta-periodo.component';
import { ListaPeriodoComponent } from './components/periodos/lista-periodo/lista-periodo.component';
import { ModificarPeriodoComponent } from './components/periodos/modificar-periodo/modificar-periodo.component';

import { AltaPropagandaComponent } from './components/propagandas/alta-propaganda/alta-propaganda.component';
import { ListaPropagandaComponent } from './components/propagandas/lista-propaganda/lista-propaganda.component';
import { ModificarPropagandaComponent } from './components/propagandas/modificar-propaganda/modificar-propaganda.component';

import { AltaTemaComponent } from './components/temas/alta-tema/alta-tema.component';
import { ListaTemaComponent } from './components/temas/lista-tema/lista-tema.component';
import { ModificarTemaComponent } from './components/temas/modificar-tema/modificar-tema.component';

import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'menu',
      },
      {
        path: 'lista-programas',
        component: ListaProgramaComponent,
      },
      {
        path: 'alta-programa',
        component: AltaProgramaComponent,
      },
      {
        path: 'modificar-programa',
        component: ModificarProgramaComponent,
      },
      {
        path: 'lista-locutores',
        component: ListaLocutorComponent,
      },
      {
        path: 'alta-locutor',
        component: AltaLocutorComponent,
      },
      {
        path: 'modificar-locutor',
        component: ModificarLocutorComponent,
      },
      {
        path: 'lista-directores',
        component: ListaDirectorComponent,
      },
      {
        path: 'alta-director',
        component: AltaDirectorComponent,
      },
      {
        path: 'modificar-director',
        component: ModificarDirectorComponent,
      },
      {
        path: 'lista-periodos',
        component: ListaPeriodoComponent,
      },
      {
        path: 'alta-periodo',
        component: AltaPeriodoComponent,
      },
      {
        path: 'modificar-periodo',
        component: ModificarPeriodoComponent,
      },
      {
        path: 'lista-propagandas',
        component: ListaPropagandaComponent,
      },
      {
        path: 'alta-propaganda',
        component: AltaPropagandaComponent,
      },
      {
        path: 'modificar-propaganda',
        component: ModificarPropagandaComponent,
      },
      {
        path: 'lista-temas',
        component: ListaTemaComponent,
      },
      {
        path: 'alta-tema',
        component: AltaTemaComponent,
      },
      {
        path: 'modificar-tema',
        component: ModificarTemaComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

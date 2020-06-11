import { MagazzinoComponent } from './magazzino/magazzino.component';
import { LoginComponent } from './login/login.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { ScontrinoComponent } from './scontrino/scontrino.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'catalogo/:id', component: ProdottoComponent },
  { path: 'scontrino', component: ScontrinoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'magazzino', component: MagazzinoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

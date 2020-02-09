import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtlasComponent } from './atlas/atlas.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  {path: '', component: AtlasComponent},
  {path: 'atlas', component: AtlasComponent},
  {path: 'nav', component: NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

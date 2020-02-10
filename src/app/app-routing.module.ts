import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtlasComponent } from './atlas/atlas.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { EraComponent } from './era/era.component';


const routes: Routes = [
  {path: '', component: AtlasComponent},
  {path: 'hero', component: HeroComponent},
  {path: 'nav', component: NavComponent},
  {path: 'atlas', component: AtlasComponent},
  {path: 'era', component: EraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

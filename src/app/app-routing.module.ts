import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtlasComponent } from './atlas/atlas.component';
import { HylandmapComponent } from './hylandmap/hylandmap.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { EraComponent } from './era/era.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'hero', component: HeroComponent},
  {path: 'nav', component: NavComponent},
  {path: 'atlas', component: AtlasComponent},
  {path: 'hyland', component: HylandmapComponent},
  {path: 'era', component: EraComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

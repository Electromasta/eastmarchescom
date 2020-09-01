import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtlasComponent } from './atlas/atlas.component';
import { HylandmapComponent } from './hex/hylandmap/hylandmap.component';
import { HoolComponent } from './hex/hool/hool.component';
import { FarnorthComponent } from './hex/farnorth/farnorth.component';
import { MulanComponent } from './hex/mulan/mulan.component';
import { ShacklesComponent } from './hex/shackles/shackles.component';
import { StolenComponent } from './hex/stolen/stolen.component';
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
  {path: 'hool', component: HoolComponent},
  {path: 'farnorth', component: FarnorthComponent},
  {path: 'mulan', component: MulanComponent},
  {path: 'shackles', component: ShacklesComponent},
  {path: 'stolen', component: StolenComponent},
  {path: 'era', component: EraComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

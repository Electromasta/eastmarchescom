import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import { NgxXml2jsonModule } from 'ngx-xml2json';

import { AtlasComponent } from './atlas/atlas.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { EraComponent } from './era/era.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HylandmapComponent } from './hex/hylandmap/hylandmap.component';
import { HoolComponent } from './hex/hool/hool.component';
import { MulanComponent } from './hex/mulan/mulan.component';
import { ShacklesComponent } from './hex/shackles/shackles.component';
import { StolenComponent } from './hex/stolen/stolen.component';
import { FarnorthComponent } from './hex/farnorth/farnorth.component';
import { AkrosComponent } from './civ/akros/akros.component';
import { BeaumereComponent } from './civ/beaumere/beaumere.component';
import { JoanapurComponent } from './civ/joanapur/joanapur.component';
import { RavenwatchComponent } from './civ/ravenwatch/ravenwatch.component';
import { TwincitiesComponent } from './civ/twincities/twincities.component';
import { SaltmarshComponent } from './civ/saltmarsh/saltmarsh.component';
import { PhandalinComponent } from './civ/phandalin/phandalin.component';
import { RacesComponent } from './races/races.component';

@NgModule({
  declarations: [
    AppComponent,
    AtlasComponent,
    NavComponent,
    HeroComponent,
    EraComponent,
    NotfoundComponent,
    HylandmapComponent,
    HoolComponent,
    MulanComponent,
    ShacklesComponent,
    StolenComponent,
    FarnorthComponent,
    AkrosComponent,
    BeaumereComponent,
    JoanapurComponent,
    RavenwatchComponent,
    TwincitiesComponent,
    SaltmarshComponent,
    PhandalinComponent,
    RacesComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule,
    ReactiveFormsModule, FormsModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatDividerModule,
    FlexLayoutModule,
    NgxXml2jsonModule,
    LeafletDrawModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

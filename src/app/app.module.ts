import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AtlasComponent } from './atlas/atlas.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { EraComponent } from './era/era.component';

@NgModule({
  declarations: [
    AppComponent,
    AtlasComponent,
    NavComponent,
    HeroComponent,
    EraComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule,
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
    FlexLayoutModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

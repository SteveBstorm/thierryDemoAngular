import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { MycurrencyPipe } from './pipes/mycurrency.pipe';
import { DirectiveComponent } from './components/directive/directive.component';
import { ParentComponent } from './components/parent/parent.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexComponent } from './components/pokedex/pokedex.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipeComponent,
    MycurrencyPipe,
    DirectiveComponent,
    ParentComponent,
    EnfantComponent,
    PokedexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

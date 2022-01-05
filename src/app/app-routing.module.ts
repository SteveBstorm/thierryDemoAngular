import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './components/directive/directive.component';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent },
  {path : 'pipe', component : PipeComponent},
  {path : 'directive', component : DirectiveComponent},
  {path : 'parent', component : ParentComponent},
  {path : 'pokedex', component : PokedexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

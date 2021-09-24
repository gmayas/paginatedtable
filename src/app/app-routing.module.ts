import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { Pag01Component } from './components/pag01/pag01.component';
import { Pag02Component } from './components/pag02/pag02.component';


const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'pag01', component: Pag01Component  },
  { path: 'pag02', component: Pag02Component  },
  { path: 'about', component: AboutComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

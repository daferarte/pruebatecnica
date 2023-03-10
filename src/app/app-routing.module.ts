import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './public/home/default/default.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: DefaultComponent
  },
  {
    path:'home',
    redirectTo: ''
  },
  {
    path:'parameters',
    loadChildren: () => import('./modules/parameters/parameters.module').then(m => m.ParametersModule)
  },
  /** el ultimo, comodin redirect */
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

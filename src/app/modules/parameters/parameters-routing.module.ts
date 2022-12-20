import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreationComponent } from './User/user-creation/user-creation.component';
import { UserListComponent } from './User/user-list/user-list.component';

const routes: Routes = [
  {
    path:'create-user',
    component: UserCreationComponent
  },
  {
    path:'list-user',
    component: UserListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }

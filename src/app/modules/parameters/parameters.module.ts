import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { TDCreationComponent } from './TypeDocument/td-creation/td-creation.component';
import { TDListComponent } from './TypeDocument/td-list/td-list.component';
import { CTBCreationComponent } from './CountryTB/ctb-creation/ctb-creation.component';
import { CTBListComponent } from './CountryTB/ctb-list/ctb-list.component';
import { UserCreationComponent } from './User/user-creation/user-creation.component';
import { UserListComponent } from './User/user-list/user-list.component';


@NgModule({
  declarations: [
    TDCreationComponent,
    TDListComponent,
    CTBCreationComponent,
    CTBListComponent,
    UserCreationComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }

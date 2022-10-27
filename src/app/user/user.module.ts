import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';


@NgModule({
  declarations: [
    UserComponent,
    UserFormContainerComponent,
    UserListContainerComponent,
    UserFormPresentationComponent,
    UserListPresentationComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { UserFormPresenterComponent } from './user-form-container/user-form-presenter/user-form-presenter.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { UserListPresenterComponent } from './user-list-container/user-list-presenter/user-list-presenter.component';


@NgModule({
  declarations: [
    UserComponent,
    UserFormContainerComponent,
    UserListContainerComponent,
    UserFormPresentationComponent,
    UserFormPresenterComponent,
    UserListPresentationComponent,
    UserListPresenterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
